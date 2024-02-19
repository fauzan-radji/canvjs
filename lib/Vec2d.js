import Mat3 from "./Mat3.js";
export default class Vec2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }
    copy({ x = this.x, y = this.y } = {}) {
        return new Vec2d(x, y);
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divide(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    transform(m) {
        const a = m.data;
        const x = this.x;
        const y = this.y;
        this.x = a[0] * x + a[1] * y + a[2];
        this.y = a[3] * x + a[4] * y + a[5];
        return this;
    }
    translate(v) {
        return this.transform(Mat3.translation(v.x, v.y));
    }
    rotate(theta) {
        return this.transform(Mat3.rotation(theta));
    }
    scale(v) {
        return this.transform(Mat3.scale(v.x, v.y));
    }
    set x(x) {
        this._x = x;
        this._theta = Math.atan2(this._y, x);
        this._magnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(this._y, 2));
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = y;
        this._theta = Math.atan2(y, this._x);
        this._magnitude = Math.sqrt(Math.pow(this._x, 2) + Math.pow(y, 2));
    }
    get y() {
        return this._y;
    }
    set theta(theta) {
        this._theta = theta;
        this._x = this._magnitude * Math.cos(theta);
        this._y = this._magnitude * Math.sin(theta);
    }
    get theta() {
        return this._theta;
    }
    set magnitude(magnitude) {
        this._magnitude = magnitude;
        this._x = magnitude * Math.cos(this._theta);
        this._y = magnitude * Math.sin(this._theta);
    }
    get magnitude() {
        return this._magnitude;
    }
    set r(r) {
        this.magnitude = r;
    }
    get r() {
        return this.magnitude;
    }
    static add(v1, v2) {
        return v1.copy().add(v2);
    }
    static subtract(v1, v2) {
        return v1.copy().subtract(v2);
    }
    static multiply(v, scalar) {
        return v.copy().multiply(scalar);
    }
    static divide(v, scalar) {
        return v.copy().divide(scalar);
    }
    static dot(v1, v2) {
        return v1.dot(v2);
    }
    static cross(v1, v2) {
        return v1.cross(v2);
    }
    static transform(v, m) {
        return v.copy().transform(m);
    }
    static translate(v, translation) {
        return v.copy().translate(translation);
    }
    static rotate(v, theta) {
        return v.copy().rotate(theta);
    }
    static scale(v, scale) {
        return v.copy().scale(scale);
    }
    static fromPolar(theta, magnitude) {
        return new Vec2d(magnitude * Math.cos(theta), magnitude * Math.sin(theta));
    }
}
