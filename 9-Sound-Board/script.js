'use strict'

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  btn.addEventListener('click', function () {
    stopSongs()
    // play method works only on audio element
    document.getElementById(sound).play()
  })
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)
    // pause the audio
    song.pause()
    // set the time of the audio to the start (starting time)
    song.currentTime = 0
  })
}
