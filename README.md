# KanvasGL

A Javascript library to do Computer Graphics on the HTML5 Canvas element.

## Basic Usage

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

## Documentation

See the [documentation](DOCS.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute to this project. Just [open an issue](https://github.com/fauzan-radji/kanvasgl/issues/new) or [create a pull request](https://github.com/fauzan-radji/kanvasgl/compare) to get started.
