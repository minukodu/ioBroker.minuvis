// App

//////////////////////
var version = "1.2.0";
//////////////////////

var appPath = "minuvis/app/";

var variables = [];
var variablesAsObj = [];
var arrStates = [];
var socket;
var showInfoText = false;
var filePath = "minukodu";

var templates = getTemplates();
// console.log("getTemplates()");
// console.log(templates);

function generatePages() {
  // delete all pages
  $("#pages .page").remove();
  $(".menu-link-page").remove();
  $(".page-nav-item").remove();

  const appConfig = JSON.parse(localStorage.getItem("appConfig", "{}"));
  console.log(appConfig);

  // Data Connection
  if (appConfig && appConfig.dataprovider) {
    $("#data-url-port").val(appConfig.dataprovider.url);
    $("#data-url-port").attr("value", appConfig.dataprovider.url);
  }

  // settings
  if (appConfig && appConfig.settings) {
    $("#chkSplitterOpen")[0].checked = appConfig.settings.SplitterOpen;
    $("#chkLightMode")[0].checked = !appConfig.settings.LayoutDunkel;
  }

  // pages
  if (appConfig && appConfig.settings) {
    for (var pageId in appConfig.pages) {
      var pageUUID = addPage(appConfig.pages[pageId]);
      console.log(appConfig.pages[pageId]);
      for (var widgetId in appConfig.pages[pageId].widgets) {
        //console.log(appConfig.pages[pageId].widgets[widgetId]);
        var widget = appConfig.pages[pageId].widgets[widgetId];
        // console.log(widget.type);
        // console.log(pageUUID);
        var widgetUUID = addWidgetToPage(widget.type, pageUUID);
        populateWidget(widgetUUID, widget);

      }
    }

  }
  // delete and populate CSS
  $("#css textarea").val("");
  if (appConfig && appConfig.css) {
    $("#css textarea").val(CSSJSON.toCSS(appConfig.css));
  }

  firstPageUUID = $(".menu-link-page").first().attr("href");
  //console.log("FirstPageUUID: " + firstPageUUID);
  showPage(firstPageUUID);
}

function showPage(UUID) {
  $("#css").hide();
  $(".page").hide();
  $(UUID).show();
}

function sortPages(pages = {}) {

  pages.sort(sortFunction);

  function sortFunction(a, b) {
    if (parseInt(a.order, 10) > parseInt(b.order, 10)) {
      return 1;
    }
    else {
      return -1;
    }
  }
  // reorder pages
  var i = 1;
  for (page in pages) {
    pages[page].order = i;
    i++;
  }
  return pages;
}

function populateWidget(widgetUUID, newWidget) {
  var thisWidget = $("#" + widgetUUID);

  // set titleIcon
  $(thisWidget).find(".iconSelectTitle")
    .val(newWidget.titleIcon)
    .attr("data-icon", newWidget.titleIcon);
  $(thisWidget).find(".iconSelectTitle i")
    .removeClass()
    .addClass("mfd-icon " + newWidget.titleIcon);
  $(thisWidget).find("input.title").val(newWidget.title);
  $(thisWidget).find(".settings-title").text(newWidget.title);

  switch (newWidget.type) {
    case "indicator":
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      $(thisWidget).find(".settings-icon").text(newWidget.icon);
      $(thisWidget).find(".iconSelect")
        .val(newWidget.icon)
        .attr("data-icon", newWidget.icon);
      $(thisWidget).find(".iconSelect i")
        .removeClass()
        .addClass("mfd-icon " + newWidget.icon);
      $(thisWidget).find(".colorWhenTrue").val(newWidget.colorWhenTrue);
      $(thisWidget).find(".colorWhenFalse").val(newWidget.colorWhenFalse);
      break;
    case "switch":
      //console.log("add switch");
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      break;
    case "html":
      //console.log("add html");
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      $(thisWidget).find("input.height").val(newWidget.height);
      break;
    case "slider":
      // console.log("add slider");
      // console.log($(thisWidget));
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      $(thisWidget).find("input.unit").val(newWidget.unit);
      $(thisWidget).find("input.minimum").val(newWidget.min);
      $(thisWidget).find("input.maximum").val(newWidget.max);
      $(thisWidget).find("input.step").val(newWidget.step);
      $(thisWidget).find(".iconSelectMin")
        .val(newWidget.minIcon)
        .attr("data-icon", newWidget.minIcon);
      $(thisWidget).find(".iconSelectMin i")
        .removeClass()
        .addClass("mfd-icon " + newWidget.minIcon);
      $(thisWidget).find(".iconSelectMax")
        .val(newWidget.maxIcon)
        .attr("data-icon", newWidget.maxIcon);
      $(thisWidget).find(".iconSelectMax i")
        .removeClass()
        .addClass("mfd-icon " + newWidget.maxIcon);
      break;
    case "output":
      //console.log("add output");
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      $(thisWidget).find("input.unit").val(newWidget.unit);
      $(thisWidget).find(".color").val(newWidget.color);
      $(thisWidget).find(".format").val(newWidget.format);
      $(thisWidget).find(".formatExample").val(numeral(1000).format(newWidget.format));
      $(thisWidget).find(".minColor").val(newWidget.minColor);
      $(thisWidget).find(".maxColor").val(newWidget.maxColor);
      $(thisWidget).find(".maxValue").val(newWidget.maxValue);
      $(thisWidget).find(".minValue").val(newWidget.minValue);
      break;
    case "iframe":
      //console.log("add iframe");
      $(thisWidget).find("input.url").val(newWidget.url);
      $(thisWidget).find(".settings-url").text(newWidget.url);
      $(thisWidget).find("input.updateTimeSek").val(newWidget.updateTimeSek);
      $(thisWidget).find("input.width").val(newWidget.width);
      $(thisWidget).find("input.height").val(newWidget.height);
      break;
    case "flot":
      //console.log("add flot");
      $(thisWidget).find("input.url").val(newWidget.url);
      $(thisWidget).find(".settings-url").text(newWidget.url);
      $(thisWidget).find("input.updateTimeSek").val(newWidget.updateTimeSek);
      $(thisWidget).find("input.height").val(newWidget.height);
      $(thisWidget).find(".area1Name").val(newWidget.area1Name);
      $(thisWidget).find(".area1Time").val(newWidget.area1Time);
      $(thisWidget).find(".area2Name").val(newWidget.area2Name);
      $(thisWidget).find(".area2Time").val(newWidget.area2Time);
      $(thisWidget).find(".area3Name").val(newWidget.area3Name);
      $(thisWidget).find(".area3Time").val(newWidget.area3Time);
      $(thisWidget).find(".area4Name").val(newWidget.area4Name);
      $(thisWidget).find(".area4Time").val(newWidget.area4Time);
      break;
    case "imgoutput":
      //console.log("add imgoutput");
      $(thisWidget).find("input.url").val(newWidget.url);
      $(thisWidget).find(".settings-url").text(newWidget.url);
      $(thisWidget).find("input.updateTimeSek").val(newWidget.updateTimeSek);
      break;
    case "timepicker":
      //console.log("add html");
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      let timepickerFormat = newWidget.format || "HH:mm";
      $(thisWidget).find(".format").val(timepickerFormat);
      $(thisWidget).find(".formatExample").val(moment().format(timepickerFormat));
      break;
    case "valueswitcher":
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      $(thisWidget).find("input.unit").val(newWidget.unit || "");
      if (newWidget.hideText) {
        $(thisWidget).find(".hideText").attr("checked", "checked");
      }

      $(thisWidget).find(".nbOfButtons").val(newWidget.nbOfButtons || 4);

      $(thisWidget).find(".iconSelectIcon1")
        .val(newWidget.icon1)
        .attr("data-icon", newWidget.icon1);
      $(thisWidget).find(".iconSelectIcon1 i")
        .removeClass()
        .addClass("mfd-icon " + newWidget.icon1);
      $(thisWidget).find("input.btn1Value").val(newWidget.value1);
      $(thisWidget).find(".iconSelectIcon2")
        .val(newWidget.icon2)
        .attr("data-icon", newWidget.icon2);
      $(thisWidget).find(".iconSelectIcon2 i")
        .removeClass()
        .addClass("mfd-icon " + newWidget.icon2);
      $(thisWidget).find("input.btn2Value").val(newWidget.value2);
      $(thisWidget).find(".iconSelectIcon3")
        .val(newWidget.icon3)
        .attr("data-icon", newWidget.icon3);
      $(thisWidget).find(".iconSelectIcon3 i")
        .removeClass()
        .addClass("mfd-icon " + newWidget.icon3);
      $(thisWidget).find("input.btn3Value").val(newWidget.value3);

      $(thisWidget).find(".iconSelectIcon4")
        .val(newWidget.icon4)
        .attr("data-icon", newWidget.icon4);
      $(thisWidget).find(".iconSelectIcon4 i")
        .removeClass()
        .addClass("mfd-icon " + newWidget.icon4);
      $(thisWidget).find("input.btn4Value").val(newWidget.value4);
      valueSwitcherSelectChange($("#" + widgetUUID + " .nbOfButtons"), newWidget.nbOfButtons);
      break;
    case "timeswitch":
      $(thisWidget).find("input.stateSelect").val(newWidget.stateId);
      $(thisWidget).find(".settings-state").text(newWidget.stateId);
      $(thisWidget).find(".timeSwitchType").val(newWidget.triggers.type);
      $(thisWidget).find(".timeSwitchActionType").val(newWidget.action.type);
      $(thisWidget).find("input.onText").val(newWidget.action.onTexr);
      $(thisWidget).find("input.offText").val(newWidget.action.offText);
      // States to Switch
      timeSwitchAddStatesToSwitch(thisWidget, newWidget.action.idsOfStatesToSet);
      break;
    case "linkbutton":
      //console.log("add linkbutton");
      $(thisWidget).find(".targetpage").val(newWidget.targetpage);
      $(thisWidget).find(".targetpage").html("<option value='" + newWidget.targetpage + "'>" + newWidget.targetpage + "</option>");
      break;
    default:
      // no more settings
      ;
  }
}

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
      newWidget.titleIcon = $(this).find(".iconSelectTitle").attr("data-icon");
      newWidget.title = $(this).find("input.title").val() || "NONE";
      switch (newWidget.type) {
        case "indicator":
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          newWidget.icon = $(this).find(".iconSelect").attr("data-icon");
          newWidget.colorWhenTrue = $(this).find(".colorWhenTrue").val() || "#00FF00";
          newWidget.colorWhenFalse = $(this).find(".colorWhenFalse").val() || "#FF0000";
          break;
        case "switch":
          //console.log("add switch");
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          break;
        case "html":
          //console.log("add html");
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          newWidget.height = $(this).find("input.height").val() || "299px";
          break;
        case "slider":
          //console.log("add slider");
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          newWidget.unit = $(this).find("input.unit").val();
          newWidget.min = parseInt($(this).find("input.minimum").val(), 10) || 0;
          newWidget.max = parseInt($(this).find("input.maximum").val(), 10) || 100;
          newWidget.step = parseInt($(this).find("input.step").val(), 10) || 5;
          newWidget.minIcon = $(this).find(".iconSelectMin").attr("data-icon") || "text_min";
          newWidget.maxIcon = $(this).find(".iconSelectMax").attr("data-icon") || "text_max";
          break;
        case "output":
          //console.log("add output");
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          newWidget.unit = $(this).find("input.unit").val();
          newWidget.format = $(this).find(".format").val() || "0";
          newWidget.color = $(this).find(".color").val() || "#FFFFFF";
          newWidget.maxColor = $(this).find(".maxColor").val() || "#FF0000";
          newWidget.minColor = $(this).find(".minColor").val() || "#0000FF";
          newWidget.maxValue = parseFloat($(this).find(".maxValue").val()) || 0.0;
          newWidget.minValue = parseFloat($(this).find(".minValue").val()) || 0.0;
          break;
        case "iframe":
          //console.log("add iframe");
          newWidget.url = $(this).find("input.url").val();
          newWidget.updateTimeSek = parseInt($(this).find("input.updateTimeSek").val(), 10) || 599;
          newWidget.width = $(this).find("input.width").val();
          newWidget.height = $(this).find("input.height").val();
          break;
        case "flot":
          //console.log("add flot");
          newWidget.url = $(this).find("input.url").val();
          newWidget.updateTimeSek = parseInt($(this).find("input.updateTimeSek").val(), 10) || 599;
          newWidget.height = $(this).find("input.height").val();
          newWidget.area1Name = $(this).find(".area1Name").val() || "hour";
          newWidget.area1Time = parseInt($(this).find(".area1Time").val(), 10) || 60;
          newWidget.area2Name = $(this).find(".area2Name").val() || "day";
          newWidget.area2Time = parseInt($(this).find(".area2Time").val(), 10) || 1440;
          newWidget.area3Name = $(this).find(".area3Name").val() || "week";
          newWidget.area3Time = parseInt($(this).find(".area3Time").val(), 10) || 10080;
          newWidget.area4Name = $(this).find(".area4Name").val() || "month";
          newWidget.area4Time = parseInt($(this).find(".area4Time").val(), 10) || 302400;
          break;
        case "imgoutput":
          //console.log("add imgoutput");
          newWidget.url = $(this).find("input.url").val();
          newWidget.updateTimeSek = parseInt($(this).find("input.updateTimeSek").val(), 10) || 599;
          break;
        case "timepicker":
          //console.log("add timepicker");
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          newWidget.format = $(this).find(".format").val() || "HH:mm";
          break;
        case "valueswitcher":
          //console.log("add valueswitcher");
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          newWidget.unit = $(this).find("input.unit").val();
          newWidget.hideText = false;
          if ($(this).find(".hideText").get([0]).checked === true) {
            newWidget.hideText = true;
          }
          newWidget.nbOfButtons = $(this).find(".nbOfButtons").val() || 4;
          newWidget.icon1 = $(this).find(".iconSelectIcon1").attr("data-icon") || "fts_garage_door_10";
          newWidget.icon2 = $(this).find(".iconSelectIcon2").attr("data-icon") || "fts_garage_door_30";
          newWidget.icon3 = $(this).find(".iconSelectIcon3").attr("data-icon") || "fts_garage_door_60";
          newWidget.icon4 = $(this).find(".iconSelectIcon4").attr("data-icon") || "fts_garage_door_100";
          newWidget.value1 = $(this).find(".btn1Value").val() || 1;
          newWidget.value2 = $(this).find(".btn2Value").val() || 33;
          newWidget.value3 = $(this).find(".btn3Value").val() || 66;
          newWidget.value4 = $(this).find(".btn4Value").val() || 99;
          break;
        case "timeswitch":
          //console.log("add timewitch");
          newWidget.stateId = $(this).find("input.stateSelect").val() || "dummy.state";
          newWidget.stateIdType = getStateType(newWidget.stateId);
          newWidget.triggers = {};
          newWidget.triggers.type = $(this).find(".timeSwitchType").val() || "TimeTrigger";
          newWidget.action = {};
          newWidget.action.type = $(this).find(".timeSwitchActionType").val() || "OnOffStateAction";
          newWidget.action.valueType = "boolean";
          newWidget.action.onText = $(this).find(".onText").val() || "on";
          newWidget.action.offText = $(this).find(".offText").val() || "off";
          newWidget.action.booleanValue = true;
          newWidget.action.idsOfStatesToSet = [];
          $(this).find(".statesToSwitchInputGroup").each(function (index) {
            newWidget.action.idsOfStatesToSet.push($(this).find("input").val() || "dummy.state");
          });
          break;
        case "linkbutton":
          //console.log("add linkbutton");
          newWidget.targetpage = $(this).find(".targetpage").val() || "Page does not exist";
          break;
        default:
          // no more settings
          ;
      }

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

function addPage(pageData = {}) {
  console.log("addpage with " + pageData.UUID);
  var uuid = pageData.UUID || UUID();
  var pageTitle = pageData.title || "PageName";
  var pageIsStartpage = pageData.startpage || false;
  var pageIcon = pageData.icon || "audio_play";
  var pageOrder = pageData.order || ($(".page").length + 1);

  var newPage = $(templates.page)
    .clone()
    .attr("id", uuid)
    .attr("data-id", uuid);
  $(newPage)
    .find("input.page-title")
    .attr("value", pageTitle);

  $(newPage).find(".iconSelectPage")
    .val(pageIcon)
    .attr("data-icon", pageIcon);
  $(newPage).find(".iconSelectPage i")
    .removeClass()
    .addClass("mfd-icon " + pageIcon);

  if (pageIsStartpage) {
    $(newPage)
      .find(".isstartpage")
      .attr("checked", "checked");
  }
  $(newPage)
    .find("input.page-order")
    .attr("value", pageOrder);
  $(newPage)
    .find("input.page-order")
    .change(function () {
      $(".btn-apply-page-order").removeClass("hidden");
    }
    );
  $(newPage)
    .find(".btn-apply-page-order")
    .click(function () {
      console.log("Apply page Order");
      generateConfig(false);
      generatePages();
    }
    );
  $(newPage)
    .find("input.page-title")
    .focus(function () {
      $(this).select();
    })
    .mouseup(function (e) {
      e.preventDefault();
    })
    .keyup(function () {
      $('a[href="#' + uuid + '"] .page-title').text($(this).val());
      //console.log($(this).val());
    });

  $("#pages .tab-content").append(newPage);

  $("#" + uuid + " .btn-page-delete").click(function () {
    var uuid = $(this)
      .parent()
      .parent()
      .attr("id");
    $(".nav-link[href='#" + uuid + "'")
      .parent()
      .parent()
      .parent()
      .remove();
    $(this)
      .parent()
      .parent()
      .remove();
    $(".menu-link-page")
      .first()
      .click();
    renamePages();
  });

  $("#" + uuid + " .btn-page-copy").click(function () {
    console.log(".btn-page-copy");
    var uuid = $(this)
      .parent()
      .parent()
      .attr("id");
    generateConfig(false);
    duplicatePageinConfig(uuid);
    generatePages();
  });

  // BUGGIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
  // $(".isstartpage").change(function() {
  //   $(".nav-startpage-icon").addClass("visibility-hidden");
  //   // console.log($(this).is(":checked"));
  //   if ($(this).is(":checked")) {
  //     // $(".isstartpage").removeAttr("checked");
  //     // $(this).attr("checked", "checked");

  //     uuid = $(this).closest(".page").attr("id");
  //     $(".nav-link[href='#" + uuid + "'")
  //     .find(".nav-startpage-icon")
  //     .removeClass("visibility-hidden");
  //   }
  // });
  // BUGGIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

  // remove active class page-tab
  $(".page-nav-item.active").removeClass("active");
  // now add page-tab
  var newPageTab = $(templates.pageTab);
  console.log("New pageTab with " + uuid);
  $(newPageTab)
    .attr("data-id", uuid)
    .find("a")
    .attr("href", "#" + uuid);
  //.addClass("active");
  $(newPageTab)
    .find(".page-order")
    .text(pageOrder);
  $(newPageTab)
    .find("a")
    .click(function () {
      $("#css").hide();
      $(".page").hide();
      $("#" + uuid).show(100);
    });

  $(newPageTab)
    .find("a")
    .click(function () {
      $("#css").hide();
      $(".page").hide();
      $("#" + uuid).show(100);
    });

  $(newPageTab).find(".mfd-icon")
    .removeClass()
    .addClass("mfd-icon nav-icon " + pageIcon);


  if (pageIsStartpage) {
    $(newPageTab)
      .find(".nav-startpage-icon")
      .removeClass("visibilty-hidden");
  }

  $(newPageTab)
    .find(".page-title")
    .text(pageTitle);
  $(newPageTab).insertBefore("#pages-nav-item-end");
  $(".page").hide();
  $("#" + uuid).show(100);

  // prevent ENTER
  $("input").keydown(function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });

  init_widget_dropdown(uuid);
  // init_sortable
  //init_sortable();

  renamePages();
  // return uuid
  return uuid;
}

function renamePages() {
  var pageNumber = 1;
  $("#pages .page").each(function () {
    var uuid = $(this).attr("id");
    var pageNumberText = "Page" // now page.order + pageNumber;
    //var pageNumberText = pageNumber;
    $(this)
      .find(".label-page-name")
      .text(pageNumberText);
    //console.log("Page "+ pageNumber);
    $('a[href="#' + uuid + '"]').parent().parent().find(".page-number").val(pageNumber);
    pageNumber++;
  });
  var nbOfPages = $("#pages .label-page-name").length;

  if (nbOfPages < 2) {
    $(".btn-page-delete").hide();
  } else {
    $(".btn-page-delete").show();
  }
}

function init_widget_dropdown(pageUUID) {
  var widgetDropdown = `
	<div class="dropdown widget-dropdown ml-3" data-toggle="dropdown">
	  <button class="btn btn-sm btn-primary dropdown-toggle" type="button">
	  	<span class="btn-label"><i class="fas fa-plus"></i></span>
		Add Widget
	  </button>
	  <div class="dropdown-menu">
	  </div>
	</div>
  `;
  var widgetDropdownOption = `<a class="dropdown-item" href="#">OptionText</a>`;

  var widgetId = "wg-" + pageUUID;

  $(widgetDropdown)
    .attr("id", widgetId)
    .appendTo("#" + pageUUID + " .widget-dropdown-holder");

  for (var widget in templates.widgets) {
    //console.log(widget);
    $(widgetDropdownOption)
      .text(widget)
      .attr("data-widgetName", widget)
      .attr("data-pageUUID", pageUUID)
      .click(function () {
        addWidgetToPage(
          $(this).attr("data-widgetName"),
          $(this).attr("data-pageUUID")
        );
      })
      .appendTo("#" + widgetId + " .dropdown-menu");
  }
  $("#" + widgetId).dropdown();
}

function addWidgetToPage(widget, pageUUID) {
  // console.log(widget);
  //console.log(pageUUID);
  uuid = UUID();

  //console.log(templates.widgets[widget]);

  if (templates.widgets[widget]) {
    $(templates.widgets[widget])
      .attr("id", uuid)
      .attr("data-id", uuid)
      .insertBefore("#" + pageUUID + " .widget-holder-end");
  }
  $("#" + uuid + " .btn-widget-copy").click(function () {
    //console.log($(this));
    var thisWidget = $(this).closest(".widget").first();
    var uuid = UUID();
    var copiedWidget = thisWidget
      .clone(true)
      .attr("id", uuid)
      .attr("data-id", uuid);
    // console.log(thisWidget);
    // console.log(copiedWidget);  
    thisWidget.after(copiedWidget);
  });
  $("#" + uuid + " .btn-widget-remove").click(function () {
    $(this).closest(".widget").remove();
  });
  $("#" + uuid + " .btn-widget-collapse").click(function () {
    console.log("collapse");
    $(this).closest(".widget").find(".card-body").toggle(200);
  });

  $("#" + uuid + ".widget .widget-title-form input").focus(function () {
    $(this).select();
  });

  $("#" + uuid + ".widget .widget-title-form input").keyup(function () {
    //console.log("title input keyup");
    $(this)
      .closest(".card")
      .find(".card-header .settings-title")
      .text($(this).val());
  });
  $("#" + uuid + ".widget input.url").keyup(function () {
    //console.log("title input keyup");
    $(this)
      .closest(".card")
      .find(".card-header .settings-url")
      .text($(this).val());
  });
  // make sortable
  init_sortable();
  // set compactMode-Class
  addCompactModeClass();
  // return uuid
  return uuid;
}

// function init_editable() {
//   //turn to inline mode
//   $.fn.editable.defaults.mode = "inline";
//   $(document).ready(function() {
//     $(".editable").editable();
//     //$('.page h4').editable();
//     //$('h6').editable();
//   });
// }

function init_sortable() {
  var widgetHolders = document.getElementsByClassName("widget-holder");

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
      }
    });
  });
}

// not available at the moment
//
// function init_download() {
// $("#btn-dl-config").click(function () {
// console.log("Handler for download config called.");

// generateConfig();

// var appConfig = localStorage.getItem("appConfig", "no config found");

// appConfig = templates.configJSprePend + "\n" + appConfig;
// appConfig = appConfig + "\n" + templates.configJSpostPend;

// var uuid = UUID();
// var element = $("<a></a>");

// element.attr("id", uuid);
// element.attr("href", "data:text/plain;charset=utf-8," + appConfig);
// element.attr("download", "config.js");

// element.hide();

// $("body").prepend(element);
// //$("#" + uuid).css("height","100px").css("display","block");
// console.log(element);
// $("#" + uuid)
// .get(0)
// .click();
// $("#" + uuid).remove();
// });
// }

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
        suggestion: Handlebars.compile('<div><div><strong>{{_id}}</strong></div><div><small>{{common.name}}&nbsp;&nbsp;&nbsp;&nbsp;type: {{common.type}}</small></div>')
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


// var substringMatcher = function (strs) {
//   return function findMatches(q, cb) {
//     var matches, substringRegex;

//     // an array that will be populated with substring matches
//     matches = [];
//     let objMatches = {};
//     objMatches.value = [];

//     // regex used to determine if a string contains the substring `q`
//     substrRegex = new RegExp(q, "i");

//     // iterate through the pool of strings and for any string that
//     // contains the substring `q`, add it to the `matches` array
//     $.each(strs, function (i, str) {
//       if (substrRegex.test(str)) {
//         matches.push(str);
//         objMatches.value.push(str);
//       }
//     });

//     //cb(matches);
//     cb(objMatches.value);
//   };
// };

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
    $(this).attr("data-widget", button.closest(".page").attr("id"));
    $(this).attr("data-widget", button.closest(".widget").attr("id"));
    $(this).attr("data-class", modalClass);

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
  var widgetId = $("#selectModal").attr("data-widget");
  var modalClass = $("#selectModal").attr("data-class");
  console.log(modalClass);
  var value = "";
  if (modalClass.indexOf("tate") > 0) {
    // submit state
    value = $("#selectModal .tt-input")
      .not(".tt-hint")
      .val();
  } else if (modalClass.indexOf("aIconSel") > 0) {
    // no fa-icon support
    // submit fa-icon
    // value = $("#selectModal button .icon-name").text();
    // console.log(value);
    // $("#" + widgetId + " ." + modalClass)
    //   .parent()
    //   .find("i")
    //   .removeClass()
    //   .addClass("mfd-icon " + value);
  } else if (modalClass.indexOf("conSelect") > 0) {
    // submit mfd-icon
    //value = $("#mfd-iconselect-dropdown .icon-holder i").attr("data-iconvalue");

    var iconClasses = $("#icp-mfd").attr("data-iconvalue");
    console.log(iconClasses);

    value = "audio_audio";
    if (iconClasses !== undefined) {
      value = iconClasses.split(" ");
      value = value[1];
    }


    console.log("from modal:");
    console.log(value);
    $("#" + widgetId + " ." + modalClass)
      .attr("data-icon", value);
    $("#" + widgetId + " ." + modalClass)
      .find("i")
      .removeClass()
      .addClass("mfd-icon " + value);
    // nav-iocn left sidebar
    $(".nav-item[data-id='" + widgetId + "']")
      .find("i.mfd-icon")
      .removeClass()
      .addClass("mfd-icon nav-icon " + value);

  }

  $("#" + widgetId + " ." + modalClass).attr("value", value);
  $("#" + widgetId + " ." + modalClass).val(value);
  console.log(value);
  if (modalClass === "iconSelect") {
    $("#" + widgetId + " .card-header .settings-icon").text(value);
  }
  if (modalClass === "stateSelect") {
    $("#" + widgetId + " .card-header .settings-state").text(value);
  }
  if (modalClass === "stateSelectToSwitch") {
    $("#" + widgetId + " .card-header .settings-state-to-switch").text(value);
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


function init() {
  console.log("App init");
  // check if develpoment mode
  // console.log(window.location.host);
  // console.log(window.location.host.indexOf("dev"));
  if (window.location.host.indexOf("dev") == 0) {
    $("body").addClass("is-development");
    $("body").prepend(templates.devNote);
    version = version + "-dev";
  }
  // version
  $("#versionnumber").text("Version " + version);

  // assume same url and port
  $("#data-url-port").val(window.location.protocol + "//" + window.location.host);

  $(".nav-item a.menu-link-page").on("click", function (e) {
    e.preventDefault();
    $("#css").hide();
    $(".page").hide();
    $($(this).attr("href")).show();
    //console.log($(this).attr("href"));
  });

  $("#css-nav-item a").on("click", function (e) {
    e.preventDefault();
    $(".page").hide();
    $("#css").show();
  });

  $(document).ready(function () {
    // init buttons
    $("#btn-ul-config").click(function () {
      $("#upload-config-file").click();
    });
    $("#btn-add-page").click(function () {
      //console.log("Handler for add Page called.");
      addPage();
    });
    $("#btn-connect").click(function (event) {
      connect_socket();
    });
    $("#btn-read-variables").attr("disabled", "disabled");
    $("#btn-read-configfiles").attr("disabled", "disabled");

    $("#select-configfile").on("keyup", function () {
      //console.log(this.value);
      $("#select-configfile").val(sanitize(this.value));

    });

    $("#btn-save-file").on("click", function (event) {
      event.preventDefault();
      console.log("Save config in file");
      generateConfig();
    });

    $("#btn-load-file").on("click", function (event) {
      event.preventDefault();
      console.log("load config from file");
      readConfigFromFile($("#select-configfile").val() + ".json");
    });

    $("#btn-delete-file").on("click", function (event) {
      event.preventDefault();
      console.log("delete config-file");
      deleteConfigFile($("#select-configfile").val() + ".json");
    });


    $("#btn-cache-clear-all").on("click", function (event) {
      event.preventDefault();
      let clearCacheConfirmation = confirm("This will delete all your not saved configuration !\n\nis this ok ?")
      if (clearCacheConfirmation === true) {
        console.log("confirmed clear browser cache");
        clearBrowserCache();
      }
    });

    // not working at the moment
    //init_download();

    // try to read variables
    // variables = JSON.parse(localStorage.getItem("variables") || null);
    // arrStates = JSON.parse(localStorage.getItem("arrStates") || null);
    init_statesTypeahead();
    // init-iconpicker
    $(".icp").iconpicker();
    // init modal
    init_modal();

    $("#preview-nav-item").click(function (event) {
      event.preventDefault();
      appConfig = generateConfig();
      const url = encodeURIComponent(appConfig.dataprovider.url);
      const file = encodeURIComponent(appConfig.dataprovider.fileName);
      const preViewURL = "/" + appPath + "?url=" + url + "&file=" + file + "&forceUpdate";

      showPreviewQrCode(window.location.protocol + "//" + window.location.host + preViewURL);

      window.open(preViewURL, '_blank');
    });

    $("#show-config-nav-item").click(function (event) {
      event.preventDefault();
      generateConfig();
      var outConfig = localStorage.getItem("appConfig");
      $("#show-config-holder pre").html();
      $("#show-config-holder pre").html(JSON.stringify(JSON.parse(outConfig), null, 2));
      $("#configShowModal").modal("show");
    });

    $("#only-show-config-nav-item").click(function (event) {
      event.preventDefault();
      generateConfig(false);
      var outConfig = localStorage.getItem("appConfig");
      $("#show-config-holder pre").html();
      $("#show-config-holder pre").html(JSON.stringify(JSON.parse(outConfig), null, 2));
      $("#configShowModal").modal("show");
    });

    $("#btn-widgets-collapse-all").click(function (event) {
      event.preventDefault();
      $(".widget").find(".card-body").toggle();
    });

    // $("#preview-qrcode").click(function (event) {
    //   event.preventDefault();
    //   showPreviewQrCode();
    // });

    addPage();
    // if config then generate Pages
    generatePages();

  });

  // init mfd-Icon-Dropdown
  console.log("Init MFD-Icons-Dropdown");
  //console.log(getMfdIcons());
  $("#icp-mfd").iconpicker({
    title: 'Select MFD Icon',
    icons: getMfdIcons(),
    selectedCustomClass: 'bg-secondary',
  });

  // Bind iconpicker events to the element
  $("#icp-mfd").on('iconpickerSelected', function (event) {
    /* event.iconpickerValue */
    console.log("#icp-mfd data: " + event.iconpickerValue);
    $("#icp-mfd").attr("data-iconvalue", event.iconpickerValue)
  });

}

init();

//////////////// helper functions

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

function valueSwitcherSelectChange(selectObj, value = 0) {
  console.log("valueSwitcherSelectChange");
  console.log(selectObj);
  widgetUUID = $(selectObj).closest(".widget").attr("id");
  console.log(widgetUUID);

  if (value == 0) {
    value = parseInt(selectObj.value, 10);
  }

  $("#" + widgetUUID + " .button2").hide();
  $("#" + widgetUUID + " .button3").hide();
  $("#" + widgetUUID + " .button4").hide();
  if (value > 1) {
    $("#" + widgetUUID + " .button2").show();
  }
  if (value > 2) {
    $("#" + widgetUUID + " .button3").show();
  }
  if (value > 3) {
    $("#" + widgetUUID + " .button4").show();
  }
}

function timeSwitchAddStateToSwitch(selectedObj) {
  let widgetUUID = $(selectedObj).closest(".widget").attr("id");
  let inputClone = $("#" + widgetUUID + " .statesToSwitchInputGroup").first().clone(false);
  let inputCount = $("#" + widgetUUID + " .statesToSwitchInputGroup").length;
  let oldClass = "stateSelectToSwitch0";
  let newClass = "stateSelectToSwitch" + inputCount;

  // console.log(inputClone);
  // console.log(inputCount);

  inputClone.addClass(newClass);
  $("#" + widgetUUID + " .formStatesToSwitch").append(inputClone);
  $("#" + widgetUUID + " ." + newClass + " button").attr("data-select", newClass)
  $("#" + widgetUUID + " ." + newClass + " ." + oldClass).removeClass(oldClass).addClass(newClass);
};

function timeSwitchAddStatesToSwitch(thisWidget, idsOfStatesToSet) {
  console.log("idsOfStatesToSet");
  console.log(idsOfStatesToSet);
  let inputCount = 0;
  let inputForm = $(thisWidget).find(".statesToSwitchInputGroup").first();
  for (const stateId of idsOfStatesToSet) {
    let oldClass = "stateSelectToSwitch0";
    let newClass = "stateSelectToSwitch" + inputCount;
    if (inputCount == 0) {
      $(thisWidget).find("input.stateSelectToSwitch0").val(stateId);
    } else {
      let newInput = $(inputForm).clone(false);
      $(newInput).find("input.stateSelectToSwitch0").val(stateId);
      $(newInput).find("." + oldClass).removeClass(oldClass).addClass(newClass);
      console.log($(newInput).find("." + newClass + " button"));
      $(newInput).find("button").attr("data-select", newClass)
      $(thisWidget).find(".formStatesToSwitch").append(newInput);
    }
    inputCount++;
  }
};

function buildPageLinksSelect(element) {
  let options = "";
  $(".page .page-title").each(function () {
    console.log(this);
    options += "<option value='" + $(this).val() + "'>" + $(this).val() + "</option>";
  })
  $(element).html("");
  $(element).html(options);
  $(element).attr("value", "Windoes 2020");
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

function validateTimePickerFormat(elem) {
  console.log("validateTimePickerFormat");
  let format = $(elem).val();
  let formatExample = moment().format(format);
  $(elem).parent().parent().parent().find(".formatExample").val(formatExample);
}

function validateNumeralFormat(elem) {
  console.log("validateNumeralFormat");
  let format = $(elem).val();
  let formatExample = numeral(1000).format(format);
  $(elem).parent().parent().parent().find(".formatExample").val(formatExample);
}

function duplicatePageinConfig(uuid) {
  const appConfig = JSON.parse(localStorage.getItem("appConfig", "{}"));
  let newPage = null;
  if (appConfig && appConfig.pages) {
    for (page of appConfig.pages) {
      if (page.UUID === uuid) {
        // console.log(page);
        newPage = JSON.parse(JSON.stringify(page));
      }
    }
    newPage.UUID = UUID();
    newPage.order = appConfig.pages.length + 1;

    for (widget in newPage.widgets) {
      newPage.widgets[widget].UUID = UUID();
    }
    // console.log(newPage);
    appConfig.pages.push(newPage);
    localStorage.setItem('appConfig', JSON.stringify(appConfig));

  }
}