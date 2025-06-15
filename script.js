const wrapper = document.querySelector(".wrapper");
const hideBtn = document.querySelector("#hide-btn");
const showBtn = document.querySelector("#show-btn");
hideBtn.addEventListener("click",()=>{
   wrapper.classList.add("hidden");
});
showBtn.addEventListener("click",()=>{
   wrapper.classList.remove("hidden");
});