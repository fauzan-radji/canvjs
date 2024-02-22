/**
 * Represents a 3x3 matrix.
 */
export default class Mat3 {
    private _data;
    /**
     * Creates a new Mat3 instance.
     * @param {number[]?} matrix - The initial matrix data. Defaults to the identity matrix.
     */
    constructor(matrix?: number[]);
    /**
     * Sets the matrix data.
     * @param {number[]} data - The new matrix data.
     * @returns {Mat3} The modified Mat3 instance.
     */
    set(data: number[]): Mat3;
    /**
     * Creates a copy of the Mat3 instance.
     * @returns {Mat3} A new Mat3 instance with the same matrix data.
     */
    copy(): Mat3;
    /**
     * Multiplies the current matrix with another matrix.
     * @param {Mat3} m - The matrix to multiply with.
     * @returns {Mat3} The modified Mat3 instance.
     */
    multiply(m: Mat3): Mat3;
    /**
     * Gets the matrix data.
     * @returns {number[]} The matrix data.
     */
    get data(): number[];
    /**
     * Creates an identity matrix.
     * @returns {Mat3} A new Mat3 instance representing the identity matrix.
     */
    static identity(): Mat3;
    /**
     * Creates a translation matrix.
     * @param {number} x - The translation along the x-axis.
     * @param {number} y - The translation along the y-axis.
     * @returns {Mat3} A new Mat3 instance representing the translation matrix.
     */
    static translation(x: number, y: number): Mat3;
    /**
     * Creates a rotation matrix.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat3} A new Mat3 instance representing the rotation matrix.
     */
    static rotation(theta: number): Mat3;
    /**
     * Creates a scaling matrix.
     * @param {number} x - The scaling factor along the x-axis.
     * @param {number} y - The scaling factor along the y-axis.
     * @returns {Mat3} A new Mat3 instance representing the scaling matrix.
     */
    static scale(x: number, y: number): Mat3;
}
