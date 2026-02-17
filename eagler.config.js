        "use strict";
        window.addEventListener("load", function () {
            if (window.location.href.indexOf("file:") === 0) {
                alert("HTTP please, do not open this file locally, run a local HTTP server and load it via HTTP");
            } else {
                // %%%%%%%%% Launch Options %%%%%%%%%%%%
                var relayId = Math.floor(Math.random() * 3);
                window.eaglercraftXOpts = {
                    demoMode: false,
                    container: "game_frame",
                    assetsURI: "https://cdn.jsdelivr.net/gh/eaglerproject/1.12-WASM@main/assets.epw",
                    enableMinceraft: false,
                    localesURI: "lang/",
                    worldsDB: "worlds",
                    logInvalidCerts: true,
                    crashOnUncaughtExceptions: false,
                    servers: [
							{ addr: "wss://mythic.lat/", name: "mythical network | solo central" },
							{ addr: "wss://xena.wtf", name: "xena | frogie's arcade" },
							{ addr: "wss://arch.mc", name: "ArchMC" },
							{ addr: "wss://ethereal.mov", name: "ethereal | selenite" },                    ],
                                        relays: [
						{ addr: "wss://node1.servehttp.com:6698", comment: "MythicRealms relay #1", primary: relayId == 0 },
                    ]
                };
                // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                var q = window.location.search;
                if ((typeof q === "string") && q[0] === "?" && (typeof window.URLSearchParams !== "undefined")) {
                    q = new window.URLSearchParams(q);
                    var s = q.get("server");
                    if (s) window.eaglercraftXOpts.joinServer = s;
                }
                main();
            }
        });