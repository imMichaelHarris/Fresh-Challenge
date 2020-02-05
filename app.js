const surprises = document.querySelectorAll(".surprise")
surprises.forEach(div => {
    const additional = div.querySelector(".additional")
    const circle = div.querySelector(".circle")
    const h2 = div.querySelector("h2");
    const original = h2.textContent;
    circle.addEventListener("mouseover", () => {
        additional.classList.toggle("show");
        if(additional.classList.contains("show")){
            h2.textContent = "HEALTHY IN, HEALTHY OUT";
        } else {
            h2.textContent = original;
        }
    })
})