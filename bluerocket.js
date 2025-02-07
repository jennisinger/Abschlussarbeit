"use strict";
var Rakete2;
(function (Rakete2) {
    class Rocket2 {
        
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
            
            ctx.fillStyle = "blue";
            ctx.fillRect(x - this.bodyWidth / 2, y - this.bodyHeight, this.bodyWidth, this.bodyHeight);
            
            ctx.beginPath();
            ctx.moveTo(x, y - this.bodyHeight - this.headHeight); 
            ctx.lineTo(x - this.bodyWidth / 2, y - this.bodyHeight); 
            ctx.lineTo(x + this.bodyWidth / 2, y - this.bodyHeight); 
            ctx.closePath();
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y); 
            ctx.lineTo(x, y + this.fuseLength); 
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    Rakete2.Rocket2 = Rocket2;
    
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const rocket = new Rocket2(50, 100, 30, 50); 
        rocket.drawRocket(ctx, canvas.width / 2, canvas.height / 2);
    }
})(Rakete2 || (Rakete2 = {}));
