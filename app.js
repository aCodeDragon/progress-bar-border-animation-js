const vid = document.getElementById("nemo");
const vidContainer = document.querySelector("[data-video-container]");
let isPlaying = false;

vid.onloadedmetadata = () => {
	vidContainer.addEventListener("click", playVideo);
};

function playVideo() {
	isPlaying ? vid.pause() : vid.play();
}

vid.onplaying = function () {
	isPlaying = true;
	vid.addEventListener("timeupdate", () => {
		vidContainer.style.setProperty(
			"--borderLeft",
			Math.floor(vid.currentTime) + "%"
		);
		vidContainer.style.setProperty(
			"--borderTop",
			Math.floor(vid.currentTime) + "%"
		);
		vidContainer.style.setProperty(
			"--borderRight",
			Math.floor(vid.currentTime) + "%"
		);
		vidContainer.style.setProperty(
			"--borderBottom",
			Math.floor(vid.currentTime) + "%"
		);
	});
};
vid.onpause = function () {
	isPlaying = false;
};
