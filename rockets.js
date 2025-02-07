"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redrocket_1 = require("./redrocket");
const bluerocket_1 = require("./bluerocket");
const purplerocket_1 = require("./purplerocket");
// Canvas-Element holen
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
if (ctx) {
    // Raketen-Instanzen erstellen
    const redRocket = new redrocket_1.Rocket1(50, 100, 30, 50);
    const blueRocket = new bluerocket_1.BlueRocket(50, 100, 30, 50);
    const purpleRocket = new purplerocket_1.PurpleRocket(50, 100, 30, 50);
    const startY = canvas.height / 2;
    const spacing = 120; // Abstand zwischen den Raketen
    // Raketen nebeneinander zeichnen
    redRocket.drawRocket(ctx, 100, startY);
    blueRocket.drawRocket(ctx, 100 + spacing, startY);
    purpleRocket.drawRocket(ctx, 100 + 2 * spacing, startY);
}
//# sourceMappingURL=rockets.js.map