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
let startTime:number = performance.now();

const countDisplay: HTMLDivElement = document.createElement("div");
countDisplay.innerText = `You have summoned ${count} skeletons!`;


function countUpdate(currUpdate: number){
    if(startTime == undefined){
        startTime = currUpdate;
    }
    const duration = currUpdate - startTime;

    count = Math.floor((duration/1000) * 1 + clicks);
    requestAnimationFrame(countUpdate);

    countDisplay.innerText = `You have summoned ${count} skeletons`;
}

let clicks: number = 0; 
button.addEventListener("click", () => {
  clicks++;
  countUpdate(performance.now());
});



requestAnimationFrame(countUpdate);


app.append(header, button, countDisplay);