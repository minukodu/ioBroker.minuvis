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
        var widgetUUID = addWidgetToPage(widget.type, pageUUID, widget);
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

function addPage(pageData = {}) {
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
