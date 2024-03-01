# KanvasGL

## Table of Contents

- [KanvasGL](#kanvasgl)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Basic Usage](#basic-usage)
  - [Usage](#usage)
    - [Kanvas](#kanvas)
      - [Constructor](#constructor)
      - [Methods](#methods)
      - [Properties](#properties)
    - [Mat3](#mat3)
      - [Constructor](#constructor-1)
      - [Methods](#methods-1)
      - [Properties](#properties-1)
      - [Static Methods](#static-methods)
    - [Mat4](#mat4)
      - [Constructor](#constructor-2)
      - [Methods](#methods-2)
      - [Properties](#properties-2)
      - [Static Methods](#static-methods-1)
    - [Vec2d](#vec2d)
      - [Constructor](#constructor-3)
      - [Methods](#methods-3)
      - [Properties](#properties-3)
      - [Static Methods](#static-methods-2)
  - [Type Aliases](#type-aliases)
    - [Point2d](#point2d)
    - [Color](#color)

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

   **Returns**: [`Kanvas`][Kanvas]

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

   **Returns**: [`Kanvas`][Kanvas]

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

   **Returns**: [`Kanvas`][Kanvas]

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

   **Returns**: [`Kanvas`][Kanvas]

   **Example**:

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   canvas.circle(canvas.center, 100).fill("#00ffff");
   canvas.circle({ x: 200, y: 200 }, 50).fill("#ff00ff");
   ```

5. `rect(point, width, height)`

   Draws a rectangle on the canvas.

   **Parameters**:

   | Name     | Type      | Description                                                                                                        | Required | Default |
   | -------- | --------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
   | `point`  | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the top-left corner of the rectangle. | ✅       | -       |
   | `width`  | number    | The width of the rectangle.                                                                                        | ✅       | -       |
   | `height` | number    | The height of the rectangle.                                                                                       | ✅       | -       |

   **Returns**: [`Kanvas`][Kanvas]

   **Example**:

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   canvas.rect(canvas.center, 200, 150).fill("#00ffff");
   canvas.rect({ x: 100, y: 100 }, 200, 150).fill("#ff00ff");
   ```

6. `line(begin, end)`

   Draws a line on the canvas.

   **Parameters**:

   | Name    | Type      | Description                                                                                               | Required | Default |
   | ------- | --------- | --------------------------------------------------------------------------------------------------------- | -------- | ------- |
   | `begin` | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the start point of the line. | ✅       | -       |
   | `end`   | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the end point of the line.   | ✅       | -       |

   **Returns**: [`Kanvas`][Kanvas]

   **Example**:

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   canvas.line(canvas.center, { x: 200, y: 200 }).stroke();
   ```

7. `moveTo(point)`

   Moves the current drawing position to a specified point.

   **Parameters**:

   | Name    | Type      | Description                                                                                    | Required | Default |
   | ------- | --------- | ---------------------------------------------------------------------------------------------- | -------- | ------- |
   | `point` | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the new position. | ✅       | -       |

   **Returns**: [`Kanvas`][Kanvas]

   **Example**:

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   canvas.moveTo({ x: 200, y: 200 });
   ```

8. `lineTo(point)`

   Draws a line from the current drawing position to a specified point.

   **Parameters**:

   | Name    | Type      | Description                                                                                             | Required | Default |
   | ------- | --------- | ------------------------------------------------------------------------------------------------------- | -------- | ------- |
   | `point` | [Point2d] | A [Vec2d] instance or an object containing `x` and `y` properties specifying the end point of the line. | ✅       | -       |

   **Returns**: [`Kanvas`][Kanvas]

   **Example**:

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   canvas
     .moveTo({ x: 200, y: 200 })
     .lineTo({ x: 300, y: 300 })
     .lineTo({ x: 400, y: 200 })
     .lineTo({ x: 200, y: 200 })
     .stroke();
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

   **Returns**: [`Kanvas`][Kanvas]

   **Example**:

   <!-- TODO -->

   ```javascript
   const canvas = new Kanvas("myCanvas", 800, 600);
   ```

10. `beginPath()`

    Begins a new path for drawing.

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    canvas
      .beginPath()
      .moveTo({ x: 200, y: 200 })
      .lineTo({ x: 300, y: 300 })
      .lineTo({ x: 400, y: 200 })
      .lineTo({ x: 200, y: 200 })
      .stroke();

    canvas.beginPath().circle({ x: 200, y: 200 }, 50).fill("#00ffff");
    ```

11. `closePath()`

    Closes the current path.

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);

    canvas
      .beginPath()
      .moveTo({ x: 200, y: 200 })
      .lineTo({ x: 300, y: 300 })
      .lineTo({ x: 400, y: 200 })
      .lineTo({ x: 200, y: 200 })
      .closePath()
      .stroke();

    canvas
      .beginPath()
      .circle({ x: 200, y: 200 }, 50)
      .closePath()
      .fill("#00ffff");

    canvas
      .beginPath()
      .rect({ x: 100, y: 100 }, 200, 150)
      .closePath()
      .fill("#ff00ff");
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

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);

    canvas
      .beginPath()
      .circle({ x: 200, y: 200 }, 50)
      .stroke({ color: "#00ffff", width: 5 });

    canvas
      .beginPath()
      .rect({ x: 100, y: 100 }, 200, 150)
      .stroke({ color: "#ff00ff", width: 3, dash: [5, 5] });
    ```

13. `fill(color?)`

    Fills the current path with a specified color.

    **Parameters**:

    | Name    | Type    | Description                 | Required | Default          |
    | ------- | ------- | --------------------------- | -------- | ---------------- |
    | `color` | [Color] | The color to fill the path. | ❌       | `this.fillStyle` |

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);

    canvas.beginPath().circle({ x: 200, y: 200 }, 50).fill("#00ffff");

    canvas.beginPath().rect({ x: 100, y: 100 }, 200, 150).fill("#ff00ff");

    canvas
      .beginPath()
      .moveTo({ x: 200, y: 200 })
      .lineTo({ x: 300, y: 300 })
      .lineTo({ x: 400, y: 200 })
      .lineTo({ x: 200, y: 200 })
      .closePath()
      .fill("#00ffff");
    ```

14. `background(color: CSSColor = "#000")`

    Fills the canvas with a specified background color.

    **Parameters**:

    | Name    | Type       | Description                              | Required | Default |
    | ------- | ---------- | ---------------------------------------- | -------- | ------- |
    | `color` | [CSSColor] | The color to fill the canvas background. | ❌       | `#000`  |

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);

    canvas.background("#fff");
    ```

15. `clear()`

    Clears the canvas.

    **Returns**: [`Kanvas`][Kanvas]

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

    **Returns**: [`Kanvas`][Kanvas]

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

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

18. `save()`

    Saves the current canvas state.

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

19. `restore()`

    Restores the last saved canvas state.

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

20. `requestPointerLock()`

    Requests pointer lock for the canvas element.

    **Returns**: [`Kanvas`][Kanvas]

    **Example**:

    <!-- TODO -->

    ```javascript
    const canvas = new Kanvas("myCanvas", 800, 600);
    ```

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Properties

| Name           | Type                                                   | Description                                                | Setter                        | Getter |
| -------------- | ------------------------------------------------------ | ---------------------------------------------------------- | ----------------------------- | ------ |
| width          | `number`                                               | The width of the canvas.                                   | ❌ _(use `resize()` instead)_ | ✅     |
| height         | `number`                                               | The height of the canvas.                                  | ❌ _(use `resize()` instead)_ | ✅     |
| fillStyle      | [`Color`][Color]                                       | The fill style used for drawing shapes.                    | ✅                            | ✅     |
| strokeStyle    | [`Color`][Color]                                       | The stroke style used for drawing shapes.                  | ✅                            | ✅     |
| lineWidth      | `number`                                               | The line width used for drawing lines and borders.         | ✅                            | ✅     |
| lineDash       | `Iterable<number>`                                     | The line dash pattern used for drawing dashed lines.       | ✅                            | ✅     |
| lineDashOffset | `number`                                               | The line dash offset used for drawing dashed lines.        | ✅                            | ✅     |
| textAlign      | [`CanvasTextAlign`][CanvasTextAlign]                   | The text alignment used for drawing text.                  | ✅                            | ✅     |
| textBaseline   | [`CanvasTextBaseline`][CanvasTextBaseline]             | The text baseline used for drawing text.                   | ✅                            | ✅     |
| font           | `string`                                               | The font used for drawing text.                            | ✅                            | ✅     |
| globalAlpha    | `number`                                               | The global alpha value used for drawing shapes and images. | ✅                            | ✅     |
| id             | `string`                                               | The ID of the canvas element.                              | ❌                            | ✅     |
| canvas         | [`HTMLCanvasElement`][HTMLCanvasElement]               | The HTML canvas element.                                   | ❌                            | ✅     |
| context        | [`CanvasRenderingContext2D`][CanvasRenderingContext2D] | The 2D rendering context of the canvas.                    | ❌                            | ✅     |
| center         | [`Vec2d`][Vec2d]                                       | The center point of the canvas.                            | ❌                            | ✅     |
| aspectRatio    | `number`                                               | The aspect ratio of the canvas.                            | ❌                            | ✅     |

[Back to Table of Contents :arrow_up:][Table of Contents]

### Mat3

Represents a 3x3 matrix.

#### Constructor

**Parameters**:

| Name   | Type   | Description                                    | Required | Default |
| ------ | ------ | ---------------------------------------------- | -------- | ------- |
| `i1j1` | number | The value at the first row and first column.   | ✅       | -       |
| `i1j2` | number | The value at the first row and second column.  | ✅       | -       |
| `i1j3` | number | The value at the first row and third column.   | ✅       | -       |
| `i2j1` | number | The value at the second row and first column.  | ✅       | -       |
| `i2j2` | number | The value at the second row and second column. | ✅       | -       |
| `i2j3` | number | The value at the second row and third column.  | ✅       | -       |
| `i3j1` | number | The value at the third row and first column.   | ✅       | -       |
| `i3j2` | number | The value at the third row and second column.  | ✅       | -       |
| `i3j3` | number | The value at the third row and third column.   | ✅       | -       |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Methods

1. `set(i1j1, i1j2, i1j3, i2j1, i2j2, i2j3, i3j1, i3j2, i3j3)`

   Sets the matrix data.

   **Parameters**:

   | Name   | Type   | Description                                    | Required | Default |
   | ------ | ------ | ---------------------------------------------- | -------- | ------- |
   | `i1j1` | number | The value at the first row and first column.   | ✅       | -       |
   | `i1j2` | number | The value at the first row and second column.  | ✅       | -       |
   | `i1j3` | number | The value at the first row and third column.   | ✅       | -       |
   | `i2j1` | number | The value at the second row and first column.  | ✅       | -       |
   | `i2j2` | number | The value at the second row and second column. | ✅       | -       |
   | `i2j3` | number | The value at the second row and third column.  | ✅       | -       |
   | `i3j1` | number | The value at the third row and first column.   | ✅       | -       |
   | `i3j2` | number | The value at the third row and second column.  | ✅       | -       |
   | `i3j3` | number | The value at the third row and third column.   | ✅       | -       |

   **Returns**: [`Mat3`][Mat3]

   **Example**:

   ```javascript
   const matrix = new Mat3(1, 0, 0, 0, 1, 0, 5, 6, 1);
   matrix.set(2, 0, 0, 0, 2, 0, 5, 6, 1);
   console.log(matrix.data); // [2, 0, 0, 0, 2, 0, 5, 6, 1]
   ```

2. `copy()`

   Creates a copy of the Mat3 instance.

   **Returns**: [`Mat3`][Mat3]

   **Example**:

   ```javascript
   const matrix = new Mat3(1, 0, 0, 0, 1, 0, 5, 6, 1);
   const copy = matrix.copy();
   console.log(copy.data); // [1, 0, 0, 0, 1, 0, 5, 6, 1]
   ```

3. `multiply(m)`

   Multiplies the current matrix with another matrix.

   **Parameters**:

   | Name | Type   | Description             | Required | Default |
   | ---- | ------ | ----------------------- | -------- | ------- |
   | `m`  | [Mat3] | The matrix to multiply. | ✅       | -       |

   **Returns**: [`Mat3`][Mat3]

   **Example**:

   ```javascript
   const matrix = new Mat3(1, 0, 0, 0, 1, 0, 5, 6, 1);
   const matrix2 = new Mat3(2, 0, 0, 0, 2, 0, 5, 6, 1);
   matrix.multiply(matrix2);
   console.log(matrix.data); // [2, 0, 0, 0, 2, 0, 15, 18, 1]
   ```

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Properties

| Name | Type     | Description      | Setter | Getter |
| ---- | -------- | ---------------- | ------ | ------ |
| data | `number` | The matrix data. | ❌     | ✅     |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Static Methods

1. `identity()`

   Creates an identity matrix.

   **Returns**: [`Mat3`][Mat3]

   **Example**:

   ```javascript
   const identityMatrix = Mat3.identity();
   console.log(identityMatrix); // Mat3 { _data: [1, 0, 0, 0, 1, 0, 0, 0, 1] }
   ```

2. `translation(x, y)`

   Creates a translation matrix.

   **Parameters**:

   | Name | Type   | Description                       | Required | Default |
   | ---- | ------ | --------------------------------- | -------- | ------- |
   | `x`  | number | The translation along the x-axis. | ✅       | -       |
   | `y`  | number | The translation along the y-axis. | ✅       | -       |

   **Returns**: [`Mat3`][Mat3]

   **Example**:

   ```javascript
   const translationMatrix = Mat3.translation(5, 6);
   console.log(translationMatrix); // Mat3 { _data: [1, 0, 0, 0, 1, 0, 5, 6, 1] }
   ```

3. `rotation(theta)`

   Creates a rotation matrix.

   **Parameters**:

   | Name    | Type   | Description                    | Required | Default |
   | ------- | ------ | ------------------------------ | -------- | ------- |
   | `theta` | number | The rotation angle in radians. | ✅       | -       |

   **Returns**: [`Mat3`][Mat3]

   **Example**:

   ```javascript
   const rotationMatrix = Mat3.rotation(Math.PI / 2);
   console.log(rotationMatrix); // Mat3 { _data: [0, 1, 0, -1, 0, 0, 0, 0, 1] }
   ```

4. `scale(x, y)`

   Creates a scaling matrix.

   **Parameters**:

   | Name | Type   | Description                          | Required | Default |
   | ---- | ------ | ------------------------------------ | -------- | ------- |
   | `x`  | number | The scaling factor along the x-axis. | ✅       | -       |
   | `y`  | number | The scaling factor along the y-axis. | ✅       | -       |

   **Returns**: [`Mat3`][Mat3]

   **Example**:

   ```javascript
   const scalingMatrix = Mat3.scale(2, 3);
   console.log(scalingMatrix); // Mat3 { _data: [2, 0, 0, 0, 3, 0, 0, 0, 1] }
   ```

[Back to Table of Contents :arrow_up:][Table of Contents]

<!-- /**
 * Represents a 4x4 matrix.
 */
export default class Mat4 {
    #private;
    /**
     * Creates a new Mat4 instance.
     * @param {number} [i1j1] - The value at the first row and first column.
     * @param {number} [i1j2] - The value at the first row and second column.
     * @param {number} [i1j3] - The value at the first row and third column.
     * @param {number} [i1j4] - The value at the first row and fourth column.
     * @param {number} [i2j1] - The value at the second row and first column.
     * @param {number} [i2j2] - The value at the second row and second column.
     * @param {number} [i2j3] - The value at the second row and third column.
     * @param {number} [i2j4] - The value at the second row and fourth column.
     * @param {number} [i3j1] - The value at the third row and first column.
     * @param {number} [i3j2] - The value at the third row and second column.
     * @param {number} [i3j3] - The value at the third row and third column.
     * @param {number} [i3j4] - The value at the third row and fourth column.
     * @param {number} [i4j1] - The value at the fourth row and first column.
     * @param {number} [i4j2] - The value at the fourth row and second column.
     * @param {number} [i4j3] - The value at the fourth row and third column.
     * @param {number} [i4j4] - The value at the fourth row and fourth column.
     */
    constructor(i1j1: number, i1j2: number, i1j3: number, i1j4: number, i2j1: number, i2j2: number, i2j3: number, i2j4: number, i3j1: number, i3j2: number, i3j3: number, i3j4: number, i4j1: number, i4j2: number, i4j3: number, i4j4: number);
    /**
     * Sets the matrix data.
     * @param {number} i1j1 - The value at the first row and first column.
     * @param {number} i1j2 - The value at the first row and second column.
     * @param {number} i1j3 - The value at the first row and third column.
     * @param {number} i1j4 - The value at the first row and fourth column.
     * @param {number} i2j1 - The value at the second row and first column.
     * @param {number} i2j2 - The value at the second row and second column.
     * @param {number} i2j3 - The value at the second row and third column.
     * @param {number} i2j4 - The value at the second row and fourth column.
     * @param {number} i3j1 - The value at the third row and first column.
     * @param {number} i3j2 - The value at the third row and second column.
     * @param {number} i3j3 - The value at the third row and third column.
     * @param {number} i3j4 - The value at the third row and fourth column.
     * @param {number} i4j1 - The value at the fourth row and first column.
     * @param {number} i4j2 - The value at the fourth row and second column.
     * @param {number} i4j3 - The value at the fourth row and third column.
     * @param {number} i4j4 - The value at the fourth row and fourth column.
     * @returns {Mat4} The modified Mat4 instance.
     */
    set(i1j1: number, i1j2: number, i1j3: number, i1j4: number, i2j1: number, i2j2: number, i2j3: number, i2j4: number, i3j1: number, i3j2: number, i3j3: number, i3j4: number, i4j1: number, i4j2: number, i4j3: number, i4j4: number): Mat4;
    /**
     * Creates a copy of the Mat4 instance.
     * @returns {Mat4} A new Mat4 instance with the same matrix data.
     */
    copy(): Mat4;
    /**
     * Multiplies this matrix with another matrix.
     * @param {Mat4} m - The matrix to multiply with.
     * @returns {Mat4} The modified Mat4 instance.
     */
    multiply(m: Mat4): Mat4;
    /**
     * Gets the matrix data.
     * @returns {number[]} The matrix data.
     */
    get data(): number[];
    /**
     * Creates an identity matrix.
     * @returns {Mat4} A new Mat4 instance representing the identity matrix.
     */
    static identity(): Mat4;
    /**
     * Creates a translation matrix.
     * @param {number} x - The translation along the x-axis.
     * @param {number} y - The translation along the y-axis.
     * @param {number} z - The translation along the z-axis.
     * @returns {Mat4} A new Mat4 instance representing the translation matrix.
     */
    static translation(x: number, y: number, z: number): Mat4;
    /**
     * Creates a rotation matrix around the x-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationX(theta: number): Mat4;
    /**
     * Creates a rotation matrix around the y-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationY(theta: number): Mat4;
    /**
     * Creates a rotation matrix around the z-axis.
     * @param {number} theta - The rotation angle in radians.
     * @returns {Mat4} A new Mat4 instance representing the rotation matrix.
     */
    static rotationZ(theta: number): Mat4;
    /**
     * Creates a scaling matrix.
     * @param {number} x - The scaling factor along the x-axis.
     * @param {number} y - The scaling factor along the y-axis.
     * @param {number} z - The scaling factor along the z-axis.
     * @returns {Mat4} A new Mat4 instance representing the scaling matrix.
     */
    static scale(x: number, y: number, z: number): Mat4;
    /**
     * Creates a perspective projection matrix.
     * @param {number} fieldOfView - The field of view angle in degrees.
     * @param {number} aspect - The aspect ratio of the viewport.
     * @param {number} near - The distance to the near clipping plane.
     * @param {number} far - The distance to the far clipping plane.
     * @returns {Mat4} A new Mat4 instance representing the perspective projection matrix.
     */
    static perspective(fieldOfView: number, aspect: number, near: number, far: number): Mat4;
}
 -->

### Mat4

Represents a 4x4 matrix.

#### Constructor

**Parameters**:

| Name   | Type   | Description                                    | Required | Default |
| ------ | ------ | ---------------------------------------------- | -------- | ------- |
| `i1j1` | number | The value at the first row and first column.   | ✅       | -       |
| `i1j2` | number | The value at the first row and second column.  | ✅       | -       |
| `i1j3` | number | The value at the first row and third column.   | ✅       | -       |
| `i1j4` | number | The value at the first row and fourth column.  | ✅       | -       |
| `i2j1` | number | The value at the second row and first column.  | ✅       | -       |
| `i2j2` | number | The value at the second row and second column. | ✅       | -       |
| `i2j3` | number | The value at the second row and third column.  | ✅       | -       |
| `i2j4` | number | The value at the second row and fourth column. | ✅       | -       |
| `i3j1` | number | The value at the third row and first column.   | ✅       | -       |
| `i3j2` | number | The value at the third row and second column.  | ✅       | -       |
| `i3j3` | number | The value at the third row and third column.   | ✅       | -       |
| `i3j4` | number | The value at the third row and fourth column.  | ✅       | -       |
| `i4j1` | number | The value at the fourth row and first column.  | ✅       | -       |
| `i4j2` | number | The value at the fourth row and second column. | ✅       | -       |
| `i4j3` | number | The value at the fourth row and third column.  | ✅       | -       |
| `i4j4` | number | The value at the fourth row and fourth column. | ✅       | -       |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Methods

1. `set(i1j1, i1j2, i1j3, i1j4, i2j1, i2j2, i2j3, i2j4, i3j1, i3j2, i3j3, i3j4, i4j1, i4j2, i4j3, i4j4)`

   Sets the matrix data.

   **Parameters**:

   | Name   | Type   | Description                                    | Required | Default |
   | ------ | ------ | ---------------------------------------------- | -------- | ------- |
   | `i1j1` | number | The value at the first row and first column.   | ✅       | -       |
   | `i1j2` | number | The value at the first row and second column.  | ✅       | -       |
   | `i1j3` | number | The value at the first row and third column.   | ✅       | -       |
   | `i1j4` | number | The value at the first row and fourth column.  | ✅       | -       |
   | `i2j1` | number | The value at the second row and first column.  | ✅       | -       |
   | `i2j2` | number | The value at the second row and second column. | ✅       | -       |
   | `i2j3` | number | The value at the second row and third column.  | ✅       | -       |
   | `i2j4` | number | The value at the second row and fourth column. | ✅       | -       |
   | `i3j1` | number | The value at the third row and first column.   | ✅       | -       |
   | `i3j2` | number | The value at the third row and second column.  | ✅       | -       |
   | `i3j3` | number | The value at the third row and third column.   | ✅       | -       |
   | `i3j4` | number | The value at the third row and fourth column.  | ✅       | -       |
   | `i4j1` | number | The value at the fourth row and first column.  | ✅       | -       |
   | `i4j2` | number | The value at the fourth row and second column. | ✅       | -       |
   | `i4j3` | number | The value at the fourth row and third column.  | ✅       | -       |
   | `i4j4` | number | The value at the fourth row and fourth column. | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const matrix = new Mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 6, 7, 1);
   matrix.set(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 5, 6, 7, 1);
   console.log(matrix.data); // [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 5, 6, 7, 1]
   ```

2. `copy()`

   Creates a copy of the Mat4 instance.

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const matrix = new Mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 6, 7, 1);
   const copy = matrix.copy();
   console.log(copy.data); // [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 6, 7, 1]
   ```

3. `multiply(m)`

   Multiplies this matrix with another matrix.

   **Parameters**:

   | Name | Type   | Description             | Required | Default |
   | ---- | ------ | ----------------------- | -------- | ------- |
   | `m`  | [Mat4] | The matrix to multiply. | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const matrix = new Mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 6, 7, 1);
   const matrix2 = new Mat4(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 5, 6, 7, 1);
   matrix.multiply(matrix2);
   console.log(matrix.data); // [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 15, 18, 21, 1]
   ```

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Properties

| Name | Type     | Description      | Setter | Getter |
| ---- | -------- | ---------------- | ------ | ------ |
| data | `number` | The matrix data. | ❌     | ✅     |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Static Methods

1. `identity()`

   Creates an identity matrix.

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const identityMatrix = Mat4.identity();
   console.log(identityMatrix.data); // [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
   ```

2. `translation(x, y, z)`

   Creates a translation matrix.

   **Parameters**:

   | Name | Type   | Description                       | Required | Default |
   | ---- | ------ | --------------------------------- | -------- | ------- |
   | `x`  | number | The translation along the x-axis. | ✅       | -       |
   | `y`  | number | The translation along the y-axis. | ✅       | -       |
   | `z`  | number | The translation along the z-axis. | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const translationMatrix = Mat4.translation(5, 6, 7);
   console.log(translationMatrix.data); // [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 6, 7, 1]
   ```

3. `rotationX(theta)`

   Creates a rotation matrix around the x-axis.

   **Parameters**:

   | Name    | Type   | Description                    | Required | Default |
   | ------- | ------ | ------------------------------ | -------- | ------- |
   | `theta` | number | The rotation angle in radians. | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const rotationMatrix = Mat4.rotationX(Math.PI / 2);
   console.log(rotationMatrix.data); // [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1]
   ```

4. `rotationY(theta)`

   Creates a rotation matrix around the y-axis.

   **Parameters**:

   | Name    | Type   | Description                    | Required | Default |
   | ------- | ------ | ------------------------------ | -------- | ------- |
   | `theta` | number | The rotation angle in radians. | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const rotationMatrix = Mat4.rotationY(Math.PI / 2);
   console.log(rotationMatrix.data); // [0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1]
   ```

5. `rotationZ(theta)`

   Creates a rotation matrix around the z-axis.

   **Parameters**:

   | Name    | Type   | Description                    | Required | Default |
   | ------- | ------ | ------------------------------ | -------- | ------- |
   | `theta` | number | The rotation angle in radians. | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const rotationMatrix = Mat4.rotationZ(Math.PI / 2);
   console.log(rotationMatrix.data); // [0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
   ```

6. `scale(x, y, z)`

   Creates a scaling matrix.

   **Parameters**:

   | Name | Type   | Description                          | Required | Default |
   | ---- | ------ | ------------------------------------ | -------- | ------- |
   | `x`  | number | The scaling factor along the x-axis. | ✅       | -       |
   | `y`  | number | The scaling factor along the y-axis. | ✅       | -       |
   | `z`  | number | The scaling factor along the z-axis. | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const scalingMatrix = Mat4.scale(2, 3, 4);
   console.log(scalingMatrix.data); // [2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 1]
   ```

7. `perspective(fieldOfView, aspect, near, far)`

   Creates a perspective projection matrix.

   **Parameters**:

   | Name          | Type   | Description                              | Required | Default |
   | ------------- | ------ | ---------------------------------------- | -------- | ------- |
   | `fieldOfView` | number | The field of view angle in degrees.      | ✅       | -       |
   | `aspect`      | number | The aspect ratio of the viewport.        | ✅       | -       |
   | `near`        | number | The distance to the near clipping plane. | ✅       | -       |
   | `far`         | number | The distance to the far clipping plane.  | ✅       | -       |

   **Returns**: [`Mat4`][Mat4]

   **Example**:

   ```javascript
   const perspectiveMatrix = Mat4.perspective(60, 16 / 9, 0.1, 100);
   console.log(perspectiveMatrix.data); // [0.9742785792574935, 0, 0, 0, 0, 1.7320508075688774, 0, 0, 0, 0, 1.0010010010010009, -0.10010010010010009, 0, 0, 1, 0]
   ```

[Back to Table of Contents :arrow_up:][Table of Contents]

### Vec2d

Represents a 2D vector.

#### Constructor

**Parameters**:

| Name | Type   | Description                    | Required | Default |
| ---- | ------ | ------------------------------ | -------- | ------- |
| `x`  | number | The x-coordinate of the point. | ✅       | -       |
| `y`  | number | The y-coordinate of the point. | ✅       | -       |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Methods

1. `set(v)`

   Sets the values of this vector to the values of another vector.

   **Parameters**:

   | Name | Type      | Description              | Required | Default |
   | ---- | --------- | ------------------------ | -------- | ------- |
   | `v`  | [Point2d] | The vector to copy from. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   vector.set({ x: 5, y: 6 });
   console.log(vector); // Vec2d { x: 5, y: 6 }
   ```

2. `copy({ x, y })`

   Creates a copy of this vector.

   **Parameters**:

   | Name        | Type   | Description                                    | Required | Default                    |
   | ----------- | ------ | ---------------------------------------------- | -------- | -------------------------- |
   | `options`   | Object | The options for copying the Vec2d instance.    | ❌       | `{ x: this.x, y: this.y }` |
   | `options.x` | number | The x-coordinate of the copied Vec2d instance. | ❌       | `this.x`                   |
   | `options.y` | number | The y-coordinate of the copied Vec2d instance. | ❌       | `this.y`                   |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   const copy = vector.copy();
   console.log(copy); // Vec2d { x: 3, y: 4 }

   const copy2 = vector.copy({ x: 5 });
   console.log(copy2); // Vec2d { x: 5, y: 4 }

   const copy3 = vector.copy({ y: 6 });
   console.log(copy3); // Vec2d { x: 3, y: 6 }

   const copy4 = vector.copy({ x: 5, y: 6 });
   console.log(copy4); // Vec2d { x: 5, y: 6 }
   ```

3. `add(v)`

   Adds the given vector to this vector.

   **Parameters**:

   | Name | Type      | Description        | Required | Default |
   | ---- | --------- | ------------------ | -------- | ------- |
   | `v`  | [Point2d] | The vector to add. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   vector.add({ x: 5, y: 6 });
   console.log(vector); // Vec2d { x: 8, y: 10 }

   const vector2 = new Vec2d(3, 4);
   const vector3 = new Vec2d(5, 6);
   vector2.add(vector3);
   console.log(vector2); // Vec2d { x: 8, y: 10 }
   ```

4. `subtract(v)`

   Subtracts the given vector from this vector.

   **Parameters**:

   | Name | Type      | Description             | Required | Default |
   | ---- | --------- | ----------------------- | -------- | ------- |
   | `v`  | [Point2d] | The vector to subtract. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   vector.subtract({ x: 5, y: 6 });
   console.log(vector); // Vec2d { x: -2, y: -2 }

   const vector2 = new Vec2d(3, 4);
   const vector3 = new Vec2d(5, 6);
   vector2.subtract(vector3);
   console.log(vector2); // Vec2d { x: -2, y: -2 }
   ```

5. `multiply(scalar)`

   Multiplies this vector by a scalar value.

   **Parameters**:

   | Name     | Type   | Description                      | Required | Default |
   | -------- | ------ | -------------------------------- | -------- | ------- |
   | `scalar` | number | The scalar value to multiply by. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   vector.multiply(2);
   console.log(vector); // Vec2d { x: 6, y: 8 }
   ```

6. `divide(scalar)`

   Divides this vector by a scalar value.

   **Parameters**:

   | Name     | Type   | Description                    | Required | Default |
   | -------- | ------ | ------------------------------ | -------- | ------- |
   | `scalar` | number | The scalar value to divide by. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   vector.divide(2);
   console.log(vector); // Vec2d { x: 1.5, y: 2 }
   ```

7. `dot(v)`

   Calculates the dot product of this vector and another vector.

   **Parameters**:

   | Name | Type      | Description       | Required | Default |
   | ---- | --------- | ----------------- | -------- | ------- |
   | `v`  | [Point2d] | The other vector. | ✅       | -       |

   **Returns**: `number`

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   const dotProduct = vector.dot({ x: 5, y: 6 });
   console.log(dotProduct); // 39

   const vector2 = new Vec2d(3, 4);
   const dotProduct2 = vector.dot(vector2);
   console.log(dotProduct2); // 25
   ```

8. `cross(v)`

   Calculates the cross product of this vector and another vector.

   **Parameters**:

   | Name | Type      | Description       | Required | Default |
   | ---- | --------- | ----------------- | -------- | ------- |
   | `v`  | [Point2d] | The other vector. | ✅       | -       |

   **Returns**: `number`

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   const crossProduct = vector.cross({ x: 5, y: 6 });
   console.log(crossProduct); // -2

   const vector2 = new Vec2d(3, 4);
   const crossProduct2 = vector.cross(vector2);
   console.log(crossProduct2); // 0
   ```

9. `transform(m)`

   Transforms this vector by a 3x3 matrix.

   **Parameters**:

   | Name | Type           | Description                | Required | Default |
   | ---- | -------------- | -------------------------- | -------- | ------- |
   | `m`  | [`Mat3`][Mat3] | The transformation matrix. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = new Vec2d(3, 4);
   const matrix = new Mat3(1, 0, 0, 0, 1, 0, 5, 6, 1);
   vector.transform(matrix);
   console.log(vector); // Vec2d { x: 8, y: 10 }
   ```

10. `translate(v)`

    Translates this vector by another vector.

    **Parameters**:

    | Name | Type      | Description            | Required | Default |
    | ---- | --------- | ---------------------- | -------- | ------- |
    | `v`  | [Point2d] | The translation vector | ✅       | -       |

    **Returns**: [`Vec2d`][Vec2d]

    **Example**:

    ```javascript
    const vector = new Vec2d(3, 4);
    vector.translate({ x: 5, y: 6 });
    console.log(vector); // Vec2d { x: 8, y: 10 }

    const vector2 = new Vec2d(3, 4);
    const vector3 = new Vec2d(5, 6);
    vector2.translate(vector3);
    console.log(vector2); // Vec2d { x: 8, y: 10 }
    ```

11. `rotate(theta)`

    Rotates this vector by an angle (in radians).

    **Parameters**:

    | Name    | Type   | Description               | Required | Default |
    | ------- | ------ | ------------------------- | -------- | ------- |
    | `theta` | number | The rotation angle (rads) | ✅       | -       |

    **Returns**: [`Vec2d`][Vec2d]

    **Example**:

    ```javascript
    const vector = new Vec2d(3, 4);
    vector.rotate(Math.PI / 2);
    console.log(vector); // Vec2d { x: -4, y: 3 }
    ```

12. `scale(v)`

    Scales this vector by another vector.

    **Parameters**:

    | Name | Type      | Description        | Required | Default |
    | ---- | --------- | ------------------ | -------- | ------- |
    | `v`  | [Point2d] | The scaling vector | ✅       | -       |

    **Returns**: [`Vec2d`][Vec2d]

    **Example**:

    ```javascript
    const vector = new Vec2d(3, 4);
    vector.scale({ x: 5, y: 6 });
    console.log(vector); // Vec2d { x: 15, y: 24 }

    const vector2 = new Vec2d(3, 4);
    const vector3 = new Vec2d(5, 6);
    vector2.scale(vector3);
    console.log(vector2); // Vec2d { x: 15, y: 24 }
    ```

13. `normalize()`

    Normalizes this vector to have a magnitude of 1.

    **Returns**: [`Vec2d`][Vec2d]

    **Example**:

    ```javascript
    const vector = new Vec2d(3, 4);
    vector.normalize();
    console.log(vector); // Vec2d { x: 0.6, y: 0.8 }
    ```

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Properties

| Name      | Type     | Description                                                        | Setter | Getter |
| --------- | -------- | ------------------------------------------------------------------ | ------ | ------ |
| x         | `number` | The x-coordinate of the vector.                                    | ✅     | ✅     |
| y         | `number` | The y-coordinate of the vector.                                    | ✅     | ✅     |
| theta     | `number` | The angle (in radians) between the vector and the positive x-axis. | ✅     | ✅     |
| magnitude | `number` | The magnitude (length) of the vector.                              | ✅     | ✅     |
| r         | `number` | The magnitude (length) of the vector (alias for `magnitude`).      | ✅     | ✅     |

[Back to Table of Contents :arrow_up:][Table of Contents]

#### Static Methods

1. `add(v1, v2)`

   Adds two vectors together without modifying the original vectors.

   **Parameters**:

   | Name | Type      | Description        | Required | Default |
   | ---- | --------- | ------------------ | -------- | ------- |
   | `v1` | [Point2d] | The first vector.  | ✅       | -       |
   | `v2` | [Point2d] | The second vector. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = Vec2d.add(new Vec2d(3, 4), new Vec2d(5, 6));
   console.log(vector); // Vec2d { x: 8, y: 10 }

   const vector2 = Vec2d.add(new Vec2d(3, 4), { x: 5, y: 6 });
   console.log(vector2); // Vec2d { x: 8, y: 10 }

   const vector3 = Vec2d.add({ x: 3, y: 4 }, new Vec2d(5, 6));
   console.log(vector3); // Vec2d { x: 8, y: 10 }

   const vector4 = Vec2d.add({ x: 3, y: 4 }, { x: 5, y: 6 });
   console.log(vector4); // Vec2d { x: 8, y: 10 }
   ```

2. `subtract(v1, v2)`

   Subtracts one vector from another without modifying the original vectors.

   **Parameters**:

   | Name | Type      | Description        | Required | Default |
   | ---- | --------- | ------------------ | -------- | ------- |
   | `v1` | [Point2d] | The first vector.  | ✅       | -       |
   | `v2` | [Point2d] | The second vector. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = Vec2d.subtract(new Vec2d(3, 4), new Vec2d(5, 6));
   console.log(vector); // Vec2d { x: -2, y: -2 }

   const vector2 = Vec2d.subtract(new Vec2d(3, 4), { x: 5, y: 6 });
   console.log(vector2); // Vec2d { x: -2, y: -2 }

   const vector3 = Vec2d.subtract({ x: 3, y: 4 }, new Vec2d(5, 6));
   console.log(vector3); // Vec2d { x: -2, y: -2 }

   const vector4 = Vec2d.subtract({ x: 3, y: 4 }, { x: 5, y: 6 });
   console.log(vector4); // Vec2d { x: -2, y: -2 }
   ```

3. `multiply(v, scalar)`

   Multiplies a vector by a scalar value without modifying the original vector.

   **Parameters**:

   | Name     | Type      | Description       | Required | Default |
   | -------- | --------- | ----------------- | -------- | ------- |
   | `v`      | [Point2d] | The vector.       | ✅       | -       |
   | `scalar` | number    | The scalar value. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = Vec2d.multiply(new Vec2d(3, 4), 2);
   console.log(vector); // Vec2d { x: 6, y: 8 }

   const vector2 = Vec2d.multiply({ x: 3, y: 4 }, 2);
   console.log(vector2); // Vec2d { x: 6, y: 8 }
   ```

4. `divide(v, scalar)`

   Divides a vector by a scalar value without modifying the original vector.

   **Parameters**:

   | Name     | Type      | Description       | Required | Default |
   | -------- | --------- | ----------------- | -------- | ------- |
   | `v`      | [Point2d] | The vector.       | ✅       | -       |
   | `scalar` | number    | The scalar value. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = Vec2d.divide(new Vec2d(3, 4), 2);
   console.log(vector); // Vec2d { x: 1.5, y: 2 }

   const vector2 = Vec2d.divide({ x: 3, y: 4 }, 2);
   console.log(vector2); // Vec2d { x: 1.5, y: 2 }
   ```

5. `dot(v1, v2)`

   Calculates the dot product of two vectors.

   **Parameters**:

   | Name | Type      | Description        | Required | Default |
   | ---- | --------- | ------------------ | -------- | ------- |
   | `v1` | [Point2d] | The first vector.  | ✅       | -       |
   | `v2` | [Point2d] | The second vector. | ✅       | -       |

   **Returns**: `number`

   **Example**:

   ```javascript
   const dotProduct = Vec2d.dot(new Vec2d(3, 4), new Vec2d(5, 6));
   console.log(dotProduct); // 39

   const dotProduct2 = Vec2d.dot(new Vec2d(3, 4), { x: 5, y: 6 });
   console.log(dotProduct2); // 39

   const dotProduct3 = Vec2d.dot({ x: 3, y: 4 }, new Vec2d(5, 6));
   console.log(dotProduct3); // 39

   const dotProduct4 = Vec2d.dot({ x: 3, y: 4 }, { x: 5, y: 6 });
   console.log(dotProduct4); // 39
   ```

6. `cross(v1, v2)`

   Calculates the cross product of two vectors.

   **Parameters**:

   | Name | Type      | Description        | Required | Default |
   | ---- | --------- | ------------------ | -------- | ------- |
   | `v1` | [Point2d] | The first vector.  | ✅       | -       |
   | `v2` | [Point2d] | The second vector. | ✅       | -       |

   **Returns**: `number`

   **Example**:

   ```javascript
   const crossProduct = Vec2d.cross(new Vec2d(3, 4), new Vec2d(5, 6));
   console.log(crossProduct); // -2

   const crossProduct2 = Vec2d.cross(new Vec2d(3, 4), { x: 5, y: 6 });
   console.log(crossProduct2); // -2

   const crossProduct3 = Vec2d.cross({ x: 3, y: 4 }, new Vec2d(5, 6));
   console.log(crossProduct3); // -2

   const crossProduct4 = Vec2d.cross({ x: 3, y: 4 }, { x: 5, y: 6 });
   console.log(crossProduct4); // -2
   ```

7. `transform(v, m)`

   Transforms a vector by a 3x3 matrix without modifying the original vector.

   **Parameters**:

   | Name | Type           | Description                | Required | Default |
   | ---- | -------------- | -------------------------- | -------- | ------- |
   | `v`  | [Point2d]      | The vector.                | ✅       | -       |
   | `m`  | [`Mat3`][Mat3] | The transformation matrix. | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = Vec2d.transform(
     new Vec2d(3, 4),
     new Mat3(1, 0, 0, 0, 1, 0, 5, 6, 1)
   );
   console.log(vector); // Vec2d { x: 8, y: 10 }

   const vector2 = Vec2d.transform(
     { x: 3, y: 4 },
     new Mat3(1, 0, 0, 0, 1, 0, 5, 6, 1)
   );
   ```

8. `translate(v, translation)`

   Translates a vector by another vector without modifying the original vector.

   **Parameters**:

   | Name          | Type      | Description            | Required | Default |
   | ------------- | --------- | ---------------------- | -------- | ------- |
   | `v`           | [Point2d] | The vector.            | ✅       | -       |
   | `translation` | [Point2d] | The translation vector | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = Vec2d.translate(new Vec2d(3, 4), new Vec2d(5, 6));
   console.log(vector); // Vec2d { x: 8, y: 10 }

   const vector2 = Vec2d.translate(new Vec2d(3, 4), { x: 5, y: 6 });
   console.log(vector2); // Vec2d { x: 8, y: 10 }

   const vector3 = Vec2d.translate({ x: 3, y: 4 }, new Vec2d(5, 6));
   console.log(vector3); // Vec2d { x: 8, y: 10 }

   const vector4 = Vec2d.translate({ x: 3, y: 4 }, { x: 5, y: 6 });
   console.log(vector4); // Vec2d { x: 8, y: 10 }
   ```

9. `rotate(v, theta)`

   Rotates a vector by an angle (in radians) without modifying the original vector.

   **Parameters**:

   | Name    | Type      | Description               | Required | Default |
   | ------- | --------- | ------------------------- | -------- | ------- |
   | `v`     | [Point2d] | The vector.               | ✅       | -       |
   | `theta` | number    | The rotation angle (rads) | ✅       | -       |

   **Returns**: [`Vec2d`][Vec2d]

   **Example**:

   ```javascript
   const vector = Vec2d.rotate(new Vec2d(3, 4), Math.PI / 2);
   console.log(vector); // Vec2d { x: -4, y: 3 }

   const vector2 = Vec2d.rotate({ x: 3, y: 4 }, Math.PI / 2);
   console.log(vector2); // Vec2d { x: -4, y: 3 }
   ```

10. `scale(v, scale)`

    Scales a vector by another vector without modifying the original vector.

    **Parameters**:

    | Name    | Type      | Description        | Required | Default |
    | ------- | --------- | ------------------ | -------- | ------- |
    | `v`     | [Point2d] | The vector.        | ✅       | -       |
    | `scale` | [Point2d] | The scaling vector | ✅       | -       |

    **Returns**: [`Vec2d`][Vec2d]

    **Example**:

    ```javascript
    const vector = Vec2d.scale(new Vec2d(3, 4), new Vec2d(5, 6));
    console.log(vector); // Vec2d { x: 15, y: 24 }

    const vector2 = Vec2d.scale(new Vec2d(3, 4), { x: 5, y: 6 });
    console.log(vector2); // Vec2d { x: 15, y: 24 }

    const vector3 = Vec2d.scale({ x: 3, y: 4 }, new Vec2d(5, 6));
    console.log(vector3); // Vec2d { x: 15, y: 24 }

    const vector4 = Vec2d.scale({ x: 3, y: 4 }, { x: 5, y: 6 });
    console.log(vector4); // Vec2d { x: 15, y: 24 }
    ```

11. `normalize(v)`

    Normalizes a vector to have a magnitude of 1 without modifying the original vector.

    **Parameters**:

    | Name | Type      | Description | Required | Default |
    | ---- | --------- | ----------- | -------- | ------- |
    | `v`  | [Point2d] | The vector. | ✅       | -       |

    **Returns**: [`Vec2d`][Vec2d]

    **Example**:

    ```javascript
    const vector = Vec2d.normalize(new Vec2d(3, 4));
    console.log(vector); // Vec2d { x: 0.6, y: 0.8 }

    const vector2 = Vec2d.normalize({ x: 3, y: 4 });
    console.log(vector2); // Vec2d { x: 0.6, y: 0.8 }
    ```

12. `fromPolar(theta, magnitude)`

    Creates a vector from polar coordinates.

    **Parameters**:

    | Name        | Type   | Description                                                        | Required | Default |
    | ----------- | ------ | ------------------------------------------------------------------ | -------- | ------- |
    | `theta`     | number | The angle (in radians) between the vector and the positive x-axis. | ✅       | -       |
    | `magnitude` | number | The magnitude (length) of the vector.                              | ✅       | -       |

    **Returns**: [`Vec2d`][Vec2d]

    **Example**:

    ```javascript
    const vector = Vec2d.fromPolar(Math.PI / 2, 5);
    console.log(vector); // Vec2d { x: 0, y: 5 }
    ```

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
[CanvasGradient]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient
[CanvasImageSource]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#getting_images_to_draw
[CanvasPattern]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern
[CanvasRenderingContext2D]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[CanvasTextAlign]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign
[CanvasTextBaseline]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline
[CSSColor]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
[HTMLCanvasElement]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
[Kanvas]: #kanvas
[Mat3]: #mat3
[Vec2d]: #vec2d
[Point2d]: #point2d
[Color]: #color
