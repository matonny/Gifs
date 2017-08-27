getGifs('pancake');
function getGifs(tag){
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${tag}&api_key=31adb81768b14e8e9f1a04d84dfbcab8&limit=5`);
    xhr.done(function(data) { console.log("success got data", data);
        showGifs(data.data); 
    });
}
function showGifs(gifList){ 
    for (let i = 0; i < gifList.length; i++){
        createGif(gifList[i]);
    }
}
function createGif(gif){
    gifLink = document.createElement('video');
    gifLink.autoplay = true;
    gifLink.loop = true;
    gifLink.src = gif.images.fixed_height.mp4;
    ulWithGifs = document.querySelector('.gifs__list');
    ulWithGifs.appendChild(gifLink);
}

