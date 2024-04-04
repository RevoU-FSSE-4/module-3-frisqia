// let message: string = "Hello World";
// console.log(message);

interface CoreFunction {
  targetUl: string;
  targetInput: string;
  api: string;
  addTask(): void;
  fetchRandomTask(): Promise<void>;
}

const coreFunction: CoreFunction = ((
  targetUl: string,
  targetInput: string,
  api: string
): CoreFunction => {
  function addTask(): void {
    let text: string = (
      document.getElementById(targetInput) as HTMLInputElement
    ).value;
    addLi(text);
  }

  function addLi(text: string): void {
    if (text === "") {
      let li = document.createElement("li");
      li.innerHTML = "task cannot be empty!";
      document.getElementById(targetUl)?.appendChild(li);
    } else {
      let li = document.createElement("li");
      li.innerHTML = `    <div>
                          <input class="form-check" type="checkbox">
                          <span>${text}</span>
                          </div>
                          <button class="badge border-0 bg-danger remove-btn">x</button>
                      `;
      document.getElementById(targetUl)?.appendChild(li);

      let checkTask =
        document.querySelectorAll<HTMLInputElement>(".form-check");
      for (let ceck = 0; ceck < checkTask.length; ceck++) {
        const input = checkTask[ceck];
        let taskSpan = input.nextElementSibling as HTMLElement;
        input.addEventListener("change", async () => {
          let textDecoration = taskSpan.style.textDecoration;
          taskSpan.style.textDecoration = textDecoration ? "" : "line-through";
        });
      }

      let removeButton =
        document.querySelectorAll<HTMLButtonElement>(".remove-btn");
      for (let del = 0; del < removeButton.length; del++) {
        const hapus = removeButton[del];
        hapus.addEventListener("click", function () {
          this.parentElement?.remove();
        });
      }
    }
  }

  async function fetchRandomTask(): Promise<void> {
    try {
      const response = await fetch(api);
      const data = await response.json();
      for (let index = 0; index < data.length; index++) {
        const text = data[index];
        addLi(text);
      }
    } catch (error) {
      console.log("ERROR");
    }
  }

  return {
    targetUl,
    targetInput,
    api,
    addTask,
    fetchRandomTask,
  };
})("taskList", "newTask", "https://module3-api-is2m.onrender.com/random-todos");

document.getElementById("addTaskBtn")?.addEventListener("click", () => {
  coreFunction.addTask();
});

document.addEventListener("DOMContentLoaded", () => {
  coreFunction.fetchRandomTask();
});
