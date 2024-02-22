import Vec2d from "./Vec2d.js";
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
     * @param {string} [param0.fillStyle=this.#fillStyle]
     * @param {string} [param0.strokeStyle=this.#strokeStyle]
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
     * @param {string} [param0.color=this.#strokeStyle]
     * @param {number} [param0.width=this.#lineWidth]
     * @param {number[]} [param0.dash=this.#lineDash]
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
    /** Fills the canvas with a specified color
     * @param {string} [color="#000"] - color to fill the canvas with
     * @return {Kanvas} this Kanvas object
     */
    background(color?: string): Kanvas;
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
    /**
     * Requests the pointer lock for the canvas element.
     */
    requestPointerLock(): void;
    set fillStyle(color: string | CanvasGradient | CanvasPattern);
    /**
     * Sets the stroke style used for drawing shapes.
     * @param {string | CanvasGradient | CanvasPattern} value - The new stroke style.
     */
    set strokeStyle(value: string | CanvasGradient | CanvasPattern);
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
     * Sets the width of the canvas.
     * @param {number} value - The new width of the canvas.
     */
    set width(value: number);
    /**
     * Sets the height of the canvas.
     * @param {number} value - The new height of the canvas.
     */
    set height(value: number);
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
     * @returns {string | CanvasGradient | CanvasPattern} The fill style used for drawing shapes.
     */
    get fillStyle(): string | CanvasGradient | CanvasPattern;
    /**
     * Gets the stroke style used for drawing shapes.
     * @returns {string | CanvasGradient | CanvasPattern} The stroke style used for drawing shapes.
     */
    get strokeStyle(): string | CanvasGradient | CanvasPattern;
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
