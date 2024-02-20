import Mat3 from "../src/Mat3";

describe("Mat3", () => {
  it("should be defined", () => {
    expect(Mat3).toBeDefined();
  });

  it("should have a constructor", () => {
    const m = new Mat3();
    expect(m).toBeDefined();
  });

  it("should set the data correctly", () => {
    const m = new Mat3();
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    m.set(data);
    expect(m.data).toEqual(data);
  });

  it("should copy the matrix correctly", () => {
    const m1 = new Mat3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const m2 = m1.copy();
    expect(m2.data).toEqual(m1.data);
    expect(m2).not.toBe(m1);
  });

  it("should multiply two matrices correctly", () => {
    const m1 = new Mat3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const m2 = new Mat3([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    const result = new Mat3([30, 24, 18, 84, 69, 54, 138, 114, 90]);
    m1.multiply(m2);
    expect(m1.data).toEqual(result.data);
  });

  it("should return the identity matrix correctly", () => {
    const identity = Mat3.identity();
    const expected = new Mat3([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    expect(identity.data).toEqual(expected.data);
  });

  it("should create a translation matrix correctly", () => {
    const translation = Mat3.translation(10, 20);
    const expected = new Mat3([1, 0, 10, 0, 1, 20, 0, 0, 1]);
    expect(translation.data).toEqual(expected.data);
  });

  it("should create a rotation matrix correctly", () => {
    const rotation = Mat3.rotation(Math.PI / 2);
    const expected = new Mat3([0, -1, 0, 1, 0, 0, 0, 0, 1]);
    for (let i = 0; i < rotation.data.length; i++) {
      expect(rotation.data[i]).toBeCloseTo(expected.data[i]);
    }
  });

  it("should create a scaling matrix correctly", () => {
    const scaling = Mat3.scale(2, 3);
    const expected = new Mat3([2, 0, 0, 0, 3, 0, 0, 0, 1]);
    expect(scaling.data).toEqual(expected.data);
  });
});
