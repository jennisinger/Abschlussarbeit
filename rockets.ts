import { Rocket1 } from "./redrocket";
import { BlueRocket } from "./bluerocket";
import { PurpleRocket } from "./purplerocket";

// Canvas-Element holen
const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
    // Raketen-Instanzen erstellen
    const redRocket = new Rocket1(50, 100, 30, 50);
    const blueRocket = new BlueRocket(50, 100, 30, 50);
    const purpleRocket = new PurpleRocket(50, 100, 30, 50);

    const startY = canvas.height / 2;
    const spacing = 120; // Abstand zwischen den Raketen

    // Raketen nebeneinander zeichnen
    redRocket.drawRocket(ctx, 100, startY);
    blueRocket.drawRocket(ctx, 100 + spacing, startY);
    purpleRocket.drawRocket(ctx, 100 + 2 * spacing, startY);
}
