const container = makeAndFixElement("div", "class", "container", document.body);
const header = makeAndFixElement("div", "id", "header", container);
const input = makeAndFixElement("input", "type", "text", header, "Search...");
const suggestionContainer = makeAndFixElement(
  "div",
  "class",
  "sug-container",
  container
);

function makeAndFixElement(ele, attType, attName, appendWith, placeholderText) {
  const element = document.createElement(ele);

  if (attType && attName) {
    element.setAttribute(attType, attName);
  }

  if (placeholderText) {
    element.setAttribute("placeholder", placeholderText);
  }

  if (appendWith) {
    appendWith.append(element);
  }
  return element;
}

const arr = [
  "Petails of roses",
  "animals of town",
  "the crowd of city",
  "fruits of planet",
  "orange peeled",
  "web design",
  "apple juice",
  "Brown fox",
  "cats",
  "xor problem",
  "Social Media",
];

const addClassInInput = input.classList.add("input");
let inputEl = document.querySelector(".input");

function addFunctionalityInInput() {
  inputEl.addEventListener("focus", function () {
    document.body.classList.add("overlay");
  });
  inputEl.addEventListener("blur", function () {
    document.body.classList.remove("overlay");
  });
}

function handleSearchFunctionality(names) {
  let sugContainer = document.querySelector(".sug-container");

  inputEl.addEventListener("input", () => {
    const filteredArray = names.filter((char) =>
      char.toLowerCase().startsWith(input.value)
    );

    let clutter = "";
    filteredArray.forEach((item) => {
      clutter += `<div class="text-icon">
      <p class="para">${item}</p>
    </div>`;
      sugContainer.style.padding = `${10}px`;
    });
    sugContainer.innerHTML = clutter;
  });
}

handleSearchFunctionality(arr);
addFunctionalityInInput();
