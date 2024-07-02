import Vec2d, { Point2d } from "./Vec2d.js";
export type Color = string | CanvasGradient | CanvasPattern;
export type CSSColor = string;
/**
 * Represents a canvas element and provides methods for drawing shapes and images on it.
 */
export default class Kanvas {
    #private;
    /**
     * Creates a new instance of the Kanvas class.
     * @param {string} id - The ID of the canvas element.
     * @param {number} width - The width of the canvas.
     * @param {number} height - The height of the canvas.
     */
    constructor(id: string, width: number, height: number);
    /**
     * Resizes the canvas element.
     * @param {number} width - The new width of the canvas.
     * @param {number} height - The new height of the canvas.
     * @returns {Kanvas} The updated Kanvas object.
     */
    resize(width: number, height: number): Kanvas;
    /**
     * Draws an image on the canvas
     * @param {CanvasImageSource} image - image to draw
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} width - the width of the image
     * @param {number} height - the height of the image
     *
     * @return {Kanvas} this
     */
    drawImage(image: CanvasImageSource, point: Point2d, width: number, height: number): Kanvas;
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
    rotateAndDrawImage(image: CanvasImageSource, point: Point2d, width: number, height: number, angle: number): Kanvas;
    /**
     * Draws a circle on the canvas
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} radius - the radius of the circle
     *
     * @return {Kanvas} this Kanvas object
     */
    circle(point: Point2d, radius: number): Kanvas;
    /**
     * Draws a rectangle on the canvas
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     * @param {number} width - the width of the rectangle
     * @param {number} height - the height of the rectangle
     *
     * @return {Kanvas} this Kanvas object
     */
    rect(point: Point2d, width: number, height: number): Kanvas;
    /**
     * Draws a line on the canvas
     * @param {Point2d} begin - a Vec2d instance or an Object that contains x and y properties
     * @param {Point2d} end - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    line(begin: Point2d, end: Point2d): Kanvas;
    /**
     * Moves the current drawing position to a specified point
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    moveTo(point: Point2d): Kanvas;
    /**
     * Draws a line from the current drawing position to a specified point
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    lineTo(point: Point2d): Kanvas;
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
    text({ text, at, textAlign, textBaseline, fillStyle, strokeStyle, size, font, }: {
        text: string;
        at: Point2d;
        textAlign?: CanvasTextAlign;
        textBaseline?: CanvasTextBaseline;
        fillStyle?: Color;
        strokeStyle?: Color;
        size?: number;
        font?: string;
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
     * @param {Color} [param0.color=this.#strokeStyle]
     * @param {number} [param0.width=this.#lineWidth]
     * @param {Iterable<number>} [param0.dash=this.#lineDash]
     *
     * @return {Kanvas} this Kanvas object
     */
    stroke({ color, width, dash, }?: {
        color?: Color;
        width?: number;
        dash?: Iterable<number>;
    }): Kanvas;
    /**
     * Fills the current path
     * @param {Color} [color=this.#fillStyle] - color of the fill
     *
     * @return {Kanvas} this Kanvas object
     */
    fill(color?: Color): Kanvas;
    /** Fills the canvas with a specified color
     * @param {CSSColor} [color="#000"] - color to fill the canvas with
     * @return {Kanvas} this Kanvas object
     */
    background(color?: CSSColor): Kanvas;
    /**
     * Clears the canvas
     *
     * @return {Kanvas} this Kanvas object
     */
    clear(): Kanvas;
    /**
     * Translate the canvas context
     * @param {Point2d} point - a Vec2d instance or an Object that contains x and y properties
     *
     * @return {Kanvas} this Kanvas object
     */
    translate(point: Point2d): Kanvas;
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
    /**
     * Requests the pointer lock for the canvas element.
     *
     * @returns {Kanvas}
     */
    requestPointerLock(): Kanvas;
    set fillStyle(color: Color);
    /**
     * Sets the stroke style used for drawing shapes.
     * @param {Color} value - The new stroke style.
     */
    set strokeStyle(value: Color);
    /**
     * Sets the line width used for drawing lines and borders.
     * @param {number} value - The new line width.
     */
    set lineWidth(value: number);
    /**
     * Sets the line dash pattern used for drawing dashed lines.
     * @param {Iterable<number>} value - The new line dash pattern.
     */
    set lineDash(value: Iterable<number>);
    /**
     * Sets the line dash offset used for drawing dashed lines.
     * @param {number} value - The new line dash offset.
     */
    set lineDashOffset(value: number);
    /**
     * Sets the text alignment used for drawing text.
     * @param {CanvasTextAlign} value - The new text alignment.
     */
    set textAlign(value: CanvasTextAlign);
    /**
     * Sets the text baseline used for drawing text.
     * @param {CanvasTextBaseline} value - The new text baseline.
     */
    set textBaseline(value: CanvasTextBaseline);
    /**
     * Sets the font used for drawing text.
     * @param {string} value - The new font.
     */
    set font(value: string);
    /**
     * Sets the global alpha value used for drawing shapes and images.
     * @param {number} value - The new global alpha value.
     */
    set globalAlpha(value: number);
    /**
     * Gets the ID of the canvas element.
     * @returns {string} The ID of the canvas element.
     */
    get id(): string;
    /**
     * Gets the HTML canvas element.
     * @returns {HTMLCanvasElement} The HTML canvas element.
     */
    get canvas(): HTMLCanvasElement;
    /**
     * Gets the 2D rendering context of the canvas.
     * @returns {CanvasRenderingContext2D} The 2D rendering context of the canvas.
     */
    get context(): CanvasRenderingContext2D;
    /**
     * Gets the center point of the canvas.
     * @returns {Vec2d} The center point of the canvas.
     */
    get center(): Vec2d;
    /**
     * Gets the width of the canvas.
     * @returns {number} The width of the canvas.
     */
    get width(): number;
    /**
     * Gets the height of the canvas.
     * @returns {number} The height of the canvas.
     */
    get height(): number;
    /**
     * Gets the aspect ratio of the canvas.
     * @returns {number} The aspect ratio of the canvas.
     */
    get aspectRatio(): number;
    /**
     * Gets the fill style used for drawing shapes.
     * @returns {Color} The fill style used for drawing shapes.
     */
    get fillStyle(): Color;
    /**
     * Gets the stroke style used for drawing shapes.
     * @returns {Color} The stroke style used for drawing shapes.
     */
    get strokeStyle(): Color;
    /**
     * Gets the line width used for drawing lines and borders.
     * @returns {number} The line width used for drawing lines and borders.
     */
    get lineWidth(): number;
    /**
     * Gets the line dash pattern used for drawing dashed lines.
     * @returns {Iterable<number>} The line dash pattern used for drawing dashed lines.
     */
    get lineDash(): Iterable<number>;
    /**
     * Gets the line dash offset used for drawing dashed lines.
     * @returns {number} The line dash offset used for drawing dashed lines.
     */
    get lineDashOffset(): number;
    /**
     * Gets the text alignment used for drawing text.
     * @returns {CanvasTextAlign} The text alignment used for drawing text.
     */
    get textAlign(): CanvasTextAlign;
    /**
     * Gets the text baseline used for drawing text.
     * @returns {CanvasTextBaseline} The text baseline used for drawing text.
     */
    get textBaseline(): CanvasTextBaseline;
    /**
     * Gets the font used for drawing text.
     * @returns {string} The font used for drawing text.
     */
    get font(): string;
    /**
     * Gets the global alpha value used for drawing shapes and images.
     * @returns {number} The global alpha value used for drawing shapes and images.
     */
    get globalAlpha(): number;
}
