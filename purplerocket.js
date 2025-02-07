"use strict";
var Rakete3;
(function (Rakete3) {
    class Rocket3 {
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
            ctx.fillStyle = "purple";
            ctx.fillRect(x - this.bodyWidth / 2, y - this.bodyHeight, this.bodyWidth, this.bodyHeight);
            // Kopf der Rakete (Dreieck)
            ctx.beginPath();
            ctx.moveTo(x, y - this.bodyHeight - this.headHeight); // Spitze des Dreiecks
            ctx.lineTo(x - this.bodyWidth / 2, y - this.bodyHeight); // Linke untere Ecke
            ctx.lineTo(x + this.bodyWidth / 2, y - this.bodyHeight); // Rechte untere Ecke
            ctx.closePath();
            ctx.fillStyle = "purple";
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y); // Untere Mitte des Raketen-Körpers
            ctx.lineTo(x, y + this.fuseLength); // Ende der Zündschnur
            ctx.strokeStyle = "purple";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    // Verwendung der Rocket-Klasse mit einem Canvas
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const rocket = new Rocket3(50, 100, 30, 50); // Beispiel mit Breite 50, Höhe 100, Kopfhöhe 30 und Zündschnurlänge 50
        rocket.drawRocket(ctx, canvas.width / 2, canvas.height / 2);
    }
})(Rakete3 || (Rakete3 = {}));
//# sourceMappingURL=purplerocket.js.map