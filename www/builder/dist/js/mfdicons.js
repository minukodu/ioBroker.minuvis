function getMfdIcons() {
    icons = [
        { title: "mfd-icon aa_noIcon", searchTerms: ["noIcon"] },
        { title: "mfd-icon audio_audio", searchTerms: ["audio", "audio"] },
        { title: "mfd-icon audio_desync", searchTerms: ["audio", "desync"] },
        { title: "mfd-icon audio_eject", searchTerms: ["audio", "eject"] },
        { title: "mfd-icon audio_eq", searchTerms: ["audio", "eq"] },
        { title: "mfd-icon audio_fade", searchTerms: ["audio", "fade"] },
        { title: "mfd-icon audio_ff", searchTerms: ["audio", "ff"] },
        { title: "mfd-icon audio_headphone", searchTerms: ["audio", "headphone"] },
        { title: "mfd-icon audio_loudness", searchTerms: ["audio", "loudness"] },
        { title: "mfd-icon audio_ls_51", searchTerms: ["audio", "ls", "51"] },
        {
            title: "mfd-icon audio_ls_51_center",
            searchTerms: ["audio", "ls", "51", "center"]
        },
        {
            title: "mfd-icon audio_ls_51_front",
            searchTerms: ["audio", "ls", "51", "front"]
        },
        {
            title: "mfd-icon audio_ls_51_rear",
            searchTerms: ["audio", "ls", "51", "rear"]
        },
        {
            title: "mfd-icon audio_ls_51_sub",
            searchTerms: ["audio", "ls", "51", "sub"]
        },
        { title: "mfd-icon audio_mic", searchTerms: ["audio", "mic"] },
        { title: "mfd-icon audio_mic_mute", searchTerms: ["audio", "mic", "mute"] },
        { title: "mfd-icon audio_pause", searchTerms: ["audio", "pause"] },
        { title: "mfd-icon audio_play", searchTerms: ["audio", "play"] },
        { title: "mfd-icon audio_playlist", searchTerms: ["audio", "playlist"] },
        { title: "mfd-icon audio_rec", searchTerms: ["audio", "rec"] },
        { title: "mfd-icon audio_repeat", searchTerms: ["audio", "repeat"] },
        { title: "mfd-icon audio_rew", searchTerms: ["audio", "rew"] },
        { title: "mfd-icon audio_shuffle", searchTerms: ["audio", "shuffle"] },
        { title: "mfd-icon audio_sound", searchTerms: ["audio", "sound"] },
        { title: "mfd-icon audio_stop", searchTerms: ["audio", "stop"] },
        { title: "mfd-icon audio_sync", searchTerms: ["audio", "sync"] },
        {
            title: "mfd-icon audio_volume_high",
            searchTerms: ["audio", "volume", "high"]
        },
        {
            title: "mfd-icon audio_volume_low",
            searchTerms: ["audio", "volume", "low"]
        },
        {
            title: "mfd-icon audio_volume_mid",
            searchTerms: ["audio", "volume", "mid"]
        },
        {
            title: "mfd-icon audio_volume_mute",
            searchTerms: ["audio", "volume", "mute"]
        },
        { title: "mfd-icon control_1", searchTerms: ["control", "1"] },
        { title: "mfd-icon control_2", searchTerms: ["control", "2"] },
        { title: "mfd-icon control_3", searchTerms: ["control", "3"] },
        {
            title: "mfd-icon control_3dot_hor_e",
            searchTerms: ["control", "3dot", "hor", "e"]
        },
        {
            title: "mfd-icon control_3dot_hor_f",
            searchTerms: ["control", "3dot", "hor", "f"]
        },
        {
            title: "mfd-icon control_3dot_hor_s",
            searchTerms: ["control", "3dot", "hor", "s"]
        },
        {
            title: "mfd-icon control_3dot_vert_e",
            searchTerms: ["control", "3dot", "vert", "e"]
        },
        {
            title: "mfd-icon control_3dot_vert_f",
            searchTerms: ["control", "3dot", "vert", "f"]
        },
        {
            title: "mfd-icon control_3dot_vert_s",
            searchTerms: ["control", "3dot", "vert", "s"]
        },
        { title: "mfd-icon control_4", searchTerms: ["control", "4"] },
        {
            title: "mfd-icon control_all_on_off",
            searchTerms: ["control", "all", "on", "off"]
        },
        {
            title: "mfd-icon control_arrow_down",
            searchTerms: ["control", "arrow", "down"]
        },
        {
            title: "mfd-icon control_arrow_downward",
            searchTerms: ["control", "arrow", "downward"]
        },
        {
            title: "mfd-icon control_arrow_down_left",
            searchTerms: ["control", "arrow", "down", "left"]
        },
        {
            title: "mfd-icon control_arrow_down_right",
            searchTerms: ["control", "arrow", "down", "right"]
        },
        {
            title: "mfd-icon control_arrow_left",
            searchTerms: ["control", "arrow", "left"]
        },
        {
            title: "mfd-icon control_arrow_leftward",
            searchTerms: ["control", "arrow", "leftward"]
        },
        {
            title: "mfd-icon control_arrow_right",
            searchTerms: ["control", "arrow", "right"]
        },
        {
            title: "mfd-icon control_arrow_rightward",
            searchTerms: ["control", "arrow", "rightward"]
        },
        {
            title: "mfd-icon control_arrow_turn_left",
            searchTerms: ["control", "arrow", "turn", "left"]
        },
        {
            title: "mfd-icon control_arrow_turn_right",
            searchTerms: ["control", "arrow", "turn", "right"]
        },
        {
            title: "mfd-icon control_arrow_up",
            searchTerms: ["control", "arrow", "up"]
        },
        {
            title: "mfd-icon control_arrow_upward",
            searchTerms: ["control", "arrow", "upward"]
        },
        {
            title: "mfd-icon control_arrow_up_left",
            searchTerms: ["control", "arrow", "up", "left"]
        },
        {
            title: "mfd-icon control_arrow_up_right",
            searchTerms: ["control", "arrow", "up", "right"]
        },
        {
            title: "mfd-icon control_building_2_s_all",
            searchTerms: ["control", "building", "2", "s", "all"]
        },
        {
            title: "mfd-icon control_building_2_s_dg",
            searchTerms: ["control", "building", "2", "s", "dg"]
        },
        {
            title: "mfd-icon control_building_2_s_eg",
            searchTerms: ["control", "building", "2", "s", "eg"]
        },
        {
            title: "mfd-icon control_building_2_s_int_all",
            searchTerms: ["control", "building", "2", "s", "int", "all"]
        },
        {
            title: "mfd-icon control_building_2_s_int_dg",
            searchTerms: ["control", "building", "2", "s", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_2_s_int_eg",
            searchTerms: ["control", "building", "2", "s", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_2_s_int_kg",
            searchTerms: ["control", "building", "2", "s", "int", "kg"]
        },
        {
            title: "mfd-icon control_building_2_s_kg",
            searchTerms: ["control", "building", "2", "s", "kg"]
        },
        {
            title: "mfd-icon control_building_all",
            searchTerms: ["control", "building", "all"]
        },
        {
            title: "mfd-icon control_building_control",
            searchTerms: ["control", "building", "control"]
        },
        {
            title: "mfd-icon control_building_dg",
            searchTerms: ["control", "building", "dg"]
        },
        {
            title: "mfd-icon control_building_edg_all",
            searchTerms: ["control", "building", "edg", "all"]
        },
        {
            title: "mfd-icon control_building_edg_dg",
            searchTerms: ["control", "building", "edg", "dg"]
        },
        {
            title: "mfd-icon control_building_edg_eg",
            searchTerms: ["control", "building", "edg", "eg"]
        },
        {
            title: "mfd-icon control_building_edg_int_all",
            searchTerms: ["control", "building", "edg", "int", "all"]
        },
        {
            title: "mfd-icon control_building_edg_int_dg",
            searchTerms: ["control", "building", "edg", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_edg_int_eg",
            searchTerms: ["control", "building", "edg", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_edg_int_kg",
            searchTerms: ["control", "building", "edg", "int", "kg"]
        },
        {
            title: "mfd-icon control_building_edg_kg",
            searchTerms: ["control", "building", "edg", "kg"]
        },
        {
            title: "mfd-icon control_building_eg",
            searchTerms: ["control", "building", "eg"]
        },
        {
            title: "mfd-icon control_building_empty",
            searchTerms: ["control", "building", "empty"]
        },
        {
            title: "mfd-icon control_building_filled",
            searchTerms: ["control", "building", "filled"]
        },
        {
            title: "mfd-icon control_building_flat",
            searchTerms: ["control", "building", "flat"]
        },
        {
            title: "mfd-icon control_building_flat_filled",
            searchTerms: ["control", "building", "flat", "filled"]
        },
        {
            title: "mfd-icon control_building_flat_okg_all",
            searchTerms: ["control", "building", "flat", "okg", "all"]
        },
        {
            title: "mfd-icon control_building_flat_okg_eg",
            searchTerms: ["control", "building", "flat", "okg", "eg"]
        },
        {
            title: "mfd-icon control_building_flat_okg_og",
            searchTerms: ["control", "building", "flat", "okg", "og"]
        },
        {
            title: "mfd-icon control_building_flat_s",
            searchTerms: ["control", "building", "flat", "s"]
        },
        {
            title: "mfd-icon control_building_flat_s_filled",
            searchTerms: ["control", "building", "flat", "s", "filled"]
        },
        {
            title: "mfd-icon control_building_flat_s_okg_all",
            searchTerms: ["control", "building", "flat", "s", "okg", "all"]
        },
        {
            title: "mfd-icon control_building_flat_s_okg_eg",
            searchTerms: ["control", "building", "flat", "s", "okg", "eg"]
        },
        {
            title: "mfd-icon control_building_flat_s_okg_og",
            searchTerms: ["control", "building", "flat", "s", "okg", "og"]
        },
        {
            title: "mfd-icon control_building_int_all",
            searchTerms: ["control", "building", "int", "all"]
        },
        {
            title: "mfd-icon control_building_int_dg",
            searchTerms: ["control", "building", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_int_eg",
            searchTerms: ["control", "building", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_int_kg",
            searchTerms: ["control", "building", "int", "kg"]
        },
        {
            title: "mfd-icon control_building_int_og",
            searchTerms: ["control", "building", "int", "og"]
        },
        {
            title: "mfd-icon control_building_kg",
            searchTerms: ["control", "building", "kg"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_all",
            searchTerms: ["control", "building", "modern02", "okg", "all"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_dg",
            searchTerms: ["control", "building", "modern02", "okg", "dg"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_eg",
            searchTerms: ["control", "building", "modern02", "okg", "eg"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_int_all",
            searchTerms: ["control", "building", "modern02", "okg", "int", "all"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_int_dg",
            searchTerms: ["control", "building", "modern02", "okg", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_int_eg",
            searchTerms: ["control", "building", "modern02", "okg", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_int_og",
            searchTerms: ["control", "building", "modern02", "okg", "int", "og"]
        },
        {
            title: "mfd-icon control_building_modern02_okg_og",
            searchTerms: ["control", "building", "modern02", "okg", "og"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_all",
            searchTerms: ["control", "building", "modern", "s", "2og", "all"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_dg",
            searchTerms: ["control", "building", "modern", "s", "2og", "dg"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_eg",
            searchTerms: ["control", "building", "modern", "s", "2og", "eg"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_int_all",
            searchTerms: ["control", "building", "modern", "s", "2og", "int", "all"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_int_dg",
            searchTerms: ["control", "building", "modern", "s", "2og", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_int_eg",
            searchTerms: ["control", "building", "modern", "s", "2og", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_int_kg",
            searchTerms: ["control", "building", "modern", "s", "2og", "int", "kg"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_int_og1",
            searchTerms: ["control", "building", "modern", "s", "2og", "int", "og1"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_int_og2",
            searchTerms: ["control", "building", "modern", "s", "2og", "int", "og2"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_kg",
            searchTerms: ["control", "building", "modern", "s", "2og", "kg"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_og1",
            searchTerms: ["control", "building", "modern", "s", "2og", "og1"]
        },
        {
            title: "mfd-icon control_building_modern_s_2og_og2",
            searchTerms: ["control", "building", "modern", "s", "2og", "og2"]
        },
        {
            title: "mfd-icon control_building_modern_s_all",
            searchTerms: ["control", "building", "modern", "s", "all"]
        },
        {
            title: "mfd-icon control_building_modern_s_dg",
            searchTerms: ["control", "building", "modern", "s", "dg"]
        },
        {
            title: "mfd-icon control_building_modern_s_eg",
            searchTerms: ["control", "building", "modern", "s", "eg"]
        },
        {
            title: "mfd-icon control_building_modern_s_int_all",
            searchTerms: ["control", "building", "modern", "s", "int", "all"]
        },
        {
            title: "mfd-icon control_building_modern_s_int_dg",
            searchTerms: ["control", "building", "modern", "s", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_modern_s_int_eg",
            searchTerms: ["control", "building", "modern", "s", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_modern_s_int_kg",
            searchTerms: ["control", "building", "modern", "s", "int", "kg"]
        },
        {
            title: "mfd-icon control_building_modern_s_int_og",
            searchTerms: ["control", "building", "modern", "s", "int", "og"]
        },
        {
            title: "mfd-icon control_building_modern_s_kg",
            searchTerms: ["control", "building", "modern", "s", "kg"]
        },
        {
            title: "mfd-icon control_building_modern_s_og",
            searchTerms: ["control", "building", "modern", "s", "og"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_all",
            searchTerms: ["control", "building", "modern", "s", "okg", "all"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_dg",
            searchTerms: ["control", "building", "modern", "s", "okg", "dg"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_eg",
            searchTerms: ["control", "building", "modern", "s", "okg", "eg"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_int_all",
            searchTerms: ["control", "building", "modern", "s", "okg", "int", "all"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_int_dg",
            searchTerms: ["control", "building", "modern", "s", "okg", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_int_eg",
            searchTerms: ["control", "building", "modern", "s", "okg", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_int_og",
            searchTerms: ["control", "building", "modern", "s", "okg", "int", "og"]
        },
        {
            title: "mfd-icon control_building_modern_s_okg_og",
            searchTerms: ["control", "building", "modern", "s", "okg", "og"]
        },
        {
            title: "mfd-icon control_building_og",
            searchTerms: ["control", "building", "og"]
        },
        {
            title: "mfd-icon control_building_outside",
            searchTerms: ["control", "building", "outside"]
        },
        {
            title: "mfd-icon control_building_s_all",
            searchTerms: ["control", "building", "s", "all"]
        },
        {
            title: "mfd-icon control_building_s_dg",
            searchTerms: ["control", "building", "s", "dg"]
        },
        {
            title: "mfd-icon control_building_s_eg",
            searchTerms: ["control", "building", "s", "eg"]
        },
        {
            title: "mfd-icon control_building_s_int_all",
            searchTerms: ["control", "building", "s", "int", "all"]
        },
        {
            title: "mfd-icon control_building_s_int_dg",
            searchTerms: ["control", "building", "s", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_s_int_eg",
            searchTerms: ["control", "building", "s", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_s_int_kg",
            searchTerms: ["control", "building", "s", "int", "kg"]
        },
        {
            title: "mfd-icon control_building_s_int_og",
            searchTerms: ["control", "building", "s", "int", "og"]
        },
        {
            title: "mfd-icon control_building_s_kg",
            searchTerms: ["control", "building", "s", "kg"]
        },
        {
            title: "mfd-icon control_building_s_og",
            searchTerms: ["control", "building", "s", "og"]
        },
        {
            title: "mfd-icon control_building_s_okg_all",
            searchTerms: ["control", "building", "s", "okg", "all"]
        },
        {
            title: "mfd-icon control_building_s_okg_dg",
            searchTerms: ["control", "building", "s", "okg", "dg"]
        },
        {
            title: "mfd-icon control_building_s_okg_eg",
            searchTerms: ["control", "building", "s", "okg", "eg"]
        },
        {
            title: "mfd-icon control_building_s_okg_int_all",
            searchTerms: ["control", "building", "s", "okg", "int", "all"]
        },
        {
            title: "mfd-icon control_building_s_okg_int_dg",
            searchTerms: ["control", "building", "s", "okg", "int", "dg"]
        },
        {
            title: "mfd-icon control_building_s_okg_int_eg",
            searchTerms: ["control", "building", "s", "okg", "int", "eg"]
        },
        {
            title: "mfd-icon control_building_s_okg_int_og",
            searchTerms: ["control", "building", "s", "okg", "int", "og"]
        },
        {
            title: "mfd-icon control_building_s_okg_og",
            searchTerms: ["control", "building", "s", "okg", "og"]
        },
        { title: "mfd-icon control_cancel", searchTerms: ["control", "cancel"] },
        {
            title: "mfd-icon control_centr_arrow_down",
            searchTerms: ["control", "centr", "arrow", "down"]
        },
        {
            title: "mfd-icon control_centr_arrow_down_left",
            searchTerms: ["control", "centr", "arrow", "down", "left"]
        },
        {
            title: "mfd-icon control_centr_arrow_down_right",
            searchTerms: ["control", "centr", "arrow", "down", "right"]
        },
        {
            title: "mfd-icon control_centr_arrow_left",
            searchTerms: ["control", "centr", "arrow", "left"]
        },
        {
            title: "mfd-icon control_centr_arrow_right",
            searchTerms: ["control", "centr", "arrow", "right"]
        },
        {
            title: "mfd-icon control_centr_arrow_up",
            searchTerms: ["control", "centr", "arrow", "up"]
        },
        {
            title: "mfd-icon control_centr_arrow_up_left",
            searchTerms: ["control", "centr", "arrow", "up", "left"]
        },
        {
            title: "mfd-icon control_centr_arrow_up_right",
            searchTerms: ["control", "centr", "arrow", "up", "right"]
        },
        {
            title: "mfd-icon control_circuit_breaker_off",
            searchTerms: ["control", "circuit", "breaker", "off"]
        },
        {
            title: "mfd-icon control_circuit_breaker_on",
            searchTerms: ["control", "circuit", "breaker", "on"]
        },
        { title: "mfd-icon control_clear", searchTerms: ["control", "clear"] },
        {
            title: "mfd-icon control_fault_current_circuit_breaker_off",
            searchTerms: ["control", "fault", "current", "circuit", "breaker", "off"]
        },
        {
            title: "mfd-icon control_fault_current_circuit_breaker_on",
            searchTerms: ["control", "fault", "current", "circuit", "breaker", "on"]
        },
        {
            title: "mfd-icon control_hamburger_e",
            searchTerms: ["control", "hamburger", "e"]
        },
        {
            title: "mfd-icon control_hamburger_f",
            searchTerms: ["control", "hamburger", "f"]
        },
        {
            title: "mfd-icon control_hamburger_s",
            searchTerms: ["control", "hamburger", "s"]
        },
        { title: "mfd-icon control_home", searchTerms: ["control", "home"] },
        { title: "mfd-icon control_minus", searchTerms: ["control", "minus"] },
        { title: "mfd-icon control_ok", searchTerms: ["control", "ok"] },
        { title: "mfd-icon control_on_off", searchTerms: ["control", "on", "off"] },
        {
            title: "mfd-icon control_outside_on_off",
            searchTerms: ["control", "outside", "on", "off"]
        },
        { title: "mfd-icon control_plus", searchTerms: ["control", "plus"] },
        { title: "mfd-icon control_reboot", searchTerms: ["control", "reboot"] },
        { title: "mfd-icon control_reload", searchTerms: ["control", "reload"] },
        { title: "mfd-icon control_reset", searchTerms: ["control", "reset"] },
        { title: "mfd-icon control_return", searchTerms: ["control", "return"] },
        { title: "mfd-icon control_standby", searchTerms: ["control", "standby"] },
        {
            title: "mfd-icon control_switch_1",
            searchTerms: ["control", "switch", "1"]
        },
        {
            title: "mfd-icon control_switch_3",
            searchTerms: ["control", "switch", "3"]
        },
        {
            title: "mfd-icon control_switch_m_4",
            searchTerms: ["control", "switch", "m", "4"]
        },
        {
            title: "mfd-icon control_switch_m_8",
            searchTerms: ["control", "switch", "m", "8"]
        },
        { title: "mfd-icon control_x", searchTerms: ["control", "x"] },
        {
            title: "mfd-icon control_zoom_in",
            searchTerms: ["control", "zoom", "in"]
        },
        {
            title: "mfd-icon control_zoom_out",
            searchTerms: ["control", "zoom", "out"]
        },
        { title: "mfd-icon edit_collapse", searchTerms: ["edit", "collapse"] },
        { title: "mfd-icon edit_copy", searchTerms: ["edit", "copy"] },
        { title: "mfd-icon edit_cut", searchTerms: ["edit", "cut"] },
        { title: "mfd-icon edit_delete", searchTerms: ["edit", "delete"] },
        { title: "mfd-icon edit_expand", searchTerms: ["edit", "expand"] },
        { title: "mfd-icon edit_favorites", searchTerms: ["edit", "favorites"] },
        {
            title: "mfd-icon edit_input_numeric",
            searchTerms: ["edit", "input", "numeric"]
        },
        { title: "mfd-icon edit_numeric_0", searchTerms: ["edit", "numeric", "0"] },
        { title: "mfd-icon edit_numeric_1", searchTerms: ["edit", "numeric", "1"] },
        { title: "mfd-icon edit_numeric_2", searchTerms: ["edit", "numeric", "2"] },
        { title: "mfd-icon edit_numeric_3", searchTerms: ["edit", "numeric", "3"] },
        { title: "mfd-icon edit_numeric_4", searchTerms: ["edit", "numeric", "4"] },
        { title: "mfd-icon edit_numeric_5", searchTerms: ["edit", "numeric", "5"] },
        { title: "mfd-icon edit_numeric_6", searchTerms: ["edit", "numeric", "6"] },
        { title: "mfd-icon edit_numeric_7", searchTerms: ["edit", "numeric", "7"] },
        { title: "mfd-icon edit_numeric_8", searchTerms: ["edit", "numeric", "8"] },
        { title: "mfd-icon edit_numeric_9", searchTerms: ["edit", "numeric", "9"] },
        { title: "mfd-icon edit_open", searchTerms: ["edit", "open"] },
        { title: "mfd-icon edit_paste", searchTerms: ["edit", "paste"] },
        { title: "mfd-icon edit_save", searchTerms: ["edit", "save"] },
        { title: "mfd-icon edit_settings", searchTerms: ["edit", "settings"] },
        { title: "mfd-icon edit_sort", searchTerms: ["edit", "sort"] },
        { title: "mfd-icon fts_awning", searchTerms: ["fts", "awning"] },
        { title: "mfd-icon fts_blade_arc", searchTerms: ["fts", "blade", "arc"] },
        {
            title: "mfd-icon fts_blade_arc_-10",
            searchTerms: ["fts", "blade", "arc", "-10"]
        },
        {
            title: "mfd-icon fts_blade_arc_-20",
            searchTerms: ["fts", "blade", "arc", "-20"]
        },
        {
            title: "mfd-icon fts_blade_arc_-30",
            searchTerms: ["fts", "blade", "arc", "-30"]
        },
        {
            title: "mfd-icon fts_blade_arc_-40",
            searchTerms: ["fts", "blade", "arc", "-40"]
        },
        {
            title: "mfd-icon fts_blade_arc_-50",
            searchTerms: ["fts", "blade", "arc", "-50"]
        },
        {
            title: "mfd-icon fts_blade_arc_-60",
            searchTerms: ["fts", "blade", "arc", "-60"]
        },
        {
            title: "mfd-icon fts_blade_arc_-70",
            searchTerms: ["fts", "blade", "arc", "-70"]
        },
        {
            title: "mfd-icon fts_blade_arc_00",
            searchTerms: ["fts", "blade", "arc", "00"]
        },
        {
            title: "mfd-icon fts_blade_arc_10",
            searchTerms: ["fts", "blade", "arc", "10"]
        },
        {
            title: "mfd-icon fts_blade_arc_100",
            searchTerms: ["fts", "blade", "arc", "100"]
        },
        {
            title: "mfd-icon fts_blade_arc_20",
            searchTerms: ["fts", "blade", "arc", "20"]
        },
        {
            title: "mfd-icon fts_blade_arc_30",
            searchTerms: ["fts", "blade", "arc", "30"]
        },
        {
            title: "mfd-icon fts_blade_arc_40",
            searchTerms: ["fts", "blade", "arc", "40"]
        },
        {
            title: "mfd-icon fts_blade_arc_50",
            searchTerms: ["fts", "blade", "arc", "50"]
        },
        {
            title: "mfd-icon fts_blade_arc_60",
            searchTerms: ["fts", "blade", "arc", "60"]
        },
        {
            title: "mfd-icon fts_blade_arc_70",
            searchTerms: ["fts", "blade", "arc", "70"]
        },
        {
            title: "mfd-icon fts_blade_arc_80",
            searchTerms: ["fts", "blade", "arc", "80"]
        },
        {
            title: "mfd-icon fts_blade_arc_90",
            searchTerms: ["fts", "blade", "arc", "90"]
        },
        {
            title: "mfd-icon fts_blade_arc_automatic",
            searchTerms: ["fts", "blade", "arc", "automatic"]
        },
        {
            title: "mfd-icon fts_blade_arc_close_00",
            searchTerms: ["fts", "blade", "arc", "close", "00"]
        },
        {
            title: "mfd-icon fts_blade_arc_close_100",
            searchTerms: ["fts", "blade", "arc", "close", "100"]
        },
        {
            title: "mfd-icon fts_blade_arc_close_50",
            searchTerms: ["fts", "blade", "arc", "close", "50"]
        },
        {
            title: "mfd-icon fts_blade_arc_sun",
            searchTerms: ["fts", "blade", "arc", "sun"]
        },
        { title: "mfd-icon fts_blade_s", searchTerms: ["fts", "blade", "s"] },
        {
            title: "mfd-icon fts_blade_s_00",
            searchTerms: ["fts", "blade", "s", "00"]
        },
        {
            title: "mfd-icon fts_blade_s_10",
            searchTerms: ["fts", "blade", "s", "10"]
        },
        {
            title: "mfd-icon fts_blade_s_100",
            searchTerms: ["fts", "blade", "s", "100"]
        },
        {
            title: "mfd-icon fts_blade_s_20",
            searchTerms: ["fts", "blade", "s", "20"]
        },
        {
            title: "mfd-icon fts_blade_s_30",
            searchTerms: ["fts", "blade", "s", "30"]
        },
        {
            title: "mfd-icon fts_blade_s_40",
            searchTerms: ["fts", "blade", "s", "40"]
        },
        {
            title: "mfd-icon fts_blade_s_50",
            searchTerms: ["fts", "blade", "s", "50"]
        },
        {
            title: "mfd-icon fts_blade_s_60",
            searchTerms: ["fts", "blade", "s", "60"]
        },
        {
            title: "mfd-icon fts_blade_s_70",
            searchTerms: ["fts", "blade", "s", "70"]
        },
        {
            title: "mfd-icon fts_blade_s_80",
            searchTerms: ["fts", "blade", "s", "80"]
        },
        {
            title: "mfd-icon fts_blade_s_90",
            searchTerms: ["fts", "blade", "s", "90"]
        },
        {
            title: "mfd-icon fts_blade_s_automatic",
            searchTerms: ["fts", "blade", "s", "automatic"]
        },
        {
            title: "mfd-icon fts_blade_s_sun",
            searchTerms: ["fts", "blade", "s", "sun"]
        },
        { title: "mfd-icon fts_blade_z", searchTerms: ["fts", "blade", "z"] },
        {
            title: "mfd-icon fts_blade_z_00",
            searchTerms: ["fts", "blade", "z", "00"]
        },
        {
            title: "mfd-icon fts_blade_z_10",
            searchTerms: ["fts", "blade", "z", "10"]
        },
        {
            title: "mfd-icon fts_blade_z_100",
            searchTerms: ["fts", "blade", "z", "100"]
        },
        {
            title: "mfd-icon fts_blade_z_20",
            searchTerms: ["fts", "blade", "z", "20"]
        },
        {
            title: "mfd-icon fts_blade_z_30",
            searchTerms: ["fts", "blade", "z", "30"]
        },
        {
            title: "mfd-icon fts_blade_z_40",
            searchTerms: ["fts", "blade", "z", "40"]
        },
        {
            title: "mfd-icon fts_blade_z_50",
            searchTerms: ["fts", "blade", "z", "50"]
        },
        {
            title: "mfd-icon fts_blade_z_60",
            searchTerms: ["fts", "blade", "z", "60"]
        },
        {
            title: "mfd-icon fts_blade_z_70",
            searchTerms: ["fts", "blade", "z", "70"]
        },
        {
            title: "mfd-icon fts_blade_z_80",
            searchTerms: ["fts", "blade", "z", "80"]
        },
        {
            title: "mfd-icon fts_blade_z_90",
            searchTerms: ["fts", "blade", "z", "90"]
        },
        {
            title: "mfd-icon fts_blade_z_automatic",
            searchTerms: ["fts", "blade", "z", "automatic"]
        },
        {
            title: "mfd-icon fts_blade_z_sun",
            searchTerms: ["fts", "blade", "z", "sun"]
        },
        { title: "mfd-icon fts_door", searchTerms: ["fts", "door"] },
        {
            title: "mfd-icon fts_door_locked",
            searchTerms: ["fts", "door", "locked"]
        },
        { title: "mfd-icon fts_door_open", searchTerms: ["fts", "door", "open"] },
        {
            title: "mfd-icon fts_door_opener_key",
            searchTerms: ["fts", "door", "opener", "key"]
        },
        { title: "mfd-icon fts_door_slide", searchTerms: ["fts", "door", "slide"] },
        {
            title: "mfd-icon fts_door_slide_2w",
            searchTerms: ["fts", "door", "slide", "2w"]
        },
        {
            title: "mfd-icon fts_door_slide_2w_open_l",
            searchTerms: ["fts", "door", "slide", "2w", "open", "l"]
        },
        {
            title: "mfd-icon fts_door_slide_2w_open_lr",
            searchTerms: ["fts", "door", "slide", "2w", "open", "lr"]
        },
        {
            title: "mfd-icon fts_door_slide_2w_open_r",
            searchTerms: ["fts", "door", "slide", "2w", "open", "r"]
        },
        {
            title: "mfd-icon fts_door_slide_m",
            searchTerms: ["fts", "door", "slide", "m"]
        },
        {
            title: "mfd-icon fts_door_slide_open",
            searchTerms: ["fts", "door", "slide", "open"]
        },
        {
            title: "mfd-icon fts_door_slide_open_m",
            searchTerms: ["fts", "door", "slide", "open", "m"]
        },
        { title: "mfd-icon fts_door_tilt", searchTerms: ["fts", "door", "tilt"] },
        {
            title: "mfd-icon fts_door_unlocked",
            searchTerms: ["fts", "door", "unlocked"]
        },
        {
            title: "mfd-icon fts_entrance_boom_closed",
            searchTerms: ["fts", "entrance", "boom", "closed"]
        },
        {
            title: "mfd-icon fts_entrance_boom_open",
            searchTerms: ["fts", "entrance", "boom", "open"]
        },
        { title: "mfd-icon fts_frontdoor", searchTerms: ["fts", "frontdoor"] },
        { title: "mfd-icon fts_garage", searchTerms: ["fts", "garage"] },
        {
            title: "mfd-icon fts_garage_door_10",
            searchTerms: ["fts", "garage", "door", "10"]
        },
        {
            title: "mfd-icon fts_garage_door_100",
            searchTerms: ["fts", "garage", "door", "100"]
        },
        {
            title: "mfd-icon fts_garage_door_20",
            searchTerms: ["fts", "garage", "door", "20"]
        },
        {
            title: "mfd-icon fts_garage_door_30",
            searchTerms: ["fts", "garage", "door", "30"]
        },
        {
            title: "mfd-icon fts_garage_door_40",
            searchTerms: ["fts", "garage", "door", "40"]
        },
        {
            title: "mfd-icon fts_garage_door_50",
            searchTerms: ["fts", "garage", "door", "50"]
        },
        {
            title: "mfd-icon fts_garage_door_60",
            searchTerms: ["fts", "garage", "door", "60"]
        },
        {
            title: "mfd-icon fts_garage_door_70",
            searchTerms: ["fts", "garage", "door", "70"]
        },
        {
            title: "mfd-icon fts_garage_door_80",
            searchTerms: ["fts", "garage", "door", "80"]
        },
        {
            title: "mfd-icon fts_garage_door_90",
            searchTerms: ["fts", "garage", "door", "90"]
        },
        { title: "mfd-icon fts_light_dome", searchTerms: ["fts", "light", "dome"] },
        {
            title: "mfd-icon fts_light_dome_open",
            searchTerms: ["fts", "light", "dome", "open"]
        },
        { title: "mfd-icon fts_shutter", searchTerms: ["fts", "shutter"] },
        { title: "mfd-icon fts_shutter_10", searchTerms: ["fts", "shutter", "10"] },
        {
            title: "mfd-icon fts_shutter_100",
            searchTerms: ["fts", "shutter", "100"]
        },
        { title: "mfd-icon fts_shutter_20", searchTerms: ["fts", "shutter", "20"] },
        { title: "mfd-icon fts_shutter_30", searchTerms: ["fts", "shutter", "30"] },
        { title: "mfd-icon fts_shutter_40", searchTerms: ["fts", "shutter", "40"] },
        { title: "mfd-icon fts_shutter_50", searchTerms: ["fts", "shutter", "50"] },
        { title: "mfd-icon fts_shutter_60", searchTerms: ["fts", "shutter", "60"] },
        { title: "mfd-icon fts_shutter_70", searchTerms: ["fts", "shutter", "70"] },
        { title: "mfd-icon fts_shutter_80", searchTerms: ["fts", "shutter", "80"] },
        { title: "mfd-icon fts_shutter_90", searchTerms: ["fts", "shutter", "90"] },
        {
            title: "mfd-icon fts_shutter_attention",
            searchTerms: ["fts", "shutter", "attention"]
        },
        {
            title: "mfd-icon fts_shutter_automatic",
            searchTerms: ["fts", "shutter", "automatic"]
        },
        {
            title: "mfd-icon fts_shutter_down",
            searchTerms: ["fts", "shutter", "down"]
        },
        {
            title: "mfd-icon fts_shutter_jam",
            searchTerms: ["fts", "shutter", "jam"]
        },
        {
            title: "mfd-icon fts_shutter_locked",
            searchTerms: ["fts", "shutter", "locked"]
        },
        {
            title: "mfd-icon fts_shutter_manual",
            searchTerms: ["fts", "shutter", "manual"]
        },
        {
            title: "mfd-icon fts_shutter_stop",
            searchTerms: ["fts", "shutter", "stop"]
        },
        {
            title: "mfd-icon fts_shutter_unlocked",
            searchTerms: ["fts", "shutter", "unlocked"]
        },
        { title: "mfd-icon fts_shutter_up", searchTerms: ["fts", "shutter", "up"] },
        {
            title: "mfd-icon fts_shutter_vert",
            searchTerms: ["fts", "shutter", "vert"]
        },
        {
            title: "mfd-icon fts_shutter_vert_10",
            searchTerms: ["fts", "shutter", "vert", "10"]
        },
        {
            title: "mfd-icon fts_shutter_vert_100",
            searchTerms: ["fts", "shutter", "vert", "100"]
        },
        {
            title: "mfd-icon fts_shutter_vert_20",
            searchTerms: ["fts", "shutter", "vert", "20"]
        },
        {
            title: "mfd-icon fts_shutter_vert_30",
            searchTerms: ["fts", "shutter", "vert", "30"]
        },
        {
            title: "mfd-icon fts_shutter_vert_40",
            searchTerms: ["fts", "shutter", "vert", "40"]
        },
        {
            title: "mfd-icon fts_shutter_vert_50",
            searchTerms: ["fts", "shutter", "vert", "50"]
        },
        {
            title: "mfd-icon fts_shutter_vert_60",
            searchTerms: ["fts", "shutter", "vert", "60"]
        },
        {
            title: "mfd-icon fts_shutter_vert_70",
            searchTerms: ["fts", "shutter", "vert", "70"]
        },
        {
            title: "mfd-icon fts_shutter_vert_80",
            searchTerms: ["fts", "shutter", "vert", "80"]
        },
        {
            title: "mfd-icon fts_shutter_vert_90",
            searchTerms: ["fts", "shutter", "vert", "90"]
        },
        {
            title: "mfd-icon fts_shutter_vert_automatic",
            searchTerms: ["fts", "shutter", "vert", "automatic"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_00",
            searchTerms: ["fts", "shutter", "vert", "blade", "00"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_10",
            searchTerms: ["fts", "shutter", "vert", "blade", "10"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_100",
            searchTerms: ["fts", "shutter", "vert", "blade", "100"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_20",
            searchTerms: ["fts", "shutter", "vert", "blade", "20"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_30",
            searchTerms: ["fts", "shutter", "vert", "blade", "30"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_40",
            searchTerms: ["fts", "shutter", "vert", "blade", "40"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_50",
            searchTerms: ["fts", "shutter", "vert", "blade", "50"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_60",
            searchTerms: ["fts", "shutter", "vert", "blade", "60"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_70",
            searchTerms: ["fts", "shutter", "vert", "blade", "70"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_80",
            searchTerms: ["fts", "shutter", "vert", "blade", "80"]
        },
        {
            title: "mfd-icon fts_shutter_vert_blade_90",
            searchTerms: ["fts", "shutter", "vert", "blade", "90"]
        },
        {
            title: "mfd-icon fts_shutter_vert_down",
            searchTerms: ["fts", "shutter", "vert", "down"]
        },
        {
            title: "mfd-icon fts_shutter_vert_manual",
            searchTerms: ["fts", "shutter", "vert", "manual"]
        },
        {
            title: "mfd-icon fts_shutter_vert_up",
            searchTerms: ["fts", "shutter", "vert", "up"]
        },
        {
            title: "mfd-icon fts_sliding_gate",
            searchTerms: ["fts", "sliding", "gate"]
        },
        {
            title: "mfd-icon fts_sliding_gate_closed",
            searchTerms: ["fts", "sliding", "gate", "closed"]
        },
        {
            title: "mfd-icon fts_sliding_gate_l",
            searchTerms: ["fts", "sliding", "gate", "l"]
        },
        {
            title: "mfd-icon fts_sliding_gate_l_closed",
            searchTerms: ["fts", "sliding", "gate", "l", "closed"]
        },
        {
            title: "mfd-icon fts_sliding_gate_l_open",
            searchTerms: ["fts", "sliding", "gate", "l", "open"]
        },
        {
            title: "mfd-icon fts_sliding_gate_open",
            searchTerms: ["fts", "sliding", "gate", "open"]
        },
        { title: "mfd-icon fts_sunblind", searchTerms: ["fts", "sunblind"] },
        {
            title: "mfd-icon fts_sunblind_closed",
            searchTerms: ["fts", "sunblind", "closed"]
        },
        {
            title: "mfd-icon fts_sunblind_volant",
            searchTerms: ["fts", "sunblind", "volant"]
        },
        {
            title: "mfd-icon fts_umbrella_offset_closed",
            searchTerms: ["fts", "umbrella", "offset", "closed"]
        },
        {
            title: "mfd-icon fts_umbrella_offset_open",
            searchTerms: ["fts", "umbrella", "offset", "open"]
        },
        { title: "mfd-icon fts_window_1w", searchTerms: ["fts", "window", "1w"] },
        {
            title: "mfd-icon fts_window_1w_locked",
            searchTerms: ["fts", "window", "1w", "locked"]
        },
        {
            title: "mfd-icon fts_window_1w_open",
            searchTerms: ["fts", "window", "1w", "open"]
        },
        {
            title: "mfd-icon fts_window_1w_tilt",
            searchTerms: ["fts", "window", "1w", "tilt"]
        },
        {
            title: "mfd-icon fts_window_1w_unlocked",
            searchTerms: ["fts", "window", "1w", "unlocked"]
        },
        { title: "mfd-icon fts_window_2w", searchTerms: ["fts", "window", "2w"] },
        {
            title: "mfd-icon fts_window_2w_open",
            searchTerms: ["fts", "window", "2w", "open"]
        },
        {
            title: "mfd-icon fts_window_2w_open_l",
            searchTerms: ["fts", "window", "2w", "open", "l"]
        },
        {
            title: "mfd-icon fts_window_2w_open_lr",
            searchTerms: ["fts", "window", "2w", "open", "lr"]
        },
        {
            title: "mfd-icon fts_window_2w_open_l_tilt_r",
            searchTerms: ["fts", "window", "2w", "open", "l", "tilt", "r"]
        },
        {
            title: "mfd-icon fts_window_2w_open_r",
            searchTerms: ["fts", "window", "2w", "open", "r"]
        },
        {
            title: "mfd-icon fts_window_2w_tilt",
            searchTerms: ["fts", "window", "2w", "tilt"]
        },
        {
            title: "mfd-icon fts_window_2w_tilt_l",
            searchTerms: ["fts", "window", "2w", "tilt", "l"]
        },
        {
            title: "mfd-icon fts_window_2w_tilt_lr",
            searchTerms: ["fts", "window", "2w", "tilt", "lr"]
        },
        {
            title: "mfd-icon fts_window_2w_tilt_l_open_r",
            searchTerms: ["fts", "window", "2w", "tilt", "l", "open", "r"]
        },
        {
            title: "mfd-icon fts_window_2w_tilt_r",
            searchTerms: ["fts", "window", "2w", "tilt", "r"]
        },
        {
            title: "mfd-icon fts_window_louvre",
            searchTerms: ["fts", "window", "louvre"]
        },
        {
            title: "mfd-icon fts_window_louvre_open",
            searchTerms: ["fts", "window", "louvre", "open"]
        },
        {
            title: "mfd-icon fts_window_roof",
            searchTerms: ["fts", "window", "roof"]
        },
        {
            title: "mfd-icon fts_window_roof_open_1",
            searchTerms: ["fts", "window", "roof", "open", "1"]
        },
        {
            title: "mfd-icon fts_window_roof_open_2",
            searchTerms: ["fts", "window", "roof", "open", "2"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter",
            searchTerms: ["fts", "window", "roof", "shutter"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_10",
            searchTerms: ["fts", "window", "roof", "shutter", "10"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_100",
            searchTerms: ["fts", "window", "roof", "shutter", "100"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_20",
            searchTerms: ["fts", "window", "roof", "shutter", "20"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_30",
            searchTerms: ["fts", "window", "roof", "shutter", "30"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_40",
            searchTerms: ["fts", "window", "roof", "shutter", "40"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_50",
            searchTerms: ["fts", "window", "roof", "shutter", "50"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_60",
            searchTerms: ["fts", "window", "roof", "shutter", "60"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_70",
            searchTerms: ["fts", "window", "roof", "shutter", "70"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_80",
            searchTerms: ["fts", "window", "roof", "shutter", "80"]
        },
        {
            title: "mfd-icon fts_window_roof_shutter_90",
            searchTerms: ["fts", "window", "roof", "shutter", "90"]
        },
        {
            title: "mfd-icon fts_yard_gate_2w",
            searchTerms: ["fts", "yard", "gate", "2w"]
        },
        {
            title: "mfd-icon fts_yard_gate_2w_open",
            searchTerms: ["fts", "yard", "gate", "2w", "open"]
        },
        { title: "mfd-icon iconliste", searchTerms: ["iconliste"] },
        { title: "mfd-icon info_ack", searchTerms: ["info", "ack"] },
        { title: "mfd-icon info_attention", searchTerms: ["info", "attention"] },
        { title: "mfd-icon info_bug", searchTerms: ["info", "bug"] },
        {
            title: "mfd-icon info_catastrophe",
            searchTerms: ["info", "catastrophe"]
        },
        { title: "mfd-icon info_error", searchTerms: ["info", "error"] },
        { title: "mfd-icon info_info", searchTerms: ["info", "info"] },
        { title: "mfd-icon info_no_state", searchTerms: ["info", "no", "state"] },
        { title: "mfd-icon info_ok", searchTerms: ["info", "ok"] },
        { title: "mfd-icon info_warning", searchTerms: ["info", "warning"] },
        { title: "mfd-icon it_av_receiver", searchTerms: ["it", "av", "receiver"] },
        { title: "mfd-icon it_camera", searchTerms: ["it", "camera"] },
        { title: "mfd-icon it_fax", searchTerms: ["it", "fax"] },
        { title: "mfd-icon it_internet", searchTerms: ["it", "internet"] },
        {
            title: "mfd-icon it_media_player",
            searchTerms: ["it", "media", "player"]
        },
        { title: "mfd-icon it_nas", searchTerms: ["it", "nas"] },
        { title: "mfd-icon it_net", searchTerms: ["it", "net"] },
        { title: "mfd-icon it_network", searchTerms: ["it", "network"] },
        { title: "mfd-icon it_pc", searchTerms: ["it", "pc"] },
        { title: "mfd-icon it_radio", searchTerms: ["it", "radio"] },
        { title: "mfd-icon it_remote", searchTerms: ["it", "remote"] },
        { title: "mfd-icon it_router", searchTerms: ["it", "router"] },
        {
            title: "mfd-icon it_satellite_dish",
            searchTerms: ["it", "satellite", "dish"]
        },
        {
            title: "mfd-icon it_satellite_dish_heating",
            searchTerms: ["it", "satellite", "dish", "heating"]
        },
        { title: "mfd-icon it_server", searchTerms: ["it", "server"] },
        { title: "mfd-icon it_smartphone", searchTerms: ["it", "smartphone"] },
        { title: "mfd-icon it_telephone", searchTerms: ["it", "telephone"] },
        { title: "mfd-icon it_television", searchTerms: ["it", "television"] },
        { title: "mfd-icon it_ups", searchTerms: ["it", "ups"] },
        {
            title: "mfd-icon it_ups_attention",
            searchTerms: ["it", "ups", "attention"]
        },
        {
            title: "mfd-icon it_ups_battery_empty",
            searchTerms: ["it", "ups", "battery", "empty"]
        },
        {
            title: "mfd-icon it_ups_charging",
            searchTerms: ["it", "ups", "charging"]
        },
        {
            title: "mfd-icon it_ups_on_battery",
            searchTerms: ["it", "ups", "on", "battery"]
        },
        { title: "mfd-icon it_ups_standby", searchTerms: ["it", "ups", "standby"] },
        { title: "mfd-icon it_wifi", searchTerms: ["it", "wifi"] },
        {
            title: "mfd-icon it_wireless_dcf77",
            searchTerms: ["it", "wireless", "dcf77"]
        },
        { title: "mfd-icon light_ball", searchTerms: ["light", "ball"] },
        {
            title: "mfd-icon light_bar_table",
            searchTerms: ["light", "bar", "table"]
        },
        { title: "mfd-icon light_bedside", searchTerms: ["light", "bedside"] },
        {
            title: "mfd-icon light_bollard_1",
            searchTerms: ["light", "bollard", "1"]
        },
        {
            title: "mfd-icon light_bollard_2",
            searchTerms: ["light", "bollard", "2"]
        },
        { title: "mfd-icon light_cabinet", searchTerms: ["light", "cabinet"] },
        {
            title: "mfd-icon light_ceiling_infrared",
            searchTerms: ["light", "ceiling", "infrared"]
        },
        {
            title: "mfd-icon light_ceiling_light",
            searchTerms: ["light", "ceiling", "light"]
        },
        {
            title: "mfd-icon light_ceiling_spots",
            searchTerms: ["light", "ceiling", "spots"]
        },
        { title: "mfd-icon light_control", searchTerms: ["light", "control"] },
        { title: "mfd-icon light_corridor", searchTerms: ["light", "corridor"] },
        { title: "mfd-icon light_cube", searchTerms: ["light", "cube"] },
        { title: "mfd-icon light_diffused", searchTerms: ["light", "diffused"] },
        {
            title: "mfd-icon light_dinner_table",
            searchTerms: ["light", "dinner", "table"]
        },
        { title: "mfd-icon light_downlight", searchTerms: ["light", "downlight"] },
        {
            title: "mfd-icon light_dressing_room",
            searchTerms: ["light", "dressing", "room"]
        },
        {
            title: "mfd-icon light_fairy_lights",
            searchTerms: ["light", "fairy", "lights"]
        },
        {
            title: "mfd-icon light_floor_lamp",
            searchTerms: ["light", "floor", "lamp"]
        },
        {
            title: "mfd-icon light_fountain_indoor",
            searchTerms: ["light", "fountain", "indoor"]
        },
        { title: "mfd-icon light_garage", searchTerms: ["light", "garage"] },
        { title: "mfd-icon light_indoor", searchTerms: ["light", "indoor"] },
        {
            title: "mfd-icon light_indoor_dg",
            searchTerms: ["light", "indoor", "dg"]
        },
        {
            title: "mfd-icon light_indoor_eg",
            searchTerms: ["light", "indoor", "eg"]
        },
        {
            title: "mfd-icon light_indoor_kg",
            searchTerms: ["light", "indoor", "kg"]
        },
        {
            title: "mfd-icon light_indoor_og",
            searchTerms: ["light", "indoor", "og"]
        },
        {
            title: "mfd-icon light_indoor_og_1",
            searchTerms: ["light", "indoor", "og", "1"]
        },
        {
            title: "mfd-icon light_indoor_og_2",
            searchTerms: ["light", "indoor", "og", "2"]
        },
        {
            title: "mfd-icon light_indoor_ug",
            searchTerms: ["light", "indoor", "ug"]
        },
        {
            title: "mfd-icon light_kitchen_hood",
            searchTerms: ["light", "kitchen", "hood"]
        },
        { title: "mfd-icon light_led", searchTerms: ["light", "led"] },
        {
            title: "mfd-icon light_led_stripe",
            searchTerms: ["light", "led", "stripe"]
        },
        {
            title: "mfd-icon light_led_stripe_rgb",
            searchTerms: ["light", "led", "stripe", "rgb"]
        },
        { title: "mfd-icon light_light", searchTerms: ["light", "light"] },
        {
            title: "mfd-icon light_light_dim_00",
            searchTerms: ["light", "light", "dim", "00"]
        },
        {
            title: "mfd-icon light_light_dim_10",
            searchTerms: ["light", "light", "dim", "10"]
        },
        {
            title: "mfd-icon light_light_dim_100",
            searchTerms: ["light", "light", "dim", "100"]
        },
        {
            title: "mfd-icon light_light_dim_20",
            searchTerms: ["light", "light", "dim", "20"]
        },
        {
            title: "mfd-icon light_light_dim_30",
            searchTerms: ["light", "light", "dim", "30"]
        },
        {
            title: "mfd-icon light_light_dim_40",
            searchTerms: ["light", "light", "dim", "40"]
        },
        {
            title: "mfd-icon light_light_dim_50",
            searchTerms: ["light", "light", "dim", "50"]
        },
        {
            title: "mfd-icon light_light_dim_60",
            searchTerms: ["light", "light", "dim", "60"]
        },
        {
            title: "mfd-icon light_light_dim_70",
            searchTerms: ["light", "light", "dim", "70"]
        },
        {
            title: "mfd-icon light_light_dim_80",
            searchTerms: ["light", "light", "dim", "80"]
        },
        {
            title: "mfd-icon light_light_dim_90",
            searchTerms: ["light", "light", "dim", "90"]
        },
        { title: "mfd-icon light_mirror", searchTerms: ["light", "mirror"] },
        {
            title: "mfd-icon light_mirrored_wardrobe",
            searchTerms: ["light", "mirrored", "wardrobe"]
        },
        { title: "mfd-icon light_office", searchTerms: ["light", "office"] },
        {
            title: "mfd-icon light_office_desk",
            searchTerms: ["light", "office", "desk"]
        },
        { title: "mfd-icon light_outdoor", searchTerms: ["light", "outdoor"] },
        { title: "mfd-icon light_painting", searchTerms: ["light", "painting"] },
        { title: "mfd-icon light_party", searchTerms: ["light", "party"] },
        {
            title: "mfd-icon light_pendant_light",
            searchTerms: ["light", "pendant", "light"]
        },
        {
            title: "mfd-icon light_pendant_light_round",
            searchTerms: ["light", "pendant", "light", "round"]
        },
        { title: "mfd-icon light_plant", searchTerms: ["light", "plant"] },
        {
            title: "mfd-icon light_plant_spot",
            searchTerms: ["light", "plant", "spot"]
        },
        { title: "mfd-icon light_pool", searchTerms: ["light", "pool"] },
        { title: "mfd-icon light_pool_rgb", searchTerms: ["light", "pool", "rgb"] },
        { title: "mfd-icon light_rgb", searchTerms: ["light", "rgb"] },
        { title: "mfd-icon light_stairs", searchTerms: ["light", "stairs"] },
        {
            title: "mfd-icon light_starlit_sky",
            searchTerms: ["light", "starlit", "sky"]
        },
        {
            title: "mfd-icon light_table_lamp",
            searchTerms: ["light", "table", "lamp"]
        },
        {
            title: "mfd-icon light_television_backlight",
            searchTerms: ["light", "television", "backlight"]
        },
        { title: "mfd-icon light_uplight", searchTerms: ["light", "uplight"] },
        { title: "mfd-icon light_wall_1", searchTerms: ["light", "wall", "1"] },
        { title: "mfd-icon light_wall_2", searchTerms: ["light", "wall", "2"] },
        { title: "mfd-icon light_wall_3", searchTerms: ["light", "wall", "3"] },
        { title: "mfd-icon light_waterfall", searchTerms: ["light", "waterfall"] },
        { title: "mfd-icon light_window", searchTerms: ["light", "window"] },
        {
            title: "mfd-icon light_wire_system_1",
            searchTerms: ["light", "wire", "system", "1"]
        },
        {
            title: "mfd-icon light_wire_system_2",
            searchTerms: ["light", "wire", "system", "2"]
        },
        {
            title: "mfd-icon light_x-mas_candle_arch",
            searchTerms: ["light", "x-mas", "candle", "arch"]
        },
        {
            title: "mfd-icon light_x-mas_manger",
            searchTerms: ["light", "x-mas", "manger"]
        },
        {
            title: "mfd-icon light_x-mas_star_1",
            searchTerms: ["light", "x-mas", "star", "1"]
        },
        {
            title: "mfd-icon light_x-mas_star_2",
            searchTerms: ["light", "x-mas", "star", "2"]
        },
        {
            title: "mfd-icon light_x-mas_tree",
            searchTerms: ["light", "x-mas", "tree"]
        },
        {
            title: "mfd-icon measure_battery_0",
            searchTerms: ["measure", "battery", "0"]
        },
        {
            title: "mfd-icon measure_battery_100",
            searchTerms: ["measure", "battery", "100"]
        },
        {
            title: "mfd-icon measure_battery_25",
            searchTerms: ["measure", "battery", "25"]
        },
        {
            title: "mfd-icon measure_battery_50",
            searchTerms: ["measure", "battery", "50"]
        },
        {
            title: "mfd-icon measure_battery_75",
            searchTerms: ["measure", "battery", "75"]
        },
        {
            title: "mfd-icon measure_cistern_0",
            searchTerms: ["measure", "cistern", "0"]
        },
        {
            title: "mfd-icon measure_cistern_10",
            searchTerms: ["measure", "cistern", "10"]
        },
        {
            title: "mfd-icon measure_cistern_100",
            searchTerms: ["measure", "cistern", "100"]
        },
        {
            title: "mfd-icon measure_cistern_20",
            searchTerms: ["measure", "cistern", "20"]
        },
        {
            title: "mfd-icon measure_cistern_30",
            searchTerms: ["measure", "cistern", "30"]
        },
        {
            title: "mfd-icon measure_cistern_40",
            searchTerms: ["measure", "cistern", "40"]
        },
        {
            title: "mfd-icon measure_cistern_50",
            searchTerms: ["measure", "cistern", "50"]
        },
        {
            title: "mfd-icon measure_cistern_60",
            searchTerms: ["measure", "cistern", "60"]
        },
        {
            title: "mfd-icon measure_cistern_70",
            searchTerms: ["measure", "cistern", "70"]
        },
        {
            title: "mfd-icon measure_cistern_80",
            searchTerms: ["measure", "cistern", "80"]
        },
        {
            title: "mfd-icon measure_cistern_90",
            searchTerms: ["measure", "cistern", "90"]
        },
        { title: "mfd-icon measure_current", searchTerms: ["measure", "current"] },
        { title: "mfd-icon measure_globe", searchTerms: ["measure", "globe"] },
        {
            title: "mfd-icon measure_globe_lat",
            searchTerms: ["measure", "globe", "lat"]
        },
        {
            title: "mfd-icon measure_globe_long",
            searchTerms: ["measure", "globe", "long"]
        },
        {
            title: "mfd-icon measure_photovoltaic_inst",
            searchTerms: ["measure", "photovoltaic", "inst"]
        },
        {
            title: "mfd-icon measure_ph_value",
            searchTerms: ["measure", "ph", "value"]
        },
        { title: "mfd-icon measure_pond_0", searchTerms: ["measure", "pond", "0"] },
        {
            title: "mfd-icon measure_pond_10",
            searchTerms: ["measure", "pond", "10"]
        },
        {
            title: "mfd-icon measure_pond_100",
            searchTerms: ["measure", "pond", "100"]
        },
        {
            title: "mfd-icon measure_pond_20",
            searchTerms: ["measure", "pond", "20"]
        },
        {
            title: "mfd-icon measure_pond_30",
            searchTerms: ["measure", "pond", "30"]
        },
        {
            title: "mfd-icon measure_pond_40",
            searchTerms: ["measure", "pond", "40"]
        },
        {
            title: "mfd-icon measure_pond_50",
            searchTerms: ["measure", "pond", "50"]
        },
        {
            title: "mfd-icon measure_pond_60",
            searchTerms: ["measure", "pond", "60"]
        },
        {
            title: "mfd-icon measure_pond_70",
            searchTerms: ["measure", "pond", "70"]
        },
        {
            title: "mfd-icon measure_pond_80",
            searchTerms: ["measure", "pond", "80"]
        },
        {
            title: "mfd-icon measure_pond_90",
            searchTerms: ["measure", "pond", "90"]
        },
        { title: "mfd-icon measure_power", searchTerms: ["measure", "power"] },
        {
            title: "mfd-icon measure_power_meter",
            searchTerms: ["measure", "power", "meter"]
        },
        {
            title: "mfd-icon measure_pressure_bar",
            searchTerms: ["measure", "pressure", "bar"]
        },
        { title: "mfd-icon measure_voltage", searchTerms: ["measure", "voltage"] },
        {
            title: "mfd-icon measure_water_meter",
            searchTerms: ["measure", "water", "meter"]
        },
        { title: "mfd-icon message_achtung", searchTerms: ["message", "achtung"] },
        {
            title: "mfd-icon message_attention",
            searchTerms: ["message", "attention"]
        },
        {
            title: "mfd-icon message_attention_2",
            searchTerms: ["message", "attention", "2"]
        },
        { title: "mfd-icon message_bell", searchTerms: ["message", "bell"] },
        {
            title: "mfd-icon message_bell_door",
            searchTerms: ["message", "bell", "door"]
        },
        {
            title: "mfd-icon message_bell_door_disabled",
            searchTerms: ["message", "bell", "door", "disabled"]
        },
        { title: "mfd-icon message_bug", searchTerms: ["message", "bug"] },
        {
            title: "mfd-icon message_bug_filled",
            searchTerms: ["message", "bug", "filled"]
        },
        { title: "mfd-icon message_caution", searchTerms: ["message", "caution"] },
        { title: "mfd-icon message_empty", searchTerms: ["message", "empty"] },
        { title: "mfd-icon message_error", searchTerms: ["message", "error"] },
        { title: "mfd-icon message_garbage", searchTerms: ["message", "garbage"] },
        {
            title: "mfd-icon message_garbage_2",
            searchTerms: ["message", "garbage", "2"]
        },
        {
            title: "mfd-icon message_garbage_3",
            searchTerms: ["message", "garbage", "3"]
        },
        {
            title: "mfd-icon message_garbage_collection",
            searchTerms: ["message", "garbage", "collection"]
        },
        { title: "mfd-icon message_help", searchTerms: ["message", "help"] },
        { title: "mfd-icon message_info", searchTerms: ["message", "info"] },
        {
            title: "mfd-icon message_light_barrier",
            searchTerms: ["message", "light", "barrier"]
        },
        {
            title: "mfd-icon message_light_barrier_open",
            searchTerms: ["message", "light", "barrier", "open"]
        },
        {
            title: "mfd-icon message_light_intensity",
            searchTerms: ["message", "light", "intensity"]
        },
        { title: "mfd-icon message_mail", searchTerms: ["message", "mail"] },
        {
            title: "mfd-icon message_mail_open",
            searchTerms: ["message", "mail", "open"]
        },
        {
            title: "mfd-icon message_medicine",
            searchTerms: ["message", "medicine"]
        },
        { title: "mfd-icon message_notice", searchTerms: ["message", "notice"] },
        { title: "mfd-icon message_ok", searchTerms: ["message", "ok"] },
        { title: "mfd-icon message_postbox", searchTerms: ["message", "postbox"] },
        {
            title: "mfd-icon message_postbox_mail",
            searchTerms: ["message", "postbox", "mail"]
        },
        {
            title: "mfd-icon message_presence",
            searchTerms: ["message", "presence"]
        },
        {
            title: "mfd-icon message_presence_active",
            searchTerms: ["message", "presence", "active"]
        },
        {
            title: "mfd-icon message_presence_disabled",
            searchTerms: ["message", "presence", "disabled"]
        },
        {
            title: "mfd-icon message_presence_geo_active",
            searchTerms: ["message", "presence", "geo", "active"]
        },
        {
            title: "mfd-icon message_presence_geo_inactive",
            searchTerms: ["message", "presence", "geo", "inactive"]
        },
        {
            title: "mfd-icon message_presence_inactive",
            searchTerms: ["message", "presence", "inactive"]
        },
        { title: "mfd-icon message_service", searchTerms: ["message", "service"] },
        { title: "mfd-icon message_socket", searchTerms: ["message", "socket"] },
        {
            title: "mfd-icon message_socket_ch",
            searchTerms: ["message", "socket", "ch"]
        },
        {
            title: "mfd-icon message_socket_ch_3",
            searchTerms: ["message", "socket", "ch", "3"]
        },
        {
            title: "mfd-icon message_socket_ch_on_off",
            searchTerms: ["message", "socket", "ch", "on", "off"]
        },
        {
            title: "mfd-icon message_socket_on_off",
            searchTerms: ["message", "socket", "on", "off"]
        },
        { title: "mfd-icon message_stop", searchTerms: ["message", "stop"] },
        {
            title: "mfd-icon message_street_sweeper",
            searchTerms: ["message", "street", "sweeper"]
        },
        {
            title: "mfd-icon message_tendency_downward",
            searchTerms: ["message", "tendency", "downward"]
        },
        {
            title: "mfd-icon message_tendency_steady",
            searchTerms: ["message", "tendency", "steady"]
        },
        {
            title: "mfd-icon message_tendency_upward",
            searchTerms: ["message", "tendency", "upward"]
        },
        { title: "mfd-icon mfdicons", searchTerms: ["mfdicons"] },
        { title: "mfd-icon phone_answering", searchTerms: ["phone", "answering"] },
        { title: "mfd-icon phone_call", searchTerms: ["phone", "call"] },
        { title: "mfd-icon phone_call_end", searchTerms: ["phone", "call", "end"] },
        {
            title: "mfd-icon phone_call_end_in",
            searchTerms: ["phone", "call", "end", "in"]
        },
        {
            title: "mfd-icon phone_call_end_out",
            searchTerms: ["phone", "call", "end", "out"]
        },
        { title: "mfd-icon phone_call_in", searchTerms: ["phone", "call", "in"] },
        { title: "mfd-icon phone_call_out", searchTerms: ["phone", "call", "out"] },
        { title: "mfd-icon phone_dial", searchTerms: ["phone", "dial"] },
        {
            title: "mfd-icon phone_missed_in",
            searchTerms: ["phone", "missed", "in"]
        },
        {
            title: "mfd-icon phone_missed_out",
            searchTerms: ["phone", "missed", "out"]
        },
        {
            title: "mfd-icon phone_remote_trans_disabled",
            searchTerms: ["phone", "remote", "trans", "disabled"]
        },
        { title: "mfd-icon phone_ring", searchTerms: ["phone", "ring"] },
        { title: "mfd-icon phone_ring_in", searchTerms: ["phone", "ring", "in"] },
        { title: "mfd-icon phone_ring_out", searchTerms: ["phone", "ring", "out"] },
        {
            title: "mfd-icon sani_boiler_temp",
            searchTerms: ["sani", "boiler", "temp"]
        },
        {
            title: "mfd-icon sani_buffer_temp_all",
            searchTerms: ["sani", "buffer", "temp", "all"]
        },
        {
            title: "mfd-icon sani_buffer_temp_down",
            searchTerms: ["sani", "buffer", "temp", "down"]
        },
        {
            title: "mfd-icon sani_buffer_temp_up",
            searchTerms: ["sani", "buffer", "temp", "up"]
        },
        {
            title: "mfd-icon sani_central_vacuum_cleaner",
            searchTerms: ["sani", "central", "vacuum", "cleaner"]
        },
        {
            title: "mfd-icon sani_central_vacuum_cleaner_dust_cont",
            searchTerms: ["sani", "central", "vacuum", "cleaner", "dust", "cont"]
        },
        {
            title: "mfd-icon sani_central_vacuum_cleaner_filter",
            searchTerms: ["sani", "central", "vacuum", "cleaner", "filter"]
        },
        {
            title: "mfd-icon sani_cogeneration",
            searchTerms: ["sani", "cogeneration"]
        },
        { title: "mfd-icon sani_cooling", searchTerms: ["sani", "cooling"] },
        {
            title: "mfd-icon sani_cooling_automatic",
            searchTerms: ["sani", "cooling", "automatic"]
        },
        {
            title: "mfd-icon sani_cooling_manual",
            searchTerms: ["sani", "cooling", "manual"]
        },
        {
            title: "mfd-icon sani_cooling_temp",
            searchTerms: ["sani", "cooling", "temp"]
        },
        {
            title: "mfd-icon sani_domestic_waterworks",
            searchTerms: ["sani", "domestic", "waterworks"]
        },
        {
            title: "mfd-icon sani_earth_source_heat_pump",
            searchTerms: ["sani", "earth", "source", "heat", "pump"]
        },
        {
            title: "mfd-icon sani_floor_heating",
            searchTerms: ["sani", "floor", "heating"]
        },
        {
            title: "mfd-icon sani_garden_pump",
            searchTerms: ["sani", "garden", "pump"]
        },
        { title: "mfd-icon sani_heating", searchTerms: ["sani", "heating"] },
        {
            title: "mfd-icon sani_heating_automatic",
            searchTerms: ["sani", "heating", "automatic"]
        },
        {
            title: "mfd-icon sani_heating_manual",
            searchTerms: ["sani", "heating", "manual"]
        },
        {
            title: "mfd-icon sani_heating_temp",
            searchTerms: ["sani", "heating", "temp"]
        },
        { title: "mfd-icon sani_irrigation", searchTerms: ["sani", "irrigation"] },
        {
            title: "mfd-icon sani_irrigation_automatic",
            searchTerms: ["sani", "irrigation", "automatic"]
        },
        {
            title: "mfd-icon sani_irrigation_manual",
            searchTerms: ["sani", "irrigation", "manual"]
        },
        {
            title: "mfd-icon sani_irrigation_pop_up_off",
            searchTerms: ["sani", "irrigation", "pop", "up", "off"]
        },
        {
            title: "mfd-icon sani_irrigation_pop_up_on",
            searchTerms: ["sani", "irrigation", "pop", "up", "on"]
        },
        { title: "mfd-icon sani_leakage", searchTerms: ["sani", "leakage"] },
        {
            title: "mfd-icon sani_pool_filter_pump",
            searchTerms: ["sani", "pool", "filter", "pump"]
        },
        { title: "mfd-icon sani_pump", searchTerms: ["sani", "pump"] },
        {
            title: "mfd-icon sani_return_temp",
            searchTerms: ["sani", "return", "temp"]
        },
        { title: "mfd-icon sani_solar", searchTerms: ["sani", "solar"] },
        {
            title: "mfd-icon sani_solar_temp",
            searchTerms: ["sani", "solar", "temp"]
        },
        { title: "mfd-icon sani_sprinkling", searchTerms: ["sani", "sprinkling"] },
        {
            title: "mfd-icon sani_supply_temp",
            searchTerms: ["sani", "supply", "temp"]
        },
        { title: "mfd-icon sani_valve_0", searchTerms: ["sani", "valve", "0"] },
        { title: "mfd-icon sani_valve_10", searchTerms: ["sani", "valve", "10"] },
        { title: "mfd-icon sani_valve_100", searchTerms: ["sani", "valve", "100"] },
        { title: "mfd-icon sani_valve_20", searchTerms: ["sani", "valve", "20"] },
        { title: "mfd-icon sani_valve_30", searchTerms: ["sani", "valve", "30"] },
        { title: "mfd-icon sani_valve_40", searchTerms: ["sani", "valve", "40"] },
        { title: "mfd-icon sani_valve_50", searchTerms: ["sani", "valve", "50"] },
        { title: "mfd-icon sani_valve_60", searchTerms: ["sani", "valve", "60"] },
        { title: "mfd-icon sani_valve_70", searchTerms: ["sani", "valve", "70"] },
        { title: "mfd-icon sani_valve_80", searchTerms: ["sani", "valve", "80"] },
        { title: "mfd-icon sani_valve_90", searchTerms: ["sani", "valve", "90"] },
        {
            title: "mfd-icon sani_water_cold",
            searchTerms: ["sani", "water", "cold"]
        },
        { title: "mfd-icon sani_water_hot", searchTerms: ["sani", "water", "hot"] },
        {
            title: "mfd-icon sani_water_softening_unit",
            searchTerms: ["sani", "water", "softening", "unit"]
        },
        { title: "mfd-icon sani_water_tap", searchTerms: ["sani", "water", "tap"] },
        { title: "mfd-icon sani_well_pump", searchTerms: ["sani", "well", "pump"] },
        { title: "mfd-icon scene_aquarium", searchTerms: ["scene", "aquarium"] },
        { title: "mfd-icon scene_baby", searchTerms: ["scene", "baby"] },
        {
            title: "mfd-icon scene_baking_oven",
            searchTerms: ["scene", "baking", "oven"]
        },
        { title: "mfd-icon scene_bath", searchTerms: ["scene", "bath"] },
        { title: "mfd-icon scene_bathroom", searchTerms: ["scene", "bathroom"] },
        { title: "mfd-icon scene_beer", searchTerms: ["scene", "beer"] },
        { title: "mfd-icon scene_cat", searchTerms: ["scene", "cat"] },
        {
            title: "mfd-icon scene_childs_room",
            searchTerms: ["scene", "childs", "room"]
        },
        { title: "mfd-icon scene_cinema", searchTerms: ["scene", "cinema"] },
        { title: "mfd-icon scene_cleaning", searchTerms: ["scene", "cleaning"] },
        {
            title: "mfd-icon scene_clothes_dryer",
            searchTerms: ["scene", "clothes", "dryer"]
        },
        {
            title: "mfd-icon scene_cockle_stove",
            searchTerms: ["scene", "cockle", "stove"]
        },
        {
            title: "mfd-icon scene_coffee_maker_automatic",
            searchTerms: ["scene", "coffee", "maker", "automatic"]
        },
        { title: "mfd-icon scene_cooking", searchTerms: ["scene", "cooking"] },
        {
            title: "mfd-icon scene_cooking_alternat",
            searchTerms: ["scene", "cooking", "alternat"]
        },
        {
            title: "mfd-icon scene_cooking_hob",
            searchTerms: ["scene", "cooking", "hob"]
        },
        { title: "mfd-icon scene_corridor", searchTerms: ["scene", "corridor"] },
        { title: "mfd-icon scene_cubby", searchTerms: ["scene", "cubby"] },
        { title: "mfd-icon scene_day", searchTerms: ["scene", "day"] },
        { title: "mfd-icon scene_deckchair", searchTerms: ["scene", "deckchair"] },
        { title: "mfd-icon scene_dinner", searchTerms: ["scene", "dinner"] },
        {
            title: "mfd-icon scene_dishwasher",
            searchTerms: ["scene", "dishwasher"]
        },
        { title: "mfd-icon scene_dog", searchTerms: ["scene", "dog"] },
        {
            title: "mfd-icon scene_dressing_room",
            searchTerms: ["scene", "dressing", "room"]
        },
        {
            title: "mfd-icon scene_dressing_room_alternat",
            searchTerms: ["scene", "dressing", "room", "alternat"]
        },
        { title: "mfd-icon scene_drink", searchTerms: ["scene", "drink"] },
        {
            title: "mfd-icon scene_drink_hot",
            searchTerms: ["scene", "drink", "hot"]
        },
        {
            title: "mfd-icon scene_dump_truck",
            searchTerms: ["scene", "dump", "truck"]
        },
        { title: "mfd-icon scene_fitness", searchTerms: ["scene", "fitness"] },
        {
            title: "mfd-icon scene_fitness_2",
            searchTerms: ["scene", "fitness", "2"]
        },
        { title: "mfd-icon scene_football", searchTerms: ["scene", "football"] },
        { title: "mfd-icon scene_fountain", searchTerms: ["scene", "fountain"] },
        {
            title: "mfd-icon scene_fountain_indoor",
            searchTerms: ["scene", "fountain", "indoor"]
        },
        { title: "mfd-icon scene_freezer", searchTerms: ["scene", "freezer"] },
        { title: "mfd-icon scene_gaming", searchTerms: ["scene", "gaming"] },
        { title: "mfd-icon scene_gaming_2", searchTerms: ["scene", "gaming", "2"] },
        { title: "mfd-icon scene_gaming_3", searchTerms: ["scene", "gaming", "3"] },
        { title: "mfd-icon scene_garden", searchTerms: ["scene", "garden"] },
        {
            title: "mfd-icon scene_gas_station",
            searchTerms: ["scene", "gas", "station"]
        },
        { title: "mfd-icon scene_hall", searchTerms: ["scene", "hall"] },
        {
            title: "mfd-icon scene_hall_alternat",
            searchTerms: ["scene", "hall", "alternat"]
        },
        { title: "mfd-icon scene_horse", searchTerms: ["scene", "horse"] },
        { title: "mfd-icon scene_ironing", searchTerms: ["scene", "ironing"] },
        { title: "mfd-icon scene_jukebox", searchTerms: ["scene", "jukebox"] },
        { title: "mfd-icon scene_keyboard", searchTerms: ["scene", "keyboard"] },
        {
            title: "mfd-icon scene_kitchen_hood",
            searchTerms: ["scene", "kitchen", "hood"]
        },
        {
            title: "mfd-icon scene_kitchen_sink",
            searchTerms: ["scene", "kitchen", "sink"]
        },
        {
            title: "mfd-icon scene_laundry_room",
            searchTerms: ["scene", "laundry", "room"]
        },
        {
            title: "mfd-icon scene_laundry_room_fem",
            searchTerms: ["scene", "laundry", "room", "fem"]
        },
        { title: "mfd-icon scene_living", searchTerms: ["scene", "living"] },
        {
            title: "mfd-icon scene_livingroom",
            searchTerms: ["scene", "livingroom"]
        },
        {
            title: "mfd-icon scene_making_love",
            searchTerms: ["scene", "making", "love"]
        },
        {
            title: "mfd-icon scene_making_love_clean",
            searchTerms: ["scene", "making", "love", "clean"]
        },
        {
            title: "mfd-icon scene_massage_jet",
            searchTerms: ["scene", "massage", "jet"]
        },
        {
            title: "mfd-icon scene_microwave_oven",
            searchTerms: ["scene", "microwave", "oven"]
        },
        { title: "mfd-icon scene_minion", searchTerms: ["scene", "minion"] },
        { title: "mfd-icon scene_night", searchTerms: ["scene", "night"] },
        { title: "mfd-icon scene_office", searchTerms: ["scene", "office"] },
        { title: "mfd-icon scene_party", searchTerms: ["scene", "party"] },
        { title: "mfd-icon scene_pet", searchTerms: ["scene", "pet"] },
        { title: "mfd-icon scene_plant", searchTerms: ["scene", "plant"] },
        { title: "mfd-icon scene_pool", searchTerms: ["scene", "pool"] },
        {
            title: "mfd-icon scene_power_grid",
            searchTerms: ["scene", "power", "grid"]
        },
        {
            title: "mfd-icon scene_power_inverter",
            searchTerms: ["scene", "power", "inverter"]
        },
        { title: "mfd-icon scene_princess", searchTerms: ["scene", "princess"] },
        {
            title: "mfd-icon scene_projector_closed",
            searchTerms: ["scene", "projector", "closed"]
        },
        {
            title: "mfd-icon scene_projector_closed_on_off",
            searchTerms: ["scene", "projector", "closed", "on", "off"]
        },
        {
            title: "mfd-icon scene_projector_open",
            searchTerms: ["scene", "projector", "open"]
        },
        {
            title: "mfd-icon scene_projector_open_on_off",
            searchTerms: ["scene", "projector", "open", "on", "off"]
        },
        {
            title: "mfd-icon scene_robo_lawnmower",
            searchTerms: ["scene", "robo", "lawnmower"]
        },
        {
            title: "mfd-icon scene_robo_lawnmower_active",
            searchTerms: ["scene", "robo", "lawnmower", "active"]
        },
        {
            title: "mfd-icon scene_robo_lawnmower_attention",
            searchTerms: ["scene", "robo", "lawnmower", "attention"]
        },
        {
            title: "mfd-icon scene_robo_lawnmower_charging",
            searchTerms: ["scene", "robo", "lawnmower", "charging"]
        },
        {
            title: "mfd-icon scene_robo_lawnmower_paused",
            searchTerms: ["scene", "robo", "lawnmower", "paused"]
        },
        {
            title: "mfd-icon scene_robo_vac_cleaner",
            searchTerms: ["scene", "robo", "vac", "cleaner"]
        },
        { title: "mfd-icon scene_sauna", searchTerms: ["scene", "sauna"] },
        { title: "mfd-icon scene_scene", searchTerms: ["scene", "scene"] },
        {
            title: "mfd-icon scene_scene_teach_in",
            searchTerms: ["scene", "scene", "teach", "in"]
        },
        { title: "mfd-icon scene_shower", searchTerms: ["scene", "shower"] },
        { title: "mfd-icon scene_sleeping", searchTerms: ["scene", "sleeping"] },
        {
            title: "mfd-icon scene_sleeping_alternat",
            searchTerms: ["scene", "sleeping", "alternat"]
        },
        {
            title: "mfd-icon scene_sleeping_twin_0_0",
            searchTerms: ["scene", "sleeping", "twin", "0", "0"]
        },
        {
            title: "mfd-icon scene_sleeping_twin_0_1",
            searchTerms: ["scene", "sleeping", "twin", "0", "1"]
        },
        {
            title: "mfd-icon scene_sleeping_twin_1_0",
            searchTerms: ["scene", "sleeping", "twin", "1", "0"]
        },
        {
            title: "mfd-icon scene_sleeping_twin_1_1",
            searchTerms: ["scene", "sleeping", "twin", "1", "1"]
        },
        { title: "mfd-icon scene_stairs", searchTerms: ["scene", "stairs"] },
        { title: "mfd-icon scene_storeroom", searchTerms: ["scene", "storeroom"] },
        { title: "mfd-icon scene_stove", searchTerms: ["scene", "stove"] },
        {
            title: "mfd-icon scene_summerhouse",
            searchTerms: ["scene", "summerhouse"]
        },
        { title: "mfd-icon scene_swimming", searchTerms: ["scene", "swimming"] },
        {
            title: "mfd-icon scene_teens_room",
            searchTerms: ["scene", "teens", "room"]
        },
        { title: "mfd-icon scene_terrace", searchTerms: ["scene", "terrace"] },
        { title: "mfd-icon scene_toilet", searchTerms: ["scene", "toilet"] },
        {
            title: "mfd-icon scene_toilet_alternat",
            searchTerms: ["scene", "toilet", "alternat"]
        },
        { title: "mfd-icon scene_unicorn", searchTerms: ["scene", "unicorn"] },
        {
            title: "mfd-icon scene_visit_guests",
            searchTerms: ["scene", "visit", "guests"]
        },
        {
            title: "mfd-icon scene_washing_machine",
            searchTerms: ["scene", "washing", "machine"]
        },
        { title: "mfd-icon scene_waterfall", searchTerms: ["scene", "waterfall"] },
        {
            title: "mfd-icon scene_wine_cellar",
            searchTerms: ["scene", "wine", "cellar"]
        },
        { title: "mfd-icon scene_workshop", searchTerms: ["scene", "workshop"] },
        { title: "mfd-icon scene_x-mas", searchTerms: ["scene", "x-mas"] },
        { title: "mfd-icon secur_alarm", searchTerms: ["secur", "alarm"] },
        {
            title: "mfd-icon secur_alarm_alarm",
            searchTerms: ["secur", "alarm", "alarm"]
        },
        {
            title: "mfd-icon secur_alarm_disabled",
            searchTerms: ["secur", "alarm", "disabled"]
        },
        {
            title: "mfd-icon secur_alarm_enabled",
            searchTerms: ["secur", "alarm", "enabled"]
        },
        {
            title: "mfd-icon secur_alarm_test",
            searchTerms: ["secur", "alarm", "test"]
        },
        {
            title: "mfd-icon secur_breakage_glass",
            searchTerms: ["secur", "breakage", "glass"]
        },
        { title: "mfd-icon secur_burglary", searchTerms: ["secur", "burglary"] },
        { title: "mfd-icon secur_encoding", searchTerms: ["secur", "encoding"] },
        {
            title: "mfd-icon secur_fingerprint_reader",
            searchTerms: ["secur", "fingerprint", "reader"]
        },
        {
            title: "mfd-icon secur_frost_protection",
            searchTerms: ["secur", "frost", "protection"]
        },
        {
            title: "mfd-icon secur_heat_protection",
            searchTerms: ["secur", "heat", "protection"]
        },
        { title: "mfd-icon secur_locked", searchTerms: ["secur", "locked"] },
        { title: "mfd-icon secur_open", searchTerms: ["secur", "open"] },
        { title: "mfd-icon secur_sabotage", searchTerms: ["secur", "sabotage"] },
        {
            title: "mfd-icon secur_smoke_detector",
            searchTerms: ["secur", "smoke", "detector"]
        },
        {
            title: "mfd-icon status_automatic",
            searchTerms: ["status", "automatic"]
        },
        {
            title: "mfd-icon status_available",
            searchTerms: ["status", "available"]
        },
        { title: "mfd-icon status_away_1", searchTerms: ["status", "away", "1"] },
        { title: "mfd-icon status_away_2", searchTerms: ["status", "away", "2"] },
        {
            title: "mfd-icon status_child_boy",
            searchTerms: ["status", "child", "boy"]
        },
        {
            title: "mfd-icon status_child_girl",
            searchTerms: ["status", "child", "girl"]
        },
        { title: "mfd-icon status_comfort", searchTerms: ["status", "comfort"] },
        { title: "mfd-icon status_economy", searchTerms: ["status", "economy"] },
        { title: "mfd-icon status_frost", searchTerms: ["status", "frost"] },
        {
            title: "mfd-icon status_light_high",
            searchTerms: ["status", "light", "high"]
        },
        {
            title: "mfd-icon status_light_low",
            searchTerms: ["status", "light", "low"]
        },
        {
            title: "mfd-icon status_light_max",
            searchTerms: ["status", "light", "max"]
        },
        {
            title: "mfd-icon status_light_off",
            searchTerms: ["status", "light", "off"]
        },
        { title: "mfd-icon status_locked", searchTerms: ["status", "locked"] },
        { title: "mfd-icon status_man", searchTerms: ["status", "man"] },
        { title: "mfd-icon status_night", searchTerms: ["status", "night"] },
        {
            title: "mfd-icon status_not_available",
            searchTerms: ["status", "not", "available"]
        },
        { title: "mfd-icon status_open", searchTerms: ["status", "open"] },
        {
            title: "mfd-icon status_presence_simulation",
            searchTerms: ["status", "presence", "simulation"]
        },
        {
            title: "mfd-icon status_presence_simulation_rec",
            searchTerms: ["status", "presence", "simulation", "rec"]
        },
        {
            title: "mfd-icon status_presence_simulation_run",
            searchTerms: ["status", "presence", "simulation", "run"]
        },
        {
            title: "mfd-icon status_protection",
            searchTerms: ["status", "protection"]
        },
        { title: "mfd-icon status_standby", searchTerms: ["status", "standby"] },
        { title: "mfd-icon status_vacation", searchTerms: ["status", "vacation"] },
        { title: "mfd-icon status_woman", searchTerms: ["status", "woman"] },
        { title: "mfd-icon temp_control", searchTerms: ["temp", "control"] },
        { title: "mfd-icon temp_dew_point", searchTerms: ["temp", "dew", "point"] },
        { title: "mfd-icon temp_frost", searchTerms: ["temp", "frost"] },
        { title: "mfd-icon temp_inside", searchTerms: ["temp", "inside"] },
        { title: "mfd-icon temp_outside", searchTerms: ["temp", "outside"] },
        { title: "mfd-icon temp_soil", searchTerms: ["temp", "soil"] },
        {
            title: "mfd-icon temp_temperature",
            searchTerms: ["temp", "temperature"]
        },
        {
            title: "mfd-icon temp_temperature_max",
            searchTerms: ["temp", "temperature", "max"]
        },
        {
            title: "mfd-icon temp_temperature_min",
            searchTerms: ["temp", "temperature", "min"]
        },
        { title: "mfd-icon temp_windchill", searchTerms: ["temp", "windchill"] },
        {
            title: "mfd-icon text_exclamation_mark",
            searchTerms: ["text", "exclamation", "mark"]
        },
        { title: "mfd-icon text_max", searchTerms: ["text", "max"] },
        { title: "mfd-icon text_min", searchTerms: ["text", "min"] },
        { title: "mfd-icon text_na", searchTerms: ["text", "na"] },
        {
            title: "mfd-icon text_question_mark",
            searchTerms: ["text", "question", "mark"]
        },
        {
            title: "mfd-icon time_alarm_clock",
            searchTerms: ["time", "alarm", "clock"]
        },
        {
            title: "mfd-icon time_alarm_clock_alarm_off",
            searchTerms: ["time", "alarm", "clock", "alarm", "off"]
        },
        {
            title: "mfd-icon time_alarm_clock_alarm_on",
            searchTerms: ["time", "alarm", "clock", "alarm", "on"]
        },
        {
            title: "mfd-icon time_alarm_clock_snooze",
            searchTerms: ["time", "alarm", "clock", "snooze"]
        },
        { title: "mfd-icon time_automatic", searchTerms: ["time", "automatic"] },
        { title: "mfd-icon time_calendar", searchTerms: ["time", "calendar"] },
        { title: "mfd-icon time_clock", searchTerms: ["time", "clock"] },
        { title: "mfd-icon time_eco_mode", searchTerms: ["time", "eco", "mode"] },
        { title: "mfd-icon time_graph", searchTerms: ["time", "graph"] },
        {
            title: "mfd-icon time_manual_mode",
            searchTerms: ["time", "manual", "mode"]
        },
        { title: "mfd-icon time_note", searchTerms: ["time", "note"] },
        { title: "mfd-icon time_statistic", searchTerms: ["time", "statistic"] },
        { title: "mfd-icon time_timer", searchTerms: ["time", "timer"] },
        {
            title: "mfd-icon time_timer_switch",
            searchTerms: ["time", "timer", "switch"]
        },
        { title: "mfd-icon user_available", searchTerms: ["user", "available"] },
        { title: "mfd-icon user_away", searchTerms: ["user", "away"] },
        { title: "mfd-icon user_ext_away", searchTerms: ["user", "ext", "away"] },
        { title: "mfd-icon user_n_a", searchTerms: ["user", "n", "a"] },
        {
            title: "mfd-icon vent_air_filter",
            searchTerms: ["vent", "air", "filter"]
        },
        {
            title: "mfd-icon vent_air_filter_full",
            searchTerms: ["vent", "air", "filter", "full"]
        },
        {
            title: "mfd-icon vent_ambient_air",
            searchTerms: ["vent", "ambient", "air"]
        },
        { title: "mfd-icon vent_bypass", searchTerms: ["vent", "bypass"] },
        {
            title: "mfd-icon vent_bypass_open",
            searchTerms: ["vent", "bypass", "open"]
        },
        { title: "mfd-icon vent_error", searchTerms: ["vent", "error"] },
        {
            title: "mfd-icon vent_exhaust_air",
            searchTerms: ["vent", "exhaust", "air"]
        },
        { title: "mfd-icon vent_humidifier", searchTerms: ["vent", "humidifier"] },
        {
            title: "mfd-icon vent_low_pressure_protection_unit",
            searchTerms: ["vent", "low", "pressure", "protection", "unit"]
        },
        {
            title: "mfd-icon vent_low_pressure_warning",
            searchTerms: ["vent", "low", "pressure", "warning"]
        },
        { title: "mfd-icon vent_stop", searchTerms: ["vent", "stop"] },
        {
            title: "mfd-icon vent_supply_air",
            searchTerms: ["vent", "supply", "air"]
        },
        { title: "mfd-icon vent_used_air", searchTerms: ["vent", "used", "air"] },
        {
            title: "mfd-icon vent_ventilation",
            searchTerms: ["vent", "ventilation"]
        },
        {
            title: "mfd-icon vent_ventilation_control",
            searchTerms: ["vent", "ventilation", "control"]
        },
        {
            title: "mfd-icon vent_ventilation_level_0",
            searchTerms: ["vent", "ventilation", "level", "0"]
        },
        {
            title: "mfd-icon vent_ventilation_level_1",
            searchTerms: ["vent", "ventilation", "level", "1"]
        },
        {
            title: "mfd-icon vent_ventilation_level_2",
            searchTerms: ["vent", "ventilation", "level", "2"]
        },
        {
            title: "mfd-icon vent_ventilation_level_3",
            searchTerms: ["vent", "ventilation", "level", "3"]
        },
        {
            title: "mfd-icon vent_ventilation_level_automatic",
            searchTerms: ["vent", "ventilation", "level", "automatic"]
        },
        {
            title: "mfd-icon vent_ventilation_level_manual_m",
            searchTerms: ["vent", "ventilation", "level", "manual", "m"]
        },
        {
            title: "mfd-icon weather_barometric_pressure",
            searchTerms: ["weather", "barometric", "pressure"]
        },
        { title: "mfd-icon weather_cloudy", searchTerms: ["weather", "cloudy"] },
        {
            title: "mfd-icon weather_cloudy_heavy",
            searchTerms: ["weather", "cloudy", "heavy"]
        },
        {
            title: "mfd-icon weather_cloudy_light",
            searchTerms: ["weather", "cloudy", "light"]
        },
        {
            title: "mfd-icon weather_directions",
            searchTerms: ["weather", "directions"]
        },
        {
            title: "mfd-icon weather_directions_n",
            searchTerms: ["weather", "directions", "n"]
        },
        {
            title: "mfd-icon weather_directions_no",
            searchTerms: ["weather", "directions", "no"]
        },
        {
            title: "mfd-icon weather_directions_nw",
            searchTerms: ["weather", "directions", "nw"]
        },
        {
            title: "mfd-icon weather_directions_o",
            searchTerms: ["weather", "directions", "o"]
        },
        {
            title: "mfd-icon weather_directions_s",
            searchTerms: ["weather", "directions", "s"]
        },
        {
            title: "mfd-icon weather_directions_so",
            searchTerms: ["weather", "directions", "so"]
        },
        {
            title: "mfd-icon weather_directions_sw",
            searchTerms: ["weather", "directions", "sw"]
        },
        {
            title: "mfd-icon weather_directions_w",
            searchTerms: ["weather", "directions", "w"]
        },
        { title: "mfd-icon weather_fog", searchTerms: ["weather", "fog"] },
        {
            title: "mfd-icon weather_fog_heavy",
            searchTerms: ["weather", "fog", "heavy"]
        },
        { title: "mfd-icon weather_frost", searchTerms: ["weather", "frost"] },
        {
            title: "mfd-icon weather_humidity",
            searchTerms: ["weather", "humidity"]
        },
        {
            title: "mfd-icon weather_humidity_abs",
            searchTerms: ["weather", "humidity", "abs"]
        },
        {
            title: "mfd-icon weather_humidity_rel",
            searchTerms: ["weather", "humidity", "rel"]
        },
        {
            title: "mfd-icon weather_humidity_soil",
            searchTerms: ["weather", "humidity", "soil"]
        },
        {
            title: "mfd-icon weather_light_meter",
            searchTerms: ["weather", "light", "meter"]
        },
        {
            title: "mfd-icon weather_moonrise",
            searchTerms: ["weather", "moonrise"]
        },
        { title: "mfd-icon weather_moonset", searchTerms: ["weather", "moonset"] },
        {
            title: "mfd-icon weather_moon_phases_1_new",
            searchTerms: ["weather", "moon", "phases", "1", "new"]
        },
        {
            title: "mfd-icon weather_moon_phases_2",
            searchTerms: ["weather", "moon", "phases", "2"]
        },
        {
            title: "mfd-icon weather_moon_phases_3_half",
            searchTerms: ["weather", "moon", "phases", "3", "half"]
        },
        {
            title: "mfd-icon weather_moon_phases_4",
            searchTerms: ["weather", "moon", "phases", "4"]
        },
        {
            title: "mfd-icon weather_moon_phases_5_full",
            searchTerms: ["weather", "moon", "phases", "5", "full"]
        },
        {
            title: "mfd-icon weather_moon_phases_6",
            searchTerms: ["weather", "moon", "phases", "6"]
        },
        {
            title: "mfd-icon weather_moon_phases_7_half",
            searchTerms: ["weather", "moon", "phases", "7", "half"]
        },
        {
            title: "mfd-icon weather_moon_phases_8",
            searchTerms: ["weather", "moon", "phases", "8"]
        },
        {
            title: "mfd-icon weather_night_cloudy",
            searchTerms: ["weather", "night", "cloudy"]
        },
        {
            title: "mfd-icon weather_night_fog",
            searchTerms: ["weather", "night", "fog"]
        },
        {
            title: "mfd-icon weather_night_starry",
            searchTerms: ["weather", "night", "starry"]
        },
        { title: "mfd-icon weather_pollen", searchTerms: ["weather", "pollen"] },
        { title: "mfd-icon weather_rain", searchTerms: ["weather", "rain"] },
        {
            title: "mfd-icon weather_rain_gauge",
            searchTerms: ["weather", "rain", "gauge"]
        },
        {
            title: "mfd-icon weather_rain_heavy",
            searchTerms: ["weather", "rain", "heavy"]
        },
        {
            title: "mfd-icon weather_rain_light",
            searchTerms: ["weather", "rain", "light"]
        },
        {
            title: "mfd-icon weather_rain_meter",
            searchTerms: ["weather", "rain", "meter"]
        },
        { title: "mfd-icon weather_sleet", searchTerms: ["weather", "sleet"] },
        { title: "mfd-icon weather_snow", searchTerms: ["weather", "snow"] },
        {
            title: "mfd-icon weather_snow_heavy",
            searchTerms: ["weather", "snow", "heavy"]
        },
        {
            title: "mfd-icon weather_snow_ice_warning",
            searchTerms: ["weather", "snow", "ice", "warning"]
        },
        {
            title: "mfd-icon weather_snow_light",
            searchTerms: ["weather", "snow", "light"]
        },
        { title: "mfd-icon weather_station", searchTerms: ["weather", "station"] },
        {
            title: "mfd-icon weather_station_generic",
            searchTerms: ["weather", "station", "generic"]
        },
        {
            title: "mfd-icon weather_station_quadra",
            searchTerms: ["weather", "station", "quadra"]
        },
        { title: "mfd-icon weather_storm", searchTerms: ["weather", "storm"] },
        { title: "mfd-icon weather_summer", searchTerms: ["weather", "summer"] },
        { title: "mfd-icon weather_sun", searchTerms: ["weather", "sun"] },
        { title: "mfd-icon weather_sunrise", searchTerms: ["weather", "sunrise"] },
        { title: "mfd-icon weather_sunset", searchTerms: ["weather", "sunset"] },
        {
            title: "mfd-icon weather_thunderstorm",
            searchTerms: ["weather", "thunderstorm"]
        },
        { title: "mfd-icon weather_wind", searchTerms: ["weather", "wind"] },
        {
            title: "mfd-icon weather_wind_directions_e",
            searchTerms: ["weather", "wind", "directions", "e"]
        },
        {
            title: "mfd-icon weather_wind_directions_n",
            searchTerms: ["weather", "wind", "directions", "n"]
        },
        {
            title: "mfd-icon weather_wind_directions_ne",
            searchTerms: ["weather", "wind", "directions", "ne"]
        },
        {
            title: "mfd-icon weather_wind_directions_nw",
            searchTerms: ["weather", "wind", "directions", "nw"]
        },
        {
            title: "mfd-icon weather_wind_directions_s",
            searchTerms: ["weather", "wind", "directions", "s"]
        },
        {
            title: "mfd-icon weather_wind_directions_se",
            searchTerms: ["weather", "wind", "directions", "se"]
        },
        {
            title: "mfd-icon weather_wind_directions_sw",
            searchTerms: ["weather", "wind", "directions", "sw"]
        },
        {
            title: "mfd-icon weather_wind_directions_w",
            searchTerms: ["weather", "wind", "directions", "w"]
        },
        {
            title: "mfd-icon weather_wind_no_wind",
            searchTerms: ["weather", "wind", "no", "wind"]
        },
        {
            title: "mfd-icon weather_wind_speed",
            searchTerms: ["weather", "wind", "speed"]
        },
        {
            title: "mfd-icon weather_wind_speed_bft",
            searchTerms: ["weather", "wind", "speed", "bft"]
        },
        {
            title: "mfd-icon weather_wind_speed_ms",
            searchTerms: ["weather", "wind", "speed", "ms"]
        },
        { title: "mfd-icon weather_winter", searchTerms: ["weather", "winter"] }
    ];
    return icons;
}
