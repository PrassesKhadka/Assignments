// A single source of truth for different timers: Pomodoro,short-break and long-break

import { Itime } from "./interfaces";

export interface IreturnTimer {
	start: () => boolean;
	stop: () => boolean;
	reset: () => boolean;
	getCurrentTime: () => Itime;
	timesUp: () => boolean;
	getState: () => boolean;
	render: () => void;
}

function Timer(arg: Itime): IreturnTimer {
	// private datas;
	// Make a shallow copy cause if we give time=arg then time references the same value in memory as arg thus causing changes in time to reflect in arg thus #shallow copy
	let time = { ...arg };
	let interval: NodeJS.Timeout | null = null;
	let active = false;

	function logic() {
		if (time.minute > 0 || time.second > 0) {
			if (time.second === 0) {
				time.minute -= 1;
				time.second = 60;
			}
			time.second--;
		} else if (time.minute === 0 && time.second === 0) {
			stop();
		}
	}

	function start() {
		// active true so it won't work if you click start again ,if it is active
		if (!active) {
			interval = setInterval(() => {
				logic();
				render();
			}, 1000);
			active = true;
			return true;
		}
		return false;
	}

	function stop(): boolean {
		if (interval) {
			clearInterval(interval);
			interval = null;
			active = false;
			return true;
		}
		return false;
	}

	function reset(): boolean {
		time = { ...arg };
		render();
		stop();
		return true;
	}

	function getCurrentTime(): Itime {
		return time;
	}

	function timesUp(): boolean {
		if (time.minute === 0 && time.second === 0) return true;
		else return false;
	}

	function getState(): boolean {
		return active;
	}

	function isSingleDigit(num: number): boolean {
		return num >= 0 && num <= 9 ? true : false;
	}

	function render() {
		const timer = document.querySelector(".timer");

		if (timer) {
			timer.textContent =
				isSingleDigit(time.minute) && isSingleDigit(time.second)
					? `0${time.minute}:0${time.second}`
					: isSingleDigit(time.minute)
					? `0${time.minute}:${time.second}`
					: isSingleDigit(time.second)
					? `${time.minute}:0${time.second}`
					: `${time.minute}:${time.second}`;
		}
	}

	return { start, stop, reset, getCurrentTime, timesUp, getState, render };
}

export default Timer;
