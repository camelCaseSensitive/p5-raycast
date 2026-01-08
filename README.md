# p5-raycast

A function for raycasting in WEBGL mode in p5js.

## Installation

Add this [CDN](https://cdn.jsdelivr.net/npm/p5-raycast@1.0.6/p5-raycast.js) to a script tag in your index.html file 

```
<script src="https://cdn.jsdelivr.net/npm/p5-raycast@1.0.6/p5-raycast.js"></script>
```


or Install via the command line

```bash
npm i p5-raycast
```

## Usage


Define a camera variable called `cam` in the setup function
```javascript
cam = createCamera();
```

The raycast function accepts three arguments:
- `rayDistance`: the length of the ray that will be cast into the 3D scene through the mouse position.
- `objectPosition`: An array `[x, y, z]` defining the position of the object you want to select in world space.
- `objectRadius`: The distance from the object's position which is considered a "hit".
```javascript
raycast(rayDistance, objectPosition, objectRadius);     // Returns an array containing the tip of the ray [x, y, z] and a boolean
```
## Dependencies

The matrix math for un-projecing is done with [math.js](https://cdnjs.com/libraries/mathjs)

Copy and paste this script tag into your `index.html` file

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.8.1/math.js" integrity="sha512-5nftKkjZO1gtHEWFlUGXi/vuXzFnWTom549IH/gMqOiJHcPfH5z/1DO8/c0qnoG0R8RCVLOeBDXhCjg2+23nqQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
