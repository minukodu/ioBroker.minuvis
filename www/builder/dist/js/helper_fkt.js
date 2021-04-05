var testFile =
  "data:image/png;base64,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";

function importConfig(data = null) {

  try {
    var newConfig = JSON.parse(data);
    // reset all UUIDs
    setAllByKey(newConfig, "UUID", null);

    // console.log(newConfig);
    // generate pages
    console.log("import from version: " + parseInt(newConfig.version, 10))
    if (newConfig.version && parseInt(newConfig.version, 10) > 1) {
      // save in localstorage
      localStorage.setItem("appConfig", JSON.stringify(newConfig));
      // show loading
      workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "generate pages with import-data" });
      //generatePages();
      workingBuffer.push({ jobUUID: UUID(), jobfunction: generateImportPages, args: null });
      // hide loading
      workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });
    } else {
      if (socket) {
        // import V1-Config-data
        console.log("import older version");
        // get states
        statesForImport = JSON.parse(JSON.stringify(arrStates));

        // convert compactMode => Card
        var newConfigString = JSON.stringify(newConfig);
        newConfigString = newConfigString.replaceAll('{"UUID":null,"type":"compactModeStart"', '{"UUID":null,"type":"card","widgets":[{"UUID":null,"type":"filler","cardtitle":true');
        newConfigString = newConfigString.replaceAll(',{"UUID":null,"type":"compactModeEnd"}', ']}');
        newConfig = JSON.parse(newConfigString);
        console.log("converted compactMode => card")
        console.log(newConfig);

        importWidgetWidth = 18;
        importWidgetHeight = 1;
        var r = confirm("select width of widgets ok=100% (18 of 18) Cancel=50% (9 of 18)");
        if (r === true) {
          importWidgetWidth = 18;
        } else {
          importWidgetWidth = 9;
        }
        for (var pageId in newConfig.pages) {
          for (var widgetId in newConfig.pages[pageId].widgets) {
            // adding stateId-Typ
            for (var key in statesForImport) {
              if (statesForImport[key]._id == newConfig.pages[pageId].widgets[widgetId].stateId) {
                newConfig.pages[pageId].widgets[widgetId].stateIdType = statesForImport[key].common.type;
                break;
              }
            }
            newConfig.pages[pageId].widgets[widgetId].widgetWidth = importWidgetWidth;
            newConfig.pages[pageId].widgets[widgetId].widgetHeight = importWidgetHeight;
            newConfig.pages[pageId].widgets[widgetId].imported = true;
          }
        }
        // reset banner
        newConfig.banner = {};
        newConfig.banner.useBanner = false;
        newConfig.banner.stateId = "undefined";
        newConfig.banner.stateIdType = "string";
        //console.log(newConfig);
        // save in localstorage
        localStorage.setItem("appConfig", JSON.stringify(newConfig));
        // show loading
        workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "generate pages with import-data" });
        //generatePages();
        workingBuffer.push({ jobUUID: UUID(), jobfunction: generateImportPages, args: null });
        // hide loading
        workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });
        // remind to slöect a theme
        alert("please do not forget to select a theme when import is finished");

      } else {
        show_message("Error importing config: Please connect socket first", "danger");
      }
    }
  } catch (e) {
    console.error(e)
    show_message(
      e,
      "danger"
    );
  }
}

function generateImportPages() {
  // helper function
  // to set fromImport = true
  generatePages(numberOfCols, true);
}

function generateConfig(saveInFile = true) {
  console.log("generating config");

  var newConfig = {};

  newConfig.timestamp = moment();
  newConfig.version = version;

  newConfig.settings = {};
  // newConfig.settings.LayoutDunkel = !$("#chkLightMode")[0].checked;
  newConfig.settings.SplitterOpen = $("#chkSplitterOpen")[0].checked;

  newConfig.dataprovider = {};
  newConfig.dataprovider.type = "iobroker";
  newConfig.dataprovider.url = $("#data-url-port").val();
  newConfig.dataprovider.fileName = $("#select-configfile").val() + ".json";

  if (newConfig.dataprovider.fileName.length < 1) {
    newConfig.dataprovider.fileName = "config_" + moment() + ".json";
  }
  if (
    newConfig.dataprovider.fileName.substring(
      newConfig.dataprovider.fileName.length - 5,
      newConfig.dataprovider.fileName.length
    ) !== ".json"
  ) {
    newConfig.dataprovider.fileName = newConfig.dataprovider.fileName + ".json";
  }

  newConfig.pages = [];

  pageOrderNb = 1;
  $("#pages .page").each(function () {
    var newPage = {};
    newPage.UUID = $(this).attr("id");

    if ($("#" + newPage.UUID).hasClass("notRendered") === true) {
      // notRendered ==> Read from localStorage
      newPage = getPageDatafromLocalStorage(newPage.UUID);
    } else {

      newPage.title = $(this).find(".page-title").val();
      newPage.icon = $(this).find(".iconSelectPage").attr("data-icon");
      newPage.iconFamily =
        $(this).find(".iconSelectPage").attr("data-family") || defaultIconFamily;
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
      $(this)
        .find(".grid-widget.pageWidget")
        .each(function () {
          newWidget = readWidgetConfig($(this).attr("id"));
          // write value
          console.log(newWidget);
          newPage.widgets.push(newWidget);
        });
    }

    newConfig.pages.push(newPage);
  });

  // sort page in config by page.order

  sortedPages = sortPages(newConfig.pages);
  // console.log(sortedPages);

  //get banner-Data
  newConfig.banner = {};
  newConfig.banner.useBanner = $("#bannerUseBanner")[0].checked;
  newConfig.banner.stateId = $("#bannerStateId").val();
  newConfig.banner.stateIdType = $("#bannerStateIdType").val();

  //get theme
  newConfig.theme = CSSJSON.toJSON($("#theme textarea").val());

  //get global CSS for HTML Widgets
  newConfig.css = CSSJSON.toJSON($("#css textarea").val());

  // get config of AlarmPage
  newConfig.alarmpage = $("#chkAlarmPage")[0].checked;
  //console.log(newConfig);
  //console.log(JSON.stringify(newConfig));
  localStorage.setItem("appConfig", JSON.stringify(newConfig));

  // qr-code
  let qrCodeData = {
    url: newConfig.dataprovider.url,
    type: newConfig.dataprovider.type,
    // configStateId: newConfig.dataprovider.configStateId,
    fileName: newConfig.dataprovider.fileName,
  };
  let qrCodeDataString = JSON.stringify(qrCodeData);
  $("#qrcode-holder").html("");
  let qrCode = new QRCode(document.getElementById("qrcode-holder"), {
    width: 200,
    height: 200,
  });
  console.log("generate QR-Code from: " + qrCodeDataString);
  qrCode.makeCode(qrCodeDataString);
  // hide QR-Code at the moment ........................................................####################################
  $("#qrcode-holder").hide();

  if (saveInFile) {
    // save in File (minukodu-config-FileName)
    if (socket) {
      console.log("save in File " + newConfig.dataprovider.fileName);
      //(filename, data, mode, callback)

      socket.emit(
        "writeFile",
        metaInfoSocketIO,
        filePath + "/" + newConfig.dataprovider.fileName,
        JSON.stringify(newConfig),
        function (error) {
          if (error) {
            console.log("Error saving Config in file: " + error);
            console.log(error.name + ': ' + error.message);
            show_message(
              "Error storing config in: " + newConfig.dataprovider.fileName,
              "danger"
            );
          } else {
            console.log("Saving Config in file successfull");
            show_message(
              "Stored config in: " + newConfig.dataprovider.fileName,
              "success"
            );
            readConfigFiles(); // Update File dropdown
          }
        }
      );
    } else {
      show_message(
        "Error storing config: Please connect socket first",
        "danger"
      );
    }
  }
  workBufferWorking = false;
  return newConfig;
}

function readWidgetConfig(widgetUUID) {
  var newWidget = {};
  newWidget.UUID = widgetUUID;
  var settingsTable = $("#props-" + newWidget.UUID);
  newWidget.type = settingsTable.find(".prop-widgettype").data("widgettype");

  // read widgets-props
  settingsTable.find(".widget-prop").each(function () {
    //console.log(this);
    propName = $(this).data("prop");
    propValue = $(this).val();
    propType = $(this).data("type");

    if (propType == "boolean") {
      propValue = stringToBoolean(propValue);
    }
    if (propType == "number") {
      propValue = parseFloat(propValue);
    }
    newWidget[propName] = propValue;
  });
  if (newWidget.type === "card") {
    newWidget.widgets = [];

    $("#" + newWidget.UUID + " .cardWidget").each(function () {
      var cardWidget = {};
      cardWidget.UUID = $(this).attr("id");
      var settingsTable = $("#props-" + cardWidget.UUID);
      cardWidget.type = settingsTable
        .find(".prop-widgettype")
        .data("widgettype");

      // read widgets-props
      settingsTable.find(".widget-prop").each(function () {
        //console.log(this);
        propName = $(this).data("prop");
        propValue = $(this).val();
        propType = $(this).data("type");

        if (propType == "boolean") {
          propValue = stringToBoolean(propValue);
        }
        if (propType == "number") {
          propValue = parseFloat(propValue);
        }
        cardWidget[propName] = propValue;
      });
      console.log("CardWidget:");
      console.log(cardWidget);
      newWidget.widgets.push(cardWidget);
    });
  }
  return newWidget;
}

function init_sortable() {
  //var widgetHolders = document.getElementsByClassName("widget-holder");
  var widgetHolders = $(".widget-holder.active");

  [].forEach.call(widgetHolders, function (elem) {
    new Sortable(elem, {
      group: {
        name: "shared",
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
      },
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
  $("#btn-read-configfiles-old").click(function (event) {
    readConfigFiles(true);
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
  }
}

function readConfigFiles(oldFolder = false) {
  $("#btn-read-configfiles .btn-label i").attr(
    "class",
    "fas fa-spinner fa-spin"
  );
  $("#btn-read-configfiles").attr("disabled", "disabled");


  var meta = metaInfoSocketIO;
  if (oldFolder === true) {
    meta = null;
  }

  socket.emit("readDir", meta, "/" + filePath + "/", function (err, list) {
    console.log(err);
    console.log(list);
    $("#filelist li").remove();
    let fileCount = 0;
    for (let file of list) {
      fileCount++;
      if (
        fileCount === list.length &&
        $("#select-configfile").val().length < 1
      ) {
        $("#select-configfile").val(removeFileExtension(file.file));
      }
      if (
        file.isDir === false &&
        file.file.substring(file.file.length - 5, file.file.length) === ".json"
      ) {
        $("#filelist").prepend(
          '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="selectFileFromList(this)">' +
          removeFileExtension(file.file) +
          "</a></li>"
        );
      }
    }

    show_message("Found " + list.length + " config-files.", "success");

    $("#btn-read-configfiles").removeAttr("disabled");
    $("#btn-read-configfiles .btn-label i").attr("class", "fas fa-list");
  });
}

function selectFileFromList(elem) {
  //console.log(elem);
  $("#select-configfile").val(elem.text);
  readConfigFromFile(elem.text + ".json");
}

function readConfigFromFile(fileName, oldFolder = false) {

  var meta = metaInfoSocketIO;
  console.log("readFile: " + filePath + "/" + fileName);
  if (socket) {
    socket.emit(
      "readFile",
      meta,
      filePath + "/" + fileName,
      function (error, fileData, mimeType) {
        console.log(mimeType);
        //console.log(fileData);
        console.log(error);
        var newConfig = JSON.parse(fileData);
        // check Version
        var version = 1;
        if (newConfig.version) {
          version = parseInt(newConfig.version, 10);
        }
        console.log("version of config-file: " + version)
        show_message("version of config-file: " + version, "success");

        if (version < 2) {
          // import data from older version
          importConfig(fileData);
          return;
        }
        // version ok
        localStorage.setItem("appConfig", fileData);
        // show loading
        workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "read config from file" });
        //addPage();
        workingBuffer.push({ jobUUID: UUID(), jobfunction: generatePages, args: numberOfCols });
        // hide loading
        workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });
        //generateConfig();
        //generatePages();
      }
    );
  } else {
    show_message("Error loading config: Please connect socket first", "danger");
  }
}

function deleteConfigFile(fileName) {
  if (socket) {
    socket.emit("unlink", null, filePath + "/" + fileName, function (error) {
      console.log(error);
      show_message("file deleted: " + fileName, "success");
    });
  } else {
    show_message("Error delete file: Please connect socket first", "danger");
  }
}

function init_statesTypeahead() {
  // console.log("arrStates");
  // console.log(arrStates);

  // default to prevent errors
  let arrStatesTypeAhead = [
    {
      _id: "please connect first",
      common: {
        name: "no entries yet",
        type: "undefined",
      },
    },
  ];

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

  $(".states-select .typeahead").typeahead("destroy");
  $(".states-select .typeahead").typeahead(
    {
      hint: true,
      highlight: true,
      minLength: 1,
    },
    {
      name: "states",
      display: "_id",
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
        suggestion: Handlebars.compile(
          "<div><div><strong>{{_id}}</strong></div><div><small>{{common.name}}&nbsp;&nbsp;&nbsp;&nbsp;type: <stateIdType>{{common.type}}</stateIdType></small></div>"
        ),
        //suggestion: Handlebars.compile('<div><div><strong>{{_id}}</strong></div><div><small>Beschreibung<small></div>')
      },
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
      } catch (e) { }

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
    .fadeIn("fast");
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

    $(this).find("div.hide-at-start").hide();

    // console.log("modalClass");
    // console.log(modalClass);

    if (modalClass.indexOf("tate") > 0) {
      // do we have states ???
      var nbVariables = 0;
      if (variables) {
        nbVariables = variables.length;
      }
      var infoBgClass = "bg-success pt-1 pb-1 pl-1";
      var infoText = nbVariables + " states to select";
      if (nbVariables < 1) {
        infoBgClass = "bg-danger pt-1 pb-1 pl-1";
        infoText = "Please connect and read states first !";
      }
      $("#modal-states-info-text")
        .removeClass()
        .addClass(infoBgClass)
        .text(infoText);

      $(this).find("div.states-select").show();
    }
    if (modalClass.indexOf("iconFa") > 0) {
      $(this).find("div.fa-icon-select").show();
    }
    if (modalClass.indexOf("conSe") > 0) {
      $(this).find("div.mfd-icon-select").show();
    }
    if (modalClass.indexOf("ileSe") > 0) {
      $(this).find("div.file-select").show();
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
  $(".icon-select select").text("");
  $(".icon-select").load("dist/js/iconselect.html", function () {
    $("#mfd-iconselect-dropdown.dropdown").dropdown();
    init_iconselect_dropdown();
  });
}

function init_iconselect_dropdown() {
  $("#mfd-iconselect-dropdown .dropdown-menu button").click(function (event) {
    event.preventDefault();
    console.log($(this).data("iconvalue"));
    $("#mfd-iconselect-dropdown .icon-holder i")
      .removeClass()
      .addClass("mfd-icon " + $(this).data("iconvalue"))
      .attr("data-iconvalue", $(this).data("iconvalue"));
    console.log($("#mfd-iconselect-dropdown .icon-holder i"));
    //$('#mfd-iconselect-dropdown.dropdown').dropdown("hide");
    $("#selectModal").modal("hide");
  });
}

function submit_modal() {
  var pageId = $("#selectModal").attr("data-page");
  var modalClass = $("#selectModal").attr("data-class");
  var buttonId = $("#selectModal").attr("data-button");
  console.log(modalClass);
  console.log(buttonId);

  var value = "";
  if (modalClass.indexOf("tate") > 0) {
    // submit state
    family = "none";
    stateId = $("#selectModal .tt-input").not(".tt-hint").val();

    stateIdType = getStateType(stateId);

    console.log(stateId + " :: " + stateIdType);

    if (stateId.length > 0) {
      $("#" + buttonId).attr("value", stateId);
      $("#" + buttonId).val(stateId);
      $("#" + buttonId + " option").remove();
      $("#" + buttonId).append(
        $(
          '<option selected="selected" value="' +
          stateId +
          '">' +
          stateId +
          "</option>"
        )
      );
      let widgetID = $("#" + buttonId).closest("tbody").find("td.prop-uuid").attr("data-uuid");
      $("#" + widgetID + " .info")
        .text(stateId)
        .attr("title", stateId)
        .removeClass("danger");

      $("#" + buttonId)
        .closest("tr")
        .next()
        .find(".prop-stateIdType")
        .first()
        .attr("value", stateIdType);
      $("#" + buttonId)
        .closest("tr")
        .next()
        .find(".prop-stateIdType")
        .first()
        .first()
        .val(stateIdType);
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

    $("#" + pageId + " ." + modalClass).attr("data-icon", value);
    $("#" + pageId + " ." + modalClass).attr("data-family", family);
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

    //////// no Icon possible
    if (value === "aa_noIcon") {
      family = "noIcon";
    }

    console.log("from modal:");
    console.log(value);

    $("#" + buttonId).attr("value", value);
    $("#" + buttonId).val(value);
    $("#" + buttonId).attr("data-family", family);
    $("#" + buttonId + " i")
      .removeClass()
      .addClass(family + " " + value);

    $("#" + buttonId)
      .closest("tr")
      .next()
      .find(".type-iconFamily")
      .first()
      .attr("value", family);
    $("#" + buttonId)
      .closest("tr")
      .next()
      .find(".type-iconFamily")
      .first()
      .first()
      .val(family);
  } else if (modalClass.indexOf("ileSelect") > 0) {
    // submit file

    value = $("#modal-file-preview img").attr("src");

    // console.log("from modal:");
    // console.log(value);

    $("#" + buttonId).attr("value", value);
    $("#" + buttonId).val(value);
    $("#" + buttonId + " option").remove();
    $("#" + buttonId).append(
      $(
        '<option selected="selected" value="' +
        value +
        '">' +
        value +
        "</option>"
      )
    );
  }
}

function modalPreviewFile() {
  const file = $("#modalFileInput")[0].files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      $("#modal-file-preview img").attr("src", reader.result);
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
    // console.log("############# image loaded: ")
    // console.log(file);
  }
}

function removeFileExtension(fileName) {
  return fileName.split(".").slice(0, -1).join(".");
}

function showPreviewQrCode(url) {
  $("#preview-qrcode-holder").html("");
  let preViewQrCode = new QRCode(
    document.getElementById("preview-qrcode-holder"),
    {
      width: 200,
      height: 200,
    }
  );
  console.log("generate QR-Code from: " + url);
  preViewQrCode.makeCode(url);
}

function clearBrowserCache() {
  localStorage.clear();
  location.replace(location.href);
  location.reload();
}

function addCompactModeClass() {
  $(".widget").removeClass("compactMode").removeAttr("data-compactMode");
  $(".compactModeStart")
    .nextUntil(".compactModeEnd", ".widget")
    .addClass("compactMode")
    .attr("data-compactMode", "compactMode");
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
  } catch (e) {
    console.error(e);
  }

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

  if (typeof input !== "string") {
    throw new Error("Input must be string");
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

function addWorkingNote(html = "generating pages") {
  //console.log(new Date().toISOString() + " show working note: " + html);
  $("#workingNote .text").html(html);
  $("#workingNote").css("display", "block");
  $("#loading").show();
  workBufferWorking = false;

}
function removeWorkingNote() {
  //console.log(new Date().toISOString() + " hide working note");
  $("#workingNote").css("display", "none");
  $("#loading").hide();
  workBufferWorking = false;
}


findAllByKey = function (obj, keyToFind) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      (key == keyToFind)
        ? acc.concat(value)
        : typeof value === "object"
          ? acc.concat(this.findAllByKey(value, keyToFind))
          : acc,
    []
  );
};

function setAllByKey(obj, keyToFind, valueToSet) {
  for (var key in obj) {
    if (typeof obj[key] == "object") { setAllByKey(obj[key], keyToFind, valueToSet) }
    else if (key == keyToFind) {
      obj[key] = valueToSet;
    }
  }
};