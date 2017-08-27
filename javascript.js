(function () {
    function getGifs(tag){
        var xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${tag}&api_key=31adb81768b14e8e9f1a04d84dfbcab8&limit=0`);
        xhr.done(function(data) { console.log("success got data", data);
            clearPreviousGifs();
            showGifs(data.data); 
        });
    }
    function showGifs(gifList){ 
        for (let i = 0; i < gifList.length; i++){
            displayGif(createGif(gifList[i]));
        }
    }
    function createGif(gif){
        let createdGif = document.createElement('video');
        createdGif.autoplay = true;
        createdGif.loop = true 
        createdGif.src = gif.images.fixed_height.mp4;
        return createdGif;     
    }
    function displayGif(gifToDisplay){
        gifsList = document.querySelector('.gifs__list');
        gifsList.appendChild(gifToDisplay);
    }
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
          clearTimeout (timer);
          timer = setTimeout(callback, ms);
        };
      })();
      $('.gifs__tag').keyup(function() {
        delay(getGifs(getInputValue(), 200));
    });
    function getInputValue(){
        let input = document.querySelector('.gifs__tag');
        return String(input.value);
    }
    function clearPreviousGifs(){
       gifsList = document.querySelector('.gifs__list');
       while (gifsList.firstChild) {
        gifsList.removeChild(gifsList.firstChild);
    } 
    }
})();