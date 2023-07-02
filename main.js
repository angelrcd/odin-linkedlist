import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.append("E");


const output = document.querySelector("#output");
const appendButton = document.querySelector("#append-btn");
const prependButton = document.querySelector("#prepend-btn");
const popButton = document.querySelector("#pop-btn");
const atInput = document.querySelector("#at");
const findInput = document.querySelector("#find");
const insertAtBtn = document.querySelector("#insert-at-btn");
const removeAtBtn = document.querySelector("#remove-at-btn");


updateDisplay();

appendButton.addEventListener("click", ()=> {
  const appendInputText = document.querySelector("#append");
  const value = appendInputText.value;
  appendInputText.value = "";
  list.append(value);
  updateDisplay();
})

prependButton.addEventListener("click", () => {
  const prependInputText = document.querySelector("#prepend");
  const value = prependInputText.value;
  prependInputText.value = "";
  list.prepend(value);
  updateDisplay();
})

popButton.addEventListener("click", () => {
  list.pop()
  updateDisplay();
})

atInput.addEventListener("input", handleAt)

findInput.addEventListener("input", handleFind)

insertAtBtn.addEventListener("click", () => {
  const valueInput = document.querySelector("#insert-at-value");
  const indexInput = document.querySelector("#insert-at-index");
  const value = valueInput.value;
  const indexInputValue = indexInput.value;
  if (indexInputValue === ""){
    return;
  } 

  const index = +indexInputValue;
  valueInput.value = "";
  indexInput.value = "";

  list.insertAt(value, index);
  updateDisplay();
  

})

removeAtBtn.addEventListener("click", () => {
  const removeIndexInput = document.querySelector("#remove-at");
  const indexValue = removeIndexInput.value;
  if (indexValue === ""){
    return;
  }

  const index = +indexValue;
  removeIndexInput.value = "";
  list.removeAt(index);
  updateDisplay();
})

function updateDisplay(){
  output.textContent = list.toString();
  handleAt();
  handleFind();
}

function handleAt(){
  const index = atInput.value;
  const resultBox = document.querySelector("#at-result");
  if(index === ""){
    resultBox.classList.add("hidden")
  } else {
    resultBox.classList.remove("hidden")
  }

  const valueAtIndex = list.at(Number(index));
  if(valueAtIndex === null){
    resultBox.textContent = "Index out of bounds"
    return;
  }
  resultBox.textContent = valueAtIndex?.value;
}

function handleFind(){
  const value = findInput.value;
  const resultBox = document.querySelector("#find-result");
  if(value === ""){
    resultBox.classList.add("hidden")
  } else {
    resultBox.classList.remove("hidden")
  }
 const indexFound = list.find(value);

 if(indexFound < 0){
  resultBox.textContent = "Value not found"
  return;
 }
 resultBox.textContent = `Value '${value}' found at index ${indexFound}`
}