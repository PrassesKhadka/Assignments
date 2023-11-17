interface IreturnCustomiseTheme {
	setTheme: (theme: string) => void;
}

function Customise_Theme(): IreturnCustomiseTheme {
	let current: string = "";

	function setTheme(theme: string) {
		current = `./assets/images/${theme}.png`;
		render();
	}

	function render() {
		const bg_screen = document.querySelector(".bg-screen") as HTMLElement;
		if (bg_screen) {
			bg_screen.style.backgroundImage = `url(${current})`;
		}
	}

	return { setTheme };
}

export default Customise_Theme;
