var trafficLight = (function () {
  var currentLight = null
  return {
    change: function (light) {
      currentLight = light
      currentLight.go()
    }
  }
})()

function RedLight() {}
RedLight.prototype.go = function () {
  console.log('红灯')
}
function GreenLight() {}
GreenLight.prototype.go = function () {
  console.log('绿灯')
}
function YellowLight() {}
YellowLight.prototype.go = function () {
  console.log('黄灯')
}

trafficLight.change(new RedLight())
trafficLight.change(new YellowLight())
