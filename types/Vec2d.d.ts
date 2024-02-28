import Mat3 from "./Mat3.js";
export type Point2d = Vec2d | {
    x: number;
    y: number;
};
/**
 * Represents a 2D vector.
 */
export default class Vec2d {
    #private;
    /**
     * Creates a new Vec2d instance.
     * @param {number} x - The x-coordinate of the vector.
     * @param {number} y - The y-coordinate of the vector.
     */
    constructor(x: number, y: number);
    /**
     * Sets the values of this vector to the values of another vector.
     * @param {Point2d} v - The vector to copy from.
     * @returns {Vec2d} The modified Vec2d instance.
     */
    set(v: Point2d): Vec2d;
    /**
     * Creates a copy of this vector.
     * @param {Object} [options={}] - The options for copying the Vec2d instance.
     * @param {number} [options.x=this.x] - The x-coordinate of the copied Vec2d instance.
     * @param {number} [options.y=this.y] - The y-coordinate of the copied Vec2d instance.
     * @returns {Vec2d} The copied Vec2d instance.
     */
    copy({ x, y }?: {
        x?: number;
        y?: number;
    }): Vec2d;
    /**
     * Adds the given vector to this vector.
     *
     * @param {Point2d} v - The vector to be added.
     * @returns {Vec2d} The resulting vector after addition.
     */
    add(v: Point2d): Vec2d;
    /**
     * Subtracts the given vector from this vector.
     *
     * @param {Point2d} v - The vector to be subtracted.
     * @returns {Vec2d} The resulting vector after subtraction.
     */
    subtract(v: Point2d): Vec2d;
    /**
     * Multiplies this vector by a scalar value.
     *
     * @param {number} scalar - The scalar value to multiply by.
     * @returns {Vec2d} The resulting vector after multiplication.
     */
    multiply(scalar: number): Vec2d;
    /**
     * Divides this vector by a scalar value.
     *
     * @param {number} scalar - The scalar value to divide by.
     * @returns {Vec2d} The resulting vector after division.
     */
    divide(scalar: number): Vec2d;
    /**
     * Calculates the dot product of this vector and another vector.
     *
     * @param {Point2d} v - The other vector.
     * @returns {number} The dot product of the two vectors.
     */
    dot(v: Point2d): number;
    /**
     * Calculates the cross product of this vector and another vector.
     *
     * @param {Point2d} v - The other vector.
     * @returns {number} The cross product of the two vectors.
     */
    cross(v: Point2d): number;
    /**
     * Transforms this vector by a 3x3 matrix.
     *
     * @param {Mat3} m - The transformation matrix.
     * @returns {Vec2d} The resulting transformed vector.
     */
    transform(m: Mat3): Vec2d;
    /**
     * Translates this vector by another vector.
     *
     * @param {Point2d} v - The translation vector.
     * @returns {Vec2d} The resulting translated vector.
     */
    translate(v: Point2d): Vec2d;
    /**
     * Rotates this vector by an angle (in radians).
     *
     * @param {number} theta - The rotation angle (in radians).
     * @returns {Vec2d} The resulting rotated vector.
     */
    rotate(theta: number): Vec2d;
    /**
     * Scales this vector by another vector.
     *
     * @param {Point2d} v - The scaling vector.
     * @returns {Vec2d} The resulting scaled vector.
     */
    scale(v: Point2d): Vec2d;
    /**
     * Normalizes this vector to have a magnitude of 1.
     *
     * @returns {Vec2d} The normalized vector.
     */
    normalize(): Vec2d;
    /**
     * Sets the x-coordinate of the vector.
     * @param {number} x - The x-coordinate of the vector.
     */
    set x(x: number);
    /**
     * Gets the x-coordinate of the vector.
     * @returns {number} The x-coordinate of the vector.
     */
    get x(): number;
    /**
     * Sets the y-coordinate of the vector.
     * @param {number} y - The y-coordinate of the vector.
     */
    set y(y: number);
    /**
     * Gets the y-coordinate of the vector.
     * @returns {number} The y-coordinate of the vector.
     */
    get y(): number;
    /**
     * Sets the angle (in radians) between the vector and the positive x-axis.
     * @param {number} theta - The angle (in radians) between the vector and the positive x-axis.
     */
    set theta(theta: number);
    /**
     * Gets the angle (in radians) between the vector and the positive x-axis.
     * @returns {number} The angle (in radians) between the vector and the positive x-axis.
     */
    get theta(): number;
    /**
     * Sets the magnitude (length) of the vector.
     * @param {number} magnitude - The magnitude (length) of the vector.
     */
    set magnitude(magnitude: number);
    /**
     * Gets the magnitude (length) of the vector.
     * @returns {number} The magnitude (length) of the vector.
     */
    get magnitude(): number;
    /**
     * Sets the magnitude (length) of the vector (alias for `magnitude`).
     * @param {number} r - The magnitude (length) of the vector.
     */
    set r(r: number);
    /**
     * Gets the magnitude (length) of the vector (alias for `magnitude`).
     * @returns {number} The magnitude (length) of the vector.
     */
    get r(): number;
    /**
     * Adds two vectors together without modifying the original vectors.
     *
     * @param {Point2d} v1 - The first vector.
     * @param {Point2d} v2 - The second vector.
     * @returns {Vec2d} The resulting vector after addition.
     */
    static add(v1: Point2d, v2: Point2d): Vec2d;
    /**
     * Subtracts one vector from another without modifying the original vectors.
     *
     * @param {Point2d} v1 - The first vector.
     * @param {Point2d} v2 - The second vector.
     * @returns {Vec2d} The resulting vector after subtraction.
     */
    static subtract(v1: Point2d, v2: Point2d): Vec2d;
    /**
     * Multiplies a vector by a scalar value without modifying the original vector.
     *
     * @param {Point2d} v - The vector.
     * @param {number} scalar - The scalar value.
     * @returns {Vec2d} The resulting vector after multiplication.
     */
    static multiply(v: Point2d, scalar: number): Vec2d;
    /**
     * Divides a vector by a scalar value without modifying the original vector.
     *
     * @param {Point2d} v - The vector.
     * @param {number} scalar - The scalar value.
     * @returns {Vec2d} The resulting vector after division.
     */
    static divide(v: Point2d, scalar: number): Vec2d;
    /**
     * Calculates the dot product of two vectors.
     *
     * @param {Point2d} v1 - The first vector.
     * @param {Point2d} v2 - The second vector.
     * @returns {number} The dot product of the two vectors.
     */
    static dot(v1: Point2d, v2: Point2d): number;
    /**
     * Calculates the cross product of two vectors.
     *
     * @param {Point2d} v1 - The first vector.
     * @param {Point2d} v2 - The second vector.
     * @returns {number} The cross product of the two vectors.
     */
    static cross(v1: Point2d, v2: Point2d): number;
    /**
     * Transforms a vector by a 3x3 matrix without modifying the original vector.
     *
     * @param {Point2d} v - The vector.
     * @param {Mat3} m - The transformation matrix.
     * @returns {Vec2d} The resulting transformed vector.
     */
    static transform(v: Point2d, m: Mat3): Vec2d;
    /**
     * Translates a vector by another vector without modifying the original vector.
     *
     * @param {Point2d} v - The vector.
     * @param {Point2d} translation - The translation vector.
     * @returns {Vec2d} The resulting translated vector.
     */
    static translate(v: Point2d, translation: Point2d): Vec2d;
    /**
     * Rotates a vector by an angle (in radians) without modifying the original vector.
     *
     * @param {Point2d} v - The vector.
     * @param {number} theta - The rotation angle (in radians).
     * @returns {Vec2d} The resulting rotated vector.
     */
    static rotate(v: Point2d, theta: number): Vec2d;
    /**
     * Scales a vector by another vector without modifying the original vector.
     *
     * @param {Point2d} v - The vector.
     * @param {Point2d} scale - The scaling vector.
     * @returns {Vec2d} The resulting scaled vector.
     */
    static scale(v: Point2d, scale: Point2d): Vec2d;
    /**
     * Normalizes a vector to have a magnitude of 1 without modifying the original vector.
     *
     * @param {Point2d} v - The vector.
     * @returns {Vec2d} The normalized vector.
     */
    static normalize(v: Point2d): Vec2d;
    /**
     * Creates a vector from polar coordinates.
     *
     * @param {number} theta - The angle (in radians) between the vector and the positive x-axis.
     * @param {number} magnitude - The magnitude (length) of the vector.
     * @returns {Vec2d} The created vector.
     */
    static fromPolar(theta: number, magnitude: number): Vec2d;
}
