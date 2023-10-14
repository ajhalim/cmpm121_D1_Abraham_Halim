import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Necromancer sim";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

const button: HTMLButtonElement = document.createElement("button");
button.textContent = "☠";

const divider = document.createElement("div");
//app.append(divider);



app.append(header);

const upgrade1: HTMLButtonElement = document.createElement("button");
//upgrade1.innerHTML = "strengthen throw";
upgrade1.textContent = "🧙";
upgrade1.disabled = true;

let count: number = 0;
let growthRate: number = 0;
let prevTime:number = 0;

const countDisplay: HTMLDivElement = document.createElement("div");
countDisplay.innerText = `You have summoned ${count} skeletons!`;


let clicks: number = 0; 
button.addEventListener("click", () => {
  count++;
  frameUpdate(performance.now());
});

upgrade1.addEventListener("click", () => {
    growthRate++;
    //countUpdate(performance.now());
    count = count -10;
  });



function frameUpdate(currUpdate: number){
    if(prevTime == undefined){
        prevTime = currUpdate;
    }

    //disable check
    if(count >= 10){
        upgrade1.disabled = false;
    }else{
        upgrade1.disabled = true;
    }

    //time check
    const duration = currUpdate - prevTime;
    prevTime = currUpdate

    //increment
    count += (((duration/1000)) * growthRate);
    requestAnimationFrame(frameUpdate);

    countDisplay.innerText = `You have summoned ${count.toFixed()} skeletons and have a growth rate of ${growthRate.toFixed()}`;
}


//




requestAnimationFrame(frameUpdate);


app.append(header);
app.append(button);
app.append(divider);
app.append(upgrade1);
app.append(countDisplay);