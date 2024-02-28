import Mat4 from "./Mat4.js";
import Vec2d from "./Vec2d.js";
export type Point3d = Vec3d | {
    x: number;
    y: number;
    z: number;
};
/**
 * Represents a 3-dimensional vector.
 */
export default class Vec3d {
    #private;
    /**
     * Creates a new Vec3d instance.
     * @param {number} x - The x-coordinate of the vector.
     * @param {number} y - The y-coordinate of the vector.
     * @param {number} z - The z-coordinate of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * Sets the vector to the values of another vector.
     * @param {Point3d} v - The vector to copy.
     * @returns {Vec3d} The modified vector.
     */
    set(v: Point3d): Vec3d;
    /**
     * Creates a copy of the vector.
     * @param {Object} [options={}] - The optional values to override in the copied vector.
     * @param {number} [options.x=this.x] - The x-coordinate of the copied vector.
     * @param {number} [options.y=this.y] - The y-coordinate of the copied vector.
     * @param {number} [options.z=this.z] - The z-coordinate of the copied vector.
     * @returns {Vec3d} The copied vector.
     */
    copy({ x, y, z, }?: {
        x?: number;
        y?: number;
        z?: number;
    }): Vec3d;
    /**
     * Adds another vector to this vector.
     * @param {Point3d} v - The vector to add.
     * @returns {Vec3d} The modified vector.
     */
    add(v: Point3d): Vec3d;
    /**
     * Subtracts another vector from this vector.
     * @param {Point3d} v - The vector to subtract.
     * @returns {Vec3d} The modified vector.
     */
    subtract(v: Point3d): Vec3d;
    /**
     * Multiplies the vector by a scalar value.
     * @param {number} scalar - The scalar value to multiply by.
     * @returns {Vec3d} The modified vector.
     */
    multiply(scalar: number): Vec3d;
    /**
     * Divides the vector by a scalar value.
     * @param {number} scalar - The scalar value to divide by.
     * @returns {Vec3d} The modified vector.
     */
    divide(scalar: number): Vec3d;
    /**
     * Calculates the dot product of this vector and another vector.
     * @param {Point3d} v - The other vector.
     * @returns {number} The dot product.
     */
    dot(v: Point3d): number;
    /**
     * Calculates the cross product of this vector and another vector.
     * @param {Point3d} v - The other vector.
     * @returns {Vec3d} The cross product.
     */
    cross(v: Point3d): Vec3d;
    /**
     * Transforms the vector by a 4x4 matrix.
     * @param {Mat4} m - The transformation matrix.
     * @returns {Vec3d} The modified vector.
     */
    transform(m: Mat4): Vec3d;
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
    project(fieldOfView: number, aspectRatio: number, near: number, far: number, width: number, height: number): Vec2d;
    /**
     * Translates the vector by another vector.
     * @param {Point3d} v - The translation vector.
     * @returns {Vec3d} The modified vector.
     */
    translate(v: Point3d): Vec3d;
    /**
     * Rotates the vector around the x-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Vec3d} The modified vector.
     */
    rotateX(theta: number): Vec3d;
    /**
     * Rotates the vector around the y-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Vec3d} The modified vector.
     */
    rotateY(theta: number): Vec3d;
    /**
     * Rotates the vector around the z-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Vec3d} The modified vector.
     */
    rotateZ(theta: number): Vec3d;
    /**
     * Scales the vector by another vector.
     * @param {Point3d} v - The scaling vector.
     * @returns {Vec3d} The modified vector.
     */
    scale(v: Point3d): Vec3d;
    /**
     * Normalizes the vector to have a magnitude of 1.
     * @returns {Vec3d} The modified vector.
     */
    normalize(): Vec3d;
    /**
     * Converts the vector to a 2-dimensional vector.
     * @returns {Vec2d} The converted vector.
     */
    toVec2d(): Vec2d;
    /**
     * Sets the x-coordinate of the vector.
     * @param {number} x - The x-coordinate.
     */
    set x(x: number);
    /**
     * Gets the x-coordinate of the vector.
     * @returns {number} The x-coordinate.
     */
    get x(): number;
    /**
     * Sets the y-coordinate of the vector.
     * @param {number} y - The y-coordinate.
     */
    set y(y: number);
    /**
     * Gets the y-coordinate of the vector.
     * @returns {number} The y-coordinate.
     */
    get y(): number;
    /**
     * Sets the z-coordinate of the vector.
     * @param {number} z - The z-coordinate.
     */
    set z(z: number);
    /**
     * Gets the z-coordinate of the vector.
     * @returns {number} The z-coordinate.
     */
    get z(): number;
    /**
     * Sets the angle in the x-y plane.
     * @param {number} theta - The angle in radians.
     */
    set phi(phi: number);
    /**
     * Gets the angle in the x-y plane.
     * @returns {number} The angle in radians.
     */
    get phi(): number;
    /**
     * Sets the angle in the x-z plane.
     * @param {number} theta - The angle in radians.
     */
    set theta(theta: number);
    /**
     * Gets the angle in the x-z plane.
     * @returns {number} The angle in radians.
     */
    get theta(): number;
    /**
     * Sets the magnitude of the vector.
     * @param {number} magnitude - The magnitude.
     */
    set magnitude(magnitude: number);
    /**
     * Gets the magnitude of the vector.
     * @returns {number} The magnitude.
     */
    get magnitude(): number;
    /**
     * Sets the magnitude of the vector (alias for `magnitude`).
     * @param {number} r - The magnitude.
     */
    set r(r: number);
    /**
     * Gets the magnitude of the vector (alias for `magnitude`).
     * @returns {number} The magnitude.
     */
    get r(): number;
    /**
     * Adds two vectors together without modifying the original vectors.
     * @param {Point3d} v1 - The first vector.
     * @param {Point3d} v2 - The second vector.
     * @returns {Vec3d} The sum of the two vectors.
     */
    static add(v1: Point3d, v2: Point3d): Vec3d;
    /**
     * Subtracts one vector from another without modifying the original vectors.
     * @param {Point3d} v1 - The vector to subtract from.
     * @param {Point3d} v2 - The vector to subtract.
     * @returns {Vec3d} The difference between the two vectors.
     */
    static subtract(v1: Point3d, v2: Point3d): Vec3d;
    /**
     * Multiplies a vector by a scalar value without modifying the original vector.
     * @param {Point3d} v - The vector to multiply.
     * @param {number} scalar - The scalar value.
     * @returns {Vec3d} The scaled vector.
     */
    static multiply(v: Point3d, scalar: number): Vec3d;
    /**
     * Divides a vector by a scalar value without modifying the original vector.
     * @param {Point3d} v - The vector to divide.
     * @param {number} scalar - The scalar value.
     * @returns The divided vector.
     */
    static divide(v: Point3d, scalar: number): Vec3d;
    /**
     * Calculates the dot product of two vectors.
     * @param {Point3d} v1 - The first vector.
     * @param {Point3d} v2 - The second vector.
     * @returns {number} The dot product of the two vectors.
     */
    static dot(v1: Point3d, v2: Point3d): number;
    /**
     * Calculates the cross product of two vectors.
     * @param {Point3d} v1 - The first vector.
     * @param {Point3d} v2 - The second vector.
     * @returns {Vec3d} The cross product of the two vectors.
     */
    static cross(v1: Point3d, v2: Point3d): Vec3d;
    /**
     * Transforms a vector by a 4x4 matrix without modifying the original vector.
     * @param {Point3d} v - The vector to transform.
     * @param {Mat4} m - The transformation matrix.
     * @returns {Vec3d} The transformed vector.
     */
    static transform(v: Point3d, m: Mat4): Vec3d;
    /**
     * Translates a vector by another vector without modifying the original vector.
     * @param {Point3d} v - The vector to translate.
     * @param {Point3d} translation - The translation vector.
     * @returns {Vec3d} The translated vector.
     */
    static translate(v: Point3d, translation: Point3d): Vec3d;
    /**
     * Rotates a vector around the x-axis without modifying the original vector.
     * @param {Point3d} v - The vector to rotate.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Vec3d} The rotated vector.
     */
    static rotateX(v: Point3d, theta: number): Vec3d;
    /**
     * Rotates a vector around the y-axis without modifying the original vector.
     * @param {Point3d} v - The vector to rotate.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Vec3d} The rotated vector.
     */
    static rotateY(v: Point3d, theta: number): Vec3d;
    /**
     * Rotates a vector around the z-axis without modifying the original vector.
     * @param {Point3d} v - The vector to rotate.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Vec3d} The rotated vector.
     */
    static rotateZ(v: Point3d, theta: number): Vec3d;
    /**
     * Scales a vector by another vector without modifying the original vector.
     * @param {Point3d} v - The vector to scale.
     * @param {number} scale - The scaling vector.
     * @returns {Vec3d} The scaled vector.
     */
    static scale(v: Point3d, scale: Point3d): Vec3d;
    /**
     * Normalizes a vector to have a magnitude of 1 without modifying the original vector.
     * @param {Point3d} v - The vector to normalize.
     * @returns {Vec3d} The normalized vector.
     */
    static normalize(v: Point3d): Vec3d;
    /**
     * Creates a 3-dimensional vector from polar coordinates.
     * @param {number} magnitude - The magnitude of the vector.
     * @param {number} theta - The angle in the x-y plane.
     * @param {number} phi - The angle in the x-z plane.
     * @returns {Vec3d} The created vector.
     */
    static fromPolar(magnitude: number, theta: number, phi: number): Vec3d;
}
