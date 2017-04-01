# microframe [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Smol `window.requestAnimationFrame` package.

## Usage
```js
var Microframe = reuqire('microframe')
var html = require('bel')

var microframe = Microframe()
html`
  <input onkeydown=${onkeydown}>click me</button>
`
function onkeydown (e) {
  var value = e.target.value
  microframe(function () {
    console.log('called at the start of a new frame', value)
  })
}
```

## Why?
Because holding on to event listeners longer than you should causes long
frames. And long frames cause jank. You want silky smooth pages, so debounce
and push all JS execution to the start of frames while clearing references
ASAP.

## API
### `microframe = Microframe()`
Create a new instance.

### `microframe(callback)`
Call the callback on the next frame. The last callback is called when called
multiple times in a single frame.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/microframe.svg?style=flat-square
[3]: https://npmjs.org/package/microframe
[4]: https://img.shields.io/travis/yoshuawuyts/microframe/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/microframe
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/microframe/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/microframe
[8]: http://img.shields.io/npm/dm/microframe.svg?style=flat-square
[9]: https://npmjs.org/package/microframe
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
