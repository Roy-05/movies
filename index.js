var search_button = document.getElementById('search-button'),
    input_box = document.getElementById('input-box'),
    video = document.getElementById('video');

var source = document.createElement('source');

search_button.addEventListener('click',()=>{

    source.setAttribute('src', `../My Movies/${input_box.value}.mp4`);
    video.appendChild(source);
    //video.play();
});
