console.log("Welcome to Spotify");

// Initialize the Variables
let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    console.log(element.querySelector("img"))
    console.log(element.getElementsByTagName("img")[0])
    element.querySelector("img").src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});
masterPlay.addEventListener("click" , ()=>{
    console.log("clicked") ;
    if(audioElement.paused || audioElement.duration<=0){
        audioElement.play() ;
        masterPlay.classList.remove("fa-play-circle") ;
        masterPlay.classList.add("fa-pause-circle") ;
        gif.style.opacity = 1 ;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0 ;
    };
});
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;    
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
// songIte  = document.querySelectorAll(".far")
// songIte.forEach((a)=>{
//     a.addEventListener("click",(event)=>{
//             a.classList.remove("fa-play-circle") ;
//             a.classList.add("fa-pause-circle") ;   
//     })
// })
function allbutton(){
    let a = document.querySelectorAll(".songItemPlay")
    a.forEach((ele)=>{
        ele.classList.add('fa-play-circle');
        ele.classList.remove('fa-pause-circle');
    })

         
    
    
}
let a = document.querySelectorAll(".songItemPlay")
    for(b of a){
        b.addEventListener("click" , (e)=>{
            allbutton();  
            let index = parseInt(e.target.id) ;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            console.log(index)
            audioElement.src = (`songs/${index+1}.mp3`)
            audioElement.play();
            let b = songs[index].songName
            console.log(b)
            masterSongName.innerText = songs[index].songName ;
            masterPlay.classList.remove("fa-play-circle") ;
            masterPlay.classList.add("fa-pause-circle") ;
            gif.style.opacity = 1 ;
            myProgressBar.value = 0 ;
        })
    }
    
document.querySelector("#next").addEventListener("click" , ()=>{
    if(index>9){
        index = 0 ;
    }
    else{
        index += 1 ;
        audioElement.src = (`songs/${index+1}.mp3`)
        audioElement.play();
        let b = songs[index].songName
        console.log(b)
        masterSongName.innerText = songs[index].songName ;
        masterPlay.classList.remove("fa-play-circle") ;
        masterPlay.classList.add("fa-pause-circle") ;
        gif.style.opacity = 1 ;
        
    }

})
document.querySelector("#previous").addEventListener("click" , ()=>{
    if(index>9){
        index = 0 ;
    }
    else{
        index -= 1 ;
        audioElement.src = (`songs/${index+1}.mp3`)
        audioElement.play();
        let b = songs[index].songName
        console.log(b)
        masterSongName.innerText = songs[index].songName ;
        masterPlay.classList.remove("fa-play-circle") ;
        masterPlay.classList.add("fa-pause-circle") ;
        gif.style.opacity = 1 ;
        
    }

})
    




