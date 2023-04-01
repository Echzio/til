import { sum } from "remoteApp/sum";

const sumNode = document.getElementById("sum");
if (sumNode) {
  sumNode.textContent = sum(1, 5).toString();
}

console.log("app2 started");
