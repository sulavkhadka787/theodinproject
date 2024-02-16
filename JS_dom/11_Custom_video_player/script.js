const player=document.querySelector('.player');
const video=player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar=player.querySelector('.progress__filled');
const toggle=player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges=player.querySelectorAll('.player__slider');

 console.log('ranges',ranges);

/* Build out function */

function togglePlay(){
    const method =video.paused ? 'play' : 'pause';
    video [method]();
    console.log(video);
}

function updateButton(){
    const icon=this.paused ? '►' : '❚ ❚';
    toggle.textContent=icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name]=this.value;
    console.log('handle-range-update',this.value," ", this.name);
}

function handleProgress(){
    const percent=(video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis=`${percent}%`;
    console.log('handle=progress',percent);
}

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

ranges.forEach(range=>range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range=>range.addEventListener('mousemove',handleRangeUpdate));

toggle.addEventListener('click',togglePlay);