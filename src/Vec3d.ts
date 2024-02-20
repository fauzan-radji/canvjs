import Mat4 from "./Mat4";
import Vec2d from "./Vec2d";

export default class Vec3d {
  private _x: number;
  private _y: number;
  private _z: number;
  private _theta: number;
  private _phi: number;
  private _magnitude: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(v: Vec3d): Vec3d {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;

    return this;
  }

  copy({ x = this.x, y = this.y, z = this.z } = {}): Vec3d {
    return new Vec3d(x, y, z);
  }

  add(v: Vec3d): Vec3d {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;

    return this;
  }

  subtract(v: Vec3d): Vec3d {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;

    return this;
  }

  multiply(scalar: number): Vec3d {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;
  }

  divide(scalar: number): Vec3d {
    this.x /= scalar;
    this.y /= scalar;
    this.z /= scalar;

    return this;
  }

  dot(v: Vec3d): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  transform(m: Mat4): Vec3d {
    const { x, y, z } = this;
    const w = 1;

    this.x = x * m.data[0] + y * m.data[4] + z * m.data[8] + w * m.data[12];
    this.y = x * m.data[1] + y * m.data[5] + z * m.data[9] + w * m.data[13];
    this.z = x * m.data[2] + y * m.data[6] + z * m.data[10] + w * m.data[14];

    return this;
  }

  project(
    fieldOfView: number,
    aspectRatio: number,
    near: number,
    far: number,
    width: number,
    height: number
  ): Vec2d {
    const matrix = Mat4.perspective(fieldOfView, aspectRatio, near, far);
    const projected = Vec3d.transform(this, matrix).toVec2d();

    if (this.z !== 0) {
      projected.divide(this.z);
    }

    projected.x *= width;
    projected.y *= height;

    return projected;
  }

  translate(v: Vec3d): Vec3d {
    return this.transform(Mat4.translation(v.x, v.y, v.z));
  }

  rotateX(theta: number): Vec3d {
    return this.transform(Mat4.rotationX(theta));
  }

  rotateY(theta: number): Vec3d {
    return this.transform(Mat4.rotationY(theta));
  }

  rotateZ(theta: number): Vec3d {
    return this.transform(Mat4.rotationZ(theta));
  }

  scale(v: Vec3d): Vec3d {
    return this.transform(Mat4.scale(v.x, v.y, v.z));
  }

  normalize(): Vec3d {
    const magnitude = this.magnitude;

    if (magnitude !== 0) {
      this.divide(magnitude);
    }

    return this;
  }

  toVec2d(): Vec2d {
    return new Vec2d(this.x, this.y);
  }

  set x(x: number) {
    this._x = x;
    this._magnitude = Math.sqrt(x ** 2 + this._y ** 2 + this._z ** 2);
    this._theta = Math.atan2(this._y, x);
    this._phi = Math.acos(this._z / this._magnitude);
  }

  get x() {
    return this._x;
  }

  set y(y: number) {
    this._y = y;
    this._magnitude = Math.sqrt(this._x ** 2 + y ** 2 + this._z ** 2);
    this._theta = Math.atan2(y, this._x);
    this._phi = Math.acos(this._z / this._magnitude);
  }

  get y() {
    return this._y;
  }

  set z(z: number) {
    this._z = z;
    this._magnitude = Math.sqrt(this._x ** 2 + this._y ** 2 + z ** 2);
    this._phi = Math.acos(z / this._magnitude);
  }

  get z() {
    return this._z;
  }

  set theta(theta: number) {
    this._theta = theta;
    this._x = this._magnitude * Math.cos(theta) * Math.sin(this._phi);
    this._y = this._magnitude * Math.sin(theta) * Math.sin(this._phi);
  }

  get theta() {
    return this._theta;
  }

  set phi(phi: number) {
    this._phi = phi;
    this._x = this._magnitude * Math.cos(this._theta) * Math.sin(phi);
    this._y = this._magnitude * Math.sin(this._theta) * Math.sin(phi);
    this._z = this._magnitude * Math.cos(phi);
  }

  get phi() {
    return this._phi;
  }

  set magnitude(magnitude: number) {
    this._magnitude = magnitude;
    this._x = magnitude * Math.cos(this._theta) * Math.sin(this._phi);
    this._y = magnitude * Math.sin(this._theta) * Math.sin(this._phi);
    this._z = magnitude * Math.cos(this._phi);
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

  static add(v1: Vec3d, v2: Vec3d): Vec3d {
    return v1.copy().add(v2);
  }

  static subtract(v1: Vec3d, v2: Vec3d): Vec3d {
    return v1.copy().subtract(v2);
  }

  static multiply(v: Vec3d, scalar: number): Vec3d {
    return v.copy().multiply(scalar);
  }

  static divide(v: Vec3d, scalar: number): Vec3d {
    return v.copy().divide(scalar);
  }

  static dot(v1: Vec3d, v2: Vec3d): number {
    return v1.dot(v2);
  }

  static cross(v1: Vec3d, v2: Vec3d): Vec3d {
    return new Vec3d(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }

  static transform(v: Vec3d, m: Mat4): Vec3d {
    return v.copy().transform(m);
  }

  static translate(v: Vec3d, translation: Vec3d): Vec3d {
    return v.copy().translate(translation);
  }

  static rotateX(v: Vec3d, theta: number): Vec3d {
    return v.copy().rotateX(theta);
  }

  static rotateY(v: Vec3d, theta: number): Vec3d {
    return v.copy().rotateY(theta);
  }

  static rotateZ(v: Vec3d, theta: number): Vec3d {
    return v.copy().rotateZ(theta);
  }

  static scale(v: Vec3d, scale: Vec3d): Vec3d {
    return v.copy().scale(scale);
  }

  static normalize(v: Vec3d): Vec3d {
    return v.copy().normalize();
  }

  static fromPolar(theta: number, phi: number, magnitude: number): Vec3d {
    return new Vec3d(
      magnitude * Math.cos(theta) * Math.sin(phi),
      magnitude * Math.sin(theta) * Math.sin(phi),
      magnitude * Math.cos(phi)
    );
  }
}
