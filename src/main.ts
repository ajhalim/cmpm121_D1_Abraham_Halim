import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Abe Game";

document.title = gameName;
//testiongdasfasfas
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
