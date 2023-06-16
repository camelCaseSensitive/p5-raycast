# p5-raycast

A function for raycasting in WEBGL mode in p5js.

## Installation

Add this CDN to a script tag in your index.html file [https://cdn.jsdelivr.net/npm/p5-raycast@1.0.1/p5-raycast.js](https://cdn.jsdelivr.net/npm/p5-raycast@1.0.1/p5-raycast.js)

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
raycast(rayDistance, objectPosition, objectRadius);     // Returns a boolean
```
## Dependencies

[math.js](https://cdnjs.com/libraries/mathjs)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
