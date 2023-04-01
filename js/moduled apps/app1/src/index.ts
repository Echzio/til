import { sum } from "./sum";

const sumNode = document.getElementById("sum");
if (sumNode) {
  sumNode.textContent = sum(1, 2).toString();
}

console.log("app1 started");
