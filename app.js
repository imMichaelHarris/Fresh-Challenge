const surprises = document.querySelectorAll(".surprise");
surprises.forEach(div => {
    const additional = div.querySelector(".additional");
    const circle = div.querySelector(".circle");
    const h2 = div.querySelector("h2");
    const original = h2.textContent;
    circle.addEventListener("mouseover", () => {
        additional.classList.toggle("show");
        if(additional.classList.contains("show")){
            div.style.background = "#e6fef8";
            div.style.padding = "1em"
            h2.textContent = "HEALTHY IN, HEALTHY OUT";
        } else {
            div.style.padding = 0;
            div.style.background = "none";
            h2.textContent = original;
        }
    })
})