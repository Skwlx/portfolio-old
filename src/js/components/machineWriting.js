class Writing{
    constructor(){
        this.message = ["Witaj, nazywam się Paweł.",
         " Jestem początkującym programistą,", 
        " web developerem,", 
        " front-endowcem. Dobrze Cię widzieć."
        ," #Front-end",
        " #Js",
        " ↓" 
        ];
        this.textBox = document.querySelector(".jumbotron__console-window__text");
        this.wordIndex = 0;
        this.messageIndex = 0;
    }

    type(){
        if(this.messageIndex > this.message.length -1)
            return 0;
        const letter = this.message[this.messageIndex].substr(this.wordIndex,1);
        this.textBox.textContent += `${letter}`;
        this.wordIndex++;
        if(this.wordIndex === this.message[this.messageIndex].length){
            this.messageIndex++;
            this.wordIndex = 0;
        }
        setTimeout(()=>{requestAnimationFrame(() => this.type())}, 70);
    }
}

export default Writing;