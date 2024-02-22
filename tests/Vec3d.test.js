import Mat4 from "../lib/Mat4";
import Vec3d from "../lib/Vec3d";

describe("Vec3d", () => {
  let vec;

  beforeEach(() => {
    vec = new Vec3d(1, 2, 3);
  });

  it("should create a new Vec3d instance", () => {
    const vec = new Vec3d(1, 2, 3);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
    expect(vec.z).toBe(3);
  });

  it("should set the vector to the values of another vector", () => {
    const vec2 = new Vec3d(4, 5, 6);
    vec.set(vec2);
    expect(vec.x).toBe(4);
    expect(vec.y).toBe(5);
    expect(vec.z).toBe(6);

    const vec3 = { x: 7, y: 8, z: 9 };
    vec.set(vec3);
    expect(vec.x).toBe(7);
    expect(vec.y).toBe(8);
    expect(vec.z).toBe(9);
  });

  it("should create a copy of the vector", () => {
    const vec2 = vec.copy();
    expect(vec2.x).toBe(1);
    expect(vec2.y).toBe(2);
    expect(vec2.z).toBe(3);

    const vec3 = vec.copy({ x: 4, y: 5, z: 6 });
    expect(vec3.x).toBe(4);
    expect(vec3.y).toBe(5);
    expect(vec3.z).toBe(6);
  });

  it("should add another vector to this vector", () => {
    const vec2 = new Vec3d(4, 5, 6);
    vec.add(vec2);
    expect(vec.x).toBe(5);
    expect(vec.y).toBe(7);
    expect(vec.z).toBe(9);

    const vec3 = { x: 7, y: 8, z: 9 };
    vec.add(vec3);
    expect(vec.x).toBe(12);
    expect(vec.y).toBe(15);
    expect(vec.z).toBe(18);
  });

  it("should subtract another vector from this vector", () => {
    const vec2 = new Vec3d(4, 5, 6);
    vec.subtract(vec2);
    expect(vec.x).toBe(-3);
    expect(vec.y).toBe(-3);
    expect(vec.z).toBe(-3);

    const vec3 = { x: 7, y: 8, z: 9 };
    vec.subtract(vec3);
    expect(vec.x).toBe(-10);
    expect(vec.y).toBe(-11);
    expect(vec.z).toBe(-12);
  });

  it("should multiply the vector by a scalar value", () => {
    vec.multiply(2);
    expect(vec.x).toBe(2);
    expect(vec.y).toBe(4);
    expect(vec.z).toBe(6);
  });

  it("should divide the vector by a scalar value", () => {
    vec.divide(2);
    expect(vec.x).toBe(0.5);
    expect(vec.y).toBe(1);
    expect(vec.z).toBe(1.5);
  });

  it("should calculate the dot product of this vector and another vector", () => {
    const vec2 = new Vec3d(4, 5, 6);
    const dotProduct = vec.dot(vec2);
    expect(dotProduct).toBe(32);

    const vec3 = { x: 7, y: 8, z: 9 };
    const dotProduct2 = vec.dot(vec3);
    expect(dotProduct2).toBe(50);
  });

  it("should transform the vector by a 4x4 matrix", () => {
    const matrix = new Mat4([2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1]);
    vec.transform(matrix);
    expect(vec.x).toBe(3);
    expect(vec.y).toBe(5);
    expect(vec.z).toBe(7);
  });

  it("should project the vector onto a 2-dimensional plane", () => {
    const projected = vec.project(45, 1, 0.1, 100, 800, 600);
    expect(projected.x).toBeCloseTo(643.7902);
    expect(projected.y).toBeCloseTo(965.6854);
  });

  it("should translate the vector by a translation vector", () => {
    const translation = new Vec3d(4, 5, 6);
    vec.translate(translation);
    expect(vec.x).toBe(5);
    expect(vec.y).toBe(7);
    expect(vec.z).toBe(9);

    const translation2 = { x: 7, y: 8, z: 9 };
    vec.translate(translation2);
    expect(vec.x).toBe(12);
    expect(vec.y).toBe(15);
    expect(vec.z).toBe(18);
  });

  it("should rotate the vector around the x-axis", () => {
    vec.rotateX(Math.PI / 2);
    expect(vec.x).toBe(1);
    expect(vec.y).toBeCloseTo(3);
    expect(vec.z).toBeCloseTo(-2);
  });

  it("should rotate the vector around the y-axis", () => {
    vec.rotateY(Math.PI / 2);
    expect(vec.x).toBeCloseTo(-3);
    expect(vec.y).toBe(2);
    expect(vec.z).toBeCloseTo(1);
  });

  it("should rotate the vector around the z-axis", () => {
    vec.rotateZ(Math.PI / 2);
    expect(vec.x).toBeCloseTo(2);
    expect(vec.y).toBeCloseTo(-1);
    expect(vec.z).toBe(3);
  });

  it("should scale the vector by a scale vector", () => {
    const scale = new Vec3d(2, 3, 4);
    vec.scale(scale);
    expect(vec.x).toBe(2);
    expect(vec.y).toBe(6);
    expect(vec.z).toBe(12);
  });

  it("should calculate the cross product of this vector and another vector", () => {
    const vec2 = new Vec3d(4, 5, 6);
    const crossProduct = vec.cross(vec2);
    expect(crossProduct.x).toBe(-3);
    expect(crossProduct.y).toBe(6);
    expect(crossProduct.z).toBe(-3);

    const vec3 = { x: 7, y: 8, z: 9 };
    const crossProduct2 = vec.cross(vec3);
    expect(crossProduct2.x).toBe(78);
    expect(crossProduct2.y).toBe(6);
    expect(crossProduct2.z).toBe(-66);
  });

  it("should normalize the vector", () => {
    vec.normalize();
    expect(vec.x).toBeCloseTo(0.2673);
    expect(vec.y).toBeCloseTo(0.5345);
    expect(vec.z).toBeCloseTo(0.8018);
  });

  it("should convert the vector to Vec2d", () => {
    const vec2 = vec.toVec2d();
    expect(vec2.x).toBe(1);
    expect(vec2.y).toBe(2);
    expect(vec2.z).not.toBeDefined();
  });

  it("should set the x value correctly", () => {
    vec.x = 5;
    expect(vec.x).toBe(5);
    expect(vec.y).toBe(2);
    expect(vec.z).toBe(3);
    expect(vec.r).toBeCloseTo(6.1644);
    expect(vec.theta).toBeCloseTo(1.0625);
    expect(vec.phi).toBeCloseTo(0.3805);
  });

  it("should set the y value correctly", () => {
    vec.y = 5;
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(5);
    expect(vec.z).toBe(3);
    expect(vec.r).toBeCloseTo(5.9161);
    expect(vec.theta).toBeCloseTo(1.039);
    expect(vec.phi).toBeCloseTo(1.3734);
  });

  it("should set the z value correctly", () => {
    vec.z = 5;
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
    expect(vec.z).toBe(5);
    expect(vec.r).toBeCloseTo(5.4772);
    expect(vec.theta).toBeCloseTo(0.4205);
    expect(vec.phi).toBeCloseTo(1.1071);
  });

  it("should set the phi value correctly", () => {
    vec.phi = Math.PI / 4;
    expect(vec.x).toBeCloseTo(1.5811);
    expect(vec.y).toBeCloseTo(1.5811);
    expect(vec.z).toBe(3);
  });

  it("should set the theta value correctly", () => {
    vec.theta = Math.PI / 4;
    expect(vec.x).toBeCloseTo(1.1832);
    expect(vec.y).toBeCloseTo(2.3664);
    expect(vec.z).toBeCloseTo(2.646);
  });

  it("should set the r value correctly", () => {
    vec.r = 5;
    expect(vec.x).toBeCloseTo(1.3363);
    expect(vec.y).toBeCloseTo(2.6725);
    expect(vec.z).toBeCloseTo(4.009);
  });

  it("should set the magnitude value correctly", () => {
    vec.magnitude = 5;
    expect(vec.x).toBeCloseTo(1.3363);
    expect(vec.y).toBeCloseTo(2.6725);
    expect(vec.z).toBeCloseTo(4.009);
  });

  it("should add two vectors correctly (static method)", () => {
    const vec2 = new Vec3d(4, 5, 6);
    const result = Vec3d.add(vec, vec2);
    expect(result.x).toBe(5);
    expect(result.y).toBe(7);
    expect(result.z).toBe(9);

    const vec3 = { x: 7, y: 8, z: 9 };
    const result2 = Vec3d.add(vec2, vec3);
    expect(result2.x).toBe(11);
    expect(result2.y).toBe(13);
    expect(result2.z).toBe(15);

    const vec4 = { x: 10, y: 11, z: 12 };
    const result3 = Vec3d.add(vec3, vec4);
    expect(result3.x).toBe(17);
    expect(result3.y).toBe(19);
    expect(result3.z).toBe(21);
  });

  it("should subtract two vectors correctly (static method)", () => {
    const vec2 = new Vec3d(4, 5, 6);
    const result = Vec3d.subtract(vec, vec2);
    expect(result.x).toBe(-3);
    expect(result.y).toBe(-3);
    expect(result.z).toBe(-3);

    const vec3 = { x: 7, y: 8, z: 9 };
    const result2 = Vec3d.subtract(vec2, vec3);
    expect(result2.x).toBe(-3);
    expect(result2.y).toBe(-3);
    expect(result2.z).toBe(-3);

    const vec4 = { x: 10, y: 11, z: 12 };
    const result3 = Vec3d.subtract(vec3, vec4);
    expect(result3.x).toBe(-3);
    expect(result3.y).toBe(-3);
    expect(result3.z).toBe(-3);
  });

  it("should multiply a vector by a scalar value (static method)", () => {
    const result = Vec3d.multiply(vec, 2);
    expect(result.x).toBe(2);
    expect(result.y).toBe(4);
    expect(result.z).toBe(6);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.multiply(vec2, 2);
    expect(result2.x).toBe(8);
    expect(result2.y).toBe(10);
    expect(result2.z).toBe(12);
  });

  it("should divide a vector by a scalar value (static method)", () => {
    const result = Vec3d.divide(vec, 2);
    expect(result.x).toBe(0.5);
    expect(result.y).toBe(1);
    expect(result.z).toBe(1.5);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.divide(vec2, 2);
    expect(result2.x).toBe(2);
    expect(result2.y).toBe(2.5);
    expect(result2.z).toBe(3);
  });

  it("should calculate the dot product of two vectors correctly (static method)", () => {
    const vec2 = new Vec3d(4, 5, 6);
    const dotProduct = Vec3d.dot(vec, vec2);
    expect(dotProduct).toBe(32);

    const vec3 = { x: 7, y: 8, z: 9 };
    const dotProduct2 = Vec3d.dot(vec2, vec3);
    expect(dotProduct2).toBe(122);

    const vec4 = { x: 10, y: 11, z: 12 };
    const dotProduct3 = Vec3d.dot(vec3, vec4);
    expect(dotProduct3).toBe(266);
  });

  it("should calculate the cross product of two vectors correctly (static method)", () => {
    const vec2 = new Vec3d(4, 5, 6);
    const crossProduct = Vec3d.cross(vec, vec2);
    expect(crossProduct.x).toBe(-3);
    expect(crossProduct.y).toBe(6);
    expect(crossProduct.z).toBe(-3);

    const vec3 = { x: 7, y: 8, z: 9 };
    const crossProduct2 = Vec3d.cross(vec2, vec3);
    expect(crossProduct2.x).toBe(-3);
    expect(crossProduct2.y).toBe(6);
    expect(crossProduct2.z).toBe(-3);

    const vec4 = { x: 10, y: 11, z: 12 };
    const crossProduct3 = Vec3d.cross(vec3, vec4);
    expect(crossProduct3.x).toBe(-3);
    expect(crossProduct3.y).toBe(6);
    expect(crossProduct3.z).toBe(-3);
  });

  it("should translate a vector by a translation vector (static method)", () => {
    const translation = new Vec3d(4, 5, 6);
    const result = Vec3d.translate(vec, translation);
    expect(result.x).toBe(5);
    expect(result.y).toBe(7);
    expect(result.z).toBe(9);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.translate(vec2, translation);
    expect(result2.x).toBe(8);
    expect(result2.y).toBe(10);
    expect(result2.z).toBe(12);
  });

  it("should rotate a vector around the x-axis (static method)", () => {
    const result = Vec3d.rotateX(vec, Math.PI / 2);
    expect(result.x).toBe(1);
    expect(result.y).toBeCloseTo(3);
    expect(result.z).toBeCloseTo(-2);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.rotateX(vec2, Math.PI / 2);
    expect(result2.x).toBe(4);
    expect(result2.y).toBeCloseTo(6);
    expect(result2.z).toBeCloseTo(-5);
  });

  it("should rotate a vector around the y-axis (static method)", () => {
    const result = Vec3d.rotateY(vec, Math.PI / 2);
    expect(result.x).toBeCloseTo(-3);
    expect(result.y).toBe(2);
    expect(result.z).toBeCloseTo(1);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.rotateY(vec2, Math.PI / 2);
    expect(result2.x).toBeCloseTo(-6);
    expect(result2.y).toBe(5);
    expect(result2.z).toBeCloseTo(4);
  });

  it("should rotate a vector around the z-axis (static method)", () => {
    const result = Vec3d.rotateZ(vec, Math.PI / 2);
    expect(result.x).toBeCloseTo(2);
    expect(result.y).toBeCloseTo(-1);
    expect(result.z).toBe(3);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.rotateZ(vec2, Math.PI / 2);
    expect(result2.x).toBeCloseTo(5);
    expect(result2.y).toBeCloseTo(-4);
    expect(result2.z).toBe(6);
  });

  it("should scale a vector by a scale vector (static method)", () => {
    const scale = new Vec3d(2, 3, 4);
    const result = Vec3d.scale(vec, scale);
    expect(result.x).toBe(2);
    expect(result.y).toBe(6);
    expect(result.z).toBe(12);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.scale(vec2, scale);
    expect(result2.x).toBe(8);
    expect(result2.y).toBe(15);
    expect(result2.z).toBe(24);
  });

  it("should normalize a vector (static method)", () => {
    const result = Vec3d.normalize(vec);
    expect(result.x).toBeCloseTo(0.2673);
    expect(result.y).toBeCloseTo(0.5345);
    expect(result.z).toBeCloseTo(0.8018);

    const vec2 = { x: 4, y: 5, z: 6 };
    const result2 = Vec3d.normalize(vec2);
    expect(result2.x).toBeCloseTo(0.4558);
    expect(result2.y).toBeCloseTo(0.5698);
    expect(result2.z).toBeCloseTo(0.6838);
  });

  it("should create a new Vec3d instance from a polar coordinate", () => {
    const vec2 = Vec3d.fromPolar(2, Math.PI / 4, Math.PI / 3);
    expect(vec2.x).toBeCloseTo(0.7071);
    expect(vec2.y).toBeCloseTo(1.2247);
    expect(vec2.z).toBeCloseTo(1.4142);
  });
});
