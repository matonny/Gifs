(function () {
    onLoad();
    function onLoad(){
        addInputListener();
    }
    getGifs('pancake');
    function getGifs(tag){
        var xhr = $.get(`https://api.giphy.com/v1/gifs/search?q=${tag}&api_key=31adb81768b14e8e9f1a04d84dfbcab8&limit=5`);
        xhr.done(function(data) { console.log("success got data", data);
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
    function addInputListener(){
        let input = document.querySelector('.gifs__tag');
        input.addEventListener 
    }
})();