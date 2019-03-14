class HUD extends Entity {
    constructor(player, width, height, xpos, ypos) {
        super();
        this.player = player;
        this.width = width;
        this.height = height;
        this.xpos = xpos;
        this.ypos = ypos;
    }

    update() {

    }

    draw() {
        CTX.fillStyle = "rgb(220, 220, 220)";
        CTX.fillRect(this.xpos, this.ypos, this.width, this.height);

        CTX.font = "40px Arial";
        CTX.fillStyle = "black";
        CTX.fillText("Ammo:", CANVAS_WIDTH - 250, 40);
        let bullets = this.player.ammoArray.length;

        CTX.fillStyle = "red";
        if (bullets > 0) {
            CTX.fillRect(CANVAS_WIDTH - 100, 10, 20, 30);
        }
        if (bullets > 1) {
            CTX.fillRect(CANVAS_WIDTH - 70, 10, 20, 30);
        }
        if (bullets > 2) {
            CTX.fillRect(CANVAS_WIDTH - 40, 10, 20, 30);
        }


        CTX.font = "40px Arial";
        CTX.fillStyle = "black";
        CTX.fillText("Health:", 10, 40);
        let health = this.player.healthPoints;
        let image = images.get("heart");

        for (let i = 0; i < health; i++) {
            CTX.drawImage(image, 150 + (i * 40), 10, 30, 30);
        }
    }
}
