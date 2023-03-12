// 图片懒加载
const myImage = (() => {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()

const proxyImage = (() => {
  const img = new Image()
  img.onload = () => {
    myImage.setSrc(this.src)
  }
  return {
    setSrc: src => {
      myImage.setSrc('http://seopic.699pic.com/photo/40167/3716.jpg_wh1200.jpg')
      img.src = src
    }
  }
})()

proxyImage.setSrc('http://seopic.699pic.com/photo/40167/7823.jpg_wh1200.jpg')
