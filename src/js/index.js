import Writing from './components/machineWriting';
import Stars from './components/Stars';
import Display from "./components/displaySkill";
import "../sass/index.scss";
import portfolio from "../images/portfolio.png";
import ticTacToe from "../images/tictactoe.png";

window.addEventListener('DOMContentLoaded', () => {
    const star = new Stars(document.querySelector("#canvas"));
    const write = new Writing();
    const display = new Display();
    window.addEventListener('scroll',(e)=>{
        display.init()
    });
    write.type();
    star.run();
});