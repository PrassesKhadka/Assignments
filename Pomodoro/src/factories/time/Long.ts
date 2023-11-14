import { Itime } from "../interfaces";

export interface Ilong {
	getTime: () => Itime;
}

function Long() {
	const longTime: Itime = {
		minute: 10,
		second: 0,
	};

	function getTime(): Itime {
		return longTime;
	}

	return { getTime };
}

export default Long;
