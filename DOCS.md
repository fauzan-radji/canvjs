# KanvasGL

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Basic Usage](#basic-usage)
- [Documentation](#documentation)
  - [Kanvas](#kanvas)
    - [Constructor](#constructor)
    - [Methods](#methods)
    - [Properties](#properties)

## Getting Started

### Installation

```bash
$ npm install kanvasgl
```

### Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="importmap">
      {
        "imports": {
          "kanvasgl": "./node_modules/kanvasgl/index.js"
        }
      }
    </script>
  </head>

  <body>
    <canvas id="myCanvas"></canvas>

    <script type="module">
      import Kanvas from "kanvasgl";

      const canvas = new Kanvas("myCanvas", 400, 400);
      canvas.circle(canvas.center, 100).fill("#00ffff");
    </script>
  </body>
</html>
```

### Basic Usage

```javascript
import Kanvas from "kanvasgl";

const canvas = new Kanvas("myCanvas", 400, 400);
canvas.circle(canvas.center, 100).fill("#00ffff");
```

## Documentation

### Kanvas

Represents a canvas element and provides methods for drawing shapes and images on it.

#### Constructor

##### `constructor(id: string, width: number, height: number)`

Creates a new instance of the Kanvas class.

- `id`: The ID of the canvas element.
- `width`: The width of the canvas.
- `height`: The height of the canvas.

#### Methods

##### `resize(width: number, height: number): Kanvas`

Resizes the canvas element.

- `width`: The new width of the canvas.
- `height`: The new height of the canvas.

##### `drawImage(image: CanvasImageSource, point: Vec2d | { x: number; y: number }, width: number, height: number): Kanvas`

Draws an image on the canvas.

- `image`: The image to draw.
- `point`: A Vec2d instance or an object containing `x` and `y` properties specifying the position.
- `width`: The width of the image.
- `height`: The height of the image.

##### `rotateAndDrawImage(image: CanvasImageSource, point: Vec2d | { x: number; y: number }, width: number, height: number, angle: number): Kanvas`

Rotates and draws an image on the canvas.

- `image`: The image to draw.
- `point`: A Vec2d instance or an object containing `x` and `y` properties specifying the position.
- `width`: The width of the image.
- `height`: The height of the image.
- `angle`: The angle in radians.

##### `circle(point: Vec2d | { x: number; y: number }, radius: number): Kanvas`

Draws a circle on the canvas.

- `point`: A Vec2d instance or an object containing `x` and `y` properties specifying the center of the circle.
- `radius`: The radius of the circle.

##### `rect(point: Vec2d | { x: number; y: number }, width: number, height: number): Kanvas`

Draws a rectangle on the canvas.

- `point`: A Vec2d instance or an object containing `x` and `y` properties specifying the top-left corner of the rectangle.
- `width`: The width of the rectangle.
- `height`: The height of the rectangle.

##### `line(begin: Vec2d | { x: number; y: number }, end: Vec2d | { x: number; y: number }): Kanvas`

Draws a line on the canvas.

- `begin`: A Vec2d instance or an object containing `x` and `y` properties specifying the start point of the line.
- `end`: A Vec2d instance or an object containing `x` and `y` properties specifying the end point of the line.

##### `moveTo(point: Vec2d | { x: number; y: number }): Kanvas`

Moves the current drawing position to a specified point.

- `point`: A Vec2d instance or an object containing `x` and `y` properties specifying the new position.

##### `lineTo(point: Vec2d | { x: number; y: number }): Kanvas`

Draws a line from the current drawing position to a specified point.

- `point`: A Vec2d instance or an object containing `x` and `y` properties specifying the end point of the line.

##### `text(params: { text: string; at: Vec2d | { x: number; y: number }; fillStyle?: string | CanvasGradient | CanvasPattern; strokeStyle?: string | CanvasGradient | CanvasPattern; size?: number }): Kanvas`

Draws text on the canvas.

- `text`: The text to draw.
- `at`: A Vec2d instance or an object containing `x` and `y` properties specifying the position of the text.
- `fillStyle`: Optional. The fill style for the text.
- `strokeStyle`: Optional. The stroke style for the text.
- `size`: Optional. The size of the text.

##### `beginPath(): Kanvas`

Begins a new path for drawing.

##### `closePath(): Kanvas`

Closes the current path.

##### `stroke(options: { color?: string | CanvasGradient | CanvasPattern; width?: number; dash?: Iterable<number> }): Kanvas`

Strokes the current path.

- `color`: Optional. The color of the stroke.
- `width`: Optional. The width of the stroke.
- `dash`: Optional. The dash pattern for the stroke.

##### `fill(color: string = "#fff"): Kanvas`

Fills the current path with a specified color.

- `color`: Optional. The color to fill the path.

##### `background(color: string = "#000"): Kanvas`

Fills the canvas with a specified background color.

- `color`: Optional. The color to fill the canvas background.

##### `clear(): Kanvas`

Clears the canvas.

##### `translate(point: Vec2d | { x: number; y: number }): Kanvas`

Translates the canvas context.

- `point`: A Vec2d instance or an object containing `x` and `y` properties specifying the translation vector.

##### `rotate(angle: number): Kanvas`

Rotates the canvas context.

- `angle`: The angle of rotation in radians.

##### `save(): Kanvas`

Saves the current canvas state.

##### `restore(): Kanvas`

Restores the last saved canvas state.

##### `requestPointerLock(): void`

Requests pointer lock for the canvas element.

#### Properties

##### `fillStyle: string | CanvasGradient | CanvasPattern`

The fill style used for drawing shapes.

##### `strokeStyle: string | CanvasGradient | CanvasPattern`

The stroke style used for drawing shapes.

##### `lineWidth: number`

The line width used for drawing lines and borders.

##### `lineDash: Iterable<number>`

The line dash pattern used for drawing dashed lines.

##### `lineDashOffset: number`

The line dash offset used for drawing dashed lines.

##### `width: number`

The width of the canvas.

##### `height: number`

The height of the canvas.

##### `textAlign: CanvasTextAlign`

The text alignment used for drawing text.

##### `textBaseline: CanvasTextBaseline`

The text baseline used for drawing text.

##### `font: string`

The font used for drawing text.

##### `globalAlpha: number`

The global alpha value used for drawing shapes and images.

##### `id: string`

The ID of the canvas element.

##### `canvas: HTMLCanvasElement`

The HTML canvas element.

##### `context: CanvasRenderingContext2D`

The 2D rendering context of the canvas.

##### `center: Vec2d`

The center point of the canvas.

##### `aspectRatio: number`

The aspect ratio of the canvas.
