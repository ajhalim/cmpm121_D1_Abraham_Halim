import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Necromancer sim";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

const button: HTMLButtonElement = document.createElement("button");
button.textContent = "☠";

app.append(header);

let count: number = 0;
const countDisplay: HTMLDivElement = document.createElement("div");
countDisplay.innerText = `You have summoned ${count} skeletons!`;

button.addEventListener("click", () => {
  count++;
  countDisplay.innerText = `You have summoned ${count} skeletons`;
});

app.append(header, button, countDisplay);