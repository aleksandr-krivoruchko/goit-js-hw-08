	 import throttle from "lodash.throttle";

	 const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
   const STORAGE_KEY = "videoplayer-current-time";

const saveCurrentTime = ({ seconds }) => localStorage.setItem(STORAGE_KEY, `${seconds}`);
const throttledCurrentTime = throttle(saveCurrentTime, 1000);

    player.on('timeupdate', throttledCurrentTime);

    const currentTime = localStorage.getItem(STORAGE_KEY);


player.setCurrentTime(currentTime).then(function(seconds) {
	
     seconds = currentTime;

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});


   //  player.getVideoTitle().then(function(title) {
   //      console.log('title:', title);
   //  });

	
