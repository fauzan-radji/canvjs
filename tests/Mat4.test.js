import Mat4 from "../lib/Mat4.js";

describe("Mat4", () => {
  it("should be defined", () => {
    expect(Mat4).toBeDefined();
  });

  it("should have a constructor", () => {
    const m = new Mat4();
    expect(m).toBeDefined();
  });

  it("should set the data correctly", () => {
    const m = new Mat4();
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    m.set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    expect(m.data).toEqual(data);
  });

  it("should copy the matrix correctly", () => {
    const m1 = new Mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    const m2 = m1.copy();
    expect(m2.data).toEqual(m1.data);
    expect(m2).not.toBe(m1);
  });

  it("should multiply two matrices correctly", () => {
    const m1 = new Mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    const m2 = new Mat4(16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
    const result = new Mat4(
      80,
      70,
      60,
      50,
      240,
      214,
      188,
      162,
      400,
      358,
      316,
      274,
      560,
      502,
      444,
      386
    );
    m1.multiply(m2);
    expect(m1.data).toEqual(result.data);
  });

  it("should return the identity matrix correctly", () => {
    const identity = Mat4.identity();
    const expected = new Mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    expect(identity.data).toEqual(expected.data);
  });

  it("should create a translation matrix correctly", () => {
    const translation = Mat4.translation(10, 20, 30);
    const expected = new Mat4(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      10,
      20,
      30,
      1
    );
    expect(translation.data).toEqual(expected.data);
  });

  it("should create a rotation matrix around the X-axis correctly", () => {
    const rotation = Mat4.rotationX(Math.PI / 2);
    const expected = new Mat4(1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1);
    for (let i = 0; i < 16; i++) {
      expect(rotation.data[i]).toBeCloseTo(expected.data[i]);
    }
  });

  it("should create a rotation matrix around the Y-axis correctly", () => {
    const rotation = Mat4.rotationY(Math.PI / 2);
    const expected = new Mat4(0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1);
    for (let i = 0; i < 16; i++) {
      expect(rotation.data[i]).toBeCloseTo(expected.data[i]);
    }
  });

  it("should create a rotation matrix around the Z-axis correctly", () => {
    const rotation = Mat4.rotationZ(Math.PI / 2);
    const expected = new Mat4(0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    for (let i = 0; i < 16; i++) {
      expect(rotation.data[i]).toBeCloseTo(expected.data[i]);
    }
  });

  it("should create a scaling matrix correctly", () => {
    const scaling = Mat4.scale(2, 3, 4);
    const expected = new Mat4(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 1);
    expect(scaling.data).toEqual(expected.data);
  });

  it("should create a perspective matrix correctly", () => {
    const perspective = Mat4.perspective(60, 16 / 9, 0.1, 100);
    const expected = new Mat4(
      0.9742785792574935,
      0,
      0,
      0,
      0,
      1.7320508075688774,
      0,
      0,
      0,
      0,
      1.0010010010010009,
      -0.10010010010010009,
      0,
      0,
      1,
      0
    );
    for (let i = 0; i < 16; i++) {
      expect(perspective.data[i]).toBeCloseTo(expected.data[i]);
    }
  });
});
