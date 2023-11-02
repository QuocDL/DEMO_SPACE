const content = () =>{
  console.log('TRANG NGHE NHAC');
  return`<div class="background">

  <img src="" alt="" id="bg-img">

</div>

<div class="container">
  <div class="player-img">
    <img src="" class="active" id="cover">
  </div>
    <h2 id="music-title"></h2>
    <h3 id="music-artist"></h3>
    <div class="player-progress" id="player-progress">
      <div class="progress" id="progress">
      </div>
      <div class="music-duration">
        <span id="current-time">00:00</span>
        <span id="duration">00:00</span>
      </div>
    </div>

    <div class="player-controls">
      <i class="fa-solid fa-backward" title="Previous" id="prev"></i>
      <i class="fa-solid fa-play play-button" title="Play" id="play"></i>
      <i class="fa-solid fa-forward" title="Next" id="next"></i>
    </div>
</div>
`
};
document.querySelector('#app').innerHTML = content();
const image = document.getElementById('cover'),
  title = document.getElementById('music-title'),
  artist = document.getElementById('music-artist'),
  currentTimeEL = document.getElementById('current-time'),
  durationEl = document.getElementById('duration'),
  progress = document.getElementById('progress'),
  playerProgress = document.getElementById('player-progress'),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next'),
  playbtn = document.getElementById('play'),
  background = document.getElementById('bg-img');

const music = new Audio();
const songs = [
  {
    path: 'assets/1.mp3',
    displayName: `Making My Way`,
    cover: 'assets/1.jpg',
    artist: 'Son Tung MTP',
  },
  {
    path: 'assets/2.mp3',
    displayName: `Medody`,
    cover: 'assets/2.jpg',
    artist: 'Ash Island',
  },
  {
    path: 'assets/3.mp3',
    displayName: `Hạ Còn Vương Nắng`,
    cover: 'assets/3.jpg',
    artist: 'DatKaa',
  },
  {
    path: 'assets/4.mp3',
    displayName: `Vì Anh Đâu Có Biết`,
    cover: 'assets/4.jpg',
    artist: 'Madihu X Ducboi Mix',
  },
  {
    path: 'assets/5.mp3',
    displayName: `Cơn Mưa Chiều Ấy`,
    cover: 'assets/5.jpg',
    artist: 'DatKaa',
  }
];

let musicIndex = 0;
let isPlaying = false;

function tooglePlay(){
  if (isPlaying) {
    pauseMusic();
  }else{
    playMusic();
  }
}

function playMusic(){
  isPlaying = true;
  //Thay đổi icon play
  playbtn.classList.replace('fa-play', 'fa-pause');
  //Hover title icon
  playbtn.setAttribute('title', 'Pause')
  music.play();
};
function pauseMusic(){
  isPlaying = false;
  //Thay đổi icon pause
  playbtn.classList.replace('fa-pause', 'fa-play');
  //Hover title icon
  playbtn.setAttribute('title', 'Play')
  music.pause();
}

function loadMusic(song){
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
}

function changeMusic(direction){
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
};

function updateProgressBar(){
  const { duration, currentTime} = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
  currentTimeEL.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e){
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playbtn.addEventListener('click', tooglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);