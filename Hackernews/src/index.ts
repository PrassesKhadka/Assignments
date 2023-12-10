import { getData } from "./api/data";
import { Page } from "./factories/page";

// Keeping 5 stories on each page;
const { nextPage, previousPage, goToIndex, render } = Page(5);

// selectors:
const inner_container=document.querySelector(".inner-container")
const navigations=document.querySelectorAll(".nav-btn")
const next_btn=document.querySelector(".next-btn")
const prev_btn=document.querySelector(".previous-btn")


// For event Listeners 
navigations.forEach((element:HTMLButtonElement,index:number)=>{
    element.addEventListener("click",()=>{
        inner_container.innerHTML=""
        goToIndex(index+1)
        render()

        // add active class to show->that specific button active when clicked;
        navigations.forEach((btn)=>{
            btn.classList.remove("active")

        })
        element.classList.add("active") 
    })
})

next_btn.addEventListener("click",()=>{
    inner_container.innerHTML=""
    nextPage()
    render()

    // To add active class to the buttons
    let index=1;
    navigations.forEach((btn,i)=>{
        if(btn.classList.contains("active")){
            index=i
        }
        btn.classList.remove("active")
    })
    navigations.forEach((btn,i)=>{
        if(i===index+1)
        {
            btn.classList.add("active")
        }

    })
})
prev_btn.addEventListener("click",()=>{
    inner_container.innerHTML=""
    previousPage()
    render()

    // To add active class to the buttons
    let index=1;
    navigations.forEach((btn,i)=>{
        if(btn.classList.contains("active")){
            index=i
        }
        btn.classList.remove("active")
    })
    navigations.forEach((btn,i)=>{
        if(index!=0 && i===index-1)
        {
            btn.classList.add("active")
        }
        if(index===0 && i===0)
        {
            btn.classList.add("active")
        }

    })
})


render();
