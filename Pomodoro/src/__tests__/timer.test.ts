import Timer from "../factories/timer";
import Pomodoro from "../factories/time/Pomodoro";
import { Itime } from "../factories/interfaces";

describe("Timer", () => {
	const pomodoro = Pomodoro();
	const timer = Timer(pomodoro.getTime());
	jest.useFakeTimers();

	beforeEach(() => {
		pomodoro;
		timer;
	});

	it("test start,stop and reset functionality", () => {
		expect(timer.getTime().minute).toEqual(25);
		expect(timer.getTime().second).toEqual(0);
		timer.start();
		jest.advanceTimersByTime(10000);
		expect(timer.getTime().minute).toEqual(24);
		expect(timer.getTime().second).toEqual(50);
		timer.stop();

		// to test if stop works
		jest.advanceTimersByTime(10000);
		expect(timer.getTime().minute).toEqual(24);
		expect(timer.getTime().second).toEqual(50);

		// again starts
		timer.start();
		jest.advanceTimersByTime(10000);
		expect(timer.getTime().minute).toEqual(24);
		expect(timer.getTime().second).toEqual(40);

		// Now resets
		timer.reset();
		expect(timer.getTime().minute).toEqual(25);
		expect(timer.getTime().second).toEqual(0);
	});

	it("should stop after timer completed", () => {
		// mock time
		let mockTime: Itime = { minute: 0, second: 10 };
		const timer = Timer(mockTime);
		timer.start();
		// advance time by 10sec
		jest.advanceTimersByTime(10000);
		expect(timer.getTime()).toStrictEqual({ minute: 0, second: 0 });
		jest.advanceTimersByTime(10000);
		expect(timer.getTime()).toStrictEqual({ minute: 0, second: 0 });
	});
});
