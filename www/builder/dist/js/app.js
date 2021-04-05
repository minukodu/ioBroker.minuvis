// App

//////////////////////////////////
var version = "2.0.0-alpha.2";
//////////////////////////////////

var numberOfCols = 18; // 18 cols grid

var appPath = "minuvis/app/";

var variables = [];
var variablesAsObj = [];
var arrStates = [];
var socket;
var showInfoText = false;
var filePath = "minukodu";
var metaInfoSocketIO = "0_userdata.0";
var defaultIconFamily = "mfd-icon";
var grids = [];

var workingBuffer = [];
var workBufferWorking = false;
var workBufferWorkingEdge = false;
var workBufferInterval = 1000; //50;

var templates = getTemplates();
// console.log("getTemplates()");
// console.log(templates);

numeral.locale('de');
let is_development = false;

workWithBuffer = function () {

  // console.log(workBufferWorking);
  // console.log(workBufferWorkingEdge);


  if (workBufferWorking === false && workBufferWorkingEdge === true) {
    workingBuffer.splice(0, 1); // remove job
    workBufferWorkingEdge = workBufferWorking;
  }
  if (workingBuffer.length === 0 || workBufferWorking === true) { return };

  console.log(workingBuffer.length);
  workBufferWorking = true;
  workBufferWorkingEdge = workBufferWorking;

  retVal = workingBuffer[0].jobfunction(workingBuffer[0].args);

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
    is_development = true;
  }
  // version
  $("#versionnumber").text("Version " + version);

  if (is_development === false) {
    // assume same url and port
    $("#data-url-port").val(window.location.protocol + "//" + window.location.host);
  }

  $(".nav-item a.menu-link-page").on("click", function (e) {
    e.preventDefault();
    $("#css").hide();
    $("#theme").hide();
    $("#bannerData").hide();
    $(".page").hide();
    $($(this).attr("href")).show();
    //console.log($(this).attr("href"));
  });

  $("#css-nav-item a").on("click", function (e) {
    e.preventDefault();
    $(".sidebar-settings-table").hide();
    $(".widget-settings-table").hide();
    $(".page").hide();
    $("#theme").hide();
    $("#bannerData").hide();
    $("#css").show();
  });

  $("#theme-nav-item a").on("click", function (e) {
    e.preventDefault();
    $(".sidebar-settings-table").hide();
    $(".widget-settings-table").hide();
    $(".page").hide();
    $("#css").hide();
    $("#bannerData").hide();
    $("#theme").show();
  });

  $("#banner-nav-item a").on("click", function (e) {
    e.preventDefault();
    $(".sidebar-settings-table").hide();
    $(".widget-settings-table").hide();
    $(".page").hide();
    $("#css").hide();
    $("#theme").hide();
    $("#bannerData").show();
  });

  $("#btn-theme-light").on("click", function (e) {
    e.preventDefault();
    $("#theme textarea").val();
    $("#theme textarea").val(getDefaultLightTheme());
  });

  $("#btn-theme-dark").on("click", function (e) {
    e.preventDefault();
    $("#theme textarea").val();
    $("#theme textarea").val(getDefaultDarkTheme());
  });

  $(document).ready(function () {
    // init banner section
    initBannerData();
    // init buttons
    $("#btn-ul-config").click(function () {
      $("#upload-config-file").click();
    });
    $("#btn-add-page").click(function () {
      //console.log("Handler for add Page called.");
      $("#css").hide();
      $("#theme").hide();
      $("#bannerData").hide();
      var pageUUID = addPage();
      $("#"+pageUUID).addClass("rendered");
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
    $("#select-configfile").on("click", function () {
      //console.log(this.value);
      this.select();

    });

    $("#btn-save-file").on("click", function (event) {
      event.preventDefault();
      console.log("Save config in file");
      // show loading
      workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "save config to file" });
      //addPage();
      workingBuffer.push({ jobUUID: UUID(), jobfunction: generateConfig, args: true });
      // hide loading
      workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });
      //generateConfig();
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

    $("#imExport-config-nav-item").click(function (event) {
      event.preventDefault();
      generateConfig(false);
      var outConfig = localStorage.getItem("appConfig");
      $("#imExport-config-holder textarea").val("");
      $("#imExport-config-holder textarea").val(JSON.stringify(JSON.parse(outConfig), null, 2));
      $("#imExportModal").modal("show");
    });

    $(".btn-importConfig").click(function (event) {
      event.preventDefault();
      importConfig($("#imExport-config-holder textarea").val());
    });

    // show loading
    workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "add page" });
    //addPage();
    workingBuffer.push({ jobUUID: UUID(), jobfunction: addPage, args: {} });
    // show loading
    workingBuffer.push({ jobUUID: UUID(), jobfunction: addWorkingNote, args: "generate pages" });
    // if config then generate Pages
    //generatePages();
    workingBuffer.push({ jobUUID: UUID(), jobfunction: generatePages, args: numberOfCols });
    // hide loading
    workingBuffer.push({ jobUUID: UUID(), jobfunction: removeWorkingNote, args: null });

    // start worker
    wBInterval = setInterval(workWithBuffer, workBufferInterval);

  });

  // init mfd-Icon-Dropdown
  console.log("Init MFD-Icons-Dropdown");
  //console.log(getMfdIcons());
  let icons = {};

  let MfdIconList = getMfdIcons();
  let MdiIconList = getMdiIcons();
  icons = MfdIconList.concat(MdiIconList);


  // console.error("icons:");
  // console.error(Object.keys(icons).length);

  $("#icp-mfd").iconpicker({
    title: 'Select Icon',
    //icons: getMfdIcons(),
    //icons: getMdiIcons(),
    icons: icons,
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

