# 代理模式（委托模式）

虚拟代理就是把一些开销很大的对象，延迟到真正需要它的时候才去创建执行。

比如：我们在浏览一些购物商城的时候，会发现，当网络不太好的情况下，有些图片是加载不出来的，会有暂无图片的一张图片去代替它实际的图片，等网路图片加载完成之后，暂无图片就会被实际的图片代替。这就是使用的图片的懒加载。图片的懒加载也可是使用虚拟代理的模式来进行设计：

```// 图片懒加载
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


```
