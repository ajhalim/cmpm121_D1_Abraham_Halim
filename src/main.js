"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var app = document.querySelector("#app");
var gameName = "Abe Game";
document.title = gameName;
var header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let count: number = 0;
const countDisplay = HTMLDivElement = document.createElement("div");
