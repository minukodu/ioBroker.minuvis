function getTemplates () {

    var templates = {};

    templates.widgets = [];
    
	// only for download button
	// not available at the moment
	//
    // templates.configJSprePend = "const appConfig =";
    // templates.configJSpostPend = ";localStorage.setItem('appConfig', JSON.stringify(appConfig));";
    
    templates.devNote = "<div id='dev-note'>Attention ! This is a development-site ! for production goto <a href='http://builder.minukodu.de'>http://builder.minukodu.de</a></div>";
    
    templates.pageTab = `
    <li class="nav-item page-nav-item">
        <div class="container">
            <div class="row">
                <div class="col-sm-2">
                    <span class="badge badge-secondary page-order">99</span>
                </div>
				<div class="col-sm-1">
                    <i class="mfd-icon nav-icon audio_play"></i>
					<!--
                    <i class="fas fa-rocket nav-startpage-icon visibility-hidden"></i>
					-->
                </div>
                <div class="col-sm-9">
                    <a href="#pageHome" class="nav-link menu-link-page">
                        <span class="page-title">PageName</span>
                    </a>
                </div>
            </div>
        </div>
    </li>
    `;
    
    templates.page = `
    <!-- page -->
    <div class="tab-pane page tinted nested-sortable" data-id="60248645-ca99-4c2c-8d14-b614665439ae"
         id="60248645-ca99-4c2c-8d14-b614665439ae">
		 
        <!-- icon, title and startpage -->
        <form class="form-inline mb-3">
            <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                    <span class="input-group-text alert-info label-page-name">Page</span>
                </div>
                <input type="number" class="form-control  form-control-sm page-order" value=99 min=1 max=99>
                <div class="input-group-prepend">
                    <button class="btn btn-primary hidden btn-apply-page-order" type="button">
                        <span class="btn-label"><i class="fas fa-sort"></i></span>
                        Apply page order
                    </button>
                </div>
                <input type="text" class="form-control  form-control-sm page-title" placeholder="Name of page"
                       value="Page 1">
            </div>
			<div class="form-group ml-2 mr-2">
				<div class="input-group iconselectfromcontrol icon-select iconSelectPage" data-icon="audio_play">
					<div class="input-group-prepend">
						<span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
					</div>
					<div class="input-group-append">
						<button class="btn btn-primary" type="button" data-toggle="modal"
								data-target="#selectModal" data-select="iconSelectPage">
							select page-icon
						</button>
					</div>
				</div>
			</div>
            <div class="form-check ml-2">
                <input class="form-check-input isstartpage" type="checkbox">
                <label class="form-check-label">
                    is Startpage
                </label>
            </div>
            <div class="form widget-dropdown-holder">
            </div>
            <!-- copy button -->
            <button type="button" class="btn btn-sm btn-labeled btn-primary btn-page-copy ml-2">
                <span class="btn-label"><i class="far fa-copy"></i></span>
                copy Page
            </button>
            <!-- delete button -->
            <button type="button" class="btn btn-sm btn-labeled btn-outline-danger btn-page-delete mt-1">
                <span class="btn-label"><i class="far fa-trash-alt"></i></span>
                delete Page
            </button>
        </form>
    
        <!-- widgets -->
        <div class="widget-holder">
    
            <div class="widget-holder-end" class="hidden"></div>
        </div>
    </div>
    <!-- /page -->
    `;
    
    templates.widgets["switch"] = `
    <div class="card widget switch" data-widgettype="switch">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Switch</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">Set title ...</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select State
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
    
    
    templates.widgets["indicator"] = `
    <div class="card widget indicator" data-widgettype="indicator">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Indicator</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">Set title ...</strong>
                &nbsp;icon:&nbsp;
                <strong class="settings-icon">it_wifi</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <!-- icon, alarm, negate -->
            <form class="form form-inline">
                <div class="form-group">
                    <div class="input-group iconselectfromcontrol iconSelect" data-icon="it_wifi">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="mfd-icon it_wifi"></i></span>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" data-toggle="modal"
                                    data-target="#selectModal" data-select="iconSelect">
                                select Icon
                            </button>
                        </div>
                    </div>
                </div>
                <!-- colors -->
                    <form class="form form-inline">
                        <div class="input-group mb-2 ml-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text alert-info">Color when true</div>
                            </div>
                            <input type="color" class="form-control colorinput colorWhenTrue" value="#00FF00">
                        </div>
                        <div class="input-group mb-2 ml-3">
                            <div class="input-group-prepend">
                                <div class="input-group-text alert-info">Color when false</div>
                            </div>
                            <input type="color" class="form-control colorinput colorWhenFalse" value="#FF0000">
                        </div>
                    </form>
                <!-- /colors -->
            </form>

            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select State
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
    
    templates.widgets["slider"] = `
    <div class="card widget slider" data-widgettype="slider">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Slider</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">Set title ...</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <!-- min/max icons -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectMin" data-icon="text_min">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon text_min"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectMin">
                                    select min-icon
                                </button>
                            </div>
                        </div>
                        <div class="input-group iconselectfromcontrol ml-3 iconSelectMax" data-icon="text_max">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon text_max"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectMax">
                                    select max-icon
                                </button>
                            </div>
                        </div>    
                    </div>
                </form>
                <hr />
            </div>
            <!-- /min/max icons  -->
            <form>
                <div class="input-group input-group-sm mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">Minimum</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm minimum" value="0">
                </div>
                <div class="input-group input-group-sm mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">Maximum</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm maximum" value="100">
                </div>
                <div class="input-group input-group-sm mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">Step</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm step" value="5">
                </div>
                <div class="input-group input-group-sm mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">Unit</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm unit" value="%">
                </div>
            </form>
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select State
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
    
    templates.widgets["output"] = `
    <div class="card widget output" data-widgettype="output">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Output</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">Set title ...</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <form class="form form-inline mt-1 mb-2">
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">font-color</span>
                    </div>
                    <input type="color" class="form-control form-control-sm colorinput color" value="#FFFFFF">
                </div>
            </form>
            <form class="form form-inline">
				<div class="input-group input-group-sm mb-2">
					<div class="input-group-prepend">
						<span class="input-group-text alert-info">Unit</span>
					</div>
					<input type="text" class="form-control  form-control-sm unit" value="%">
				</div>
				<div class="input-group input-group-sm mb-2 ml-3">
					<div class="input-group-prepend">
						<span class="input-group-text alert-info">Format from&nbsp;<mark><a href="http://numeraljs.com/#format"  target="_blank">numeraljs</a></mark></span>
					</div>
					<input type="text" class="form-control  form-control-sm format" onkeyup="validateNumeralFormat(this)" value="0.0">
                </div>
                <div class="input-group input-group-sm mb-2 ml-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">numeral-Format Example</span>
                    </div>
                    <input type="text" disabled="disabled" class="form-control  form-control-sm formatExample" value="99.9">
                </div>
            </form>
            <form class="form form-inline mt-1">
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">min value&nbsp;</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm minValue" value="10">
                </div>
                <div class="input-group input-group-sm ml-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">min color&nbsp;</span>
                    </div>
                    <input type="color" class="form-control form-control-sm colorinput minColor" value="#0000FF">
                </div>
            </form>
            <form class="form form-inline mt-1">
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">max value</span>
                    </div>
                    <input type="text" class="form-control form-control-sm maxValue" value="90">
                </div>
                <div class="input-group input-group-sm ml-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">max color</span>
                    </div>
                    <input type="color" class="form-control form-control-sm colorinput maxColor" value="#FF0000">
                </div>
            </form>
            <hr/>
            <form>
                <div class="input-group mt-1 mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select State
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
    
    templates.widgets["html"] = `
    <div class="card widget html" data-widgettype="html">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Html</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">NONE</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <form>
				<div class="input-group input-group-sm mt-1 mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text alert-info ">height in px or %</span>
					</div>
					<input type="text" class="form-control  form-control-sm height" value="600px">
				</div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select State
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
    
    templates.widgets["iframe"] = `
    <div class="card widget iframe" data-widgettype="iframe">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">IFrame</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">NONE</strong>
                &nbsp;url:&nbsp;
                <strong class="settings-url">https://iobroker.com</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <form>
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">URL</span>
                    </div>
                    <input type="url" class="form-control  form-control-sm url"
                           placeholder="https://iobroker.com/" value="https://iobroker.com/" />
                </div>
                <div class="input-group input-group-sm mt-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Update-time in seconds</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm updateTimeSek" value="600">
                </div>
                <div class="input-group input-group-sm mt-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">height in px or %</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm height" value="600px">
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
	
	templates.widgets["flot"] = `
    <div class="card widget flot" data-widgettype="flot">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Flot</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">NONE</strong>
                &nbsp;url:&nbsp;
                <strong class="settings-url">https://iobroker.com</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <form>
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">URL</span>
                    </div>
                    <input type="url" class="form-control  form-control-sm url"
                           placeholder="https://iobroker.com/" value="https://iobroker.com/" />
                </div>
                <div class="input-group input-group-sm mt-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Update-time in seconds</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm updateTimeSek" value="600">
                </div>
                <div class="input-group input-group-sm mt-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">height in px or %</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm height" value="600px">
                </div>
            </form>
			<hr/>
			<form class="form form-inline mt-1">
				<div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 1 Name</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area1Name" value="hour">
                </div>
				<div class="input-group input-group-sm ml-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 1 Time [min]</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area1Time" value="60">
                </div>
            </form>
			<form class="form form-inline mt-1">
				<div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 2 Name</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area2Name" value="day">
                </div>
				<div class="input-group input-group-sm ml-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 2 Time [min]</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area2Time" value="1440">
                </div>
            </form>

			<form class="form form-inline mt-1">
				<div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 3 Name</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area3Name" value="week">
                </div>
				<div class="input-group input-group-sm ml-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 3 Time [min]</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area3Time" value="10080">
                </div>
            </form>

			<form class="form form-inline mt-1">
				<div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 4 Name</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area4Name" value="month">
                </div>
				<div class="input-group input-group-sm ml-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Area 4 Time [min]</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm area4Time" value="302400">
                </div>
            </form>			
			
			
			
        </div> <!-- /card-body -->
    </div>
    `;
    
    templates.widgets["imgoutput"] = `
    <div class="card widget imgoutput" data-widgettype="imgoutput">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">ImgOutput</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">NONE</strong>
                &nbsp;url:&nbsp;
                <strong class="settings-url">http://placekitten.com/640/360</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <form>
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">URL</span>
                    </div>
                    <input type="url" class="form-control  form-control-sm url"
                           placeholder="http://placekitten.com/640/360" value="http://placekitten.com/640/360" />
                </div>
                <div class="input-group input-group-sm mt-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info ">Update-time in seconds</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm updateTimeSek" value="600">
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
    
    templates.widgets["filler"] = `
    <div class="card widget filler" data-widgettype="filler">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Filler</h5>
            <small class="settings ml-4">no extra settings</small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="visibility-hidden btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div>
    </div>
    `;
    
    templates.widgets["timepicker"] = `
    <div class="card widget timepicker" data-widgettype="timepicker">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">Timepicker</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">NONE</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
			<form class="form form-inline hidden">
				<div class="input-group input-group-sm mb-2 ml-3">
					<div class="input-group-prepend">
						<span class="input-group-text alert-info">Format from&nbsp;<mark><a href="https://momentjs.com/docs/#/displaying/format/" target="_blank">momentjs</a></mark></span>
					</div>
					<input type="text" class="form-control  form-control-sm format" onkeyup="validateTimePickerFormat(this)" value="HH:mm">
                </div>
                <div class="input-group input-group-sm mb-2 ml-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text alert-info">Time-Format Example</span>
                    </div>
                    <input type="text" disabled="disabled" class="form-control  form-control-sm formatExample" value="13:45">
                </div>
            </form>
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select State
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;
    
    templates.widgets["valueswitcher"] = `
    <div class="card widget valueswitcher" data-widgettype="valueswitcher">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">ValueSwitcher</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">Set title ...</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <label>Number of buttons</label>

            <select class="nbOfButtons" onchange="valueSwitcherSelectChange(this);">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option selected="selected" value="4">4</option>
            </select>
            <!-- unit -->
            <div class="input-group input-group-sm mb-2">
                <div class="input-group-prepend">
                    <span class="input-group-text alert-info">Unit</span>
                </div>
                <input type="text" class="form-control form-control-sm unit" value="%">
            </div>
            <hr/>
            <!-- icon, value 4 times-->
            <form class="form form-inline mb-2 button1">
                <div class="form-group">
                    <div class="input-group iconselectfromcontrol iconSelectIcon1" data-icon="it_wifi">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="mfd-icon it_wifi"></i></span>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" data-toggle="modal"
                                    data-target="#selectModal" data-select="iconSelectIcon1">
                                select Icon button 1
                            </button>
                        </div>
                    </div>
                </div>
                <div class="input-group input-group-sm ml-2">
                <div class="input-group-prepend">
                    <span class="input-group-text alert-info ">value button 1</span>
                </div>
                    <input type="text" class="form-control form-control-sm btn1Value" value="10">
                </div>
            </form>
            <form class="form form-inline mb-2 button2">
                <div class="form-group">
                    <div class="input-group iconselectfromcontrol iconSelectIcon2" data-icon="it_wifi">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="mfd-icon it_wifi"></i></span>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" data-toggle="modal"
                                    data-target="#selectModal" data-select="iconSelectIcon2">
                                select Icon button 2
                            </button>
                        </div>
                    </div>
                </div>
                <div class="input-group input-group-sm ml-2">
                <div class="input-group-prepend">
                    <span class="input-group-text alert-info ">value button 2</span>
                </div>
                    <input type="text" class="form-control form-control-sm btn2Value" value="30">
                </div>
            </form>
            <form class="form form-inline mb-2 button3">
                <div class="form-group">
                    <div class="input-group iconselectfromcontrol iconSelectIcon3" data-icon="it_wifi">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="mfd-icon it_wifi"></i></span>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" data-toggle="modal"
                                    data-target="#selectModal" data-select="iconSelectIcon3">
                                select Icon button 3
                            </button>
                        </div>
                    </div>
                </div>
                <div class="input-group input-group-sm ml-2">
                <div class="input-group-prepend">
                    <span class="input-group-text alert-info ">value button 3</span>
                </div>
                    <input type="text" class="form-control form-control-sm btn3Value" value="80">
                </div>
            </form>
            <form class="form form-inline mb-2 button4">
                <div class="form-group">
                    <div class="input-group iconselectfromcontrol iconSelectIcon4" data-icon="it_wifi">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="mfd-icon it_wifi"></i></span>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button" data-toggle="modal"
                                    data-target="#selectModal" data-select="iconSelectIcon4">
                                select Icon button 4
                            </button>
                        </div>
                    </div>
                </div>
                <div class="input-group input-group-sm ml-2">
                <div class="input-group-prepend">
                    <span class="input-group-text alert-info ">value button 4</span>
                </div>
                    <input type="text" class="form-control form-control-sm btn4Value" value="90">
                </div>
            </form>
            <hr/>
            <!-- /icons, values -->
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select State
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;

    
    templates.widgets["linkbutton"] = `
    <div class="card widget linkbutton" data-widgettype="linkbutton">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">LinkButton</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">NONE</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
            <form>
				<div class="input-group input-group-sm mt-1 mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text alert-info ">Link to page:</span>
					</div>
                    <select class="form-control form-control-sm targetpage" onfocus="buildPageLinksSelect(this)">
                    </select>
				</div>
            </form>
        </div> <!-- /card-body -->
    </div>
    `;

    templates.widgets["compactModeStart"] = `
    <div class="card widget compactModeStart" data-widgettype="compactModeStart">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">compactModeStart</h5>
            <small class="settings ml-4">
                <span class="showInCompactMode">Compact-Mode</span><span class="hideIncompactMode">title:&nbsp;</span>
                <strong class="settings-title">NONE</strong>
                &nbsp;state:&nbsp;
                <strong class="settings-state">...</strong>
            </small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div><!-- /card-header -->
        <div class="card-body">
            <!-- title -->
            <div class="widget-title-form form">
                <!-- titleIcon, title -->
                <form class="form form-inline">
                    <div class="form-group">
                        <div class="input-group iconselectfromcontrol iconSelectTitle" data-icon="audio_play">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="mfd-icon audio_play"></i></span>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" data-toggle="modal"
                                        data-target="#selectModal" data-select="iconSelectTitle">
                                    select title-icon
                                </button>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control form-control-sm title ml-3" value="Set title ...">
                    <small class="form-text text-muted hidden">NONE to hide title</small>
                </form>
                <hr />
            </div>
            <!-- /titleIcon, title -->
        </div> <!-- /card-body -->
    </div>
    `;
    templates.widgets["compactModeEnd"] = `
    <div class="card widget compactModeEnd" data-widgettype="compactModeEnd">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">compactModeEnd</h5>
            <small class="settings ml-4">no extra settings</small>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-widget-copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button type="button" class="visibility-hidden btn btn-tool btn-widget-collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool btn-widget-remove">
                    <i class="fas fa-times"></i>
                </button>
            </div><!-- /card-tools -->
        </div>
    </div>
    `;
    return templates;
}