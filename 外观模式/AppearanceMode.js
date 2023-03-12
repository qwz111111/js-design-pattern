function setBox() {
  var getId = document.getElementById('isShow')
  return {
    show: function () {
      getId.style.display = 'block'
    },
    hide: function () {
      getId.style.display = 'none'
    }
  }
}
