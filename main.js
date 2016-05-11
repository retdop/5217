function start () {
  var button = document.getElementsByTagName('button')[0]
  button.parentNode.removeChild(button)
  work(5)
}

function work (timeLeft) {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'
  document.getElementById('step').innerHTML = 'WORK'
  document.getElementById('time').innerHTML = timeLeft
  setInterval(function () {
    timeLeft--
    document.getElementById('time').innerHTML = timeLeft
    if (timeLeft === 0) rest(3)
  }, 1000)
}

function rest (timeLeft) {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'red'
  document.getElementById('step').innerHTML = 'REST'
  document.getElementById('time').innerHTML = timeLeft
  setInterval(function () {
    timeLeft--
    document.getElementById('time').innerHTML = timeLeft
    if (timeLeft === 0) work(5)
  }, 1000)
}
