
console.log("welcome");
        let songIndex=0;
        let audioElement = new Audio('songs/first.mp3');
        let masterPlay= document.getElementById('masterPlay');
        let mybar= document.getElementById('mybar');
        let gif= document.getElementById('gif');
        let mastersongname= document.getElementById('mastersongname');
        let songitems = Array.from(document.getElementsByClassName('songitem'));

        let songs = [
    {songName:"salam-e-ishq", filePath:"songs/first.mp3", coverPath:"covers/10.jpg"},
    {songName:"shbjknj k", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"sishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"-e-ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"salamishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"salam-e", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"salam-e-jhhbb", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"salamijibishq", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"salam", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"ishq", filePath:"songs/10.mp3", coverPath:"covers/1.jpg"},
    
]
//element for class songitem songitems and i is for number to show in console
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName
})
//audioElement.play();

//handle playpause
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    mybar.value= progress;
})

mybar.addEventListener('change',()=>{
    audioElement.currentTime = mybar.value * audioElement.duration/100;
})  

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex =  parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })    
})
    
document.getElementById('next').addEventListener('click',()=>{
      if(songIndex>=9)
      {
        songIndex = 0;
      }
      else{
        songIndex += 1;
      }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
      songIndex = songs.length-1;
    }
    else{
      songIndex -= 1;
    }
  audioElement.src=`songs/${songIndex+1}.mp3`;
  mastersongname.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
