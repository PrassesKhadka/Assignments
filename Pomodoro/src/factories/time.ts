import { Itime } from "./interfaces";

export interface IreturnTime {
	getTime: () => Itime;
}

// default value of second set as 0
function Time(minute: number, second: number = 0): IreturnTime {
	const time: Itime = {
		minute,
		second,
	};

	function getTime(): Itime {
		return time;
	}

	return { getTime };
}

export default Time;
