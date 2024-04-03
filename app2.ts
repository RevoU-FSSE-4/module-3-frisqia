const coreFunction: {
  targetUl: string;
  targetInput: string;
  api: string;
} = ((
  targetUl: string,
  targetInput: string,
  api: string
): {
  targetUl: string;
  targetInput: string;
  api: string;
} => {
  return {
    targetUl,
    targetInput,
    api,
  };
  function addTask() {
    let text = <HTMLElement>document.getElementById(targetInput);
    //addLi(text);
  }
})(
  "taskList",
  " newTask",
  "https://module3-api-is2m.onrender.com/random-todos"
);
