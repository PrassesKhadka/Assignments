import { Itime } from "./interfaces";

interface IreturnTimer {
	start: () => boolean;
	stop: () => boolean;
	reset: () => boolean;
	getTime: () => Itime;
}

function Timer(arg: Itime): IreturnTimer {
	// private datas;
	// Make a shallow copy cause if we give time=arg then time references the same value in memory as arg thus causing changes in time to reflect in arg thus #shallow copy
	let time = { ...arg };
	let interval: NodeJS.Timeout | null = null;

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
		interval = setInterval(() => {
			logic();
		}, 1000);
		return true;
	}

	function stop(): boolean {
		if (interval) {
			clearInterval(interval);
			interval = null;
			return true;
		}
		return false;
	}

	function reset(): boolean {
		time = arg;
		return true;
	}

	function getTime(): Itime {
		return time;
	}

	return { start, stop, reset, getTime };
}

export default Timer;
