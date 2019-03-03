class Player extends CollidableMixIn(
    GravityMixIn(
        MovementMixIn(
            JumpingMixIn(
                ShootingActionMixIn(
                    KeyboardControlMixIn(Entity)))))) {

    constructor(width, height, color, x, y) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.keyboard_control_setup(KEY_UP, KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_SPACE);
        this.gravity_setup();
        this.movement_setup(.5);
        this.jumping_setup();
        this.shooting_setup();
        this.collidable_setup();
    }

    draw() {
        let viewport = Viewport.getInstance();
        let view_coords = viewport.mapToViewport(this.x, this.y);
        let view_x = view_coords[0];
        let view_y = view_coords[1];

        // bounding box
        // CTX.strokeStyle = this.color;
        // CTX.strokeRect(view_x, view_y, this.width, this.height);

        CTX.beginPath();
        CTX.lineWidth = "5";
        CTX.strokeStyle = this.color;  // Green path
        CTX.moveTo(view_x + this.width / 2, view_y + this.height / 3);
        CTX.lineTo(view_x + this.width / 2, (view_y + (2 * (this.height/3))));
        CTX.lineTo(view_x, view_y + this.height);
        CTX.moveTo(view_x + this.width / 2, (view_y + (2 * (this.height/3))));
        CTX.lineTo(view_x + this.width, view_y + this.height);
        CTX.moveTo(view_x, view_y + this.height / 2);
        CTX.lineTo(view_x + this.width, view_y + this.height / 2);
        CTX.stroke();
        CTX.beginPath();
        CTX.arc(view_x + this.width/2, view_y + this.height / 6, 10, 0, 2 * Math.PI);
        CTX.fillStyle = this.color;
        CTX.fill();
        CTX.stroke();  // Draw it
    }
}
