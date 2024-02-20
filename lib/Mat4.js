export default class Mat4 {
    _data;
    constructor(matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) {
        this._data = matrix;
    }
    set(data) {
        this._data = data;
        return this;
    }
    copy() {
        return new Mat4().set(this._data);
    }
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
    get data() {
        return this._data;
    }
    static identity() {
        return new Mat4();
    }
    static translation(x, y, z) {
        return new Mat4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
    }
    static rotationX(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return new Mat4([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1]);
    }
    static rotationY(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return new Mat4([c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1]);
    }
    static rotationZ(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return new Mat4([c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static scale(x, y, z) {
        return new Mat4([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
    }
    static perspective(fieldOfView, aspect, near, far) {
        // convert the angle to radians
        fieldOfView = (fieldOfView * Math.PI) / 180;
        const f = 1 / Math.tan(fieldOfView / 2);
        const q = far / (far - near);
        return new Mat4([
            aspect * f,
            0,
            0,
            0,
            0,
            f,
            0,
            0,
            0,
            0,
            q,
            -q * near,
            0,
            0,
            1,
            0,
        ]);
    }
}
