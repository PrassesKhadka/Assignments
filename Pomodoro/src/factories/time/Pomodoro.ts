import { Itime } from "../interfaces";

export interface Ipomodoro {
	getTime: () => Itime;
}

function Pomodoro(): Ipomodoro {
	const pomodoroTime: Itime = {
		minute: 25,
		second: 0,
	};

	function getTime(): Itime {
		return pomodoroTime;
	}

	return { getTime };
}

export default Pomodoro;
