import Mat4 from "./Mat4.js";
import Vec2d from "./Vec2d.js";

export type Point3d = Vec3d | { x: number; y: number; z: number };

/**
 * Represents a 3-dimensional vector.
 */
export default class Vec3d {
  /**
   * The x-coordinate of the vector.
   */
  private _x: number;
  /**
   * The y-coordinate of the vector.
   */
  private _y: number;
  /**
   * The z-coordinate of the vector.
   */
  private _z: number;
  /**
   * The angle in the x-y plane.
   */
  private _theta: number;
  /**
   * The angle in the x-z plane.
   */
  private _phi: number;
  /**
   * The magnitude of the vector.
   */
  private _magnitude: number;

  /**
   * Creates a new Vec3d instance.
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   * @param {number} z - The z-coordinate of the vector.
   */
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Sets the vector to the values of another vector.
   * @param {Point3d} v - The vector to copy.
   * @returns {Vec3d} The modified vector.
   */
  set(v: Point3d): Vec3d {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;

    return this;
  }

  /**
   * Creates a copy of the vector.
   * @param {Object} [options={}] - The optional values to override in the copied vector.
   * @param {number} [options.x=this.x] - The x-coordinate of the copied vector.
   * @param {number} [options.y=this.y] - The y-coordinate of the copied vector.
   * @param {number} [options.z=this.z] - The z-coordinate of the copied vector.
   * @returns {Vec3d} The copied vector.
   */
  copy({
    x = this.x,
    y = this.y,
    z = this.z,
  }: { x?: number; y?: number; z?: number } = {}): Vec3d {
    return new Vec3d(x, y, z);
  }

  /**
   * Adds another vector to this vector.
   * @param {Point3d} v - The vector to add.
   * @returns {Vec3d} The modified vector.
   */
  add(v: Point3d): Vec3d {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;

    return this;
  }

  /**
   * Subtracts another vector from this vector.
   * @param {Point3d} v - The vector to subtract.
   * @returns {Vec3d} The modified vector.
   */
  subtract(v: Point3d): Vec3d {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;

    return this;
  }

  /**
   * Multiplies the vector by a scalar value.
   * @param {number} scalar - The scalar value to multiply by.
   * @returns {Vec3d} The modified vector.
   */
  multiply(scalar: number): Vec3d {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;
  }

  /**
   * Divides the vector by a scalar value.
   * @param {number} scalar - The scalar value to divide by.
   * @returns {Vec3d} The modified vector.
   */
  divide(scalar: number): Vec3d {
    this.x /= scalar;
    this.y /= scalar;
    this.z /= scalar;

    return this;
  }

  /**
   * Calculates the dot product of this vector and another vector.
   * @param {Point3d} v - The other vector.
   * @returns {number} The dot product.
   */
  dot(v: Point3d): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  /**
   * Calculates the cross product of this vector and another vector.
   * @param {Point3d} v - The other vector.
   * @returns {Vec3d} The cross product.
   */
  cross(v: Point3d): Vec3d {
    const { x, y, z } = this;

    this.x = y * v.z - z * v.y;
    this.y = z * v.x - x * v.z;
    this.z = x * v.y - y * v.x;

    return this;
  }

  /**
   * Transforms the vector by a 4x4 matrix.
   * @param {Mat4} m - The transformation matrix.
   * @returns {Vec3d} The modified vector.
   */
  transform(m: Mat4): Vec3d {
    const { x, y, z } = this;
    const w = 1;

    this.x = x * m.data[0] + y * m.data[4] + z * m.data[8] + w * m.data[12];
    this.y = x * m.data[1] + y * m.data[5] + z * m.data[9] + w * m.data[13];
    this.z = x * m.data[2] + y * m.data[6] + z * m.data[10] + w * m.data[14];

    return this;
  }

  /**
   * Projects the vector onto a 2-dimensional plane.
   * @param {number} fieldOfView - The field of view angle in degrees.
   * @param {number} aspectRatio - The aspect ratio of the viewport.
   * @param {number} near - The distance to the near clipping plane.
   * @param {number} far - The distance to the far clipping plane.
   * @param {number} width - The width of the viewport.
   * @param {number} height - The height of the viewport.
   * @returns {Vec2d} The projected vector.
   */
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

  /**
   * Translates the vector by another vector.
   * @param {Point3d} v - The translation vector.
   * @returns {Vec3d} The modified vector.
   */
  translate(v: Point3d): Vec3d {
    return this.transform(Mat4.translation(v.x, v.y, v.z));
  }

  /**
   * Rotates the vector around the x-axis.
   * @param {number} theta - The rotation angle in radians.
   * @returns {Vec3d} The modified vector.
   */
  rotateX(theta: number): Vec3d {
    return this.transform(Mat4.rotationX(theta));
  }

  /**
   * Rotates the vector around the y-axis.
   * @param {number} theta - The rotation angle in radians.
   * @returns {Vec3d} The modified vector.
   */
  rotateY(theta: number): Vec3d {
    return this.transform(Mat4.rotationY(theta));
  }

  /**
   * Rotates the vector around the z-axis.
   * @param {number} theta - The rotation angle in radians.
   * @returns {Vec3d} The modified vector.
   */
  rotateZ(theta: number): Vec3d {
    return this.transform(Mat4.rotationZ(theta));
  }

  /**
   * Scales the vector by another vector.
   * @param {Point3d} v - The scaling vector.
   * @returns {Vec3d} The modified vector.
   */
  scale(v: Point3d): Vec3d {
    return this.transform(Mat4.scale(v.x, v.y, v.z));
  }

  /**
   * Normalizes the vector to have a magnitude of 1.
   * @returns {Vec3d} The modified vector.
   */
  normalize(): Vec3d {
    const magnitude = this.magnitude;

    if (magnitude !== 0) {
      this.divide(magnitude);
    }

    return this;
  }

  /**
   * Converts the vector to a 2-dimensional vector.
   * @returns {Vec2d} The converted vector.
   */
  toVec2d(): Vec2d {
    return new Vec2d(this.x, this.y);
  }

  /**
   * Sets the x-coordinate of the vector.
   * @param {number} x - The x-coordinate.
   */
  set x(x: number) {
    this._x = x;
    this._magnitude = Math.sqrt(x ** 2 + this._y ** 2 + this._z ** 2);
    this._phi = Math.atan2(this._y, x);
    this._theta = Math.acos(this._z / this._magnitude);
  }

  /**
   * Gets the x-coordinate of the vector.
   * @returns {number} The x-coordinate.
   */
  get x(): number {
    return this._x;
  }

  /**
   * Sets the y-coordinate of the vector.
   * @param {number} y - The y-coordinate.
   */
  set y(y: number) {
    this._y = y;
    this._magnitude = Math.sqrt(this._x ** 2 + y ** 2 + this._z ** 2);
    this._phi = Math.atan2(y, this._x);
    this._theta = Math.acos(this._z / this._magnitude);
  }

  /**
   * Gets the y-coordinate of the vector.
   * @returns {number} The y-coordinate.
   */
  get y(): number {
    return this._y;
  }

  /**
   * Sets the z-coordinate of the vector.
   * @param {number} z - The z-coordinate.
   */
  set z(z: number) {
    this._z = z;
    this._magnitude = Math.sqrt(this._x ** 2 + this._y ** 2 + z ** 2);
    this._theta = Math.acos(z / this._magnitude);
  }

  /**
   * Gets the z-coordinate of the vector.
   * @returns {number} The z-coordinate.
   */
  get z(): number {
    return this._z;
  }

  /**
   * Sets the angle in the x-y plane.
   * @param {number} theta - The angle in radians.
   */
  set phi(phi: number) {
    this._phi = phi;
    this._x = this._magnitude * Math.cos(phi) * Math.sin(this._theta);
    this._y = this._magnitude * Math.sin(phi) * Math.sin(this._theta);
  }

  /**
   * Gets the angle in the x-y plane.
   * @returns {number} The angle in radians.
   */
  get phi(): number {
    return this._phi;
  }

  /**
   * Sets the angle in the x-z plane.
   * @param {number} theta - The angle in radians.
   */
  set theta(theta: number) {
    this._theta = theta;
    this._x = this._magnitude * Math.cos(this._phi) * Math.sin(theta);
    this._y = this._magnitude * Math.sin(this._phi) * Math.sin(theta);
    this._z = this._magnitude * Math.cos(theta);
  }

  /**
   * Gets the angle in the x-z plane.
   * @returns {number} The angle in radians.
   */
  get theta(): number {
    return this._theta;
  }

  /**
   * Sets the magnitude of the vector.
   * @param {number} magnitude - The magnitude.
   */
  set magnitude(magnitude: number) {
    this._magnitude = magnitude;
    this._x = magnitude * Math.cos(this._phi) * Math.sin(this._theta);
    this._y = magnitude * Math.sin(this._phi) * Math.sin(this._theta);
    this._z = magnitude * Math.cos(this._theta);
  }

  /**
   * Gets the magnitude of the vector.
   * @returns {number} The magnitude.
   */
  get magnitude(): number {
    return this._magnitude;
  }

  /**
   * Sets the magnitude of the vector (alias for `magnitude`).
   * @param {number} r - The magnitude.
   */
  set r(r: number) {
    this.magnitude = r;
  }

  /**
   * Gets the magnitude of the vector (alias for `magnitude`).
   * @returns {number} The magnitude.
   */
  get r(): number {
    return this.magnitude;
  }

  /**
   * Adds two vectors together without modifying the original vectors.
   * @param {Point3d} v1 - The first vector.
   * @param {Point3d} v2 - The second vector.
   * @returns {Vec3d} The sum of the two vectors.
   */
  static add(v1: Point3d, v2: Point3d): Vec3d {
    return new Vec3d(v1.x, v1.y, v1.z).add(v2);
  }

  /**
   * Subtracts one vector from another without modifying the original vectors.
   * @param {Point3d} v1 - The vector to subtract from.
   * @param {Point3d} v2 - The vector to subtract.
   * @returns {Vec3d} The difference between the two vectors.
   */
  static subtract(v1: Point3d, v2: Point3d): Vec3d {
    return new Vec3d(v1.x, v1.y, v1.z).subtract(v2);
  }

  /**
   * Multiplies a vector by a scalar value without modifying the original vector.
   * @param {Point3d} v - The vector to multiply.
   * @param {number} scalar - The scalar value.
   * @returns {Vec3d} The scaled vector.
   */
  static multiply(v: Point3d, scalar: number): Vec3d {
    return new Vec3d(v.x, v.y, v.z).multiply(scalar);
  }

  /**
   * Divides a vector by a scalar value without modifying the original vector.
   * @param {Point3d} v - The vector to divide.
   * @param {number} scalar - The scalar value.
   * @returns The divided vector.
   */
  static divide(v: Point3d, scalar: number): Vec3d {
    return new Vec3d(v.x, v.y, v.z).divide(scalar);
  }

  /**
   * Calculates the dot product of two vectors.
   * @param {Point3d} v1 - The first vector.
   * @param {Point3d} v2 - The second vector.
   * @returns {number} The dot product of the two vectors.
   */
  static dot(v1: Point3d, v2: Point3d): number {
    return new Vec3d(v1.x, v1.y, v1.z).dot(v2);
  }

  /**
   * Calculates the cross product of two vectors.
   * @param {Point3d} v1 - The first vector.
   * @param {Point3d} v2 - The second vector.
   * @returns {Vec3d} The cross product of the two vectors.
   */
  static cross(v1: Point3d, v2: Point3d): Vec3d {
    return new Vec3d(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }

  /**
   * Transforms a vector by a 4x4 matrix without modifying the original vector.
   * @param {Point3d} v - The vector to transform.
   * @param {Mat4} m - The transformation matrix.
   * @returns {Vec3d} The transformed vector.
   */
  static transform(v: Point3d, m: Mat4): Vec3d {
    return new Vec3d(v.x, v.y, v.z).transform(m);
  }

  /**
   * Translates a vector by another vector without modifying the original vector.
   * @param {Point3d} v - The vector to translate.
   * @param {Point3d} translation - The translation vector.
   * @returns {Vec3d} The translated vector.
   */
  static translate(v: Point3d, translation: Point3d): Vec3d {
    return new Vec3d(v.x, v.y, v.z).translate(translation);
  }

  /**
   * Rotates a vector around the x-axis without modifying the original vector.
   * @param {Point3d} v - The vector to rotate.
   * @param {number} theta - The rotation angle in radians.
   * @returns {Vec3d} The rotated vector.
   */
  static rotateX(v: Point3d, theta: number): Vec3d {
    return new Vec3d(v.x, v.y, v.z).rotateX(theta);
  }

  /**
   * Rotates a vector around the y-axis without modifying the original vector.
   * @param {Point3d} v - The vector to rotate.
   * @param {number} theta - The rotation angle in radians.
   * @returns {Vec3d} The rotated vector.
   */
  static rotateY(v: Point3d, theta: number): Vec3d {
    return new Vec3d(v.x, v.y, v.z).rotateY(theta);
  }

  /**
   * Rotates a vector around the z-axis without modifying the original vector.
   * @param {Point3d} v - The vector to rotate.
   * @param {number} theta - The rotation angle in radians.
   * @returns {Vec3d} The rotated vector.
   */
  static rotateZ(v: Point3d, theta: number): Vec3d {
    return new Vec3d(v.x, v.y, v.z).rotateZ(theta);
  }

  /**
   * Scales a vector by another vector without modifying the original vector.
   * @param {Point3d} v - The vector to scale.
   * @param {number} scale - The scaling vector.
   * @returns {Vec3d} The scaled vector.
   */
  static scale(v: Point3d, scale: Point3d): Vec3d {
    return new Vec3d(v.x, v.y, v.z).scale(scale);
  }

  /**
   * Normalizes a vector to have a magnitude of 1 without modifying the original vector.
   * @param {Point3d} v - The vector to normalize.
   * @returns {Vec3d} The normalized vector.
   */
  static normalize(v: Point3d): Vec3d {
    return new Vec3d(v.x, v.y, v.z).normalize();
  }

  /**
   * Creates a 3-dimensional vector from polar coordinates.
   * @param {number} magnitude - The magnitude of the vector.
   * @param {number} theta - The angle in the x-y plane.
   * @param {number} phi - The angle in the x-z plane.
   * @returns {Vec3d} The created vector.
   */
  static fromPolar(magnitude: number, theta: number, phi: number): Vec3d {
    return new Vec3d(
      magnitude * Math.cos(phi) * Math.sin(theta),
      magnitude * Math.sin(phi) * Math.sin(theta),
      magnitude * Math.cos(theta)
    );
  }
}
