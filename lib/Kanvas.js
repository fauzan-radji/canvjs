import Vec2d from "./Vec2d.js";
/**
 * A class that represent HTML5 Canvas element
 * @param {string} id - id of HTML Canvas Element
 * @param {number} width - width of the canvas element
 * @param {number} height - height of the canvas element
 */
export default class Kanvas {
    #id;
    #canvas;
    #context;
    #center;
    #fillStyle;
    #strokeStyle;
    #lineWidth;
    #lineDash;
    #lineDashOffset;
    #textAlign;
    #textBaseLine;
    #font;
    #globalAlpha;
    #aspectRatio;
    constructor(id, width, height) {
        this.#id = id;
        this.#canvas = document.getElementById(id);
        this.#context = this.#canvas.getContext("2d");
        this.fillStyle = "#fff";
        this.strokeStyle = "#fff";
        this.lineWidth = 1;
        this.lineDash = [];
        this.lineDashOffset = 0;
        this.resize(width, height);
    }
    /**
     * Resizes the canvas element.
     * @param {number} width
     * @param {number} height
     *
     * @return {Kanvas} this
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
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
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
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
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
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
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
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
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
     * @param {Vec2d | {x: number, y: number}} begin - a Vec2d instance or an Object that contains x and y properties
     * @param {Vec2d | {x: number, y: number}} end - a Vec2d instance or an Object that contains x and y properties
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
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    moveTo(point) {
        this.#context.moveTo(point.x, point.y);
        return this;
    }
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
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
     * @param {Vec2d | {x: number, y: number}} param0.at
     * @param {string} [param0.fillStyle=this.#fillStyle]
     * @param {string} [param0.strokeStyle=this.#strokeStyle]
     * @param {number} [param0.size=16]
     *
     * @return {Kanvas} this Kanvas object
     */
    text({ text, at, fillStyle = this.#fillStyle, strokeStyle = this.#strokeStyle, size = 16, }) {
        this.beginPath();
        this.textAlign = "center";
        this.textBaseLine = "middle";
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
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
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
    requestPointerLock() {
        this.#canvas.requestPointerLock();
    }
    set fillStyle(color) {
        this.#fillStyle = color;
        this.#context.fillStyle = color;
    }
    set strokeStyle(color) {
        this.#strokeStyle = color;
        this.#context.strokeStyle = color;
    }
    set lineWidth(width) {
        this.#lineWidth = width;
        this.#context.lineWidth = width;
    }
    set lineDash(dash) {
        this.#lineDash = dash;
        this.#context.setLineDash(dash);
    }
    set lineDashOffset(offset) {
        this.#lineDashOffset = offset;
        this.#context.lineDashOffset = offset;
    }
    set width(width) {
        this.#canvas.width = width;
        this.#aspectRatio = width / this.#canvas.height;
    }
    set height(height) {
        this.#canvas.height = height;
        this.#aspectRatio = this.#canvas.width / height;
    }
    set textAlign(align) {
        this.#textAlign = align;
        this.#context.textAlign = align;
    }
    set textBaseLine(align) {
        this.#textBaseLine = align;
        this.#context.textBaseline = align;
    }
    set font(font) {
        this.#font = font;
        this.#context.font = font;
    }
    set globalAlpha(alpha) {
        this.#globalAlpha = alpha;
        this.#context.globalAlpha = alpha;
    }
    get id() {
        return this.#id;
    }
    get canvas() {
        return this.#canvas;
    }
    get context() {
        return this.#context;
    }
    get center() {
        return this.#center;
    }
    get width() {
        return this.#canvas.width;
    }
    get height() {
        return this.#canvas.height;
    }
    get aspectRatio() {
        return this.#aspectRatio;
    }
    get fillStyle() {
        return this.#fillStyle;
    }
    get strokeStyle() {
        return this.#strokeStyle;
    }
    get lineWidth() {
        return this.#lineWidth;
    }
    get lineDash() {
        return this.#lineDash;
    }
    get lineDashOffset() {
        return this.#lineDashOffset;
    }
    get textAlign() {
        return this.#textAlign;
    }
    get textBaseLine() {
        return this.#textBaseLine;
    }
    get font() {
        return this.#font;
    }
    get globalAlpha() {
        return this.#globalAlpha;
    }
}
