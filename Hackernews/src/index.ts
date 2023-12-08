import { getData } from "./api/data";
import { Page } from "./factories/page";

// Keeping 5 stories on each page;
const page=Page(5)
page.render();

