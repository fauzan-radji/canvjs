# KanvasGL

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
- [Usage](#usage-1)
  - [Kanvas]
    - [Constructor](#constructor)
    - [Methods](#methods)
    - [Properties](#properties)
- [Type Aliases](#type-aliases)
  - [Point2d]

## Getting Started

### Installation

```bash
npm install kanvasgl
```

[Back to Table of Contents :arrow_up:][Table of Contents]

### Basic Usage

```html
<!-- index.html -->
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

    <script type="module" src="./script.js"></script>
  </body>
</html>
```

```javascript
// script.js
import Kanvas from "kanvasgl";

const canvas = new Kanvas("myCanvas", 400, 400);
canvas.circle(canvas.center, 100).fill("#00ffff");
```

[Back to Table of Contents :arrow_up:][Table of Contents]

## Usage

### Kanvas

Represents a canvas element and provides methods for drawing shapes and images on it.

#### Constructor

**Parameters**:

| Name   | Type     | Description                   | Required | Default |
| ------ | -------- | ----------------------------- | -------- | ------- |
| id     | `string` | The ID of the canvas element. | ✅       | -       |
| width  | number   | The width of the canvas.      | ✅       | -       |
| height | number   | The height of the canvas.     | ✅       | -       |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Methods

1. `resize(width, height)`

   Resizes the canvas element.

   **Parameters**:

   | Name   | Type   | Description                   | Required | Default |
   | ------ | ------ | ----------------------------- | -------- | ------- |
   | width  | number | The new width of the canvas.  | ✅       | -       |
   | height | number | The new height of the canvas. | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   console.log(canvas.width); // 800
   console.log(canvas.height); // 600

   canvas.resize(400, 300);
   console.log(canvas.width); // 400
   console.log(canvas.height); // 300
   ```

2. `drawImage(image, point, width, height)`

   Draws an image on the canvas.

   **Parameters**:

   | Name   | Type                | Description                                                                                | Required | Default |
   | ------ | ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------- |
   | image  | [CanvasImageSource] | The image to draw.                                                                         | ✅       | -       |
   | point  | [Point2d]           | A [Vec2d] instance or an object containing `x` and `y` properties specifying the position. | ✅       | -       |
   | width  | number              | The width of the image.                                                                    | ✅       | -       |
   | height | number              | The height of the image.                                                                   | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

3. `rotateAndDrawImage(image, point, width, height, angle)`

   Rotates and draws an image on the canvas.

   **Parameters**:

   | Name   | Type                | Description                                                                                | Required | Default |
   | ------ | ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------- |
   | image  | [CanvasImageSource] | The image to draw.                                                                         | ✅       | -       |
   | point  | [Point2d]           | A [Vec2d] instance or an object containing `x` and `y` properties specifying the position. | ✅       | -       |
   | width  | number              | The width of the image.                                                                    | ✅       | -       |
   | height | number              | The height of the image.                                                                   | ✅       | -       |
   | angle  | number              | The angle in radians.                                                                      | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

4. `circle(point, radius)`

   Draws a circle on the canvas.

   **Parameters**:

   | Name   | Type      | Description                                                                                            | Required | Default |
   | ------ | --------- | ------------------------------------------------------------------------------------------------------ | -------- | ------- |
   | point  | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the center of the circle. | ✅       | -       |
   | radius | number    | The radius of the circle.                                                                              | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

5. `rect(point, width: number, height: number)`

   Draws a rectangle on the canvas.

   **Parameters**:

   | Name   | Type      | Description                                                                                                        | Required | Default |
   | ------ | --------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
   | point  | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the top-left corner of the rectangle. | ✅       | -       |
   | width  | number    | The width of the rectangle.                                                                                        | ✅       | -       |
   | height | number    | The height of the rectangle.                                                                                       | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

6. `line(begin, end)`

   Draws a line on the canvas.

   **Parameters**:

   | Name | Type | Description | Required | Default |
   | ---- | ---- | ----------- | -------- | ------- |
   |      |      |             | ✅       | -       |
   |      |      |             | ❌       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

   - `begin`: A [Vec2d] instance or an object containing `x` and `y` properties specifying the start point of the line.
   - `end`: A [Vec2d] instance or an object containing `x` and `y` properties specifying the end point of the line.

7. `moveTo(point)`

   Moves the current drawing position to a specified point.

   **Parameters**:

   | Name | Type | Description | Required | Default |
   | ---- | ---- | ----------- | -------- | ------- |
   |      |      |             | ✅       | -       |
   |      |      |             | ❌       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

   - `point`: A [Vec2d] instance or an object containing `x` and `y` properties specifying the new position.

8. `lineTo(point)`

   Draws a line from the current drawing position to a specified point.

   **Parameters**:

   | Name | Type | Description | Required | Default |
   | ---- | ---- | ----------- | -------- | ------- |
   |      |      |             | ✅       | -       |
   |      |      |             | ❌       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

   - `point`: A [Vec2d] instance or an object containing `x` and `y` properties specifying the end point of the line.

9. `text(params: { text: string; at; fillStyle?: string | CanvasGradient | CanvasPattern; strokeStyle?: string | CanvasGradient | CanvasPattern; size?: number })`

   Draws text on the canvas.

   **Parameters**:

   | Name | Type | Description | Required | Default |
   | ---- | ---- | ----------- | -------- | ------- |
   |      |      |             | ✅       | -       |
   |      |      |             | ❌       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

   - `text`: The text to draw.
   - `at`: A [Vec2d] instance or an object containing `x` and `y` properties specifying the position of the text.
   - `fillStyle`: Optional. The fill style for the text.
   - `strokeStyle`: Optional. The stroke style for the text.
   - `size`: Optional. The size of the text.

10. `beginPath()`

    Begins a new path for drawing.

11. `closePath()`

    Closes the current path.

12. `stroke(options: { color?: string | CanvasGradient | CanvasPattern; width?: number; dash?: Iterable<number> })`

    Strokes the current path.

    - `color`: Optional. The color of the stroke.
    - `width`: Optional. The width of the stroke.
    - `dash`: Optional. The dash pattern for the stroke.

13. `fill(color: string = "#fff")`

    Fills the current path with a specified color.

    - `color`: Optional. The color to fill the path.

14. `background(color: string = "#000")`

    Fills the canvas with a specified background color.

    - `color`: Optional. The color to fill the canvas background.

15. `clear()`

    Clears the canvas.

16. `translate(point)`

    Translates the canvas context.

    - `point`: A [Vec2d] instance or an object containing `x` and `y` properties specifying the translation vector.

17. `rotate(angle: number)`

    Rotates the canvas context.

    - `angle`: The angle of rotation in radians.

18. `save()`

    Saves the current canvas state.

19. `restore()`

    Restores the last saved canvas state.

20. `requestPointerLock(): void`

    Requests pointer lock for the canvas element.

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Properties

1. `fillStyle: string | CanvasGradient | CanvasPattern`

   The fill style used for drawing shapes.

2. `strokeStyle: string | CanvasGradient | CanvasPattern`

   The stroke style used for drawing shapes.

3. `lineWidth: number`

   The line width used for drawing lines and borders.

4. `lineDash: Iterable<number>`

   The line dash pattern used for drawing dashed lines.

5. `lineDashOffset: number`

   The line dash offset used for drawing dashed lines.

6. `width: number`

   The width of the canvas.

7. `height: number`

   The height of the canvas.

8. `textAlign: CanvasTextAlign`

   The text alignment used for drawing text.

9. `textBaseline: CanvasTextBaseline`

   The text baseline used for drawing text.

10. `font: string`

    The font used for drawing text.

11. `globalAlpha: number`

    The global alpha value used for drawing shapes and images.

12. `id: string`

    The ID of the canvas element.

13. `canvas: HTMLCanvasElement`

    The HTML canvas element.

14. `context: CanvasRenderingContext2D`

    The 2D rendering context of the canvas.

15. `center: Vec2d`

    The center point of the canvas.

16. `aspectRatio: number`

    The aspect ratio of the canvas.

[Back to Table of Contents :arrow_up:][Table of Contents]

## Type Aliases

### Point2d

Represents a point in 2D space.

```typescript
type Point2d = Vec2d | { x: number; y: number };
```

[Back to Table of Contents :arrow_up:][Table of Contents]

[Table of Contents]: #table-of-contents
[CanvasImageSource]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#getting_images_to_draw
[Point2d]: #point2d
[Kanvas]: #kanvas
[Vec2d]: #vec2d
