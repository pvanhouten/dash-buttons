"use strict";

var fs = require("fs"),
    request = require("request"),
    config = JSON.parse(fs.readFileSync("config.json")),

    exports = function () {
        var result = function (error, resp, body) {
                if (error) {
                    console.log(error);
                }
                console.log(body);
            };
        console.log("Tide pressed");
        request.post("https://maker.ifttt.com/trigger/dash-tide/with/key/" + config.ifttt, {}, result);
    };

module.exports = exports;
