import test from "./test";
import "./style.scss";
import axios from "axios";
axios.get("https://hexschool.github.io/ajaxHomework/data.json").then(function (res) { console.log(res)});

let a = 10;
let b = 20;

console.log(a);

function testFunc(a,b) {
    console.log(a + b);
    return a + b;
};

console.log(testFunc(a, b));
console.log(test);
