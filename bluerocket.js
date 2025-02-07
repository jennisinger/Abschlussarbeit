"use strict";
var Rakete2;
(function (Rakete2) {
    class Rocket2 {
        // Eigenschaften für den Körper, Kopf und Zündschnur der Rakete
        bodyWidth;
        bodyHeight;
        headHeight;
        fuseLength;
        constructor(bodyWidth, bodyHeight, headHeight, fuseLength) {
            this.bodyWidth = bodyWidth;
            this.bodyHeight = bodyHeight;
            this.headHeight = headHeight;
            this.fuseLength = fuseLength;
        }
        // Methode, um die Rakete zu zeichnen
        drawRocket(ctx, x, y) {
            // Körper der Rakete (Rechteck)
            ctx.fillStyle = "blue";
            ctx.fillRect(x - this.bodyWidth / 2, y - this.bodyHeight, this.bodyWidth, this.bodyHeight);
            // Kopf der Rakete (Dreieck)
            ctx.beginPath();
            ctx.moveTo(x, y - this.bodyHeight - this.headHeight); // Spitze des Dreiecks
            ctx.lineTo(x - this.bodyWidth / 2, y - this.bodyHeight); // Linke untere Ecke
            ctx.lineTo(x + this.bodyWidth / 2, y - this.bodyHeight); // Rechte untere Ecke
            ctx.closePath();
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y); // Untere Mitte des Raketen-Körpers
            ctx.lineTo(x, y + this.fuseLength); // Ende der Zündschnur
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    Rakete2.Rocket2 = Rocket2;
    // Verwendung der Rocket-Klasse mit einem Canvas
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const rocket = new Rocket2(50, 100, 30, 50); // Beispiel mit Breite 50, Höhe 100, Kopfhöhe 30 und Zündschnurlänge 50
        rocket.drawRocket(ctx, canvas.width / 2, canvas.height / 2);
    }
})(Rakete2 || (Rakete2 = {}));
//# sourceMappingURL=bluerocket.js.map