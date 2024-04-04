"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var _a;
const coreFunction = ((targetUl, targetInput, api) => {
  function addTask() {
    let text = document.getElementById(targetInput).value;
    addLi(text);
  }
  function addLi(text) {
    var _a, _b;
    if (text === "") {
      let li = document.createElement("li");
      li.innerHTML = "task cannot be empty!";
      (_a = document.getElementById(targetUl)) === null || _a === void 0
        ? void 0
        : _a.appendChild(li);
    } else {
      let li = document.createElement("li");
      li.innerHTML = `    <div>
                          <input class="form-check" type="checkbox">
                          <span>${text}</span>
                          </div>
                          <button class="badge border-0 bg-danger remove-btn">x</button>
                      `;
      (_b = document.getElementById(targetUl)) === null || _b === void 0
        ? void 0
        : _b.appendChild(li);
      let checkTask = document.querySelectorAll(".form-check");
      for (let ceck = 0; ceck < checkTask.length; ceck++) {
        const input = checkTask[ceck];
        let taskSpan = input.nextElementSibling;
        input.addEventListener("change", () =>
          __awaiter(this, void 0, void 0, function* () {
            let textDecoration = taskSpan.style.textDecoration;
            taskSpan.style.textDecoration = textDecoration
              ? ""
              : "line-through";
          })
        );
      }
      let removeButton = document.querySelectorAll(".remove-btn");
      for (let del = 0; del < removeButton.length; del++) {
        const hapus = removeButton[del];
        hapus.addEventListener("click", function () {
          var _a;
          (_a = this.parentElement) === null || _a === void 0
            ? void 0
            : _a.remove();
        });
      }
    }
  }
  function fetchRandomTask() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield fetch(api);
        const data = yield response.json();
        for (let index = 0; index < data.length; index++) {
          const text = data[index];
          addLi(text);
        }
      } catch (error) {
        console.log("ERROR");
      }
    });
  }
  return {
    targetUl,
    targetInput,
    api,
    addTask,
    fetchRandomTask,
  };
})("taskList", "newTask", "https://module3-api-is2m.onrender.com/random-todos");
(_a = document.getElementById("addTaskBtn")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("click", () => {
      coreFunction.addTask();
    });
document.addEventListener("DOMContentLoaded", () => {
  coreFunction.fetchRandomTask();
});
