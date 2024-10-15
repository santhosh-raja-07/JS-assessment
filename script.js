let head=document.querySelector(".header");
let container=document.querySelector(".container")
let addbox=document.getElementById("addBox")
let removebox=document.getElementById("removeBox")
let boxcount=document.getElementById("showBoxCount")
let showalert=document.getElementById("showcontent")
let linkbtn=document.getElementById("link");
showalert.addEventListener("click", ()=>{
    alert(head.textContent);
})
let count=0;
addbox.addEventListener("click",()=>{
    let div=document.createElement("div");
    div.textContent="BOX";
    div.classList.add("box-style");
    container.appendChild(div);
    count++;
})

removebox.addEventListener("click",()=>{
    let lastdiv=document.querySelector(".box-style:last-child");
    container.removeChild(lastdiv);
    count--
})

boxcount.addEventListener("click",()=>{
    alert(count)
})

linkbtn.addEventListener("click", ()=>{
    let createlink=document.createElement("a")
    createlink.textContent="HI there"
    createlink.href="https://www.youtube.com";
    container.appendChild(createlink);

})