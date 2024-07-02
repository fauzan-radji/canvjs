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

  it("should have an id", () => {
    expect(kanvas.id).toBeDefined();
  });

  it("should have a canvas element", () => {
    expect(kanvas.canvas).toBeDefined();
  });

  it("should have a context", () => {
    expect(kanvas.context).toBeDefined();
  });

  it("should have a center", () => {
    expect(kanvas.center).toBeDefined();
  });

  it("should have a width", () => {
    expect(kanvas.width).toBeDefined();
  });

  it("should have a height", () => {
    expect(kanvas.height).toBeDefined();
  });

  it("should have an aspect ratio", () => {
    expect(kanvas.aspectRatio).toBeDefined();
  });

  it("should have a fillStyle", () => {
    expect(kanvas.fillStyle).toBeDefined();
  });

  it("should have a strokeStyle", () => {
    expect(kanvas.strokeStyle).toBeDefined();
  });

  it("should have a lineWidth", () => {
    expect(kanvas.lineWidth).toBeDefined();
  });

  it("should have a lineDash", () => {
    expect(kanvas.lineDash).toBeDefined();
  });

  it("should have a lineDashOffset", () => {
    expect(kanvas.lineDashOffset).toBeDefined();
  });

  it("should have a textAlign", () => {
    expect(kanvas.textAlign).toBeDefined();
  });

  it("should have a textBaseline", () => {
    expect(kanvas.textBaseline).toBeDefined();
  });

  it("should have a font", () => {
    expect(kanvas.font).toBeDefined();
  });

  it("should have a globalAlpha", () => {
    expect(kanvas.globalAlpha).toBeDefined();
  });

  it("should have a resize() method", () => {
    expect(kanvas.resize).toBeDefined();
  });

  it("should have a drawImage() method", () => {
    expect(kanvas.drawImage).toBeDefined();
  });

  it("should have a rotateAndDrawImage() method", () => {
    expect(kanvas.rotateAndDrawImage).toBeDefined();
  });

  it("should have a circle() method", () => {
    expect(kanvas.circle).toBeDefined();
  });

  it("should have a rect() method", () => {
    expect(kanvas.rect).toBeDefined();
  });

  it("should have a line() method", () => {
    expect(kanvas.line).toBeDefined();
  });

  it("should have a moveTo() method", () => {
    expect(kanvas.moveTo).toBeDefined();
  });

  it("should have a lineTo() method", () => {
    expect(kanvas.lineTo).toBeDefined();
  });

  it("should have a text() method", () => {
    expect(kanvas.text).toBeDefined();
  });

  it("should have a beginPath() method", () => {
    expect(kanvas.beginPath).toBeDefined();
  });

  it("should have a closePath() method", () => {
    expect(kanvas.closePath).toBeDefined();
  });

  it("should have a stroke() method", () => {
    expect(kanvas.stroke).toBeDefined();
  });

  it("should have a fill() method", () => {
    expect(kanvas.fill).toBeDefined();
  });

  it("should have a background() method", () => {
    expect(kanvas.background).toBeDefined();
  });

  it("should have a clear() method", () => {
    expect(kanvas.clear).toBeDefined();
  });

  it("should have a translate() method", () => {
    expect(kanvas.translate).toBeDefined();
  });

  it("should have a rotate() method", () => {
    expect(kanvas.rotate).toBeDefined();
  });

  it("should have a save() method", () => {
    expect(kanvas.save).toBeDefined();
  });

  it("should have a restore() method", () => {
    expect(kanvas.restore).toBeDefined();
  });

  it("should have a requestPointerLock() method", () => {
    expect(kanvas.requestPointerLock).toBeDefined();
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
});
