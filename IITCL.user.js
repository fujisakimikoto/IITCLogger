// ==UserScript==
// @id             iitcloger@fm
// @name           IITC Plugin: IITCL
// @category       Tools
// @version        0.2
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      
// @downloadURL    
// @description    IITCL
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==

function wrapper(plugin_info) {
    if(typeof window.plugin !== 'function') window.plugin = function() {};

    window.plugin.IITCL = function() {};
    
    window.plugin.IITCL.setup = function() {
      addHook('publicChatDataAvailable', window.plugin.IITCL.handleData);
    }
    
    window.plugin.IITCL.stored = {};
    
    window.plugin.IITCL.handleData = function(data) {
        var chatinfos = data["raw"]["result"];
        for(var i=0;i<chatinfos.length;i++){
            var chatinfoi = chatinfos[i];
            var chatinfo = chatinfoi[2]["plext"]["markup"];
            var time = new Date(parseInt(chatinfoi[1])).toLocaleString();
            var nowinfostr = '"'+chatinfoi[0]+'","'+time+'"';
            for(var j=0;j<chatinfo.length;j++){
                var info = chatinfo[j];
                var infotype = info[0];
                var infoval = info[1];
                if (infotype == "PLAYER") {
                    nowinfostr+=(',"'+infoval["plain"]+'","'+infoval["team"]+'"');
                } else if (infotype == "TEXT") {
                    nowinfostr+=(',"'+infoval["plain"]+'"');
                } else if (infotype == "PORTAL") {
                    nowinfostr+=(',"'+infoval["name"]+'","'+infoval["address"]+'","'+infoval["team"]+'"');
                }
            }
            localStorage.iitcl += (nowinfostr+"\n");
            // console.log(nowinfostr);
        }
    }
    
    var setup = plugin.IITCL.setup;
    
    //
    setup.info = plugin_info;
    if(!window.bootPlugins) window.bootPlugins = [];
    window.bootPlugins.push(setup);
    if(window.iitcLoaded && typeof setup === 'function') setup();
}

var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);
