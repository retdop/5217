function work () {
  var timeLeft = 57
  setInterval(function () {
    document.getElementById('all').style.backgroundColor = 'blue'
    document.getElementById('time').innerHTML = timeLeft
    timeLeft--
  }, 1000)
}
