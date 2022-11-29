navigator.mediaDevices.getUserMedia({video: true}).then(function (mediaStream) {
    const video = document.querySelector('#video');
    video.srcObject = mediaStream;
    video.play();
    
});

document.querySelector('#capture').addEventListener('click', function (e) {
    var canvas = document.querySelector("#canvas");  
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0)
    
})

 //document.querySelector('#capture').addEventListener('click', function (e) {
    
    //var canvas = document.querySelector("#canvas");

    //canvas.toBlob(function (blob) {

        //var form = new FormData();
       // form.append('image', blob, 'webcam.jpg');

        //var xhr = new XMLHttpRequest();
       // xhr.open('POST', 'https://drive.google.com/drive/u/0/folders/1ykSMQ72UfkYupg1fBNSEkogvk9Jz7NEP', true);
        //xhr.onload = function(e) {
            // upload concluído  
       // };

       // xhr.send(form);  

    //}, 'image/jpeg');
//})