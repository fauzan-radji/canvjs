/**
 * Represents a 4x4 matrix.
 */
export default class Mat4 {
    /** The matrix data. */
    private _data;
    /**
     * Creates a new Mat4 instance.
     * @param {number[]} matrix - The initial matrix data. Defaults to the identity matrix.
     */
    constructor(matrix?: number[]);
    /**
     * Sets the matrix data.
     * @param {number[]} data - The new matrix data.
     * @returns {Mat4} The modified Mat4 instance.
     */
    set(data: number[]): Mat4;
    /**
     * Creates a copy of the Mat4 instance.
     * @returns {Mat4} A new Mat4 instance with the same matrix data.
     */
    copy(): Mat4;
    /**
     * Multiplies this matrix with another matrix.
     * @param {Mat4} m - The matrix to multiply with.
     * @returns {Mat4} The modified Mat4 instance.
     */
    multiply(m: Mat4): Mat4;
    /**
     * Gets the matrix data.
     * @returns {number[]} The matrix data.
     */
    get data(): number[];
    /**
     * Creates an identity matrix.
     * @returns {Mat4} A new Mat4 instance representing the identity matrix.
     */
    static identity(): Mat4;
    /**
     * Creates a translation matrix.
     * @param {number} x - The translation along the x-axis.
     * @param {number} y - The translation along the y-axis.
     * @param {number} z - The translation along the z-axis.
     * @returns {Mat4} A new Mat4 instance representing the translation matrix.
     */
    static translation(x: number, y: number, z: number): Mat4;
    /**
     * Creates a rotation matrix around the x-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationX(theta: number): Mat4;
    /**
     * Creates a rotation matrix around the y-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationY(theta: number): Mat4;
    /**
     * Creates a rotation matrix around the z-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationZ(theta: number): Mat4;
    /**
     * Creates a scaling matrix.
     * @param {number} x - The scaling factor along the x-axis.
     * @param {number} y - The scaling factor along the y-axis.
     * @param {number} z - The scaling factor along the z-axis.
     * @returns {Mat4} A new Mat4 instance representing the scaling matrix.
     */
    static scale(x: number, y: number, z: number): Mat4;
    /**
     * Creates a perspective projection matrix.
     * @param {number} fieldOfView - The field of view angle in degrees.
     * @param {number} aspect - The aspect ratio of the viewport.
     * @param {number} near - The distance to the near clipping plane.
     * @param {number} far - The distance to the far clipping plane.
     * @returns {Mat4} A new Mat4 instance representing the perspective projection matrix.
     */
    static perspective(fieldOfView: number, aspect: number, near: number, far: number): Mat4;
}
