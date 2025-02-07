const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
    function drawRocket(x: number, y: number) {
        // Körper (Rechteck)
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, 30, 80);
        
        // Spitze (Dreieck)
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 15, y - 30);
        ctx.lineTo(x + 30, y);
        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.fill();
        
        // Zündschnur (Linie)
        ctx.beginPath();
        ctx.moveTo(x + 15, y + 80);
        ctx.lineTo(x + 15, y + 100);
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    drawRocket(100, 100);
    drawRocket(200, 150);
    drawRocket(300, 200);
}
