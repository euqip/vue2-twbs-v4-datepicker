// https://stackoverflow.com/questions/33975431/how-can-i-capture-an-image-via-the-users-webcam-using-getusermedia
// to be tested

//https://addpipe.com/blog/correct-syntax-html-media-capture/

//https://w3c.github.io/html-media-capture/
var stream, imageCapture;

function getMediaStream() {
  window.navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (mediaStream) {
      stream = mediaStream;
      let mediaStreamTrack = mediaStream.getVideoTracks()[0];
      imageCapture = new ImageCapture(mediaStreamTrack);
      console.log(imageCapture);
    })
    .catch(error);
}

function error(error) {
  console.error('error:', error);
}

function takePhoto(img) {
  const img = img || document.querySelector('img');

  imageCapture.takePhoto()
    .then(blob => {
      let url = window.URL;
      img.src = url.createObjectURL(blob);
      url.revokeObjectURL(blob);
    })
    .catch(error);
};

/* just call */
getMediaStream();

/* and when you want to capture an image */
takePhoto();
