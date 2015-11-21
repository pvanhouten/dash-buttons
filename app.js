var app = require("win-node-dash-button"),
    fs = require("fs"),
    tideEvent = require("./tide.js"),
    Server = app.Server,
    DashButton = app.DashButton,
    config = JSON.parse(fs.readFileSync("config.json")),
    dashButtons = config.dashButtons,

    svr = new Server(),
    tide   = new DashButton(dashButtons.tide, tideEvent),
    finish = new DashButton(dashButtons.finish, function () { console.log("Finish pressed"); }),
    bounty = new DashButton(dashButtons.bounty, function () { console.log("Bounty pressed"); }),
    hefty  = new DashButton(dashButtons.hefty, function () { console.log("Hefty pressed"); }),
    glad   = new DashButton(dashButtons.glad, function () { console.log("Glad pressed"); });

svr.register(tide)
   .register(finish)
   .register(bounty)
   .register(hefty)
   .register(glad)
   .start("192.168.1.160");