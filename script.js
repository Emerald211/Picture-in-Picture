const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream to pass the video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        // Error
        console.log('whoops, Error here:', Error)
    }
}

button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;

})

selectMediaStream();