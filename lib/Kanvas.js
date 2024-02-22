import Vec2d from "./Vec2d.js";
/**
 * Represents a canvas element and provides methods for drawing shapes and images on it.
 */
export default class Kanvas {
    /**
     * The ID of the canvas element.
     */
    #id;
    /**
     * The HTML canvas element.
     */
    #canvas;
    /**
     * The 2D rendering context of the canvas.
     */
    #context;
    /**
     * The center point of the canvas.
     */
    #center;
    /**
     * The fill style used for drawing shapes.
     */
    #fillStyle;
    /**
     * The stroke style used for drawing shapes.
     */
    #strokeStyle;
    /**
     * The line width used for drawing lines and borders.
     */
    #lineWidth;
    /**
     * The line dash pattern used for drawing dashed lines.
     */
    #lineDash;
    /**
     * The line dash offset used for drawing dashed lines.
     */
    #lineDashOffset;
    /**
     * The text alignment used for drawing text.
     */
    #textAlign;
    /**
     * The text baseline used for drawing text.
     */
    #textBaseline;
    /**
     * The font used for drawing text.
     */
    #font;
    /**
     * The global alpha value used for drawing shapes and images.
     */
    #globalAlpha;
    /**
     * The aspect ratio of the canvas.
     */
    #aspectRatio;
    /**
     * Creates a new instance of the Kanvas class.
     * @param {string} id - The ID of the canvas element.
     * @param {number} width - The width of the canvas.
     * @param {number} height - The height of the canvas.
     */
    constructor(id, width, height) {
        this.#id = id;
        this.#canvas = document.getElementById(id);
        this.#context = this.#canvas.getContext("2d");
        this.fillStyle = "#fff";
        this.strokeStyle = "#fff";
        this.lineWidth = 1;
        this.lineDash = [];
        this.lineDashOffset = 0;
        this.textAlign = "start";
        this.textBaseline = "alphabetic";
        this.font = "10px sans-serif";
        this.globalAlpha = 1;
        this.resize(width, height);
    }
    /**
     * Resizes the canvas element.
     * @param {number} width - The new width of the canvas.
     * @param {number} height - The new height of the canvas.
     * @returns {Kanvas} The updated Kanvas object.
     */
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.#center = new Vec2d(+(this.width / 2).toFixed(4), +(this.height / 2).toFixed(4));
        return this;
    }
    /**
     * Draws an image on the canvas
     * @param {CanvasImageSource} image - image to draw
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} width - the width of the image
     * @param {number} height - the height of the image
     *
     * @return {Kanvas} this
     */
    drawImage(image, point, width, height) {
        this.#context.drawImage(image, point.x, point.y, width, height);
        return this;
    }
    /**
     * Rotates and draws an image on the canvas
     * @param {CanvasImageSource} image - image to draw
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} width - the width of the image
     * @param {number} height - the height of the image
     * @param {number} angle - the angle in radian
     *
     * @return {Kanvas} this
     */
    rotateAndDrawImage(image, point, width, height, angle) {
        this.save()
            .translate(point)
            .rotate(-angle)
            .drawImage(image, {
            x: -width / 2,
            y: -height / 2,
        }, width, height)
            .restore();
        return this;
    }
    /**
     * Draws a circle on the canvas
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} radius - the radius of the circle
     *
     * @return {Kanvas} this Kanvas object
     */
    circle(point, radius) {
        this.#context.arc(point.x, point.y, radius, 0, 2 * Math.PI);
        return this;
    }
    /**
     * Draws a rectangle on the canvas
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} width - the width of the rectangle
     * @param {number} height - the height of the rectangle
     *
     * @return {Kanvas} this Kanvas object
     */
    rect(point, width, height) {
        this.#context.rect(point.x, point.y, width, height);
        return this;
    }
    /**
     * Draws a line on the canvas
     * @param {Point2d} begin - a Vec2d instance or an Object that contains x and y properties
     * @param {Point2d} end - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    line(begin, end) {
        this.#context.moveTo(begin.x, begin.y);
        this.#context.lineTo(end.x, end.y);
        return this;
    }
    /**
     * Moves the current drawing position to a specified point
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    moveTo(point) {
        this.#context.moveTo(point.x, point.y);
        return this;
    }
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    lineTo(point) {
        this.#context.lineTo(point.x, point.y);
        return this;
    }
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Object} param0
     * @param {string} param0.text
     * @param {Point2d} param0.at
     * @param {string} [param0.fillStyle=this.#fillStyle]
     * @param {string} [param0.strokeStyle=this.#strokeStyle]
     * @param {number} [param0.size=16]
     *
     * @return {Kanvas} this Kanvas object
     */
    text({ text, at, fillStyle = this.#fillStyle, strokeStyle = this.#strokeStyle, size = 16, }) {
        this.beginPath();
        this.textAlign = "center";
        this.textBaseline = "middle";
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.font = `${size}px Arial`;
        this.#context.fillText(text, at.x, at.y);
        this.#context.strokeText(text, at.x, at.y);
        return this;
    }
    /**
     * Begins a new path
     *
     * @return {Kanvas} this Kanvas object
     */
    beginPath() {
        this.#context.beginPath();
        return this;
    }
    /**
     * Closes the current path
     *
     * @return {Kanvas} this Kanvas object
     */
    closePath() {
        this.#context.closePath();
        return this;
    }
    /**
     * Strokes the current path
     * @param {Object} [param0={}]
     * @param {string} [param0.color=this.#strokeStyle]
     * @param {number} [param0.width=this.#lineWidth]
     * @param {number[]} [param0.dash=this.#lineDash]
     *
     * @return {Kanvas} this Kanvas object
     */
    stroke({ color = this.#strokeStyle, width = this.#lineWidth, dash = this.#lineDash, } = {}) {
        this.strokeStyle = color;
        this.lineWidth = width;
        this.lineDash = dash;
        this.#context.stroke();
        return this;
    }
    /**
     * Fills the current path
     * @param {string} [color="#fff"] - color of the fill
     *
     * @return {Kanvas} this Kanvas object
     */
    fill(color = "#fff") {
        this.fillStyle = color;
        this.#context.fill();
        return this;
    }
    /** Fills the canvas with a specified color
     * @param {string} [color="#000"] - color to fill the canvas with
     * @return {Kanvas} this Kanvas object
     */
    background(color = "#000") {
        this.#canvas.style.backgroundColor = color;
        return this;
    }
    /**
     * Clears the canvas
     *
     * @return {Kanvas} this Kanvas object
     */
    clear() {
        this.#context.clearRect(0, 0, this.width, this.height);
        return this;
    }
    /**
     * Translate the canvas context
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    translate(point) {
        this.#context.translate(point.x, point.y);
        return this;
    }
    /**
     * Rotates the canvas context
     * @param {number} angle - angle in radian
     *
     * @return {Kanvas} this Kanvas object
     */
    rotate(angle) {
        this.#context.rotate(angle);
        return this;
    }
    /**
     * Saves the current canvas state
     *
     * @returns {Kanvas} this Kanvas object
     */
    save() {
        this.#context.save();
        return this;
    }
    /**
     * Restores the canvas state to the last saved state
     *
     * @returns {Kanvas} this Kanvas object
     */
    restore() {
        this.#context.restore();
        return this;
    }
    /**
     * Requests the pointer lock for the canvas element.
     *
     * @returns {void}
     */
    requestPointerLock() {
        this.#canvas.requestPointerLock();
    }
    set fillStyle(color) {
        this.#fillStyle = color;
        this.#context.fillStyle = color;
    }
    /**
     * Sets the stroke style used for drawing shapes.
     * @param {string | CanvasGradient | CanvasPattern} value - The new stroke style.
     */
    set strokeStyle(value) {
        this.#strokeStyle = value;
        this.#context.strokeStyle = value;
    }
    /**
     * Sets the line width used for drawing lines and borders.
     * @param {number} value - The new line width.
     */
    set lineWidth(value) {
        this.#lineWidth = value;
        this.#context.lineWidth = value;
    }
    /**
     * Sets the line dash pattern used for drawing dashed lines.
     * @param {Iterable<number>} value - The new line dash pattern.
     */
    set lineDash(value) {
        this.#lineDash = value;
        this.#context.setLineDash(Array.from(value));
    }
    /**
     * Sets the line dash offset used for drawing dashed lines.
     * @param {number} value - The new line dash offset.
     */
    set lineDashOffset(value) {
        this.#lineDashOffset = value;
        this.#context.lineDashOffset = value;
    }
    /**
     * Sets the width of the canvas.
     * @param {number} value - The new width of the canvas.
     */
    set width(value) {
        this.#canvas.width = value;
        this.#aspectRatio = value / this.#canvas.height;
    }
    /**
     * Sets the height of the canvas.
     * @param {number} value - The new height of the canvas.
     */
    set height(value) {
        this.#canvas.height = value;
        this.#aspectRatio = this.#canvas.width / value;
    }
    /**
     * Sets the text alignment used for drawing text.
     * @param {CanvasTextAlign} value - The new text alignment.
     */
    set textAlign(value) {
        this.#textAlign = value;
        this.#context.textAlign = value;
    }
    /**
     * Sets the text baseline used for drawing text.
     * @param {CanvasTextBaseline} value - The new text baseline.
     */
    set textBaseline(value) {
        this.#textBaseline = value;
        this.#context.textBaseline = value;
    }
    /**
     * Sets the font used for drawing text.
     * @param {string} value - The new font.
     */
    set font(value) {
        this.#font = value;
        this.#context.font = value;
    }
    /**
     * Sets the global alpha value used for drawing shapes and images.
     * @param {number} value - The new global alpha value.
     */
    set globalAlpha(value) {
        this.#globalAlpha = value;
        this.#context.globalAlpha = value;
    }
    /**
     * Gets the ID of the canvas element.
     * @returns {string} The ID of the canvas element.
     */
    get id() {
        return this.#id;
    }
    /**
     * Gets the HTML canvas element.
     * @returns {HTMLCanvasElement} The HTML canvas element.
     */
    get canvas() {
        return this.#canvas;
    }
    /**
     * Gets the 2D rendering context of the canvas.
     * @returns {CanvasRenderingContext2D} The 2D rendering context of the canvas.
     */
    get context() {
        return this.#context;
    }
    /**
     * Gets the center point of the canvas.
     * @returns {Vec2d} The center point of the canvas.
     */
    get center() {
        return this.#center;
    }
    /**
     * Gets the width of the canvas.
     * @returns {number} The width of the canvas.
     */
    get width() {
        return this.#canvas.width;
    }
    /**
     * Gets the height of the canvas.
     * @returns {number} The height of the canvas.
     */
    get height() {
        return this.#canvas.height;
    }
    /**
     * Gets the aspect ratio of the canvas.
     * @returns {number} The aspect ratio of the canvas.
     */
    get aspectRatio() {
        return this.#aspectRatio;
    }
    /**
     * Gets the fill style used for drawing shapes.
     * @returns {string | CanvasGradient | CanvasPattern} The fill style used for drawing shapes.
     */
    get fillStyle() {
        return this.#fillStyle;
    }
    /**
     * Gets the stroke style used for drawing shapes.
     * @returns {string | CanvasGradient | CanvasPattern} The stroke style used for drawing shapes.
     */
    get strokeStyle() {
        return this.#strokeStyle;
    }
    /**
     * Gets the line width used for drawing lines and borders.
     * @returns {number} The line width used for drawing lines and borders.
     */
    get lineWidth() {
        return this.#lineWidth;
    }
    /**
     * Gets the line dash pattern used for drawing dashed lines.
     * @returns {Iterable<number>} The line dash pattern used for drawing dashed lines.
     */
    get lineDash() {
        return this.#lineDash;
    }
    /**
     * Gets the line dash offset used for drawing dashed lines.
     * @returns {number} The line dash offset used for drawing dashed lines.
     */
    get lineDashOffset() {
        return this.#lineDashOffset;
    }
    /**
     * Gets the text alignment used for drawing text.
     * @returns {CanvasTextAlign} The text alignment used for drawing text.
     */
    get textAlign() {
        return this.#textAlign;
    }
    /**
     * Gets the text baseline used for drawing text.
     * @returns {CanvasTextBaseline} The text baseline used for drawing text.
     */
    get textBaseline() {
        return this.#textBaseline;
    }
    /**
     * Gets the font used for drawing text.
     * @returns {string} The font used for drawing text.
     */
    get font() {
        return this.#font;
    }
    /**
     * Gets the global alpha value used for drawing shapes and images.
     * @returns {number} The global alpha value used for drawing shapes and images.
     */
    get globalAlpha() {
        return this.#globalAlpha;
    }
}
