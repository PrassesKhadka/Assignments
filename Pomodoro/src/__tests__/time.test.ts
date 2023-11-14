import { Itime } from "../factories/interfaces";
import { Ipomodoro } from "../factories/time/Pomodoro";
import { Ilong } from "../factories/time/Long";
import { Ishort } from "../factories/time/Short";
import Pomodoro from "../factories/time/Pomodoro";
import Long from "../factories/time/Long";
import Short from "../factories/time/Short";

describe("Time", () => {
	const pomodoro: Ipomodoro = Pomodoro();
	const short: Ishort = Short();
	const long: Ilong = Long();

	beforeEach(() => {
		pomodoro;
		short;
		long;
	});

	it("time works fine", () => {
		expect(pomodoro.getTime()).toEqual({ minute: 25, second: 0 });
		expect(short.getTime()).toEqual({ minute: 5, second: 0 });
		expect(long.getTime()).toEqual({ minute: 10, second: 0 });
	});
});
