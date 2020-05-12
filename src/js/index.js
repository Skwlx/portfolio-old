import Writing from './components/machineWriting';
import Stars from './components/Stars';
import "../sass/index.scss";
// import js from "../pictures/js.png";
// import html from "../pictures/html.png";
// import css from "../pictures/css.png";
// import webpack from "../pictures/webpack.png";
// import sass from "../pictures/sass.png";
// //import me from "../pictures/me.jpg";

window.addEventListener('DOMContentLoaded', () => {
    const star = new Stars(document.querySelector("#canvas"));
    const write = new Writing();
    write.type();
    star.run();
});