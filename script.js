

var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=vHgtVeqEgEp7kjN932g0xjLs02SufU85&tag=avengers&rating=g');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    var originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

    var gif = document.querySelector('img');
    gif.setAttribute('src', originalUrl);
    document.body.appendChild(gif);
}

request.onerror = function(){
    console.log("Something Went Wrong. Try Again Later.");
}

request.send();