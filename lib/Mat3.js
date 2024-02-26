/**
 * Represents a 3x3 matrix.
 */
export default class Mat3 {
    _data;
    /**
     * Creates a new Mat3 instance.
     * @param {number} [i1j1] - The value at the first row and first column.
     * @param {number} [i1j2] - The value at the first row and second column.
     * @param {number} [i1j3] - The value at the first row and third column.
     * @param {number} [i2j1] - The value at the second row and first column.
     * @param {number} [i2j2] - The value at the second row and second column.
     * @param {number} [i2j3] - The value at the second row and third column.
     * @param {number} [i3j1] - The value at the third row and first column.
     * @param {number} [i3j2] - The value at the third row and second column.
     * @param {number} [i3j3] - The value at the third row and third column.
     */
    constructor(i1j1, i1j2, i1j3, i2j1, i2j2, i2j3, i3j1, i3j2, i3j3) {
        this._data = [i1j1, i1j2, i1j3, i2j1, i2j2, i2j3, i3j1, i3j2, i3j3];
    }
    /**
     * Sets the matrix data.
     * @param {number} i1j1 - The value at the first row and first column.
     * @param {number} i1j2 - The value at the first row and second column.
     * @param {number} i1j3 - The value at the first row and third column.
     * @param {number} i2j1 - The value at the second row and first column.
     * @param {number} i2j2 - The value at the second row and second column.
     * @param {number} i2j3 - The value at the second row and third column.
     * @param {number} i3j1 - The value at the third row and first column.
     * @param {number} i3j2 - The value at the third row and second column.
     * @param {number} i3j3 - The value at the third row and third column.
     * @returns {Mat3} The modified Mat3 instance.
     */
    set(i1j1, i1j2, i1j3, i2j1, i2j2, i2j3, i3j1, i3j2, i3j3) {
        this._data[0] = i1j1;
        this._data[1] = i1j2;
        this._data[2] = i1j3;
        this._data[3] = i2j1;
        this._data[4] = i2j2;
        this._data[5] = i2j3;
        this._data[6] = i3j1;
        this._data[7] = i3j2;
        this._data[8] = i3j3;
        return this;
    }
    /**
     * Creates a copy of the Mat3 instance.
     * @returns {Mat3} A new Mat3 instance with the same matrix data.
     */
    copy() {
        return new Mat3(...this._data);
    }
    /**
     * Multiplies the current matrix with another matrix.
     * @param {Mat3} m - The matrix to multiply with.
     * @returns {Mat3} The modified Mat3 instance.
     */
    multiply(m) {
        const a = this._data;
        const b = m._data;
        const c = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        c[0] = a[0] * b[0] + a[1] * b[3] + a[2] * b[6];
        c[1] = a[0] * b[1] + a[1] * b[4] + a[2] * b[7];
        c[2] = a[0] * b[2] + a[1] * b[5] + a[2] * b[8];
        c[3] = a[3] * b[0] + a[4] * b[3] + a[5] * b[6];
        c[4] = a[3] * b[1] + a[4] * b[4] + a[5] * b[7];
        c[5] = a[3] * b[2] + a[4] * b[5] + a[5] * b[8];
        c[6] = a[6] * b[0] + a[7] * b[3] + a[8] * b[6];
        c[7] = a[6] * b[1] + a[7] * b[4] + a[8] * b[7];
        c[8] = a[6] * b[2] + a[7] * b[5] + a[8] * b[8];
        this._data = c;
        return this;
    }
    /**
     * Gets the matrix data.
     * @returns {number[]} The matrix data.
     */
    get data() {
        return this._data;
    }
    /**
     * Creates an identity matrix.
     * @returns {Mat3} A new Mat3 instance representing the identity matrix.
     */
    static identity() {
        return new Mat3(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
    /**
     * Creates a translation matrix.
     * @param {number} x - The translation along the x-axis.
     * @param {number} y - The translation along the y-axis.
     * @returns {Mat3} A new Mat3 instance representing the translation matrix.
     */
    static translation(x, y) {
        return new Mat3(1, 0, x, 0, 1, y, 0, 0, 1);
    }
    /**
     * Creates a rotation matrix.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat3} A new Mat3 instance representing the rotation matrix.
     */
    static rotation(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return new Mat3(c, -s, 0, s, c, 0, 0, 0, 1);
    }
    /**
     * Creates a scaling matrix.
     * @param {number} x - The scaling factor along the x-axis.
     * @param {number} y - The scaling factor along the y-axis.
     * @returns {Mat3} A new Mat3 instance representing the scaling matrix.
     */
    static scale(x, y) {
        return new Mat3(x, 0, 0, 0, y, 0, 0, 0, 1);
    }
}
