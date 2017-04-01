module.exports = Microframe

function Microframe () {
  var inFlight = false
  var callback = null

  return function (cb) {
    callback = cb
    if (!inFlight) {
      inFlight = true
      window.requestAnimationFrame(function () {
        inFlight = false
        callback()
        callback = null
      })
    }
  }
}
