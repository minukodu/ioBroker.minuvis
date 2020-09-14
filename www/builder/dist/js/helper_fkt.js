function generateConfig(saveInFile = true) {
  var newConfig = {};

  newConfig.timestamp = moment();

  newConfig.settings = {};
  newConfig.settings.LayoutDunkel = !$("#chkLightMode")[0].checked;
  newConfig.settings.SplitterOpen = $("#chkSplitterOpen")[0].checked;

  newConfig.dataprovider = {};
  newConfig.dataprovider.type = "iobroker";
  newConfig.dataprovider.url = $("#data-url-port").val();
  newConfig.dataprovider.fileName = $("#select-configfile").val() + ".json";

  if (newConfig.dataprovider.fileName.length < 1) {
    newConfig.dataprovider.fileName = "config_" + moment() + ".json";
  }
  if (newConfig.dataprovider.fileName.substring(newConfig.dataprovider.fileName.length - 5, newConfig.dataprovider.fileName.length) !== ".json") {
    newConfig.dataprovider.fileName = newConfig.dataprovider.fileName + ".json";
  }

  newConfig.pages = [];

  pageOrderNb = 1;
  $("#pages .page").each(function () {
    var newPage = {};
    newPage.UUID = $(this).attr("id");
    newPage.title = $(this).find(".page-title").val();
    newPage.icon = $(this).find(".iconSelectPage").attr("data-icon");
    newPage.iconFamily = $(this).find(".iconSelectPage").attr("data-family") || defaultIconFamily;
    newPage.startpage = false;
    if ($(this).find(".isstartpage").get([0]).checked === true) {
      newPage.startpage = true;
    }
    // pageOrder
    pageOrder = $(this).find("input.page-order").val();
    if (pageOrder < 1 || pageOrder > 99) {
      pageOrder = pageOrderNb;
    }
    newPage.order = pageOrder;
    pageOrderNb++;

    // read widgets
    newPage.widgets = [];
    $(this).find(".widget-holder .widget").each(function () {
      newWidget = {};
      newWidget.UUID = $(this).attr("id");
      newWidget.type = $(this).data("widgettype");

      // read widgets-props
      $(this).find(".widget-prop").each(function () {
        //console.log(this);
        propName = $(this).data("prop");
        propValue = $(this).val();
        propType = $(this).data("type");

        if (propType == "boolean") {
          propValue = stringToBoolean(propValue);
        }
        if (propType == "number") {
          propValue = parseInt(propValue, 10);
        }
        newWidget[propName] = propValue;
      })
      // write value
      newPage.widgets.push(newWidget);
    });

    newConfig.pages.push(newPage);
  });

  // sort page in config by page.order

  sortedPages = sortPages(newConfig.pages);
  // console.log(sortedPages);


  //get global CSS for HTML Widgets
  newConfig.css = CSSJSON.toJSON($("#css textarea").val());

  newConfig.alarmpage = false;
  //console.log(newConfig);
  //console.log(JSON.stringify(newConfig));
  localStorage.setItem('appConfig', JSON.stringify(newConfig));

  let qrCodeData = {
    url: newConfig.dataprovider.url,
    type: newConfig.dataprovider.type,
    // configStateId: newConfig.dataprovider.configStateId,
    fileName: newConfig.dataprovider.fileName,
  }
  let qrCodeDataString = JSON.stringify(qrCodeData);
  $("#qrcode-holder").html("");
  let qrCode = new QRCode(document.getElementById("qrcode-holder"), {
    width: 200,
    height: 200
  });
  qrCode.makeCode(qrCodeDataString);


  if (saveInFile) {
    // save in File (minukodu-config-FileName)
    if (socket) {
      console.log("save in File " + newConfig.dataprovider.fileName);
      //(filename, data, mode, callback)

      socket.emit("writeFile", null, filePath + "/" + newConfig.dataprovider.fileName, JSON.stringify(newConfig),
        function (error) {
          if (error) {
            console.log("Error saving Config in file: " + error);
            show_message("Error storing config in: " + newConfig.dataprovider.fileName, "danger");
          } else {
            console.log("Saving Config in file successfull");
            show_message("Stored config in: " + newConfig.dataprovider.fileName, "success");
            readConfigFiles(); // Update File dropdown
          }
        });
    } else {
      show_message("Error storing config: Please connect socket first", "danger");
    }
  }
  return newConfig;

}

function init_sortable() {
  //var widgetHolders = document.getElementsByClassName("widget-holder");
  var widgetHolders = $(".widget-holder.active");

  [].forEach.call(widgetHolders, function (elem) {
    new Sortable(elem, {
      group: {
        name: "shared"
      },
      animation: 150,
      handle: ".handle",
      onSort: function (/**Event*/ evt) {
        // set compactMode-Class
        addCompactModeClass();
      },
      onChoose: function (/**Event*/ evt) {
        // collapse Widgets
        // $(".widget").find(".card-body").hide();
      },
      onEnd: function (/**Event*/ evt) {
        // expand Widgets
        // $(".widget").find(".card-body").show();
      }
    });
  });
}
function connect_socket() {
  //console.log("Socket init");

  $(".form-connection .input-group-text")
    .removeClass("alert-danger")
    .removeClass("alert-sucess")
    .addClass("alert-info");

  $("#btn-read-variables").attr("disabled", "disabled");
  $("#btn-read-configfiles").attr("disabled", "disabled");

  var socketUrl = $("#data-url-port").val();

  console.log(socketUrl);

  //var socket   = io.connect('https://iobroker.pro', {path: "/socket.io"});
  // var socket = io.connect("http://nucci:9090", { path: "/socket.io" });

  socket = io.connect(socketUrl, { path: "/socket.io" });

  variables = null; //JSON.parse(localStorage.getItem("variables") || null);

  var states = variables;

  //init_statesTypeahead();

  //socket.emit('name', 'myButlerBuilder.0');

  socket.on("connect", function () {
    console.log("Connect ok");
    $("#btn-read-variables").removeAttr("disabled");
    $("#btn-read-configfiles").removeAttr("disabled");
    $(".form-connection .input-group-text")
      .removeClass("alert-info")
      .addClass("alert-success");
    show_message("sucessfully connected", "success");
    setTimeout(function () {
      readVariables();
    }, 1000);
    setTimeout(function () {
      readConfigFiles();
    }, 2000);
    //readVariables();
    //readConfigFiles()
  });
  socket.on("connect_error", function () {
    console.log("Connection failed");
    $(".form-connection .input-group-text")
      .removeClass("alert-info")
      .addClass("alert-danger");
    show_message("error when connecting", "danger");
    socket.disconnect();
  });
  socket.on("reconnect_failed", function () {
    console.log("Reconnection failed");
    $(".form-connection .input-group-text")
      .removeClass("alert-info")
      .addClass("alert-danger");
    show_message("error when connecting", "danger");
    socket.disconnect();
  });

  $("#btn-read-variables").click(function (event) {

    readVariables();

  });

  $("#btn-read-configfiles").click(function (event) {

    readConfigFiles();

  });


  function readVariables() {
    console.log("read variables");

    $("#btn-read-variables .btn-label i").attr(
      "class",
      "fas fa-spinner fa-spin"
    );
    $("#btn-read-variables").attr("disabled", "disabled");

    //console.log(socket);
    //console.log(socket.connected);
    localStorage.setItem("variables", "");
    localStorage.setItem("arrStates", "");

    //socket.emit("getStates", function (err, _states) {
    socket.emit("getObjects", function (err, _states) {
      console.log("Received " + Object.keys(_states).length + " states.");
      // console.log("_states");
      // console.log(_states);
      variablesAsObj = _states;
      variables = Object.keys(_states);
      localStorage.removeItem("variables");
      localStorage.setItem("variables", JSON.stringify(variables));
      variables = JSON.parse(localStorage.getItem("variables"));
      console.log("Stored " + variables.length + " states.");
      //console.log(variables);

      arrStates = [];
      for (const item in variablesAsObj) {
        arrStates.push(variablesAsObj[item]);
      }
      localStorage.removeItem("arrStates");
      // console.error(arrStates);
      // to Big !!!!
      //localStorage.setItem("arrStates", JSON.stringify(arrStates));
      init_statesTypeahead();

      //socket.emit("delObject","myAlarme.VisuMeldungen.Alarme.neuAlalrm");

      show_message("Stored " + variables.length + " states.", "success");

      $("#btn-read-variables").removeAttr("disabled");
      $("#btn-read-variables .btn-label i").attr("class", "fas fa-list");
    });
  };

};

function readConfigFiles() {

  $("#btn-read-configfiles .btn-label i").attr(
    "class",
    "fas fa-spinner fa-spin"
  );
  $("#btn-read-configfiles").attr("disabled", "disabled");

  socket.emit("readDir", null, "/" + filePath + "/", function (err, list) {

    console.log(err);
    console.log(list);
    $("#filelist li").remove();
    let fileCount = 0;
    for (let file of list) {
      fileCount++;
      if (fileCount === list.length && $("#select-configfile").val().length < 1) { $("#select-configfile").val(removeFileExtension(file.file)) }
      if (file.isDir === false && file.file.substring(file.file.length - 5, file.file.length) === ".json") {
        $("#filelist").prepend('<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="selectFileFromList(this)">' + removeFileExtension(file.file) + '</a></li>');
      }
    }

    show_message("Found " + list.length + " config-files.", "success");



    $("#btn-read-configfiles").removeAttr("disabled");
    $("#btn-read-configfiles .btn-label i").attr("class", "fas fa-list");

  })

};

function selectFileFromList(elem) {
  //console.log(elem);
  $("#select-configfile").val(elem.text);
  readConfigFromFile(elem.text + ".json");
}

function readConfigFromFile(fileName) {
  if (socket) {
    socket.emit("readFile", null, filePath + "/" + fileName, function (error, fileData, mimeType) {
      console.log(mimeType);
      //console.log(fileData);
      console.log(error);
      localStorage.setItem('appConfig', fileData);
      generatePages();
    });
  } else {
    show_message("Error loading config: Please connect socket first", "danger");
  }
};

function deleteConfigFile(fileName) {
  if (socket) {
    socket.emit("unlink", null, filePath + "/" + fileName, function (error) {
      console.log(error);
      show_message("file deleted: " + fileName, "success");
    });
  } else {
    show_message("Error delete file: Please connect socket first", "danger");
  }
};

function init_statesTypeahead() {

  // console.log("arrStates");
  // console.log(arrStates);

  // default to prevent errors
  let arrStatesTypeAhead = [{
    _id: "please connect first",
    common: {
      name: "no entries yet",
      type: "undefined"
    }
  }];

  if (arrStates) {
    arrStatesTypeAhead = JSON.parse(JSON.stringify(arrStates));
  }

  // var statesSearchEngine = new Bloodhound({
  //   local: arrStatesTypeAhead,
  //   queryTokenizer: Bloodhound.tokenizers.nonword,
  //   datumTokenizer: Bloodhound.tokenizers.obj.nonword('_id', 'common.name'),
  // });
  // console.log("statesSearchEngine");
  // console.log(statesSearchEngine);

  $(".states-select .typeahead").typeahead('destroy');
  $(".states-select .typeahead").typeahead(
    {
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: "states",
      display: '_id',
      // source: statesSearchEngine,
      // source: substringMatcher(variables),
      source: substringMatcher(arrStatesTypeAhead),
      limit: 100,
      templates: {
        // empty: [
        //   '<div class="empty-message">',
        //     'unable to find any state that match the current query',
        //   '</div>'
        // ].join('\n'),
        //suggestion: Handlebars.compile('<div>{{name}} -- {{num}}</div>')
        suggestion: Handlebars.compile('<div><div><strong>{{_id}}</strong></div><div><small>{{common.name}}&nbsp;&nbsp;&nbsp;&nbsp;type: <stateIdType>{{common.type}}</stateIdType></small></div>')
        //suggestion: Handlebars.compile('<div><div><strong>{{_id}}</strong></div><div><small>Beschreibung<small></div>')
      }
    }
  );
}

var substringMatcher = function (strs) {
  return function findMatches(q, cb) {
    // var matches, substringRegex;

    // // an array that will be populated with substring matches
    // matches = [];
    // let objMatches = {};
    // objMatches.value = [];

    // regex used to determine if a string contains the substring `q`
    // substrRegex = new RegExp(q, "i");

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    // $.each(strs, function (i, str) {
    //   if (substrRegex.test(str)) {
    //     matches.push(str);
    //     objMatches.value.push(str);
    //   }
    // });
    let lowerCaseQ = q.toLowerCase();
    // console.log(lowerCaseQ);

    var arrFllterResult = strs.filter(function (el) {

      let rName = -1;
      try {
        rName = el.common.name.toLowerCase().indexOf(lowerCaseQ);
      } catch (e) { };

      return el._id.toLowerCase().indexOf(lowerCaseQ) > -1 || rName > -1;
    });

    //cb(matches);
    //console.log(arrFllterResult);
    cb(arrFllterResult);
  };
};

function show_message(message = "message", color = "danger") {
  $("#message-holder")
    .prepend('<div class="message alert" role="alert"></div>')
    .find(".alert")
    .first()
    .addClass("bg-" + color)
    .text(message)
    .fadeIn("fast")
    .fadeOut("fast")
    .fadeIn("fast")
    .fadeOut("fast")
    .fadeIn("fast")
}

function init_modal() {
  $("#selectModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var modalClass = button.data("select"); // Extract info from data-* attributes
    $(this)
      .removeClass("iconSelect stateSelect iconFaSelect")
      .addClass(modalClass);
    //$(this).data("widget", button.closest('.widget').data('id'));
    $(this).attr("data-page", button.closest(".page").attr("id"));
    $(this).attr("data-widget", button.closest(".widget").attr("id"));
    $(this).attr("data-class", modalClass);
    $(this).attr("data-button", button.attr("id"));


    $(this)
      .find("div.hide-at-start")
      .hide();

    //console.log(modalClass);

    if (modalClass.indexOf("tate") > 0) {
      // do we have states ???
      var nbVariables = 0;
      if (variables) {
        nbVariables = variables.length;
      }
      var infoBgClass = "bg-success pt-1 pb-1 pl-1";
      var infoText = nbVariables + " states to select"
      if (nbVariables < 1) {
        infoBgClass = "bg-danger pt-1 pb-1 pl-1";
        infoText = "Please connect and read states first !"
      }
      $("#modal-states-info-text")
        .removeClass()
        .addClass(infoBgClass)
        .text(infoText);

      $(this)
        .find("div.states-select")
        .show();
    }
    if (modalClass.indexOf("iconFa") > 0) {
      $(this)
        .find("div.fa-icon-select")
        .show();
    }
    if (modalClass.indexOf("conSe") > 0) {
      $(this)
        .find("div.mfd-icon-select")
        .show();
    }
    //$('#mfd-iconselect-dropdown.dropdown').dropdown("hide");
  });

  $("#selectModal .btn-ok").click(function () {
    $("#selectModal").modal("hide");
  });

  $("#selectModal").on("hide.bs.modal", function () {
    submit_modal();
  });
  // init icon dropdown
  $('.icon-select select').text("");
  $('.icon-select').load('dist/js/iconselect.html', function () {
    $('#mfd-iconselect-dropdown.dropdown').dropdown();
    init_iconselect_dropdown();
  });

}

function init_iconselect_dropdown() {

  $('#mfd-iconselect-dropdown .dropdown-menu button').click(function (event) {
    event.preventDefault();
    console.log($(this).data("iconvalue"));
    $('#mfd-iconselect-dropdown .icon-holder i')
      .removeClass()
      .addClass("mfd-icon " + $(this).data("iconvalue"))
      .attr("data-iconvalue", $(this).data("iconvalue"));
    console.log($('#mfd-iconselect-dropdown .icon-holder i'));
    //$('#mfd-iconselect-dropdown.dropdown').dropdown("hide");
    $("#selectModal").modal('hide');
  });
}

function submit_modal() {
  var pageId = $("#selectModal").attr("data-page");
  var modalClass = $("#selectModal").attr("data-class");
  var buttonId = $("#selectModal").attr("data-button");
  console.log(modalClass);
  var value = "";
  if (modalClass.indexOf("tate") > 0) {
    // submit state
    family = "none";
    stateId = $("#selectModal .tt-input")
      .not(".tt-hint")
      .val();

    stateIdType = getStateType(stateId);

    console.log(stateId + " :: " + stateIdType);

    if (stateId.length > 0) {

      $("#" + buttonId).attr("value", stateId);
      $("#" + buttonId).val(stateId);
      $("#" + buttonId + " option").remove();
      $("#" + buttonId).append($('<option selected="selected" value="' + stateId + '">' + stateId + '</option>'));
      $("#" + buttonId).next(".stateIdType").attr("value", stateIdType);
      $("#" + buttonId).next(".stateIdType").val(stateIdType);
    }


  } else if (modalClass.indexOf("conSelectPage") > 0) {
    // submit mfd-icon
    //value = $("#mfd-iconselect-dropdown .icon-holder i").attr("data-iconvalue");

    var iconClasses = $("#icp-mfd").attr("data-iconvalue");
    console.log("iconClasses ############################");
    console.log(iconClasses);

    value = "audio_audio";
    family = "mfd-icon";
    if (iconClasses !== undefined) {
      values = iconClasses.split(" ");
      family = values[0];
      value = values[1];
    }


    console.log("from modal:");
    console.log(value);

    $("#" + pageId + " ." + modalClass)
      .attr("data-icon", value);
    $("#" + pageId + " ." + modalClass)
      .attr("data-family", family);
    $("#" + pageId + " ." + modalClass)
      .find("i")
      .removeClass()
      .addClass(family + " " + value);
    // nav-iocn left sidebar
    $(".nav-item[data-id='" + pageId + "']")
      .find("i.nav-icon")
      .removeClass()
      .addClass(family + " nav-icon " + value);

  } else if (modalClass.indexOf("conSelect") > 0) {
    // submit mfd-icon
    //value = $("#mfd-iconselect-dropdown .icon-holder i").attr("data-iconvalue");

    var iconClasses = $("#icp-mfd").attr("data-iconvalue");
    console.log("iconClasses ############################");
    console.log(iconClasses);

    value = "audio_audio";
    family = "mfd-icon";
    if (iconClasses !== undefined) {
      values = iconClasses.split(" ");
      family = values[0];
      value = values[1];
    }


    console.log("from modal:");
    console.log(value);


    $("#" + buttonId).attr("value", value);
    $("#" + buttonId).val(value);
    $("#" + buttonId).attr("data-family", family);
    $("#" + buttonId + " i").removeClass().addClass(family + " " + value);
    $("#" + buttonId).next(".iconFamily").attr("value", family);
    $("#" + buttonId).next(".iconFamily").val(family);
  }
}

function removeFileExtension(fileName) {
  return fileName.split('.').slice(0, -1).join('.');
}

function showPreviewQrCode(url) {
  $("#preview-qrcode-holder").html("");
  let preViewQrCode = new QRCode(document.getElementById("preview-qrcode-holder"), {
    width: 200,
    height: 200
  });
  preViewQrCode.makeCode(url);
}

function clearBrowserCache() {
  localStorage.clear();
  location.replace(location.href);
  location.reload();
}

function addCompactModeClass() {
  $(".widget").removeClass("compactMode").removeAttr("data-compactMode");
  $('.compactModeStart').nextUntil('.compactModeEnd', '.widget').addClass("compactMode").attr("data-compactMode", "compactMode");
}

function getStateType(stateId) {
  // console.log("getStateType");
  // console.log(stateId);
  // console.log("getStateType");
  // console.log(arrStates);

  let type = "undefined";
  let arrFllterResult = [];
  try {
    arrFllterResult = arrStates.filter(function (el) {
      return el._id === stateId;
    });
  } catch (e) { console.error(e) }

  // console.log("arrFllterResult:");
  // console.log(arrFllterResult);
  try {
    type = arrFllterResult[0].common.type;
  } catch (e) {
    // console.error(e);
    show_message("Error creating config please connect socket first", "danger");
  }
  return type;
}

function sanitize(input) {

  var replacement = "_";

  var illegalRe = /[\/\?<>\\:\*\|"]/g;
  var controlRe = /[\x00-\x1f\x80-\x9f]/g;
  var reservedRe = /^\.+$/;
  var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
  var windowsTrailingRe = /[\. ]+$/;

  if (typeof input !== 'string') {
    throw new Error('Input must be string');
  }
  var sanitized = input
    .replace(illegalRe, replacement)
    .replace(controlRe, replacement)
    .replace(reservedRe, replacement)
    .replace(windowsReservedRe, replacement)
    .replace(windowsTrailingRe, replacement);
  return sanitized;
}

function stringToBoolean(val) {
  if (val === null) {
    return false;
  }
  if (typeof val === "number") {
    return Boolean(val);
  }
  if (typeof val !== "string") {
    return val;
  }
  switch (val.toLowerCase().trim()) {
    case "on":
    case "true":
    case "yes":
    case "1":
      return true;
    case "off":
    case "false":
    case "no":
    case "0":
    case null:
      return false;
    default:
      return Boolean(val);
  }
}
