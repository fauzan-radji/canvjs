import Mat3 from "./Mat3.js";

export default class Vec2d {
  private _x: number;
  private _y: number;
  private _theta: number;
  private _magnitude: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  set(v: Vec2d): Vec2d {
    this.x = v.x;
    this.y = v.y;

    return this;
  }

  copy({ x = this.x, y = this.y } = {}): Vec2d {
    return new Vec2d(x, y);
  }

  add(v: Vec2d): Vec2d {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  subtract(v: Vec2d): Vec2d {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  multiply(scalar: number): Vec2d {
    this.x *= scalar;
    this.y *= scalar;

    return this;
  }

  divide(scalar: number): Vec2d {
    this.x /= scalar;
    this.y /= scalar;

    return this;
  }

  dot(v: Vec2d): number {
    return this.x * v.x + this.y * v.y;
  }

  cross(v: Vec2d): number {
    return this.x * v.y - this.y * v.x;
  }

  transform(m: Mat3): Vec2d {
    const a = m.data;
    const x = this.x;
    const y = this.y;

    this.x = a[0] * x + a[1] * y + a[2];
    this.y = a[3] * x + a[4] * y + a[5];

    return this;
  }

  translate(v: Vec2d): Vec2d {
    return this.transform(Mat3.translation(v.x, v.y));
  }

  rotate(theta: number): Vec2d {
    return this.transform(Mat3.rotation(theta));
  }

  scale(v: Vec2d): Vec2d {
    return this.transform(Mat3.scale(v.x, v.y));
  }

  set x(x: number) {
    this._x = x;
    this._theta = Math.atan2(this._y, x);
    this._magnitude = Math.sqrt(x ** 2 + this._y ** 2);
  }

  get x() {
    return this._x;
  }

  set y(y: number) {
    this._y = y;
    this._theta = Math.atan2(y, this._x);
    this._magnitude = Math.sqrt(this._x ** 2 + y ** 2);
  }

  get y() {
    return this._y;
  }

  set theta(theta: number) {
    this._theta = theta;
    this._x = this._magnitude * Math.cos(theta);
    this._y = this._magnitude * Math.sin(theta);
  }

  get theta() {
    return this._theta;
  }

  set magnitude(magnitude: number) {
    this._magnitude = magnitude;
    this._x = magnitude * Math.cos(this._theta);
    this._y = magnitude * Math.sin(this._theta);
  }

  get magnitude() {
    return this._magnitude;
  }

  set r(r: number) {
    this.magnitude = r;
  }

  get r() {
    return this.magnitude;
  }

  static add(v1: Vec2d, v2: Vec2d): Vec2d {
    return v1.copy().add(v2);
  }

  static subtract(v1: Vec2d, v2: Vec2d): Vec2d {
    return v1.copy().subtract(v2);
  }

  static multiply(v: Vec2d, scalar: number): Vec2d {
    return v.copy().multiply(scalar);
  }

  static divide(v: Vec2d, scalar: number): Vec2d {
    return v.copy().divide(scalar);
  }

  static dot(v1: Vec2d, v2: Vec2d): number {
    return v1.dot(v2);
  }

  static cross(v1: Vec2d, v2: Vec2d): number {
    return v1.cross(v2);
  }

  static transform(v: Vec2d, m: Mat3): Vec2d {
    return v.copy().transform(m);
  }

  static translate(v: Vec2d, translation: Vec2d): Vec2d {
    return v.copy().translate(translation);
  }

  static rotate(v: Vec2d, theta: number): Vec2d {
    return v.copy().rotate(theta);
  }

  static scale(v: Vec2d, scale: Vec2d): Vec2d {
    return v.copy().scale(scale);
  }

  static fromPolar(theta: number, magnitude: number): Vec2d {
    return new Vec2d(magnitude * Math.cos(theta), magnitude * Math.sin(theta));
  }
}
