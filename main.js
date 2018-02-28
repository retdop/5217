function start () {
  var button = document.getElementsByTagName('button')[0]
  button.parentNode.removeChild(button)
  go(52*60, 17*60)
}

function go (workTime, restTime) {
  timeLeft = workTime
  isWorking = true
  work()
  document.getElementById('time').innerHTML = Math.floor(timeLeft/60)
  setInterval(function () {
    timeLeft--
    if (timeLeft === 0) {
      if (isWorking) {
        rest()
        timeLeft = restTime
      } else {
        work()
        timeLeft = workTime
      }
      isWorking = !isWorking
    }
    document.getElementById('time').innerHTML = Math.floor(timeLeft/60) 
  }, 1000)
}

function work () {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'
  document.getElementById('step').innerHTML = 'WORK'
}

function rest () {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'red'
  document.getElementById('step').innerHTML = 'REST'
}
