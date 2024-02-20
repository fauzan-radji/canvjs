import Vec2d from "./Vec2d";
/**
 * A class that represent HTML5 Canvas element
 * @param {string} id - id of HTML Canvas Element
 * @param {number} width - width of the canvas element
 * @param {number} height - height of the canvas element
 */
export default class Kanvas {
    private _id;
    private _canvas;
    private _ctx;
    private _center;
    private _fillStyle;
    private _strokeStyle;
    private _lineWidth;
    private _lineDash;
    private _lineDashOffset;
    private _textAlign;
    private _textBaseLine;
    private _font;
    private _globalAlpha;
    constructor(id: string, width: number, height: number);
    /**
     * Resizes the canvas element.
     * @param {number} width
     * @param {number} height
     *
     * @return {Kanvas} this
     */
    resize(width: number, height: number): Kanvas;
    /**
     * Draws an image on the canvas
     * @param {CanvasImageSource} image - image to draw
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} width - the width of the image
     * @param {number} height - the height of the image
     *
     * @return {Kanvas} this
     */
    drawImage(image: CanvasImageSource, point: Vec2d | {
        x: number;
        y: number;
    }, width: number, height: number): Kanvas;
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
    rotateAndDrawImage(image: CanvasImageSource, point: Vec2d | {
        x: number;
        y: number;
    }, width: number, height: number, angle: number): Kanvas;
    /**
     * Draws a circle on the canvas
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} radius - the radius of the circle
     *
     * @return {Kanvas} this Kanvas object
     */
    circle(point: Vec2d | {
        x: number;
        y: number;
    }, radius: number): Kanvas;
    /**
     * Draws a rectangle on the canvas
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} width - the width of the rectangle
     * @param {number} height - the height of the rectangle
     *
     * @return {Kanvas} this Kanvas object
     */
    rect(point: Vec2d | {
        x: number;
        y: number;
    }, width: number, height: number): Kanvas;
    /**
     * Draws a line on the canvas
     * @param {Vec2d | {x: number, y: number}} begin - a Vec2d instance or an Object that contains x and y properties
     * @param {Vec2d | {x: number, y: number}} end - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    line(begin: Vec2d | {
        x: number;
        y: number;
    }, end: Vec2d | {
        x: number;
        y: number;
    }): Kanvas;
    /**
     * Moves the current drawing position to a specified point
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    moveTo(point: Vec2d | {
        x: number;
        y: number;
    }): Kanvas;
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    lineTo(point: Vec2d | {
        x: number;
        y: number;
    }): Kanvas;
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
    text({ text, at, fillStyle, strokeStyle, size, }: {
        text: string;
        at: Vec2d | {
            x: number;
            y: number;
        };
        fillStyle?: string | CanvasGradient | CanvasPattern;
        strokeStyle?: string | CanvasGradient | CanvasPattern;
        size?: number;
    }): Kanvas;
    /**
     * Begins a new path
     *
     * @return {Kanvas} this Kanvas object
     */
    beginPath(): Kanvas;
    /**
     * Closes the current path
     *
     * @return {Kanvas} this Kanvas object
     */
    closePath(): Kanvas;
    /**
     * Strokes the current path
     * @param {Object} [param0={}]
     * @param {string} [param0.color=this._strokeStyle]
     * @param {number} [param0.width=this._lineWidth]
     * @param {number[]} [param0.dash=this._lineDash]
     *
     * @return {Kanvas} this Kanvas object
     */
    stroke({ color, width, dash, }?: {
        color?: string | CanvasGradient | CanvasPattern;
        width?: number;
        dash?: Iterable<number>;
    }): Kanvas;
    /**
     * Fills the current path
     * @param {string} [color="#fff"] - color of the fill
     *
     * @return {Kanvas} this Kanvas object
     */
    fill(color?: string): Kanvas;
    /**
     * Clears the canvas
     *
     * @return {Kanvas} this Kanvas object
     */
    clear(): Kanvas;
    /**
     * Translate the canvas context
     * @param {Vec2d | {x: number, y: number}} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    translate(point: Vec2d | {
        x: number;
        y: number;
    }): Kanvas;
    /**
     * Rotates the canvas context
     * @param {number} angle - angle in radian
     *
     * @return {Kanvas} this Kanvas object
     */
    rotate(angle: number): Kanvas;
    /**
     * Saves the current canvas state
     *
     * @returns {Kanvas} this Kanvas object
     */
    save(): Kanvas;
    /**
     * Restores the canvas state to the last saved state
     *
     * @returns {Kanvas} this Kanvas object
     */
    restore(): Kanvas;
    requestPointerLock(): void;
    set fillStyle(color: string | CanvasGradient | CanvasPattern);
    set strokeStyle(color: string | CanvasGradient | CanvasPattern);
    set lineWidth(width: number);
    set lineDash(dash: Iterable<number>);
    set lineDashOffset(offset: number);
    set width(width: number);
    set height(height: number);
    set textAlign(align: CanvasTextAlign);
    set textBaseLine(align: CanvasTextBaseline);
    set font(font: string);
    set globalAlpha(alpha: number);
    get id(): string;
    get canvas(): HTMLCanvasElement;
    get ctx(): CanvasRenderingContext2D;
    get center(): Vec2d;
    get width(): number;
    get height(): number;
    get fillStyle(): string | CanvasGradient | CanvasPattern;
    get strokeStyle(): string | CanvasGradient | CanvasPattern;
    get lineWidth(): number;
    get lineDash(): Iterable<number>;
    get lineDashOffset(): number;
    get textAlign(): CanvasTextAlign;
    get textBaseLine(): CanvasTextBaseline;
    get font(): string;
    get globalAlpha(): number;
}
