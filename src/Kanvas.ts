import Vector from "./Vec2d.js";

/**
 * A class that represent HTML5 Canvas element
 * @param {string} id - id of HTML Canvas Element
 * @param {number} width - width of the canvas element
 * @param {number} height - height of the canvas element
 */

export default class Kanvas {
  #id: string;
  #canvas: HTMLCanvasElement;
  #ctx: CanvasRenderingContext2D;
  #center: Vector;
  #fillStyle: string | CanvasGradient | CanvasPattern;
  #strokeStyle: string | CanvasGradient | CanvasPattern;
  #lineWidth: number;
  #lineDash: Iterable<number>;
  #lineDashOffset: number;
  #textAlign: CanvasTextAlign;
  #textBaseLine: CanvasTextBaseline;
  #font: string;
  #globalAlpha: number;

  constructor(id: string, width: number, height: number) {
    this.#id = id;
    this.#canvas = document.getElementById(id) as HTMLCanvasElement;
    this.#ctx = this.#canvas.getContext("2d");
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
  resize(width: number, height: number): Kanvas {
    this.width = width;
    this.height = height;

    this.#center = new Vector(
      +(this.width / 2).toFixed(4),
      +(this.height / 2).toFixed(4)
    );

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
  drawImage(
    image: CanvasImageSource,
    point: Vector | { x: number; y: number },
    width: number,
    height: number
  ): Kanvas {
    this.#ctx.drawImage(image, point.x, point.y, width, height);

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
  rotateAndDrawImage(
    image: CanvasImageSource,
    point: Vector | { x: number; y: number },
    width: number,
    height: number,
    angle: number
  ): Kanvas {
    this.save()
      .translate(point)
      .rotate(-angle)
      .drawImage(
        image,
        {
          x: -width / 2,
          y: -height / 2,
        },
        width,
        height
      )
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
  circle(point: Vector | { x: number; y: number }, radius: number): Kanvas {
    this.#ctx.arc(point.x, point.y, radius, 0, 2 * Math.PI);

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
  rect(
    point: Vector | { x: number; y: number },
    width: number,
    height: number
  ): Kanvas {
    this.#ctx.rect(point.x, point.y, width, height);

    return this;
  }

  /**
   * Draws a line on the canvas
   * @param {Vector | {x: number, y: number}} begin - a Vector instance or an Object that contains x and y properties
   * @param {Vector | {x: number, y: number}} end - a Vector instance or an Object that contains x and y properties
   *
   * @return {Kanvas} this Kanvas object
   */
  line(
    begin: Vector | { x: number; y: number },
    end: Vector | { x: number; y: number }
  ): Kanvas {
    this.#ctx.moveTo(begin.x, begin.y);
    this.#ctx.lineTo(end.x, end.y);

    return this;
  }

  /**
   * Moves the current drawing position to a specified point
   * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
   *
   * @return {Kanvas} this Kanvas object
   */
  moveTo(point: Vector | { x: number; y: number }): Kanvas {
    this.#ctx.moveTo(point.x, point.y);

    return this;
  }

  /**
   * Draws a line from the current drawing position to a specified point
   * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
   *
   * @return {Kanvas} this Kanvas object
   */
  lineTo(point: Vector | { x: number; y: number }): Kanvas {
    this.#ctx.lineTo(point.x, point.y);

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
  text({
    text,
    at,
    fillStyle = this.#fillStyle,
    strokeStyle = this.#strokeStyle,
    size = 16,
  }: {
    text: string;
    at: Vector | { x: number; y: number };
    fillStyle?: string | CanvasGradient | CanvasPattern;
    strokeStyle?: string | CanvasGradient | CanvasPattern;
    size?: number;
  }): Kanvas {
    this.beginPath();
    this.textAlign = "center";
    this.textBaseLine = "middle";
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.font = `${size}px Arial`;
    this.#ctx.fillText(text, at.x, at.y);
    this.#ctx.strokeText(text, at.x, at.y);

    return this;
  }

  /**
   * Begins a new path
   *
   * @return {Kanvas} this Kanvas object
   */
  beginPath(): Kanvas {
    this.#ctx.beginPath();

    return this;
  }

  /**
   * Closes the current path
   *
   * @return {Kanvas} this Kanvas object
   */
  closePath(): Kanvas {
    this.#ctx.closePath();

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
  stroke({
    color = this.#strokeStyle,
    width = this.#lineWidth,
    dash = this.#lineDash,
  }: {
    color?: string | CanvasGradient | CanvasPattern;
    width?: number;
    dash?: Iterable<number>;
  } = {}): Kanvas {
    this.strokeStyle = color;
    this.lineWidth = width;
    this.lineDash = dash;
    this.#ctx.stroke();

    return this;
  }

  /**
   * Fills the current path
   * @param {string} [color="#fff"] - color of the fill
   *
   * @return {Kanvas} this Kanvas object
   */
  fill(color: string = "#fff"): Kanvas {
    this.fillStyle = color;
    this.#ctx.fill();

    return this;
  }

  /**
   * Clears the canvas
   *
   * @return {Kanvas} this Kanvas object
   */
  clear(): Kanvas {
    this.#canvas.height = this.height;

    return this;
  }

  /**
   * Translate the canvas context
   * @param {Vector | {x: number, y: number}} point - a Vector instance or an Object that contains x and y properties
   *
   * @return {Kanvas} this Kanvas object
   */
  translate(point: Vector | { x: number; y: number }): Kanvas {
    this.#ctx.translate(point.x, point.y);

    return this;
  }

  /**
   * Rotates the canvas context
   * @param {number} angle - angle in radian
   *
   * @return {Kanvas} this Kanvas object
   */
  rotate(angle: number): Kanvas {
    this.#ctx.rotate(angle);

    return this;
  }

  /**
   * Saves the current canvas state
   *
   * @returns {Kanvas} this Kanvas object
   */
  save(): Kanvas {
    this.#ctx.save();

    return this;
  }

  /**
   * Restores the canvas state to the last saved state
   *
   * @returns {Kanvas} this Kanvas object
   */
  restore(): Kanvas {
    this.#ctx.restore();

    return this;
  }

  requestPointerLock() {
    this.#canvas.requestPointerLock();
  }

  set fillStyle(color) {
    this.#fillStyle = color;
    this.#ctx.fillStyle = color;
  }

  set strokeStyle(color) {
    this.#strokeStyle = color;
    this.#ctx.strokeStyle = color;
  }

  set lineWidth(width) {
    this.#lineWidth = width;
    this.#ctx.lineWidth = width;
  }

  set lineDash(dash) {
    this.#lineDash = dash;
    this.#ctx.setLineDash(dash);
  }

  set lineDashOffset(offset) {
    this.#lineDashOffset = offset;
    this.#ctx.lineDashOffset = offset;
  }

  set width(width) {
    this.#canvas.width = width;
  }

  set height(height) {
    this.#canvas.height = height;
  }

  set textAlign(align) {
    this.#textAlign = align;
    this.#ctx.textAlign = align;
  }

  set textBaseLine(align) {
    this.#textBaseLine = align;
    this.#ctx.textBaseline = align;
  }

  set font(font) {
    this.#font = font;
    this.#ctx.font = font;
  }

  set globalAlpha(alpha) {
    this.#globalAlpha = alpha;
    this.#ctx.globalAlpha = alpha;
  }

  get id() {
    return this.#id;
  }

  get canvas() {
    return this.#canvas;
  }

  get ctx() {
    return this.#ctx;
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
