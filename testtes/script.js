// Mengambil elemen DOM
const taskNameInput = document.getElementById("task-name");
const tasksList = document.getElementById("tasks");
const addTaskForm = document.getElementById("add-task-form");

// Mendapatkan data tugas dari API (ganti dengan API sebenarnya)
const getTasks = () => {
  fetch("https://api.example.com/tasks")
    .then((response) => response.json())
    .then((data) => {
      // Menampilkan 3 tugas acak
      const randomTasks = data.slice(0, 3);
      randomTasks.forEach((task) => addTask(task));
    });
};

// Menambahkan tugas
const addTask = (task) => {
  // Validasi untuk mencegah penambahan tugas kosong
  if (!taskNameInput.value) {
    return;
  }

  // Membuat elemen DOM untuk tugas baru
  const taskElement = document;
};
