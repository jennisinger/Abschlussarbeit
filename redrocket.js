"use strict";
var Rakete1;
(function (Rakete1) {
    class Rocket1 {
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
        drawRocket(ctx, x, y) {
            ctx.fillStyle = "red";
            ctx.fillRect(x - this.bodyWidth / 2, y - this.bodyHeight, this.bodyWidth, this.bodyHeight);
            ctx.beginPath();
            ctx.moveTo(x, y - this.bodyHeight - this.headHeight);
            ctx.lineTo(x - this.bodyWidth / 2, y - this.bodyHeight);
            ctx.lineTo(x + this.bodyWidth / 2, y - this.bodyHeight);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + this.fuseLength);
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    Rakete1.Rocket1 = Rocket1;
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const rocket = new Rocket1(50, 100, 30, 50);
        rocket.drawRocket(ctx, canvas.width / 2, canvas.height / 2);
    }
})(Rakete1 || (Rakete1 = {}));
//# sourceMappingURL=redrocket.js.map