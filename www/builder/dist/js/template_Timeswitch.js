
    templates.widgets["timeswitch"] = `
    <div class="card widget timeswitch" data-widgettype="timeswitch">
        <div class="card-header">
            <i class="fas fa-arrows-alt handle"></i>
            <h5 class="card-title">timeSwitch</h5>
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
            <!-- type, actiontype -->
            <form class="hidden">
                <div class="form-group">
                    <label>type</label>
                    <select class="form-control timeSwitchType" onchange="timeSwitchSelectTypeChange(this);">
                        <option selected="selected" value="TimeTrigger">TimeTrigger</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>action-type</label>
                    <select class="form-control timeSwitchActionType" onchange="timeSwitchSelectTypeChange(this);">
                        <option selected="selected" value="OnOffStateAction">OnOffStateAction</option>
                    </select>
                </div>
            </form>
            <hr/>
            <!-- /type, actiontype -->
            <!-- states to switch -->
            <form class="formStatesToSwitch">
                <div class="input-group mb-3 statesToSwitchInputGroup">
                    <input type="text" class="form-control stateSelectToSwitch0" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelectToSwitch0">
                            select State to switch
                        </button>
                    </div>
                </div>
            </form>
            <a href="#" class="btn btn-primary btn-sm mb-4 timeSwitchAddStateToSwitch" role="button" onclick="timeSwitchAddStateToSwitch(this);">add state to switch</a>
            </hr>
            <!-- /states to switch -->
            <!-- values-->
            <form>
                <div class="input-group input-group-sm mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">text for on</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm onText" value="on">
                </div>
                <div class="input-group input-group-sm mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text alert-info">text for off</span>
                    </div>
                    <input type="text" class="form-control  form-control-sm offText" value="off">
                </div>
            </form>    
            <hr/>
            <!-- values -->
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control stateSelect" disabled="disabled" placeholder="state">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#selectModal"
                                data-select="stateSelect">
                            select data-State
                        </button>
                    </div>
                </div>
            </form>
            <blockquote class="blockquote">
                <p>BETA-TEST :: At the moment working with time-switch@2.x and boolean states only</p>
            </blockquote>
        </div> <!-- /card-body -->
    </div>
    `;

