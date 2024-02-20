export default class Mat3 {
  private _data: number[];

  constructor(matrix: number[] = [1, 0, 0, 0, 1, 0, 0, 0, 1]) {
    this._data = matrix;
  }

  set(data: number[]): Mat3 {
    this._data = data;

    return this;
  }

  copy(): Mat3 {
    return new Mat3().set(this._data);
  }

  multiply(m: Mat3): Mat3 {
    const a = this._data;
    const b = m._data;
    const c = new Array(9);

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

  get data(): number[] {
    return this._data;
  }

  static identity(): Mat3 {
    return new Mat3();
  }

  static translation(x: number, y: number): Mat3 {
    return new Mat3([1, 0, x, 0, 1, y, 0, 0, 1]);
  }

  static rotation(theta: number): Mat3 {
    const c = Math.cos(theta);
    const s = Math.sin(theta);

    return new Mat3([c, -s, 0, s, c, 0, 0, 0, 1]);
  }

  static scale(x: number, y: number): Mat3 {
    return new Mat3([x, 0, 0, 0, y, 0, 0, 0, 1]);
  }
}
