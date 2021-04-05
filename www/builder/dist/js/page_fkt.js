// function setGridCols(element) {
//   // console.log($(element));
//   // console.log($(element).val())
//   generatePages($(element).val());
// }


function generatePages(nbOfCols = 18, fromImport = false) {
  console.log("generating pages from config");
  console.log("nbOfCols: " + nbOfCols + " fromImport: " + fromImport);

  // delete all pages
  $("#pages .page").remove();
  $(".menu-link-page").remove();
  $(".page-nav-item").remove();
  $(".sidebar-settings-table").remove();
  $("#props-nowidget").removeClass("hidden");


  let appConfig = {};
  try {
    appConfig = JSON.parse(localStorage.getItem("appConfig", "{}"));
  } catch (e) { }

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

  // AlarmPage
  $("#chkAlarmPage")[0].checked = false;
  if (appConfig && appConfig.alarmpage) {
    $("#chkAlarmPage")[0].checked = appConfig.alarmpage;
  }

  localStorage.removeItem("pageData");
  let pageData = {};
  let firstPage = true;
  // pages
  if (appConfig && appConfig.settings) {

    for (var pageId in appConfig.pages) {
      var pageUUID = addPage(appConfig.pages[pageId], nbOfCols);
      console.log("page added with: " + pageUUID);
      console.log(appConfig.pages[pageId]);
      // save pageData
      pageData[pageUUID] = (appConfig.pages[pageId]);
      // UUID = null when imported
      pageData[pageUUID].UUID = pageUUID;
      console.log(pageData);
      if (firstPage !== true && fromImport !== true) {
        // not render Widgets
        $("#" + pageUUID).addClass("notRendered");
      } else {
        firstPage = false;
        $("#" + pageUUID).removeClass("notRendered");
        $("#" + pageUUID).addClass("rendered");

        // #######################################################################################
        addAllWidgetsToOnePage(pageData[pageUUID]);
        // ########################################################################################

      }
    }
    console.log("store pageData in localStorage");
    localStorage.setItem("pageData", JSON.stringify(pageData));



  }
  // delete and set banner
  // console.log("write bannerdata:");
  // console.log(appConfig.banner);

  try {
    $("#bannerUseBanner")[0].checked = appConfig.banner.useBanner;
    $("#bannerStateId").data("value", appConfig.banner.stateId);
    $("#bannerStateId").data("stateid", appConfig.banner.stateId);
    $("#bannerStateId").find("option").remove();
    $("#bannerStateId").append($('<option selected="selected" value="' + appConfig.banner.stateId + '">' + appConfig.banner.stateId + '</option>'));
    $("#bannerStateIdType").val(appConfig.banner.stateIdType);
  } catch (e) {
    console.log("error@bannerdata:");
    console.log(e);
  }
  // delete and populate theme
  $("#theme textarea").val("");
  if (appConfig && appConfig.theme) {
    $("#theme textarea").val(CSSJSON.toCSS(appConfig.theme));
  }

  // delete and populate CSS
  $("#css textarea").val("");
  if (appConfig && appConfig.css) {
    $("#css textarea").val(CSSJSON.toCSS(appConfig.css));
  }

  firstPageUUID = $(".menu-link-page").first().attr("href");
  //console.log("FirstPageUUID: " + firstPageUUID);
  showPage(firstPageUUID);
  workBufferWorking = false;
  //console.log("done");
}

function loadWidgets(pageUUID) {
  if ($("#" + pageUUID).hasClass("rendered") === true) { return; }
  console.log("load and add widgets for page with uuid: " + pageUUID);

  // show loading
  workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "load widgets" });
  //addAllWidgetsToOnePage();
  workingBuffer.push({ jobUUID: UUID(), jobfunction: addAllWidgetsToOnePage, args: getPageDatafromLocalStorage(pageUUID) });
  // hide loading
  workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });
  //addAllWidgetsToOnePage(getPageDatafromLocalStorage(pageUUID));

  $("#" + pageUUID).addClass("rendered");
  $("#" + pageUUID).removeClass("notRendered");

}

function getPageDatafromLocalStorage(pageUUID) {
  var pagesData = JSON.parse(localStorage.getItem("pageData"));
  return pagesData[pageUUID];
}

function addAllWidgetsToOnePage(pageData) {

  console.log("add all widgets to: " + pageData.UUID);
  console.log(grids);

  let pageUUID = pageData.UUID;
  for (var widgetId in pageData.widgets) {
    //console.log(appConfig.pages[pageId].widgets[widgetId]);
    var widget = pageData.widgets[widgetId];
    // console.log(widget.type);
    // console.log(pageUUID);

    var imported = widget.imported;
    console.log("imported: " + imported);
    // start imported widgetdata ####################################################################################################
    // if we have an imported widget we must separate icon and titel to filler
    if (imported === true && widget.type != "card") {

      widget.imported = false; // reset

      if (widget.type == "compactModeStart") { continue; };
      if (widget.type == "compactModeEnd") { continue; };
      if (widget.type == "gridChanger") { continue; };

      // slider is now range
      if (widget.type == "slider") {
        widget.type = "range";
      }
      var fillerFullWidth = false;
      // set height
      if (widget.height && parseInt(widget.height, 10) > 0) {
        widget.widgetHeight = parseInt(parseInt(widget.height, 10) / 67, 10); // height / 67px
        fillerFullWidth = true;
      }
      // set height when donut
      if (widget.type == "donut") {
        widget.widgetHeight = 3; // height 
      }

      if (widget.title !== "NONE" && widget.type !== "filler" && widget.type !== "card") {

        var fillerWidget = {}
        if (widget.widgetWidth > 9) {
          widget.widgetWidth = 6;
          fillerWidget.widgetWidth = 12;
        } else {
          widget.widgetWidth = 3;
          fillerWidget.widgetWidth = 6;
        }
        if (fillerFullWidth === true) {
          fillerWidget.widgetWidth = 18;
          widget.widgetWidth = 18;
        }
        fillerWidget.type = "filler";
        fillerWidget.widgetHeight = widget.widgetHeight;
        fillerWidget.borderTop = true;
        fillerWidget.borderRight = false;
        fillerWidget.borderBottom = true;
        fillerWidget.borderLeft = true;
        fillerWidget.timestamp = false;
        fillerWidget.titleIcon = widget.titleIcon;
        fillerWidget.titleIconFamily = widget.titleIconFamily;
        fillerWidget.title = widget.title
        // set border
        widget.borderTop = true;
        widget.borderRight = true;
        widget.borderBottom = true;
        widget.borderLeft = false;
        widget.timestamp = false;

        // set fullwidth
        if (fillerFullWidth === true) {
          fillerWidget.widgetWidth = 18;
          widget.widgetWidth = 18;
          fillerWidget.widgetHeight = 1;
        }
        widgetUUID = addWidgetToPage(fillerWidget.type, pageUUID, fillerWidget, grids[pageUUID]);
      }
    }
    // end imported widgetdata ####################################################################################################
    var widgetUUID = "";
    if (widget.type !== "card") {
      widgetUUID = addWidgetToPage(widget.type, pageUUID, widget, grids[pageUUID]);
    } else {
      // add Card
      // start imported widgetdata ####################################################################################################
      var imported = widget.imported;
      if (imported === true) {
        widget.widgetHeight = widget.widgets.length + 1;
      };
      // end imported widgetdata ####################################################################################################

      var cardUUID = addWidgetToPage(widget.type, pageUUID, widget, grids[pageUUID]);
      var imported = widget.imported;
      widget.imported = false; // reset
      // add Sub-Widgets

      console.log("all cardWidgets:");
      console.log(widget.widgets);
      console.log(cardUUID);

      for (var cardWidgetId in widget.widgets) {
        var cardWidget = widget.widgets[cardWidgetId];

        // start imported widgetdata ####################################################################################################
        // if we have an imported widget we must separate icon and titel to filler
        console.log("imported: " + imported);
        if (imported === true) {
          if (cardWidget.type == "compactModeStart") { continue; };
          if (cardWidget.type == "compactModeEnd") { continue; };
          if (cardWidget.type == "gridChanger") { continue; };
          cardWidget.widgetWidth = 18;
          cardWidget.borderTop = false;
          cardWidget.borderRight = false;
          cardWidget.borderBottom = false;
          cardWidget.borderLeft = false;
          cardWidget.timestamp = false;

          // slider is now range
          if (cardWidget.type == "slider") {
            cardWidget.type = "range";
          }
          var fillerFullWidth = false;
          // set height
          if (cardWidget.height && parseInt(cardWidget.height, 10) > 0) {
            cardWidget.widgetHeight = parseInt(parseInt(cardWidget.height, 10) / 67, 10); // height / 67px
            fillerFullWidth = true;
          }
          // set height when donut
          if (cardWidget.type == "donut") {
            cardWidget.widgetHeight = 3; // height 
          }

          if (cardWidget.title !== "NONE" && cardWidget.type !== "filler") {

            var fillerWidget = {}
            cardWidget.widgetWidth = 6;
            fillerWidget.widgetWidth = 12;
            fillerWidget.type = "filler";
            fillerWidget.widgetHeight = cardWidget.widgetHeight;
            fillerWidget.borderTop = false;
            fillerWidget.borderRight = false;
            fillerWidget.borderBottom = false;
            fillerWidget.borderLeft = false;
            fillerWidget.timestamp = false;
            fillerWidget.titleIcon = cardWidget.titleIcon;
            fillerWidget.titleIconFamily = cardWidget.titleIconFamily;
            fillerWidget.title = cardWidget.title
            // set fullwidth
            if (fillerFullWidth === true) {
              fillerWidget.widgetWidth = 18;
              cardWidget.widgetWidth = 18;
              fillerWidget.widgetHeight = 1;
            }
            widgetUUID = addWidgetToPage(fillerWidget.type, cardUUID, fillerWidget, grids[cardUUID], true);
          }
          // set full width if title of card
          if (cardWidget.cardtitle) {
            cardWidget.widgetWidth = 18; // width 
          }
        }
        // end imported widgetdata ####################################################################################################
        // console.log("CardWidget:");
        // console.log(cardWidget);
        widgetUUID = addWidgetToPage(cardWidget.type, cardUUID, cardWidget, grids[cardUUID], true);
      }
    }
  }
  workBufferWorking = false;
}

function showPage(UUID) {
  $("#css").hide();
  $("#theme").hide();
  $("#bannerData").hide();
  $(".page").hide();
  $(".widget-holder").removeClass("active");
  $(UUID + " .widget-holder").addClass("active");
  $(UUID).show(100);
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

function addPage(pageData = {}, nbOfCols = 18) {
  console.log("addpage with " + pageData.UUID);
  var uuid = pageData.UUID || UUID();
  var pageTitle = pageData.title || "PageName";
  var pageIsStartpage = pageData.startpage || false;
  var pageIcon = pageData.icon || "audio_play";
  var pageIconFamily = pageData.iconFamily || defaultIconFamily;
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
    .attr("data-icon", pageIcon)
    .attr("data-family", pageIconFamily);
  $(newPage).find(".iconSelectPage i")
    .removeClass()
    .addClass(pageIconFamily + " " + pageIcon);

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
      // show loading
      workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "apply page-order" });
      //addPage();
      workingBuffer.push({ jobUUID: UUID(), jobfunction: generateConfig, args: false });
      // show loading
      workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "generate pages" });
      // if config then generate Pages
      //generatePages();
      workingBuffer.push({ jobUUID: UUID(), jobfunction: generatePages, args: numberOfCols });
      // hide loading
      workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });
      // generateConfig(false);
      // generatePages();
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
    copyPage(uuid);
  });

  function copyPage(uuid) {
    // show loading
    workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "copy page" });
    //addPage();
    workingBuffer.push({ jobUUID: UUID(), jobfunction: generateConfig, args: false });
    //addPage();
    workingBuffer.push({ jobUUID: UUID(), jobfunction: duplicatePageinConfig, args: uuid });
    // show loading
    workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "generate pages" });
    // if config then generate Pages
    //generatePages();
    workingBuffer.push({ jobUUID: UUID(), jobfunction: generatePages, args: numberOfCols });
    // hide loading
    workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });
    // generateConfig(false);
    // duplicatePageinConfig(uuid);
    // generatePages();
  }

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
      $("#theme").hide();
      $("#bannerData").hide();
      $(".page").hide();
      loadWidgets(uuid);
      $("#" + uuid).show(100);
    });

  $(newPageTab)
    .find("a")
    .click(function () {
      $("#css").hide();
      $("#theme").hide();
      $(".page").hide();
      $(".widget-holder").removeClass("active");
      $("#" + uuid + " .widget-holder").addClass("active");
      $("#" + uuid).show(100);
    });

  $(newPageTab).find(".nav-icon")
    .removeClass()
    .addClass(pageIconFamily + " nav-icon " + pageIcon);


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
  $(".widget-holder").removeClass("active");
  $("#" + uuid + " .widget-holder").addClass("active");
  $("#" + uuid).show(100);

  // prevent ENTER
  $("input").keydown(function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });

  init_widget_dropdown(uuid);

  // gridOptions
  let gridOptions = {
    column: nbOfCols, // 6,12 or 18
    minRow: 1, // don't collapse when empty
    cellHeight: "67px",
    disableOneColumnMode: true,
    float: true,
    dragIn: false, // class that can be dragged from outside
    dragInOptions: {}, // clone
    dragOut: false,
    removable: false, // drag-out delete class
    removeTimeout: 100,
    resizable: { autoHide: true, handles: 'se,sw' },
    acceptWidgets: function (el) { return false; } // function example, else can be simple: true | false | '.someClass' value
  };

  // #######################################################################################
  // INIT Grid
  grids[uuid] = GridStack.addGrid($("#" + uuid + " .grid-holder"), gridOptions);
  $("#" + uuid + " .grid-holder .grid-stack").addClass("grid-stack-" + nbOfCols);
  // console.log("################## GRID INIT");
  // console.log(grid);
  grids[uuid].on('change', function (event, items) {
    // console.log(event);
    // console.log(items);
    items.forEach(function (item) {
      updateWidgetSize(item);
    });
  });
  grids[uuid].on('added', function (event, items) {
    items.forEach(function (item) {
      updateWidgetSize(item);
    });
  });

  renamePages();
  workBufferWorking = false;
  console.log("finished addPage");
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
      if (newPage.widgets[widget].type === "card") {
        for (cardWidget in newPage.widgets[widget].widgets) {
          newPage.widgets[widget].widgets[cardWidget].UUID = UUID();
        }
      }

    }
    // console.log(newPage);
    appConfig.pages.push(newPage);
    localStorage.setItem('appConfig', JSON.stringify(appConfig));
    workBufferWorking = false;

  }
}

function initBannerData() {
  console.log("init banner");
  bannerDataTable = '<label for="table">select state for banner</label>';
  bannerDataTable += "<table class='table table-dark'>";
  bannerDataTable += "<tr>";
  bannerDataTable += '<td class="prop-name" data-html="true" data-placement="top" data-tooltip="tooltip">use banner</td>'
  bannerDataTable += '<td class="prop-value"><div class="form-check"><input id="bannerUseBanner" type="checkbox" data-type="boolean" class="widget-prop form-control form-control-sm form-check type-boolean"/></div></td>'
  bannerDataTable += "</tr>";
  bannerDataTable += "<tr>";
  bannerDataTable += '<td class="prop-name" data-html="true" data-placement="top" data-tooltip="tooltip" data-tooltip="">stateId</td>';
  bannerDataTable += '<td class="prop-value"><select id="bannerStateId" class="widget-prop form-control form-control-sm  type-stateId prop-stateId"';
  bannerDataTable += ' type="text" placeholder="stateId" data-prop="stateId" data-type="stateId" title="no state selected" data-toggle="modal" data-target="#selectModal"';
  bannerDataTable += ' data-select="stateSelect" value="no state selected">';
  bannerDataTable += '<option selected="selected" value="no state selected">no state selected</option></select></td>';
  bannerDataTable += "</tr>";
  bannerDataTable += "<tr>";
  bannerDataTable += '<td class="prop-name" data-html="true" data-placement="top" data-tooltip="tooltip" data-tooltip="type of state">stateIdType</td>';
  bannerDataTable += '<td class="prop-value"><input id="bannerStateIdType" type="text" data-prop="stateIdType" data-type="stateIdType" title="none" class="widget-prop form-control form-control-sm stateIdType prop-stateIdType"';
  bannerDataTable += ' placeholder="stateIdType" value="NONE" disabled="disabled" data-stateidtype="NONE"><hr class="widget-inline-seperator"><div class="newlinespacer"></div></td>';
  bannerDataTable += "<tr>";
  bannerDataTable += "</table>";
  $(bannerDataTable).appendTo("#bannerData");
}
