import Timer from "../factories/timer";
import { Itime } from "../factories/interfaces";
import { IreturnTimer } from "../factories/timer";

describe("Timer", () => {
	const mockTime: Itime = { minute: 25, second: 0 };
	const timer: IreturnTimer = Timer(mockTime);
	jest.useFakeTimers();

	beforeEach(() => {
		timer;
	});

	it("test start,stop and reset functionality", () => {
		expect(timer.getCurrentTime().minute).toEqual(25);
		expect(timer.getCurrentTime().second).toEqual(0);
		timer.start();
		jest.advanceTimersByTime(10000);
		expect(timer.getCurrentTime().minute).toEqual(24);
		expect(timer.getCurrentTime().second).toEqual(50);
		timer.stop();

		// to test if stop works
		jest.advanceTimersByTime(10000);
		expect(timer.getCurrentTime().minute).toEqual(24);
		expect(timer.getCurrentTime().second).toEqual(50);

		// again starts
		timer.start();
		jest.advanceTimersByTime(10000);
		expect(timer.getCurrentTime().minute).toEqual(24);
		expect(timer.getCurrentTime().second).toEqual(40);

		// Now resets
		timer.reset();
		expect(timer.getCurrentTime().minute).toEqual(25);
		expect(timer.getCurrentTime().second).toEqual(0);

		// again starts
		timer.start();
		jest.advanceTimersByTime(10000);
		expect(timer.getCurrentTime().minute).toEqual(24);
		expect(timer.getCurrentTime().second).toEqual(50);

		// Now resets
		timer.reset();
		expect(timer.getCurrentTime().minute).toEqual(25);
		expect(timer.getCurrentTime().second).toEqual(0);

		// again starts
		timer.start();
		jest.advanceTimersByTime(10000);
		expect(timer.getCurrentTime().minute).toEqual(24);
		expect(timer.getCurrentTime().second).toEqual(50);
	});

	it("should stop after timer completed", () => {
		// mock time
		let mockTime: Itime = { minute: 0, second: 10 };
		const timer = Timer(mockTime);
		timer.start();
		// advance time by 10sec
		jest.advanceTimersByTime(10000);
		expect(timer.getCurrentTime()).toStrictEqual({ minute: 0, second: 0 });
		jest.advanceTimersByTime(10000);
		expect(timer.getCurrentTime()).toStrictEqual({ minute: 0, second: 0 });
	});
});
