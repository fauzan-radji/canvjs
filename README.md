# Kanvas.js

A Javascript library to work with HTML5 Canvas element.

## Basic Usage

All you need is Kanvas.js. So clone this repo or just download the `Kanvas.js` instead.

```html
<canvas id="myCanvas"></canvas>

<script type="module">
  import Kanvas from "./Kanvas.js";

  const canvas = new Kanvas({
    id: "myCanvas",
    width: 400,
    height: 400,
  });
</script>
```

## Properties and Methods

### Properties

| Name   | Type                     | Description                    |
| ------ | ------------------------ | ------------------------------ |
| canvas | HTMLCanvasElement        | The canvas element             |
| id     | string                   | Id of the canvas element       |
| ctx    | CanvasRenderingContext2D | Context of the canvas element  |
| width  | number                   | Width of the canvas element    |
| height | number                   | Height of the canvas element   |
| center | Vector                   | The center point of the canvas |

### Methods

| Name               | Description                                                         | Params                                                                                                    | Return         |
| ------------------ | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| resize             | Resizes the canvas element                                          | `width: number` `height: number`                                                                          | `this: Kanvas` |
| drawImage          | Draws an image on the canvas                                        | `image: any` `point: Vector \| { x: number, y: number }` `width: number` `height: number`                 | `this: Kanvas` |
| rotateAndDrawImage | Rotates and draws an image on the canvas                            | `image: any` `point: Vector \| { x: number, y: number }` `width: number` `height: number` `angle: number` | `this: Kanvas` |
| circle             | Draws a circle on the canvas                                        | `point: Vector \| { x: number, y: number }` `radius: number`                                              | `this: Kanvas` |
| rect               | Draws a rectangle on the canvas                                     | `point: Vector \| { x: number, y: number }` `width: number` `height: number`                              | `this: Kanvas` |
| line               | Draws a line on the canvas                                          | `start: Vector \| { x: number, y: number }` `end: Vector \| { x: number, y: number }`                     | `this: Kanvas` |
| moveTo             | Moves the current drawing position to a specified point             | `point: Vector \| { x: number, y: number }`                                                               | `this: Kanvas` |
| lineTo             | Draws a line from the current drawing position to a specified point | `point: Vector \| { x: number, y: number }`                                                               | `this: Kanvas` |
| text               | Draws text on the canvas                                            |                                                                                                           | `this: Kanvas` |
| beginPath          | Begins a new path                                                   | -                                                                                                         | `this: Kanvas` |
| closePath          | Closes the current path                                             | -                                                                                                         | `this: Kanvas` |
| stroke             | Strokes the current path                                            |                                                                                                           | `this: Kanvas` |
| fill               | Fills the current path                                              | `color: string`                                                                                           | `this: Kanvas` |
| clear              | Clears the canvas                                                   | -                                                                                                         | `this: Kanvas` |
| translate          | Translates the canvas context                                       | `point: Vector \| { x: number, y: number }`                                                               | `this: Kanvas` |
| rotate             | Rotates the canvas context                                          | `angle: number`                                                                                           | `this: Kanvas` |
| save               | Saves the current canvas state                                      | -                                                                                                         | `this: Kanvas` |
| restore            | Restores the canvas state to the last saved state                   | -                                                                                                         | `this: Kanvas` |
