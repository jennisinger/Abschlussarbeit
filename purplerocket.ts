namespace Rakete3
{
export class Rocket3 {
   
    bodyWidth: number;
    bodyHeight: number;
    headHeight: number;
    fuseLength: number;
  
    constructor(bodyWidth: number, bodyHeight: number, headHeight: number, fuseLength: number) {
      this.bodyWidth = bodyWidth;
      this.bodyHeight = bodyHeight;
      this.headHeight = headHeight;
      this.fuseLength = fuseLength;
    }
  
    
    drawRocket(ctx: CanvasRenderingContext2D, x: number, y: number): void {
      
      ctx.fillStyle = "purple";
      ctx.fillRect(x - this.bodyWidth / 2, y - this.bodyHeight, this.bodyWidth, this.bodyHeight);
  
      
      ctx.beginPath();
      ctx.moveTo(x, y - this.bodyHeight - this.headHeight); 
      ctx.lineTo(x - this.bodyWidth / 2, y - this.bodyHeight); 
      ctx.lineTo(x + this.bodyWidth / 2, y - this.bodyHeight); 
      ctx.closePath();
      ctx.fillStyle = "purple";
      ctx.fill();
  
      ctx.beginPath();
      ctx.moveTo(x, y); 
      ctx.lineTo(x, y + this.fuseLength); 
      ctx.strokeStyle = "purple";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
  
  
  const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  
  if (ctx) {
    const rocket = new Rocket3 (50, 100, 30, 50); 
    rocket.drawRocket(ctx, canvas.width / 2, canvas.height / 2);
  }
} 