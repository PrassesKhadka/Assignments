import Time, { IreturnTime } from "../factories/time";

describe("Time", () => {
	const pomodoro: IreturnTime = Time(25, 0);
	const short: IreturnTime = Time(5, 0);
	const long: IreturnTime = Time(10, 0);

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
