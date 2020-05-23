class displaySkill {
    constructor(){
        this.box = document.querySelector(".skill-set");
        this.listEl = document.querySelectorAll(".skill-set__column__skills__element");
        this.displayBox = this.box.getBoundingClientRect();
        Array(this.listEl);
    }
    
    getViewPort(){
        this.displayBox = this.box.getBoundingClientRect();
    }

    init(){
        this.displayBox = this.box.getBoundingClientRect();
            if(this.displayBox.top < 0){
            this.listEl.forEach((li)=>{
                li.classList.add("skill-set__column__skills__elements--animated")
            })
        }
    }
}

export default displaySkill;