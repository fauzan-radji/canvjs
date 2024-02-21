import Vec2d from "../lib/Vec2d";
import Mat3 from "../lib/Mat3";

describe("Vec2d", () => {
  let vec;

  beforeEach(() => {
    vec = new Vec2d(2, 3);
  });

  it("should set the values correctly", () => {
    expect(vec.x).toBe(2);
    expect(vec.y).toBe(3);
  });

  it("should copy the vector correctly", () => {
    const copiedVec = vec.copy();
    expect(copiedVec.x).toBe(2);
    expect(copiedVec.y).toBe(3);
  });

  it("should add two vectors correctly", () => {
    const otherVec = new Vec2d(4, 5);
    vec.add(otherVec);
    expect(vec.x).toBe(6);
    expect(vec.y).toBe(8);
  });

  it("should subtract two vectors correctly", () => {
    const otherVec = new Vec2d(1, 2);
    vec.subtract(otherVec);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(1);
  });

  it("should multiply the vector by a scalar correctly", () => {
    const scalar = 2;
    vec.multiply(scalar);
    expect(vec.x).toBe(4);
    expect(vec.y).toBe(6);
  });

  it("should divide the vector by a scalar correctly", () => {
    const scalar = 2;
    vec.divide(scalar);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(1.5);
  });

  it("should calculate the dot product of two vectors correctly", () => {
    const otherVec = new Vec2d(2, 3);
    const dotProduct = vec.dot(otherVec);
    expect(dotProduct).toBe(13);
  });

  it("should calculate the cross product of two vectors correctly", () => {
    const otherVec = new Vec2d(2, 3);
    const crossProduct = vec.cross(otherVec);
    expect(crossProduct).toBe(0);
  });

  it("should transform the vector correctly using a matrix", () => {
    const matrix = new Mat3([2, 0, 0, 2, 1, 0, 0, 0, 1]);
    vec.transform(matrix);
    expect(vec.x).toBe(4);
    expect(vec.y).toBe(7);
  });

  it("should translate the vector correctly", () => {
    const translation = new Vec2d(4, 5);
    vec.translate(translation);
    expect(vec.x).toBe(6);
    expect(vec.y).toBe(8);
  });

  it("should rotate the vector correctly", () => {
    const theta = Math.PI / 2;
    vec.rotate(theta);
    expect(vec.x).toBeCloseTo(-3);
    expect(vec.y).toBeCloseTo(2);
  });

  it("should scale the vector correctly", () => {
    const scale = new Vec2d(2, 3);
    vec.scale(scale);
    expect(vec.x).toBe(4);
    expect(vec.y).toBe(9);
  });

  it("should normalize the vector correctly", () => {
    vec.normalize();
    expect(vec.x).toBeCloseTo(0.5547);
    expect(vec.y).toBeCloseTo(0.8321);
  });

  it("should set the x value correctly", () => {
    vec.x = 5;
    expect(vec.x).toBe(5);
    expect(vec.y).toBe(3);
  });

  it("should set the y value correctly", () => {
    vec.y = 5;
    expect(vec.x).toBe(2);
    expect(vec.y).toBe(5);
  });

  it("should set the theta value correctly", () => {
    vec.theta = Math.PI / 4;
    expect(vec.x).toBeCloseTo(2.5494);
    expect(vec.y).toBeCloseTo(2.5494);
  });

  it("should set the magnitude value correctly", () => {
    vec.magnitude = 5;
    expect(vec.x).toBeCloseTo(2.7735);
    expect(vec.y).toBeCloseTo(4.1602);
  });

  it("should set the r value correctly", () => {
    vec.r = 5;
    expect(vec.x).toBeCloseTo(2.7735);
    expect(vec.y).toBeCloseTo(4.1602);
  });

  it("should add two vectors correctly (static method)", () => {
    const v1 = new Vec2d(2, 3);
    const v2 = new Vec2d(4, 5);
    const result = Vec2d.add(v1, v2);
    expect(result.x).toBe(6);
    expect(result.y).toBe(8);
  });

  it("should subtract two vectors correctly (static method)", () => {
    const v1 = new Vec2d(2, 3);
    const v2 = new Vec2d(1, 2);
    const result = Vec2d.subtract(v1, v2);
    expect(result.x).toBe(1);
    expect(result.y).toBe(1);
  });

  it("should multiply the vector by a scalar correctly (static method)", () => {
    const v = new Vec2d(2, 3);
    const scalar = 2;
    const result = Vec2d.multiply(v, scalar);
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
  });

  it("should divide the vector by a scalar correctly (static method)", () => {
    const v = new Vec2d(2, 3);
    const scalar = 2;
    const result = Vec2d.divide(v, scalar);
    expect(result.x).toBe(1);
    expect(result.y).toBe(1.5);
  });

  it("should calculate the dot product of two vectors correctly (static method)", () => {
    const v1 = new Vec2d(2, 3);
    const v2 = new Vec2d(2, 3);
    const dotProduct = Vec2d.dot(v1, v2);
    expect(dotProduct).toBe(13);
  });

  it("should calculate the cross product of two vectors correctly (static method)", () => {
    const v1 = new Vec2d(2, 3);
    const v2 = new Vec2d(2, 3);
    const crossProduct = Vec2d.cross(v1, v2);
    expect(crossProduct).toBe(0);
  });

  it("should transform the vector correctly using a matrix (static method)", () => {
    const v = new Vec2d(2, 3);
    const matrix = new Mat3([2, 0, 0, 0, 1, 0, 0, 0, 1]);
    const result = Vec2d.transform(v, matrix);
    expect(result.x).toBe(4);
    expect(result.y).toBe(3);
  });

  it("should translate the vector correctly (static method)", () => {
    const v = new Vec2d(2, 3);
    const translation = new Vec2d(2, 3);
    const result = Vec2d.translate(v, translation);
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
  });

  it("should rotate the vector correctly (static method)", () => {
    const v = new Vec2d(2, 3);
    const theta = Math.PI / 2;
    const result = Vec2d.rotate(v, theta);
    expect(result.x).toBeCloseTo(-3);
    expect(result.y).toBeCloseTo(2);
  });

  it("should scale the vector correctly (static method)", () => {
    const v = new Vec2d(2, 3);
    const scale = new Vec2d(2, 3);
    const result = Vec2d.scale(v, scale);
    expect(result.x).toBe(4);
    expect(result.y).toBe(9);
  });

  it("should normalize the vector correctly (static method)", () => {
    const v = new Vec2d(2, 3);
    const result = Vec2d.normalize(v);
    expect(result.x).toBeCloseTo(0.5547);
    expect(result.y).toBeCloseTo(0.8321);
  });

  it("should create a vector from polar coordinates correctly", () => {
    const theta = Math.PI / 4;
    const magnitude = 5;
    const result = Vec2d.fromPolar(theta, magnitude);
    expect(result.x).toBeCloseTo(3.5355);
    expect(result.y).toBeCloseTo(3.5355);
  });
});
