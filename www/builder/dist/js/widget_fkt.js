

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

  for (var widget in widgetJSON) {
    //console.log(widget);
    $(widgetDropdownOption)
      .text(widgetJSON[widget].type)
      .attr("data-widgetName", widgetJSON[widget].type)
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

function init_widget_inline_dropdown(widgettype, uuid) {
  var widgetInlineDropdown = `
    <select 
      data-tooltip="tooltip" 
      data-placement="top" 
      data-html="true"  
      title="select widget-type" 
      class="form-control form-control-sm widget-inline-dropdown" 
      onchange="updateWidget(this)" id="
  `;
  widgetInlineDropdown += "widgetttypeselect-" + uuid;
  widgetInlineDropdown += `">`;

  for (widget in widgetJSON) {
    //console.log(widget);
    var selected = ``;
    if (widgetJSON[widget].type == widgettype) {
      selected = ` selected="selected" `;
    }

    widgetInlineDropdown += `<option value="`;
    widgetInlineDropdown += widgetJSON[widget].type;
    widgetInlineDropdown += `"`;
    widgetInlineDropdown += selected;
    widgetInlineDropdown += `>`;
    widgetInlineDropdown += widgetJSON[widget].type;
    widgetInlineDropdown += `</option>`;
  }

  widgetInlineDropdown += `</select>`;
  return widgetInlineDropdown;
}

function init_widget_inline_form(widgettype, uuid) {

  var widget_inline_form = `<form class="form-inline widget widget-inline ` + widgettype + ` " id="` + uuid + `" data-widgettype="` + widgettype + `">`;

  widget_inline_form += `<i class="fas fa-arrows-alt handle"></i>`;

  widget_inline_form += init_widget_inline_dropdown(widgettype, uuid);

  for (prop in widgetJSON[widgettype]) {
    //widget_inline_form += prop + " :: " + widgetJSON[widgettype][prop];

    if (prop !== "type") {

      var formInput = "";
      var inputUUID = UUID();
      var objProp = widgetJSON[widgettype][prop];

      // console.log(prop);
      // console.log(objProp);

      switch (objProp.type) {
        case "icon":
          formInput += `<button id="` + inputUUID + `" 
                          class="widget-prop btn btn-light btn-sm icon-select iconSelect type-icon prop-` + prop + `" 
                          type="button" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          title="` + objProp.tooltip + `" 
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
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          title="` + objProp.tooltip + `" 
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          value="` + objProp.default + `" 
                          disabled="disabled" 
                          class="widget-prop form-control form-control-sm hidden type-iconFamily iconFamily prop-` + prop + `">`;
          break;
        case "stateId":
          formInput += `<select id="` + inputUUID + `"  
                          class="widget-prop form-control form-control-sm  type-stateId prop-` + prop + `" 
                          type="text" 
                          placeholder="` + prop + `" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
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
                          class="widget-prop form-control form-control-sm hidden ` + prop + ` prop-` + prop + `"  
                          placeholder="` + prop + `" 
                          value="` + objProp.default + `" 
                          disabled="disabled">`;
          break;
        case "string":
          formInput += `<input id="` + inputUUID + `" type="text" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
                          class="widget-prop form-control form-control-sm type-string prop-` + prop + `"  
                          placeholder="` + prop + `" 
                          value="` + objProp.default + `" >`;
          break;
        case "number":

          var min = "";
          if (objProp.min) {
            min = ` min="` + objProp.min + `" `;
          }
          var max = "";
          if (objProp.max) {
            max = ` max="` + objProp.max + `" `;
          }

          formInput += `<input id="` + inputUUID + `" type="number" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
                          ` + min + max + ` 
                          class="widget-prop form-control form-control-sm type-number prop-` + prop + `"  
                          placeholder="` + prop + `"
                          value="` + objProp.default + `" >`;
          break;
        case "color":
          formInput += `<input id="` + inputUUID + `" type="color" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
                          class="widget-prop form-control form-control-sm colorInput type-color prop-` + prop + `"  
                          value="` + objProp.default + `" >`;
          break;
        case "boolean":
          formInput += `<input id="` + inputUUID + `" type="checkbox" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
                          class="widget-prop form-control form-control-sm form-check ml-1 mr-1 type-boolean prop-` + prop + `"  
                          value="` + objProp.default + `" 
                          onchange="updateBooleanProp(this)" 
                          >`;
          break;
        case "momentjs":
          formInput += `<input id="` + inputUUID + `" type="text" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
                          class="widget-prop form-control form-control-sm nothidden momentjs type-momentjs prop-` + prop + `"  
                          placeholder="` + prop + `" 
                          value="` + objProp.default + `"  
                          onkeyup="validateTimePickerFormat(this)" >
                          <span class="formatExample nothidden">Example: ` + moment().format(objProp.default) + `</span>`;
          break;
        case "numeraljs":
          formInput += `<input id="` + inputUUID + `" type="text" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
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
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true"  
                          data-prop="` + prop + `" 
                          data-type="` + objProp.type + `" 
                          title="` + objProp.tooltip + `" 
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
      widget_inline_form += formInput;
    }

  }

  widget_inline_form += `<span class="widget-buttons">`;
  widget_inline_form += `<button type="button" 
                            class="btn btn-sm btn-primary btn-widget-add" 
                            data-tooltip="tooltip" 
                            data-placement="top" 
                            data-html="true" 
                            title="add widget"  
                            onclick="addWidget(this)" 
                            >
                          <i class="fas fa-plus">
                          </i></button>`;
  widget_inline_form += `<button type="button" 
                            class="btn btn-sm btn-primary btn-widget-copy" 
                            data-tooltip="tooltip" 
                            data-placement="top" 
                            data-html="true" 
                            title="copy widget"  
                            onclick="copyWidget(this)" 
                            >
                          <i class="far fa-copy">
                          </i></button>`;
  widget_inline_form += `<button type="button" 
                          class="btn btn-sm btn-danger btn-widget-delete" 
                          data-tooltip="tooltip" 
                          data-placement="top" 
                          data-html="true" 
                          title="delete widget"  
                          onclick="deleteWidget(this)" 
                          >
                        <i class="far fa-trash-alt">
                        </i></button>`;
  widget_inline_form += `</span>`;

  widget_inline_form += `</form>`;

  return widget_inline_form;
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

function deleteWidget(element) {
  $(element).closest(".widget").remove();
  addCompactModeClass();
}
function copyWidget(element) {
  var thisWidget = $(element).closest(".widget").first();
  var uuid = UUID();
  var copiedWidget = thisWidget
    .clone(true)
    .attr("id", uuid)
    .attr("data-id", uuid);
  copiedWidget.children().each(function () {
    $(this).attr("id", UUID());
  });


  // console.log(thisWidget);
  // console.log(copiedWidget);  
  thisWidget.after(copiedWidget);
  addCompactModeClass();
}

function addWidget(element) {
  var thisWidget = $(element).closest(".widget").first();
  var newWidget = init_widget_inline_form("switch", UUID());
  thisWidget.after(newWidget);
  addCompactModeClass();
}

function updatePageListProp(element) {
  //console.log($(element).find("option:selected").text());
  $(element).val($(element).find("option:selected").text());
}

function updateWidget(element) {
  // console.log(element.id);
  // console.log(element.value);

  elementParent = $(element).parent();
  newWidgetType = element.value;

  $(elementParent).replaceWith($(init_widget_inline_form(newWidgetType, UUID())));
  $(".tooltip").remove();
  $('[data-tooltip="tooltip"]').tooltip();

  addCompactModeClass();
}

function updateBooleanProp(element) {
  $(element).val($(element)[0].checked);
}


function addWidgetToPage(widget, pageUUID, widgetData = null) {
  // console.log(widget);
  //console.log(pageUUID);
  uuid = UUID();

  if (widgetJSON[widget]) {

    // form
    $(init_widget_inline_form(widget, uuid, widgetData))
      .insertBefore("#" + pageUUID + " .widget-holder-end");


    for (data in widgetData) {
      // console.log("widgetdata");
      // console.log(data);
      $("#" + uuid + " .prop-" + data).val(widgetData[data]);
      $("#" + uuid + " .prop-" + data).attr("value", widgetData[data]);
      $("#" + uuid + " .prop-" + data).attr("data-" + data, widgetData[data]);
    }

    // add icon classes to i-Element
    var iconElements = $("#" + uuid + " .type-icon i");
    iconElements.each(function () {
      $(this).removeClass()
        .addClass($(this).parent().val())
        .addClass($(this).parent().next(".type-iconFamily").val());
    });
    // add stateId to state-Select
    var stateIdElements = $("#" + uuid + " .type-stateId");
    stateIdElements.each(function () {
      var stateId = $(this).attr("data-stateid");
      $(this).find("option").remove();
      $(this).append($('<option selected="selected" value="' + stateId + '">' + stateId + '</option>'));
    });
    // add checked to boolean
    var booleanElements = $("#" + uuid + " .type-boolean");
    booleanElements.each(function () {
      var value = $(this).val();
      if (value == "true") {
        $(this).attr("checked", "checked");
      } else {
        $(this).removeAttr("checked");
      }
    });
    // add targetpage to pageList
    var pageListElements = $("#" + uuid + " .type-pageList");
    pageListElements.each(function () {
      var pageLink = $(this).attr("value");
      $(this).find("option").remove();
      $(this).append($('<option selected="selected" value="' + pageLink + '">' + pageLink + '</option>'));
    });



    $(".tooltip").remove();
    $('[data-tooltip="tooltip"]').tooltip();

  }
  // make sortable
  init_sortable();
  // set compactMode-Class
  addCompactModeClass();
  // return uuid
  return uuid;
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
