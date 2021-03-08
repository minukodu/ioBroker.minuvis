

function init_widget_dropdown(targetUUID, card = false) {
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

  var widgetId = "wg-" + targetUUID;

  $(widgetDropdown)
    .attr("id", widgetId)
    .appendTo("#" + targetUUID + " .widget-dropdown-holder");

  for (var widget in widgetJSON) {
    // do not add Card in card
    if (card === true && widgetJSON[widget].type === "card") {
      continue;
    }

    //console.log(widget);
    $(widgetDropdownOption)
      .text(widgetJSON[widget].type)
      .attr("data-widgetName", widgetJSON[widget].type)
      .attr("data-targetUUID", targetUUID)
      .attr("data-target", targetUUID)
      .click(function () {
        addWidgetToPage(
          $(this).attr("data-widgetName"),
          $(this).attr("data-targetUUID"),
          null,
          grids[targetUUID],
          card
        );
      })
      .appendTo("#" + widgetId + " .dropdown-menu");
  }
  $("#" + widgetId).dropdown();
}

function showPropsTable(uuid, gridstackNode) {

  if (gridstackNode) {
    // console.log("Position: " + gridstackNode.x + ":" + gridstackNode.y);
    $(".sidebar-settings-table").hide();
    $(".widget-settings-table").hide();
    $("#propsTable-" + uuid).show();
    $("#propsTable-" + uuid + " .widget-settings-table").show();
    $("#props-" + uuid).show();

  }
}

function init_widget_settings_form(widgettype, uuid) {

  var settingTableHeight = $(window).height() - 150;

  var widget_settings_form = `<table id="props-` + uuid + `"class="table table-striped widget-settings-table" data-toggle="table" data-height="` + settingTableHeight + `">`;

  widget_settings_form += `<thead><tr><th>Property</th><th>value</th></tr></thead>`;

  // Type
  widget_settings_form += `<tr><td class="prop-name">`;
  widget_settings_form += `type`;
  widget_settings_form += `</td><td class="prop-widgettype" data-widgettype="` + widgettype + `" >`;
  widget_settings_form += widgettype;
  widget_settings_form += `</td></tr>`;
  // UUID
  widget_settings_form += `<tr><td class="prop-name">`;
  widget_settings_form += `UUID`;
  widget_settings_form += `</td><td class="prop-uuid" data-uuid="` + uuid + `">`;
  widget_settings_form += uuid;
  widget_settings_form += `</td></tr>`;



  for (prop in widgetJSON[widgettype]) {
    //widget_settings_form += prop + " :: " + widgetJSON[widgettype][prop];

    if (prop !== "type") {

      var formInput = "";
      var inputUUID = UUID();
      var objProp = widgetJSON[widgettype][prop];

      // console.log(prop);
      // console.log(objProp);

      switch (objProp.type) {
        case "file":
          formInput += `<select id="` + inputUUID + `"  
                          class="widget-prop form-control form-control-sm  type-file prop-` + prop + `" 
                          type="text" 
                          placeholder="` + prop + `" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          data-toggle="modal" 
                          data-target="#selectModal" 
                          data-select="fileSelect" 
                          value="` + objProp.default + `" 
                          >
                          <option selected="selected" value="` + objProp.default + `">` + objProp.default + `</option>                          
                          </select>`;
          break;
        case "icon":
          formInput += `<button id="` + inputUUID + `" 
                          class="widget-prop btn btn-light btn-sm icon-select iconSelect type-icon prop-` + prop + `" 
                          type="button" 
                          title="` + objProp.default + `" 
                          data-toggle="modal" 
                          data-target="#selectModal" 
                          data-select="iconSelect" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          value="` + objProp.default + `" type="text">
                            <i class="mfd-icon ` + objProp.default + `"></i>
                        </button>`;
          break;
        case "iconFamily":
          formInput += `<input id="` + inputUUID + `" 
                          type="text" 
                          title="` + objProp.default + `" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          value="` + objProp.default + `" 
                          disabled="disabled" 
                          class="widget-prop form-control form-control-sm type-iconFamily iconFamily prop-` + prop + `">`;
          break;
        case "stateId":
          formInput += `<select id="` + inputUUID + `"  
                          class="widget-prop form-control form-control-sm  type-stateId prop-` + prop + `" 
                          type="text" 
                          placeholder="` + prop + `" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          data-toggle="modal" 
                          data-target="#selectModal" 
                          data-select="stateSelect" 
                          value="` + objProp.default + `" 
                          >
                          <option selected="selected" value="` + objProp.default + `">` + objProp.default + `</option>                          
                          </select>`;

          break;
        case "stateIdType":
          formInput += `<input id="` + inputUUID + `" type="text" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          class="widget-prop form-control form-control-sm ` + prop + ` prop-` + prop + `"  
                          placeholder="` + prop + `" 
                          value="` + objProp.default + `" 
                          disabled="disabled">`;
          break;
        case "string":
          formInput += `<input id="` + inputUUID + `" type="text" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          class="widget-prop form-control form-control-sm type-string prop-` + prop + `"  
                          placeholder="` + prop + `" 
                          value="` + objProp.default + `" >`;
          break;
        case "number":

          var min = "";
          if (objProp.min !== null && objProp.min !== undefined) {
            min = ` min="` + objProp.min + `" `;
          }
          var max = "";
          if (objProp.max) {
            max = ` max="` + objProp.max + `" `;
          }

          formInput += `<input id="` + inputUUID + `" type="number" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          ` + min + max + ` 
                          class="widget-prop form-control form-control-sm type-number prop-` + prop + `"  
                          placeholder="` + prop + `"
                          value="` + objProp.default + `" >`;
          break;
        case "color":
          formInput += `<input id="` + inputUUID + `" type="color" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          class="widget-prop form-control form-control-sm colorInput type-color prop-` + prop + `"  
                          value="` + objProp.default + `" >`;
          break;
        case "boolean":
          formInput += `<input id="` + inputUUID + `" type="checkbox" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          class="widget-prop form-control form-control-sm form-check ml-1 mr-1 type-boolean prop-` + prop + `"  
                          value="` + objProp.default + `" 
                          onchange="updateBooleanProp(this)" 
                          >`;
          break;
        case "momentjs":
          formInput += `<input id="` + inputUUID + `" type="text" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          class="widget-prop form-control form-control-sm nothidden momentjs type-momentjs prop-` + prop + `"  
                          placeholder="` + prop + `" 
                          value="` + objProp.default + `"  
                          onkeyup="validateTimePickerFormat(this)" >
                          <span class="formatExample nothidden">Example: ` + moment().format(objProp.default) + `</span>`;
          break;
        case "numeraljs":
          formInput += `<input id="` + inputUUID + `" type="text" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          class="widget-prop form-control form-control-sm numeraljs type-numeraljs prop-` + prop + `"  
                          placeholder="` + prop + `" 
                          value="` + objProp.default + `"  >`;
          break;
        case "colorFormat":
          formInput += ``; // TODO
          break;
        case "pageList":
          formInput += `<select id="` + inputUUID + `"  
                          class="widget-prop form-control form-control-sm  type-pageList prop-` + prop + `" 
                          type="text" 
                          placeholder="` + prop + `" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.default + `" 
                          value="` + objProp.default + `" 
                          onchange="updatePageListProp(this)" 
                          onfocus="buildPageLinksSelect(this)" 
                          >
                          <option selected="selected" value="` + objProp.default + `">` + objProp.default + `</option>                          
                          </select>`;
          break;



        default:
          //formInput += `<input type="number" class="form-control" placeholder="`;
          formInput += prop + " ?????????????????????";
          // formInput += `">`; 
          break;
      }
      // seperator after prop
      if (prop == "stateIdType" || prop == "url") {
        formInput += `<hr class="widget-inline-seperator"><div class="newlinespacer"></div>`;
      }
      // seperator before prop
      if (prop == "area1Name" || prop == "showAsIndicator") {
        formInput = `<hr class="widget-inline-seperator"><div class="newlinespacer"></div>` + formInput;
      }

      widget_settings_form += `<tr><td 
                                      class="prop-name"
                                      data-tooltip="tooltip" 
                                      data-placement="top" 
                                      data-html="true"  
                                      title="` + objProp.tooltip + `" 
                              >`;
      widget_settings_form += prop;
      widget_settings_form += `</td><td class="prop-value">`;

      widget_settings_form += formInput;

      widget_settings_form += `</td></tr>`;
    }

  }

  widget_settings_form += `</table>`;

  return widget_settings_form;
}

function buildPageLinksSelect(element) {
  let options = "";
  let value = $(element).val();
  $(".page .page-title").each(function () {
    console.log(this);
    selected = "";
    if ($(this).val() == value) {
      selected = "selected='selected'";
    }
    options += "<option " + selected + " value='" + $(this).val() + "'>" + $(this).val() + "</option>";
  })
  $(element).html("");
  $(element).html(options);
}

function deleteWidget(element, uuid, pageUUID) {
  if (!e) var e = window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
  console.log("delete Item");
  // console.log(document.getElementById(uuid).parentElement.parentElement);
  grids[pageUUID].removeWidget(document.getElementById(uuid).parentElement.parentElement);
  grids[pageUUID].update();
}

function copyWidget(element, uuid, targetUUID, card) {
  if (!e) var e = window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
  //read settings
  var widgetData = readWidgetConfig(uuid);
  //create newUUID
  widgetData.UUID = UUID();
  // add to Page
  addWidgetToPage(widgetData.type, targetUUID, widgetData, grids[targetUUID], card);

}

function updateBooleanProp(element) {
  $(element).val($(element)[0].checked);
}

function selectWidget(element, UUID) {
  // console.log($(element).closest(".grid-stack-item")[0].gridstackNode.x);
  // console.log($(element).closest(".grid-stack-item")[0].gridstackNode.y);
  if (!e) var e = window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();

  $('.grid-stack-item-content.selected').removeClass('selected');
  $(element).parent().addClass('selected');
  showPropsTable(UUID, $(element).closest(".grid-stack-item")[0].gridstackNode);
}

function updateWidgetSize(item) {
  // update width and height
  // console.log(item);
  // console.log($("#props-" + item.uuid + " .prop-widgetPosX"));
  $("#props-" + item.uuid + " .prop-widgetPosX").val(item.x);
  $("#props-" + item.uuid + " .prop-widgetPosX").attr("value", item.x);
  $("#props-" + item.uuid + " .prop-widgetPosX").attr("data-widgetPosX", item.x);
  $("#props-" + item.uuid + " .prop-widgetPosY").val(item.y);
  $("#props-" + item.uuid + " .prop-widgetPosY").attr("value", item.y);
  $("#props-" + item.uuid + " .prop-widgetPosY").attr("data-widgetPosY", item.y);


  $("#props-" + item.uuid + " .prop-widgetHeight").val(item.h);
  $("#props-" + item.uuid + " .prop-widgetHeight").attr("value", item.h);
  $("#props-" + item.uuid + " .prop-widgetHeight").attr("data-widgetHeight", item.h);
  $("#props-" + item.uuid + " .prop-widgetWidth").val(item.w);
  $("#props-" + item.uuid + " .prop-widgetWidth").attr("value", item.w);
  $("#props-" + item.uuid + " .prop-widgetWidth").attr("data-widgetWidth", item.w);

  $('.grid-stack-item-content.selected').removeClass('selected');
  $("#" + item.uuid).parent().addClass('selected');
  showPropsTable(item.uuid, item);

}
function handleCardWidget(widgetUUID, nbOfCols = 18) {

  $("#" + widgetUUID).append("<div class='widgetcard widget-dropdown-holder'></div><div class='widgetcard widget-holder'><div class='grid-holder'></div></div>");

  // gridOptions
  let gridOptions = {
    column: nbOfCols, // 6,12 or 18
    minRow: 1, // don't collapse when empty
    cellHeight: "67px", //"67px",
    disableOneColumnMode: true,
    float: true,
    dragIn: false, // class that can be dragged from outside
    dragOut: false,
    dragInOptions: {}, // clone
    removable: false, // drag-out delete class
    removeTimeout: 100,
    resizable: { autoHide: true, handles: 'se,sw' },
    acceptWidgets: function (el) { return false; } // function example, else can be simple: true | false | '.someClass' value
  };

  // #######################################################################################
  // INIT Grid
  grids[widgetUUID] = GridStack.addGrid($("#" + widgetUUID + " .grid-holder"), gridOptions);
  $("#" + widgetUUID + " .grid-holder .grid-stack").addClass("grid-stack-" + nbOfCols);
  // console.log("################## GRID INIT");

  // console.log(widgetUUID);
  // console.log(grids[widgetUUID]);
  grids[widgetUUID].on('change', function (event, items) {
    // console.log(event);
    // console.log(items);
    items.forEach(function (item) {
      updateWidgetSize(item);
    });
  });
  grids[widgetUUID].on('added', function (event, items) {
    items.forEach(function (item) {
      updateWidgetSize(item);
    });
  });

  init_widget_dropdown(widgetUUID, true);

  // grid= grids[widgetUUID];
  // grid.addWidget({ w: 2, h: 2, x: 1, y: 1, maxH: 10, content: "content", uuid: "uuid" });

}

function addWidgetToPage(widget, targetUUID, widgetData = null, grid, card = false) {
  console.log(widget);
  console.log(targetUUID);

  // filler is now headline
  if (widget === "filler") {
    widget = "headline";
  }

  widgetData = widgetData || {};

  uuid = widgetData.UUID || UUID();

  targetClass = "pageWidget";
  if (card === true || card === "true") { targetClass = "cardWidget" };

  if (widgetJSON[widget]) {

    var content = ``;
    content += `<div class="grid-widget ` + targetClass + `" id="` + uuid + `" onclick="selectWidget(this,'` + uuid + `');"><span>` + widget + `</span><br/>`;
    content += `<span class="link-holder">`;
    content += `<a href="#" class="link-copy-widget" title="copy widget" onclick="copyWidget(this,'` + uuid + `','` + targetUUID + `','` + card + `');return false;"><i class="fa fa-copy"></i></a>`;
    content += `<a href="#" class="link-delete-widget" title="delete widget" onclick="deleteWidget(this,'` + uuid + `','` + targetUUID + `');return false;"><i class="far fa-trash-alt"></i></a>`;
    content += `</span>`;
    content += `</div>`;

    // check for width and height
    if (!widgetData.widgetHeight) {
      widgetData.widgetHeight = 1;
      if (widget === "card") {
        widgetData.widgetHeight = 3;
      }
    }
    if (!widgetData.widgetWidth) {
      widgetData.widgetWidth = 6
    }
    let widgetMinHeight = 1;
    if (widget === "card") {
      widgetMinHeight = 1; //2
    }
    let widgetMinWidth = 1;
    if (widget === "card") {
      widgetMinWidth = 1; //6
    }

    var newWidgetSettings = init_widget_settings_form(widget, uuid, widgetData);
    $("#settings-holder").append($(newWidgetSettings));

    //add to grid
    grid.addWidget({ w: widgetData.widgetWidth, h: widgetData.widgetHeight, x: widgetData.widgetPosX, y: widgetData.widgetPosY, minH: widgetMinHeight, maxH: 100, minW: widgetMinWidth, content: content, uuid: uuid });

    for (data in widgetData) {
      // console.log("widgetdata");
      // console.log(data);
      // console.log(widgetData);
      // console.log(uuid);
      $("#props-" + uuid + " .prop-" + data).val(widgetData[data]);
      $("#props-" + uuid + " .prop-" + data).attr("value", widgetData[data]);
      $("#props-" + uuid + " .prop-" + data).attr("data-" + data, widgetData[data]);
    }

    // disable input of width and height
    $("#props-" + uuid + " .prop-widgetHeight").attr("disabled", "disabled");
    $("#props-" + uuid + " .prop-widgetWidth").attr("disabled", "disabled");

    // add icon classes to i-Element
    var iconElements = $("#props-" + uuid + " .type-icon i");
    iconElements.each(function () {
      $(this).removeClass()
        .addClass($(this).parent().val())
        .addClass($(this).parent().parent().parent().next().find(".type-iconFamily").val());

      // console.log("######################################");
      // console.log($(this).parent().parent().parent().next().find(".type-iconFamily"));
    });
    // add stateId to state-Select
    var stateIdElements = $("#props-" + uuid + " .type-stateId");
    stateIdElements.each(function () {
      var stateId = $(this).attr("data-stateid");
      $(this).find("option").remove();
      $(this).append($('<option selected="selected" value="' + stateId + '">' + stateId + '</option>'));
    });
    // add checked to boolean
    var booleanElements = $("#props-" + uuid + " .type-boolean");
    booleanElements.each(function () {
      var value = $(this).val();
      if (value == "true") {
        $(this).attr("checked", "checked");
      } else {
        $(this).removeAttr("checked");
      }
    });
    // add file to file-Select
    var fileElements = $("#props-" + uuid + " .type-file");
    fileElements.each(function () {
      var value = $(this).attr("value");
      $(this).find("option").remove();
      $(this).append($('<option selected="selected" value="' + value + '">' + value + '</option>'));
    });
    // add targetpage to pageList
    var pageListElements = $("#props-" + uuid + " .type-pageList");
    pageListElements.each(function () {
      var pageLink = $(this).attr("value");
      $(this).find("option").remove();
      $(this).append($('<option selected="selected" value="' + pageLink + '">' + pageLink + '</option>'));
    });


    $("#props-" + uuid).bootstrapTable();

    $("#props-" + uuid + " .tooltip").remove();
    $("#props-" + uuid + ' [data-tooltip="tooltip"]').tooltip();

    $("#props-" + uuid)
      .closest(".bootstrap-table")
      .attr("id", "propsTable-" + uuid)
      .addClass("sidebar-settings-table")
      .hide();

  }

  if (widget === "card") {
    handleCardWidget(uuid);
  }

  return uuid;
}

function validateTimePickerFormat(elem) {
  console.log("validateTimePickerFormat");
  let format = $(elem).val();
  console.log($(elem).next());
  let formatExample = moment().format(format);
  $(elem).next(".formatExample").text("Example: " + formatExample);
}

function validateNumeralFormat(elem) {
  console.log("validateNumeralFormat");
  let format = $(elem).val();
  let formatExample = numeral(1000).format(format);
  $(elem).parent().parent().parent().find(".formatExample").val(formatExample);
}
