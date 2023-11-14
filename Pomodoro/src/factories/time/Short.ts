import { Itime } from "../interfaces";

export interface Ishort {
	getTime: () => Itime;
}

function Short() {
	const shortTime: Itime = {
		minute: 5,
		second: 0,
	};

	function getTime(): Itime {
		return shortTime;
	}

	return { getTime };
}

export default Short;
