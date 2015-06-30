
require.config({
    baseUrl:"App",
    paths:{
        jquery:"../Scripts/jquery-2.1.1",
        angular:"../Scripts/angular",
        angularRoute:"../Scripts/angular-route",
        angularBootstrap:"../Scripts/ui-bootstrap-tpls-0.13.0.min",
        socket:"../Scripts/Socket",
        less:"../Scripts/less.js-master/dist/less",
        toggle:"../Scripts/angular-toggle-switch",
        windowEvent:"../Scripts/window_event_broadcasts",
        jQueryUI:"../Scripts/jquery-ui"
    },
    shim:{
        jquery:{
            exports:"JQuery"
        },
        angular:{
            deps:["jquery","jQueryUI"],
            exports:"angular"
        },
        angularRoute:{
            deps:["jquery","angular"],
            exports:"angularRoute"
        },
        less:{
            exports:"less"
        },
        angularBootstrap:{
            deps:["angular"]
        },
        toggle:{
            deps:["angular"]
        },
        socket:{
            exports:"socket"
        },
        windowEvent:{
            deps:["angular"]
        },
        jQueryUI:{
            deps:["jquery"]
        }
    }
    ,deps:['App']
});

