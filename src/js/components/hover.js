let hover = () =>{
    let box = document.querySelectorAll(".projects__projectBox");
    let hiddenBox = document.querySelectorAll(".projects__projectBox__hide");
    box.forEach((el) =>{
        el.addEventListener('mouseover', (e) =>{
            hiddenBox.forEach((div)=>{
                div.style.display = "block";
            })
        })
        el.addEventListener('mouseout', (e) =>{
            hiddenBox.forEach((div)=>{
                div.style.display = "none";
            })
        })
    })
}

export default hover;