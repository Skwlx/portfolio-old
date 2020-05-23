class displaySkill {
    constructor(){
        this.box = document.querySelector(".skill-set");
        this.listEl = document.querySelectorAll(".skill-set__column__skills__element");
        this.displayBox = this.box.getBoundingClientRect();
        Array(this.listEl);
    }

    init(){
        this.displayBox = this.box.getBoundingClientRect();
            if(this.displayBox.top < 0){
            this.listEl.forEach((li, time)=>{
                setTimeout(() => {
                li.classList.add("skill-set__column__skills__elements--animated");
                }, time * 250);
            })
        }
        else{
            this.listEl.forEach((li)=>{
                li.classList.remove("skill-set__column__skills__elements--animated");
            })
        }
    }
}

export default displaySkill;