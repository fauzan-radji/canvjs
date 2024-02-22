/**
 * Represents a 4x4 matrix.
 */
export default class Mat4 {
    /** The matrix data. */
    _data;
    /**
     * Creates a new Mat4 instance.
     * @param {number[]} matrix - The initial matrix data. Defaults to the identity matrix.
     */
    constructor(matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) {
        this._data = matrix;
    }
    /**
     * Sets the matrix data.
     * @param {number[]} data - The new matrix data.
     * @returns {Mat4} The modified Mat4 instance.
     */
    set(data) {
        this._data = data;
        return this;
    }
    /**
     * Creates a copy of the Mat4 instance.
     * @returns {Mat4} A new Mat4 instance with the same matrix data.
     */
    copy() {
        return new Mat4().set(this._data);
    }
    /**
     * Multiplies this matrix with another matrix.
     * @param {Mat4} m - The matrix to multiply with.
     * @returns {Mat4} The modified Mat4 instance.
     */
    multiply(m) {
        const a = this._data;
        const b = m._data;
        const c = new Array(16);
        c[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
        c[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
        c[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
        c[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
        c[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
        c[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
        c[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
        c[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
        c[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
        c[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
        c[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
        c[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
        c[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
        c[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
        c[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
        c[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
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
     * @returns {Mat4} A new Mat4 instance representing the identity matrix.
     */
    static identity() {
        return new Mat4();
    }
    /**
     * Creates a translation matrix.
     * @param {number} x - The translation along the x-axis.
     * @param {number} y - The translation along the y-axis.
     * @param {number} z - The translation along the z-axis.
     * @returns {Mat4} A new Mat4 instance representing the translation matrix.
     */
    static translation(x, y, z) {
        return new Mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
    }
    /**
     * Creates a rotation matrix around the x-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationX(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return new Mat4([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1]);
    }
    /**
     * Creates a rotation matrix around the y-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationY(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return new Mat4([c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1]);
    }
    /**
     * Creates a rotation matrix around the z-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationZ(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return new Mat4([c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    /**
     * Creates a scaling matrix.
     * @param {number} x - The scaling factor along the x-axis.
     * @param {number} y - The scaling factor along the y-axis.
     * @param {number} z - The scaling factor along the z-axis.
     * @returns {Mat4} A new Mat4 instance representing the scaling matrix.
     */
    static scale(x, y, z) {
        return new Mat4([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
    }
    /**
     * Creates a perspective projection matrix.
     * @param {number} fieldOfView - The field of view angle in degrees.
     * @param {number} aspect - The aspect ratio of the viewport.
     * @param {number} near - The distance to the near clipping plane.
     * @param {number} far - The distance to the far clipping plane.
     * @returns {Mat4} A new Mat4 instance representing the perspective projection matrix.
     */
    static perspective(fieldOfView, aspect, near, far) {
        // convert the angle to radians
        fieldOfView = (fieldOfView * Math.PI) / 180;
        const f = 1 / Math.tan(fieldOfView / 2);
        const q = far / (far - near);
        return new Mat4([
            (1 / aspect) * f, 0, 0, 0,
            0, f, 0, 0,
            0, 0, q, -q * near,
            0, 0, 1, 0,
        ]);
    }
}
