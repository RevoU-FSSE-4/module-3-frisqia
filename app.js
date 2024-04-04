const coreFun = ((taskList, inputTask, url) => {
  //variabel punya parent
  const targetUl = taskList;
  const targetInput = inputTask;
  const api = url;

  function addTask() {
    let text = document.getElementById(targetInput).value;
    //console.log(text);
    addLi(text);
  }
  function addLi(text) {
    if (text == "") {
      //alert("task cannot be empty!");
      let li = document.createElement("li");
      li.innerHTML = "task cannot be empty!";
      document.getElementById(targetUl).appendChild(li);
    } else {
      let li = document.createElement("li");
      li.innerHTML =
        "" +
        `    <div>
                        <input class="form-check" type="checkbox">
                        <span>${text}</span>
                        </div>
                        <button class="badge border-0 bg-danger remove-btn">x</button>
                    `;
      document.getElementById(targetUl).appendChild(li); // appenChild fungsinya mengambil sebuah elemen dalam html ke dalam elemen yg di target
      // membuat tugas yang sudah dikerjakan di coret/digaris
      let checkTask = document.querySelectorAll(".form-check");
      //console.log(checkTask); // target ke input
      for (let ceck = 0; ceck < checkTask.length; ceck++) {
        const input = checkTask[ceck];
        //console.log(input); // target ke ceklisnya
        let taskSpan = input.nextElementSibling;
        //console.log(taskSpan); //target ke form isinya jadi input dan <span> saudaraan
        input.addEventListener("change", async function () {
          let textDecoration = taskSpan.style.textDecoration;
          taskSpan.style.textDecoration = textDecoration ? "" : "line-through";
          console.log(taskSpan);
        });
      }

      //button x jika di klik maka terhapus tugasnya
      let removeButton = document.querySelectorAll(".remove-btn");
      //console.log(removeButton);
      for (let del = 0; del < removeButton.length; del++) {
        const hapus = removeButton[del];
        //console.log(hapus);
        hapus.addEventListener("click", function () {
          //console.log(this);
          //console.log(this.parentElement);
          this.parentElement.remove();
        });
      }
    }
  }
  async function fetchRandomTask() {
    try {
      const response = await fetch(api);
      const data = await response.json();
      for (let index = 0; index < data.length; index++) {
        const text = data[index];
        addLi(text);
      }
      //console.log(data); //data sebuah array
    } catch (error) {
      console.log("ERROR");
    }
  }
  return {
    addTask: addTask, // returnya sebuah objek
    fetchRandomTask: fetchRandomTask,
  };
})("taskList", "newTask", "https://module3-api-is2m.onrender.com/random-todos"); //ini iife // id input dan ul
//console.log(coreFun);
document.getElementById("addTaskBtn").addEventListener("click", () => {
  coreFun.addTask(); // sehingga returnya harus kita panggil
});
document.addEventListener("load", coreFun.fetchRandomTask());
