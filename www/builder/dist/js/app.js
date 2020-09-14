// App

//////////////////////
var version = "1.4.0";
//////////////////////

var appPath = "minuvis/app/";

var variables = [];
var variablesAsObj = [];
var arrStates = [];
var socket;
var showInfoText = false;
var filePath = "minukodu";
var defaultIconFamily = "mfd-icon";

var templates = getTemplates();
// console.log("getTemplates()");
// console.log(templates);

numeral.locale('de');
let is_development = false;

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
