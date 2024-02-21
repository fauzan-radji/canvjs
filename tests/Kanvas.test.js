import Kanvas from "../lib/Kanvas.js";

describe("Kanvas", () => {
  /** @type {Kanvas} */
  let kanvas;

  beforeEach(() => {
    document.body.innerHTML = '<canvas id="canvas"></canvas>';
    kanvas = new Kanvas("canvas", 800, 600);
  });

  it("should be defined", () => {
    expect(Kanvas).toBeDefined();
  });

  it("should have a constructor", () => {
    expect(kanvas).toBeDefined();
  });

  it("should have a canvas element", () => {
    expect(kanvas.canvas).toBeDefined();
  });

  it("should have a context", () => {
    expect(kanvas.context).toBeDefined();
  });

  it("should have a width", () => {
    expect(kanvas.width).toBeDefined();
  });

  it("should have a height", () => {
    expect(kanvas.height).toBeDefined();
  });

  test("resize() should resize the canvas", () => {
    kanvas.resize(400, 300);
    expect(kanvas.width).toBe(400);
    expect(kanvas.height).toBe(300);
    expect(kanvas.aspectRatio).toBe(400 / 300);
  });

  test("background() should set the background color", () => {
    kanvas.background("red");
    expect(kanvas.canvas.style.backgroundColor).toBe("red");
  });

  test("clear() should clear the canvas", () => {
    kanvas.clear();
    expect(kanvas.context.clearRect).toHaveBeenCalled();
  });
});
