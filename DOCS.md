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

| Name     | Type   | Description                   | Required | Default |
| -------- | ------ | ----------------------------- | -------- | ------- |
| `id`     | string | The ID of the canvas element. | ✅       | -       |
| `width`  | number | The width of the canvas.      | ✅       | -       |
| `height` | number | The height of the canvas.     | ✅       | -       |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Methods

1. `resize(width, height)`

   Resizes the canvas element.

   **Parameters**:

   | Name     | Type   | Description                   | Required | Default |
   | -------- | ------ | ----------------------------- | -------- | ------- |
   | `width`  | number | The new width of the canvas.  | ✅       | -       |
   | `height` | number | The new height of the canvas. | ✅       | -       |

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

   | Name     | Type                | Description                                                                                | Required | Default |
   | -------- | ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------- |
   | `image`  | [CanvasImageSource] | The image to draw.                                                                         | ✅       | -       |
   | `point`  | [Point2d]           | A [Vec2d] instance or an object containing `x` and `y` properties specifying the position. | ✅       | -       |
   | `width`  | number              | The width of the image.                                                                    | ✅       | -       |
   | `height` | number              | The height of the image.                                                                   | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

3. `rotateAndDrawImage(image, point, width, height, angle)`

   Rotates and draws an image on the canvas.

   **Parameters**:

   | Name     | Type                | Description                                                                                | Required | Default |
   | -------- | ------------------- | ------------------------------------------------------------------------------------------ | -------- | ------- |
   | `image`  | [CanvasImageSource] | The image to draw.                                                                         | ✅       | -       |
   | `point`  | [Point2d]           | A [Vec2d] instance or an object containing `x` and `y` properties specifying the position. | ✅       | -       |
   | `width`  | number              | The width of the image.                                                                    | ✅       | -       |
   | `height` | number              | The height of the image.                                                                   | ✅       | -       |
   | `angle`  | number              | The angle in radians.                                                                      | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

4. `circle(point, radius)`

   Draws a circle on the canvas.

   **Parameters**:

   | Name     | Type      | Description                                                                                            | Required | Default |
   | -------- | --------- | ------------------------------------------------------------------------------------------------------ | -------- | ------- |
   | `point`  | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the center of the circle. | ✅       | -       |
   | `radius` | number    | The radius of the circle.                                                                              | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

5. `rect(point, width, height)`

   Draws a rectangle on the canvas.

   **Parameters**:

   | Name     | Type      | Description                                                                                                        | Required | Default |
   | -------- | --------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
   | `point`  | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the top-left corner of the rectangle. | ✅       | -       |
   | `width`  | number    | The width of the rectangle.                                                                                        | ✅       | -       |
   | `height` | number    | The height of the rectangle.                                                                                       | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

6. `line(begin, end)`

   Draws a line on the canvas.

   **Parameters**:

   | Name    | Type      | Description                                                                                               | Required | Default |
   | ------- | --------- | --------------------------------------------------------------------------------------------------------- | -------- | ------- |
   | `begin` | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the start point of the line. | ✅       | -       |
   | `end`   | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the end point of the line.   | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

7. `moveTo(point)`

   Moves the current drawing position to a specified point.

   **Parameters**:

   | Name    | Type      | Description                                                                                    | Required | Default |
   | ------- | --------- | ---------------------------------------------------------------------------------------------- | -------- | ------- |
   | `point` | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the new position. | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

8. `lineTo(point)`

   Draws a line from the current drawing position to a specified point.

   **Parameters**:

   | Name    | Type      | Description                                                                                             | Required | Default |
   | ------- | --------- | ------------------------------------------------------------------------------------------------------- | -------- | ------- |
   | `point` | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the end point of the line. | ✅       | -       |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

9. `text({ text, at, fillStyle?, strokeStyle?, size? })`

   Draws text on the canvas.

   **Parameters**:

   | Name                 | Type      | Description                                                                                            | Required | Default            |
   | -------------------- | --------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------------ |
   | `params`             | Object    | An object containing the parameters for drawing the text.                                              | ✅       | -                  |
   | `params.text`        | string    | The text to draw.                                                                                      | ✅       | -                  |
   | `params.at`          | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the position of the text. | ✅       | -                  |
   | `params.fillStyle`   | [Color]   | The fill style for the text.                                                                           | ❌       | `this.fillStyle`   |
   | `params.strokeStyle` | [Color]   | The stroke style for the text.                                                                         | ❌       | `this.strokeStyle` |
   | `params.size`        | number    | The size of the text.                                                                                  | ❌       | 16                 |

   **Returns**: [Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

10. `beginPath()`

    Begins a new path for drawing.

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

11. `closePath()`

    Closes the current path.

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

12. `stroke({ color?, width?, dash? })`

    Strokes the current path.

    **Parameters**:

    | Name            | Type             | Description                      | Required | Default            |
    | --------------- | ---------------- | -------------------------------- | -------- | ------------------ |
    | `options`       | Object           | The options for the stroke.      | ❌       | `{}`               |
    | `options.color` | [Color]          | The color of the stroke.         | ❌       | `this.strokeStyle` |
    | `options.width` | number           | The width of the stroke.         | ❌       | `this.lineWidth`   |
    | `options.dash`  | Iterable<number> | The dash pattern for the stroke. | ❌       | `this.lineDash`    |

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

13. `fill(color?)`

    Fills the current path with a specified color.

    **Parameters**:

    | Name    | Type    | Description                 | Required | Default          |
    | ------- | ------- | --------------------------- | -------- | ---------------- |
    | `color` | [Color] | The color to fill the path. | ❌       | `this.fillStyle` |

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

14. `background(color: CSSColor = "#000")`

    Fills the canvas with a specified background color.

    **Parameters**:

    | Name    | Type       | Description                              | Required | Default |
    | ------- | ---------- | ---------------------------------------- | -------- | ------- |
    | `color` | [CSSColor] | The color to fill the canvas background. | ❌       | `#000`  |

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

15. `clear()`

    Clears the canvas.

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

16. `translate(point)`

    Translates the canvas context.

    **Parameters**:

    | Name    | Type      | Description                                                                                          | Required | Default |
    | ------- | --------- | ---------------------------------------------------------------------------------------------------- | -------- | ------- |
    | `point` | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the translation vector. | ✅       | -       |

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

17. `rotate(angle)`

    Rotates the canvas context.

    **Parameters**:

    | Name    | Type   | Description                       | Required | Default |
    | ------- | ------ | --------------------------------- | -------- | ------- |
    | `angle` | number | The angle of rotation in radians. | ✅       | -       |

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

18. `save()`

    Saves the current canvas state.

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

19. `restore()`

    Restores the last saved canvas state.

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

20. `requestPointerLock()`

    Requests pointer lock for the canvas element.

    **Returns**: [Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

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

### Color

Represents a color.

```typescript
type Color = string | CanvasGradient | CanvasPattern;
```

[CanvasGradient] and [CanvasPattern] are objects used to create gradients and patterns for drawing shapes and images on the canvas.

[Back to Table of Contents :arrow_up:][Table of Contents]

[Table of Contents]: #table-of-contents
[CanvasImageSource]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#getting_images_to_draw
[CanvasGradient]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient
[CanvasPattern]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern
[CSSColor]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
[Point2d]: #point2d
[Kanvas]: #kanvas
[Vec2d]: #vec2d
[Color]: #color
