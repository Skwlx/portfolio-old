class Writing{
    constructor(){
        this.message = ["Witaj, nazywam się Paweł", "Junior front-end", "Web developer", "Student Informatyki"]
        this.text = document.querySelector(".jumbotron__console-window__text");
        this.wordIndex = 0;
    }
    type(){
        this.message.forEach(word => {
            const letter = word[this.wordIndex];
            this.text.textContent += letter;
        });
    }
}

export default Writing;