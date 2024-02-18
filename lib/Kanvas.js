var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Kanvas_id, _Kanvas_canvas, _Kanvas_ctx, _Kanvas_center, _Kanvas_fillStyle, _Kanvas_strokeStyle, _Kanvas_lineWidth, _Kanvas_lineDash, _Kanvas_lineDashOffset, _Kanvas_textAlign, _Kanvas_textBaseLine, _Kanvas_font, _Kanvas_globalAlpha;
import Vector from "./Vector.js";
/**
 * A class that represent HTML5 Canvas element
 * @param {string} id - id of HTML Canvas Element
 * @param {number} width - width of the canvas element
 * @param {number} height - height of the canvas element
 */
class Kanvas {
    constructor(id, width, height) {
        _Kanvas_id.set(this, void 0);
        _Kanvas_canvas.set(this, void 0);
        _Kanvas_ctx.set(this, void 0);
        _Kanvas_center.set(this, void 0);
        _Kanvas_fillStyle.set(this, void 0);
        _Kanvas_strokeStyle.set(this, void 0);
        _Kanvas_lineWidth.set(this, void 0);
        _Kanvas_lineDash.set(this, void 0);
        _Kanvas_lineDashOffset.set(this, void 0);
        _Kanvas_textAlign.set(this, void 0);
        _Kanvas_textBaseLine.set(this, void 0);
        _Kanvas_font.set(this, void 0);
        _Kanvas_globalAlpha.set(this, void 0);
        __classPrivateFieldSet(this, _Kanvas_id, id, "f");
        __classPrivateFieldSet(this, _Kanvas_canvas, document.getElementById(id), "f");
        __classPrivateFieldSet(this, _Kanvas_ctx, __classPrivateFieldGet(this, _Kanvas_canvas, "f").getContext("2d"), "f");
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
        __classPrivateFieldSet(this, _Kanvas_center, new Vector(+(this.width / 2).toFixed(4), +(this.height / 2).toFixed(4)), "f");
        return this;
    }
    /**
     * Draws an image on the canvas
     * @param {CanvasImageSource} image - image to draw
     * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
     * @param {number} width - the width of the image
     * @param {number} height - the height of the image
     *
     * @return {Kanvas} this
     */
    drawImage(image, point, width, height) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").drawImage(image, point.x, point.y, width, height);
        return this;
    }
    /**
     * Rotates and draws an image on the canvas
     * @param {CanvasImageSource} image - image to draw
     * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
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
     * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
     * @param {number} radius - the radius of the circle
     *
     * @return {Kanvas} this Kanvas object
     */
    circle(point, radius) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").arc(point.x, point.y, radius, 0, 2 * Math.PI);
        return this;
    }
    /**
     * Draws a rectangle on the canvas
     * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
     * @param {number} width - the width of the rectangle
     * @param {number} height - the height of the rectangle
     *
     * @return {Kanvas} this Kanvas object
     */
    rect(point, width, height) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").rect(point.x, point.y, width, height);
        return this;
    }
    /**
     * Draws a line on the canvas
     * @param {Vector | {x: number, y: number}} begin - a Vector instance or an Object that contains x and y properties
     * @param {Vector | {x: number, y: number}} end - a Vector instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    line(begin, end) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").moveTo(begin.x, begin.y);
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").lineTo(end.x, end.y);
        return this;
    }
    /**
     * Moves the current drawing position to a specified point
     * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    moveTo(point) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").moveTo(point.x, point.y);
        return this;
    }
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    lineTo(point) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").lineTo(point.x, point.y);
        return this;
    }
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Object} param0
     * @param {string} param0.text
     * @param {Vector | {x: number, y: number}} param0.at
     * @param {string} [param0.fillStyle=this.#fillStyle]
     * @param {string} [param0.strokeStyle=this.#strokeStyle]
     * @param {number} [param0.size=16]
     *
     * @return {Kanvas} this Kanvas object
     */
    text({ text, at, fillStyle = __classPrivateFieldGet(this, _Kanvas_fillStyle, "f"), strokeStyle = __classPrivateFieldGet(this, _Kanvas_strokeStyle, "f"), size = 16, }) {
        this.beginPath();
        this.textAlign = "center";
        this.textBaseLine = "middle";
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.font = `${size}px Arial`;
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").fillText(text, at.x, at.y);
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").strokeText(text, at.x, at.y);
        return this;
    }
    /**
     * Begins a new path
     *
     * @return {Kanvas} this Kanvas object
     */
    beginPath() {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").beginPath();
        return this;
    }
    /**
     * Closes the current path
     *
     * @return {Kanvas} this Kanvas object
     */
    closePath() {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").closePath();
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
    stroke({ color = __classPrivateFieldGet(this, _Kanvas_strokeStyle, "f"), width = __classPrivateFieldGet(this, _Kanvas_lineWidth, "f"), dash = __classPrivateFieldGet(this, _Kanvas_lineDash, "f"), } = {}) {
        this.strokeStyle = color;
        this.lineWidth = width;
        this.lineDash = dash;
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").stroke();
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
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").fill();
        return this;
    }
    /**
     * Clears the canvas
     *
     * @return {Kanvas} this Kanvas object
     */
    clear() {
        __classPrivateFieldGet(this, _Kanvas_canvas, "f").height = this.height;
        return this;
    }
    /**
     * Translate the canvas context
     * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    translate(point) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").translate(point.x, point.y);
        return this;
    }
    /**
     * Rotates the canvas context
     * @param {number} angle - angle in radian
     *
     * @return {Kanvas} this Kanvas object
     */
    rotate(angle) {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").rotate(angle);
        return this;
    }
    /**
     * Saves the current canvas state
     *
     * @returns {Kanvas} this Kanvas object
     */
    save() {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").save();
        return this;
    }
    /**
     * Restores the canvas state to the last saved state
     *
     * @returns {Kanvas} this Kanvas object
     */
    restore() {
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").restore();
        return this;
    }
    set fillStyle(color) {
        __classPrivateFieldSet(this, _Kanvas_fillStyle, color, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").fillStyle = color;
    }
    set strokeStyle(color) {
        __classPrivateFieldSet(this, _Kanvas_strokeStyle, color, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").strokeStyle = color;
    }
    set lineWidth(width) {
        __classPrivateFieldSet(this, _Kanvas_lineWidth, width, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").lineWidth = width;
    }
    set lineDash(dash) {
        __classPrivateFieldSet(this, _Kanvas_lineDash, dash, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").setLineDash(dash);
    }
    set lineDashOffset(offset) {
        __classPrivateFieldSet(this, _Kanvas_lineDashOffset, offset, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").lineDashOffset = offset;
    }
    set width(width) {
        __classPrivateFieldGet(this, _Kanvas_canvas, "f").width = width;
    }
    set height(height) {
        __classPrivateFieldGet(this, _Kanvas_canvas, "f").height = height;
    }
    set textAlign(align) {
        __classPrivateFieldSet(this, _Kanvas_textAlign, align, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").textAlign = align;
    }
    set textBaseLine(align) {
        __classPrivateFieldSet(this, _Kanvas_textBaseLine, align, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").textBaseline = align;
    }
    set font(font) {
        __classPrivateFieldSet(this, _Kanvas_font, font, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").font = font;
    }
    set globalAlpha(alpha) {
        __classPrivateFieldSet(this, _Kanvas_globalAlpha, alpha, "f");
        __classPrivateFieldGet(this, _Kanvas_ctx, "f").globalAlpha = alpha;
    }
    get id() {
        return __classPrivateFieldGet(this, _Kanvas_id, "f");
    }
    get canvas() {
        return __classPrivateFieldGet(this, _Kanvas_canvas, "f");
    }
    get ctx() {
        return __classPrivateFieldGet(this, _Kanvas_ctx, "f");
    }
    get center() {
        return __classPrivateFieldGet(this, _Kanvas_center, "f");
    }
    get width() {
        return __classPrivateFieldGet(this, _Kanvas_canvas, "f").width;
    }
    get height() {
        return __classPrivateFieldGet(this, _Kanvas_canvas, "f").height;
    }
    get fillStyle() {
        return __classPrivateFieldGet(this, _Kanvas_fillStyle, "f");
    }
    get strokeStyle() {
        return __classPrivateFieldGet(this, _Kanvas_strokeStyle, "f");
    }
    get lineWidth() {
        return __classPrivateFieldGet(this, _Kanvas_lineWidth, "f");
    }
    get lineDash() {
        return __classPrivateFieldGet(this, _Kanvas_lineDash, "f");
    }
    get lineDashOffset() {
        return __classPrivateFieldGet(this, _Kanvas_lineDashOffset, "f");
    }
    get textAlign() {
        return __classPrivateFieldGet(this, _Kanvas_textAlign, "f");
    }
    get textBaseLine() {
        return __classPrivateFieldGet(this, _Kanvas_textBaseLine, "f");
    }
    get font() {
        return __classPrivateFieldGet(this, _Kanvas_font, "f");
    }
    get globalAlpha() {
        return __classPrivateFieldGet(this, _Kanvas_globalAlpha, "f");
    }
}
_Kanvas_id = new WeakMap(), _Kanvas_canvas = new WeakMap(), _Kanvas_ctx = new WeakMap(), _Kanvas_center = new WeakMap(), _Kanvas_fillStyle = new WeakMap(), _Kanvas_strokeStyle = new WeakMap(), _Kanvas_lineWidth = new WeakMap(), _Kanvas_lineDash = new WeakMap(), _Kanvas_lineDashOffset = new WeakMap(), _Kanvas_textAlign = new WeakMap(), _Kanvas_textBaseLine = new WeakMap(), _Kanvas_font = new WeakMap(), _Kanvas_globalAlpha = new WeakMap();
export default Kanvas;
