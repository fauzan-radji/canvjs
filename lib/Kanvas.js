import Vec2d from "./Vec2d";
/**
 * A class that represent HTML5 Canvas element
 * @param {string} id - id of HTML Canvas Element
 * @param {number} width - width of the canvas element
 * @param {number} height - height of the canvas element
 */
export default class Kanvas {
    _id;
    _canvas;
    _ctx;
    _center;
    _fillStyle;
    _strokeStyle;
    _lineWidth;
    _lineDash;
    _lineDashOffset;
    _textAlign;
    _textBaseLine;
    _font;
    _globalAlpha;
    constructor(id, width, height) {
        this._id = id;
        this._canvas = document.getElementById(id);
        this._ctx = this._canvas.getContext("2d");
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
        this._center = new Vec2d(+(this.width / 2).toFixed(4), +(this.height / 2).toFixed(4));
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
        this._ctx.drawImage(image, point.x, point.y, width, height);
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
        this._ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);
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
        this._ctx.rect(point.x, point.y, width, height);
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
        this._ctx.moveTo(begin.x, begin.y);
        this._ctx.lineTo(end.x, end.y);
        return this;
    }
    /**
     * Moves the current drawing position to a specified point
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    moveTo(point) {
        this._ctx.moveTo(point.x, point.y);
        return this;
    }
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    lineTo(point) {
        this._ctx.lineTo(point.x, point.y);
        return this;
    }
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Object} param0
     * @param {string} param0.text
     * @param {Vec2d | {x: number, y: number}} param0.at
     * @param {string} [param0.fillStyle=this._fillStyle]
     * @param {string} [param0.strokeStyle=this._strokeStyle]
     * @param {number} [param0.size=16]
     *
     * @return {Kanvas} this Kanvas object
     */
    text({ text, at, fillStyle = this._fillStyle, strokeStyle = this._strokeStyle, size = 16, }) {
        this.beginPath();
        this.textAlign = "center";
        this.textBaseLine = "middle";
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.font = `${size}px Arial`;
        this._ctx.fillText(text, at.x, at.y);
        this._ctx.strokeText(text, at.x, at.y);
        return this;
    }
    /**
     * Begins a new path
     *
     * @return {Kanvas} this Kanvas object
     */
    beginPath() {
        this._ctx.beginPath();
        return this;
    }
    /**
     * Closes the current path
     *
     * @return {Kanvas} this Kanvas object
     */
    closePath() {
        this._ctx.closePath();
        return this;
    }
    /**
     * Strokes the current path
     * @param {Object} [param0={}]
     * @param {string} [param0.color=this._strokeStyle]
     * @param {number} [param0.width=this._lineWidth]
     * @param {number[]} [param0.dash=this._lineDash]
     *
     * @return {Kanvas} this Kanvas object
     */
    stroke({ color = this._strokeStyle, width = this._lineWidth, dash = this._lineDash, } = {}) {
        this.strokeStyle = color;
        this.lineWidth = width;
        this.lineDash = dash;
        this._ctx.stroke();
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
        this._ctx.fill();
        return this;
    }
    /**
     * Clears the canvas
     *
     * @return {Kanvas} this Kanvas object
     */
    clear() {
        this._canvas.height = this.height;
        return this;
    }
    /**
     * Translate the canvas context
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    translate(point) {
        this._ctx.translate(point.x, point.y);
        return this;
    }
    /**
     * Rotates the canvas context
     * @param {number} angle - angle in radian
     *
     * @return {Kanvas} this Kanvas object
     */
    rotate(angle) {
        this._ctx.rotate(angle);
        return this;
    }
    /**
     * Saves the current canvas state
     *
     * @returns {Kanvas} this Kanvas object
     */
    save() {
        this._ctx.save();
        return this;
    }
    /**
     * Restores the canvas state to the last saved state
     *
     * @returns {Kanvas} this Kanvas object
     */
    restore() {
        this._ctx.restore();
        return this;
    }
    requestPointerLock() {
        this._canvas.requestPointerLock();
    }
    set fillStyle(color) {
        this._fillStyle = color;
        this._ctx.fillStyle = color;
    }
    set strokeStyle(color) {
        this._strokeStyle = color;
        this._ctx.strokeStyle = color;
    }
    set lineWidth(width) {
        this._lineWidth = width;
        this._ctx.lineWidth = width;
    }
    set lineDash(dash) {
        this._lineDash = dash;
        this._ctx.setLineDash(dash);
    }
    set lineDashOffset(offset) {
        this._lineDashOffset = offset;
        this._ctx.lineDashOffset = offset;
    }
    set width(width) {
        this._canvas.width = width;
    }
    set height(height) {
        this._canvas.height = height;
    }
    set textAlign(align) {
        this._textAlign = align;
        this._ctx.textAlign = align;
    }
    set textBaseLine(align) {
        this._textBaseLine = align;
        this._ctx.textBaseline = align;
    }
    set font(font) {
        this._font = font;
        this._ctx.font = font;
    }
    set globalAlpha(alpha) {
        this._globalAlpha = alpha;
        this._ctx.globalAlpha = alpha;
    }
    get id() {
        return this._id;
    }
    get canvas() {
        return this._canvas;
    }
    get ctx() {
        return this._ctx;
    }
    get center() {
        return this._center;
    }
    get width() {
        return this._canvas.width;
    }
    get height() {
        return this._canvas.height;
    }
    get fillStyle() {
        return this._fillStyle;
    }
    get strokeStyle() {
        return this._strokeStyle;
    }
    get lineWidth() {
        return this._lineWidth;
    }
    get lineDash() {
        return this._lineDash;
    }
    get lineDashOffset() {
        return this._lineDashOffset;
    }
    get textAlign() {
        return this._textAlign;
    }
    get textBaseLine() {
        return this._textBaseLine;
    }
    get font() {
        return this._font;
    }
    get globalAlpha() {
        return this._globalAlpha;
    }
}
