import Writing from './components/machineWriting';
import Stars from './components/Stars';
import "../sass/index.scss";
import portfolio from "../images/portfolio.png";
import ticTacToe from "../images/tictactoe.png";

window.addEventListener('DOMContentLoaded', () => {
    const star = new Stars(document.querySelector("#canvas"));
    const write = new Writing();
    write.type();
    star.run();
});