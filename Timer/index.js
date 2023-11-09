import Time from "./factory/time.js";
import Timer from "./factory/timer.js";

const minute = document.querySelector("#minute");

const m = prompt("Enter second");
const value = Time(0, m);
const timer = Timer(value.getTime());

minute.addEventListener("click", () => {});
