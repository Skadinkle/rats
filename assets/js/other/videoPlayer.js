/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	CREATE VIDEO PLAYER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
function createVideoShell() {
	const videoShell = document.createElement("div");
	videoShell.id = "videoShell";
	
	const videoBox = document.createElement("div");
	videoBox.id = "videoBox";
	videoBox.innerHTML = `<video id="videoPlayer"></video>
		<div class="controls">
			<!--Volume--><div class="control-group"><label for="volume">Volume:</label><input type="range" id="volume" min="0" max="1" step="0.01" value="1"></div>
			<!--Playback Rate Control--><div class="control-group"><label for="playbackRate">Speed:</label><select id="playbackRate"><option value="0.25">0.25x</option><option value="0.5">0.5x</option><option value="1" selected>1x</option><option value="1.5">1.5x</option><option value="2">2x</option></select></div>
			<!--Progress Bar--><div class="control-group"><div class="time-display" id="time-display">00:00:00 / 00:00:00</div><input type="range" id="progress" value="0" step="0.1" min="0" max="100"></div>
			<!--Resolution Control--><div class="control-group"><label for="resolution">Resolution:</label><select id="resolution"><!--Placeholder Option <option value="1080p">1080p</option>--></select></div>
			<!--Source Selection (Determined by Resolution)--><div class="control-group source-select" id="sourceSelectContainer"><label for="sourceSelect">Select Source:</label><select id="sourceSelect"><!-- Sources will be populated based on resolution --></select></div>
			<!--Picture-In-Picture Mode--><button id="miniplayerBtn" class="fullscreen-btn" title="Picture-in-Picture (I)"><img src="./assets/images/video/miniplayer.svg"></button>
			<!--Fullscreen--><button id="fullscreenBtn" class="fullscreen-btn" title="Fullscreen (F)"><img src="./assets/images/video/fullscreen.svg"></button>
		</div>`;
	videoShell.appendChild(videoBox);

	const videoList = document.createElement("div");
	videoList.id = "videoList";
	videoList.innerHTML = `<div id="videoListInner"></div>`;
	videoShell.appendChild(videoList);
	document.body.appendChild(videoShell);
}
isVideoShellActive = false;
createVideoShell();
function toggleVideoShell() {
	const videoShell = document.getElementById("videoShell");
	isVideoShellActive = !isVideoShellActive;
	isVideoShellActive ? videoShell.className = "active" : videoShell.classList = "deactive";
}

let loadVideoDataValue = 0;
function loadAndDisplayEpisodes(videoDataEntry) {
	let videoData = document.getElementById("videoData");
	if (!videoData) {
		videoData = document.createElement("script");
		videoData.id = "videoData";
	}
	videoData.src = `./assets/js/videoData/${videoDataEntry}.js`;
	document.head.appendChild(videoData);

	videoData.onload = function() {
		let loadVideoDataValue = 0;
		const ulElement = document.getElementById("videoListInner");
		ulElement.innerHTML = "";

		videoDataList.forEach(([seasonEpisode, episodeName]) => {
			const liElement = document.createElement("li");
			liElement.innerHTML = `<a id="videoSeason">${seasonEpisode}</a><a id="videoName">${episodeName}</a>`;
			loadVideoDataValue++;
			liElement.setAttribute("onclick", `loadVideoData(${loadVideoDataValue - 1});`);
			ulElement.appendChild(liElement);
		});
	};
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	CACHE VIDEO DATA WHEN CLICKED  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let videoData = {}
function loadVideoData(index) {
	const resolutionSelect = document.getElementById("resolution");
	resolutionSelect.innerHTML = "";
	const episodeData = videoDataList[index];
	if (!episodeData) {
		console.error("Episode not found.");
		return null;
	}
	const defaultOption = document.createElement("option");
	defaultOption.textContent = "Select Resolution";
	defaultOption.value = ""; 
	resolutionSelect.appendChild(defaultOption);

	episodeData[2].forEach(([resolution, name, url]) => {
		if (!videoData[resolution]) {
			videoData[resolution] = [];
		}
		videoData[resolution].push({name, url});

		const existingOption = Array.from(resolutionSelect.options).find(option => option.value === resolution);

		if (!existingOption) {
			const option = document.createElement("option");
			option.value = resolution;
			option.innerHTML = resolution;
			resolutionSelect.appendChild(option);
		}
	});
}
/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?vq=hd1080" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

const video = document.querySelector("video");
const volumeControl = document.getElementById("volume");
const playbackRateControl = document.getElementById("playbackRate");
const progressControl = document.getElementById("progress");
const resolutionControl = document.getElementById("resolution");
const sourceSelectContainer = document.getElementById("sourceSelectContainer");
const sourceSelect = document.getElementById("sourceSelect");
const fullscreenBtn = document.getElementById("fullscreenBtn");

let isMuted = false;
let isFullscreen = false;
let isPictureInPicture = false;
let captionsAvailable = false;

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	PROGRESS BAR & TIME DISPLAY  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const timeDisplay = document.getElementById("time-display");
function formatTime(seconds) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}
function updateTimeDisplay() {
	const currentTime = video.currentTime;
	const duration = video.duration;
	if (isNaN(duration) || !isFinite(duration) || duration < 0) {
		timeDisplay.textContent = "00:00:00 / 00:00:00";
		return;
	}
	timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
}
video.addEventListener("timeupdate", updateTimeDisplay);

video.addEventListener("timeupdate", () => {
	const progress = (video.currentTime / video.duration) * 100;
	progressControl.value = progress;
});

progressControl.addEventListener("input", () => {
	const seekTime = (progressControl.value / 100) * video.duration;
	video.currentTime = seekTime;
});

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	VIDEO SOURCE & RESOLUTION OPTIONS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
function updateSourceSelect() {
	const selectedResolution = resolutionControl.value;
	const sources = videoData[selectedResolution] || [];

	// Clear current source options
	sourceSelect.innerHTML = "";

	// Add new source options
	sources.forEach(source => {
		const option = document.createElement("option");
		option.value = source.url;
		option.textContent = source.name;
		sourceSelect.appendChild(option);
	});

	// Show source selection dropdown if sources are available
	if (sources.length > 0) {
		sourceSelectContainer.style.display = "flex";
	} else {
		sourceSelectContainer.style.display = "none";
	}
}

	// Set the initial video source
function setVideoSource() {
	const selectedResolution = resolutionControl.value;
	const selectedSourceUrl = sourceSelect.value;

	if (selectedSourceUrl) {
		video.src = selectedSourceUrl;
		video.load(); // Reload video source
		video.play(); // Start playing the video
	}
}

		// Handle volume change
		volumeControl.addEventListener("input", () => {
			video.volume = volumeControl.value;
		});

		// Handle playback rate change
		playbackRateControl.addEventListener("change", () => {
			video.playbackRate = parseFloat(playbackRateControl.value);
		});

		// Handle resolution change
		resolutionControl.addEventListener("change", () => {
			updateSourceSelect();
			setVideoSource();
		});

		// Handle source change
		sourceSelect.addEventListener("change", () => {
			setVideoSource();
		});

		// Handle fullscreen toggle
		fullscreenBtn.addEventListener("click", () => {
			toggleFullscreen();
		});

		// Allow exiting fullscreen with ESC key
		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape" && document.fullscreenElement) {
				document.exitFullscreen();
			}
		});

		// Toggle fullscreen mode
		function toggleFullscreen() {
			if (!document.fullscreenElement) {
				video.requestFullscreen().catch((err) => {
					console.error("Error attempting to enter fullscreen mode: ", err);
				});
				isFullscreen = true;
			} else {
				document.exitFullscreen();
				isFullscreen = false;
			}
		}

		function togglePictureInPicture() {
			if (document.pictureInPictureElement) {
				document.exitPictureInPicture();
				isPictureInPicture = false;
			} else {
				video.requestPictureInPicture().catch(err => {
					console.error("Error entering PiP mode:", err)
				});
				isPictureInPicture = true;
			}
		}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	KEYBOARD SHORTCUTS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
document.addEventListener("keydown", (event) => {
	const activeElement = document.activeElement;
	if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") return;
	if (!isVideoShellActive) return;
	switch (event.key) {
		case " ": video.paused ? video.play() : video.pause(); break; // Space: Pause/Play Video
		case "m": // Volume Controls
			video.muted = isMuted ? false : true;
			isMuted = isMuted ? false : true;
			break;
		case "ArrowUp":
			if (video.volume < 1) {
				video.volume = Math.min(video.volume + 0.05, 1);
				volumeControl.value = video.volume;
			}
			break;
		case "ArrowDown":
			if (video.volume > 0) {
				video.volume = Math.max(video.volume - 0.05, 0);
				volumeControl.value = video.volume;
			}
			break;

			// Play Point Position Controls
		case ".":
			video.pause();
			video.currentTime = video.currentTime + (1 / 30); // Roughly move 1 frame forward at 30fps
			break;
		case ",":
			video.pause();
			video.currentTime = video.currentTime - (1 / 30); // Roughly move 1 frame backward at 30fps
			break;
		case "ArrowLeft":
			video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime - 5));
			break;
		case "ArrowRight":
			video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + 5));
			break;

		case "f": // F: Toggle fullscreen
			toggleFullscreen();
			break;
		case "c": // C: Toggle captions (if available)
			captionsAvailable = !captionsAvailable;
			if (captionsAvailable) {
				video.textTracks[0].mode = "showing";
			} else {
				video.textTracks[0].mode = "disabled";
			}
			break;
		case "i": // I: Toggle Picture-in-Picture (PiP)
			togglePictureInPicture();
			break;
		case "s": // Ctrl+S: Save Video for Certain Player Types
			if ((event.ctrlKey || event.metaKey)) {
				event.preventDefault(); // Prevent the default action (save)
			}
			break;
		default: break;
	}
});