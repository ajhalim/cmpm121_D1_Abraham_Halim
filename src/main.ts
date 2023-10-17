import "./style.css";

let upgrade1Count: number = 0;
let upgrade2Count: number = 0;
let upgrade3Count: number = 0;

//let upgrade1Cost: number = 10;
//let upgrade2Cost: number = 100;
//let upgrade3Cost: number = 1000;


const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Necromancer sim";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;

const button: HTMLButtonElement = document.createElement("button");
//button.textContent = "☠";
button.innerHTML = `☠<br>summon skele`
const divider = document.createElement("div");
//app.append(divider);

app.append(header);

/* const upgrade1: HTMLButtonElement = document.createElement("button");
//upgrade1.textContent = "🧙";
upgrade1.innerHTML = `🧙<br>hire apprentice<br>you own ${upgrade1Count}`;
upgrade1.disabled = true;


const upgrade2: HTMLButtonElement = document.createElement("button");
//upgrade2.textContent = "🔮";
upgrade2.innerHTML = `🔮<br>purchase orb<br>you own ${upgrade2Count}`;
upgrade2.disabled = true;


const upgrade3: HTMLButtonElement = document.createElement("button");
//upgrade3.textContent = "🏰";
upgrade3.innerHTML = `🏰<br>purchase castle<br>you own ${upgrade3Count}`;
upgrade3.disabled = true; */



let count: number = 0;
let growthRate: number = 0;
let prevTime:number = 0;

interface things{
    name: string;
    cost: number;
    amountOwned: number;
    growthRate: number;
    button: HTMLButtonElement;
    description: string;
}

const availableItems: things[] = [
    {
        name:"🧙",
        cost: 10,
        amountOwned: 0,
        growthRate: 0.1,
        button: document.createElement("button"),
        description:"hire apprentice to do wizard stuff",
    },

    {
        name:"🔮",
        cost: 100,
        amountOwned: 0,
        growthRate: 2,
        button: document.createElement("button"),
        description:"obtain magic orb to help with wizard stuff",
    },

    {
        name:"🏰",
        cost: 1000,
        amountOwned: 0,
        growthRate: 50,
        button: document.createElement("button"),
        description:"get a castle to do wizard stuff",
    },



]

//const upgrade2: HTMLButtonElement = document.createElement("button")

function createButtons(availableItems: things[]) {
    for (let i: number = 0; i < availableItems.length; i++) {
        availableItems[i].button.innerHTML = `${availableItems[i].name}<br>Skele summons: ${availableItems[i].growthRate} : Cost: ${availableItems[i].cost}
      <br>${availableItems[i].description}`;
      availableItems[i].button.disabled = true;
      app.append(availableItems[i].button);
    }
}
///narrative
function buyUpgrade(purchase: things){

    count = count - purchase.cost;

    purchase.amountOwned++;

    growthRate += purchase.growthRate;

    purchase.cost = purchase.cost * 1.15;
    
    purchase.button.innerHTML = `${purchase.name}<br>Skele summons: ${purchase.growthRate} : Cost: ${purchase.cost.toFixed()}
    <br>${purchase.description}`;

    


    countDisplay.innerText = `You have summoned ${count.toFixed()} skeletons and have a growth rate of ${growthRate.toFixed(2)}`;
}

function disableCheck(availableItems: things[]){
    for (let i: number = 0; i < availableItems.length; i++) {
        if(availableItems[i].cost <= count){
            availableItems[i].button.disabled = false;
        }else{
            availableItems[i].button.disabled = true;
        }
    }
}

  

const countDisplay: HTMLDivElement = document.createElement("div");
//countDisplay.innerText = `You have summoned ${count} skeletons!`;


//let clicks: number = 0; 
button.addEventListener("click", () => {
  count++;
  frameUpdate(performance.now());
}); 

/* upgrade1.addEventListener("click", () => {
    growthRate = growthRate + .1;
    upgrade1Count++;
    //countUpdate(performance.now());
    count = count -10;
  });

  upgrade2.addEventListener("click", () => {
    growthRate = growthRate + 2;
    upgrade2Count++;
    //countUpdate(performance.now());
    count = count -100;
  });

  upgrade3.addEventListener("click", () => {
    growthRate = growthRate + 50;
    upgrade3Count++;
    //countUpdate(performance.now());
    count = count -1000;
  }); */



function frameUpdate(currUpdate: number){
    if(prevTime == undefined){
        prevTime = currUpdate;
    }


    disableCheck(availableItems);
    //disable check
    /* if(count >= 10){
        upgrade1.disabled = false;
    }else{
        upgrade1.disabled = true;
    }

    if(count >= 100){
        upgrade2.disabled = false;
    }else{
        upgrade2.disabled = true;
    }


    if(count >= 1000){
        upgrade3.disabled = false;
    }else{
        upgrade3.disabled = true;
    } */

    //time check
    const duration = currUpdate - prevTime;
    prevTime = currUpdate

    //increment
    count += (((duration/1000)) * growthRate);
    requestAnimationFrame(frameUpdate);

    countDisplay.innerText = `You have summoned ${count.toFixed()} skeletons and have a growth rate of ${growthRate.toFixed(2)}`;
    
    /*upgrade1.innerHTML = `🧙<br>hire apprentice<br>you own ${upgrade1Count}`;
    upgrade2.innerHTML = `🔮<br>purchase orb<br>you own ${upgrade2Count}`;
    upgrade3.innerHTML = `🏰<br>purchase castle<br>you own ${upgrade3Count}`; */
}


//

for(let i:number = 0; i < availableItems.length; i++){
    availableItems[i].button.addEventListener("click", ()=> {
        buyUpgrade(availableItems[i]);
    });
}


requestAnimationFrame(frameUpdate);


app.append(header);
app.append(button);
app.append(divider);
createButtons(availableItems);
app.append(countDisplay);