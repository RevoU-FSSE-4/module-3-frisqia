// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment
// Proyek ini bertujuan untuk membuat aplikasi web daftar tugas dasar dimana siswa diharuskan mengisi file JavaScript.

// ## Detail Tugas

// ### Deskripsi Tugas

// Tugasnya adalah melengkapi file JavaScript untuk aplikasi web daftar tugas sederhana. Kode awal HTML dan CSS disediakan, dan siswa perlu mengisi file JavaScript untuk mengimplementasikan fungsi menambah tugas, menyelesaikan tugas, dan menghapus tugas.

// ### File yang Disediakan

// - `index.html`: Berisi struktur halaman web.
// - `styles.css`: Berisi gaya halaman web.
// - `app.js`: File JavaScript awalnya kosong. Siswa wajib mengisi file ini.

// ### Ikhtisar Kode Pemula

// Kode awal JavaScript yang disediakan berisi event pendengar untuk menambahkan tugas, menampilkan tugas yang diambil dari API (yang perlu diganti dengan titik akhir API sebenarnya), fungsi untuk menambahkan tugas, menampilkan tugas, menyelesaikan tugas, dan menghapus tugas.

// ## Petunjuk

// 1. Kloning repositori ini ke mesin lokal Anda.
// 2. Buka file `index.html` di browser web untuk melihat status aplikasi daftar tugas saat ini.
// 3. Buka file `app.js` dan isi kode JavaScript sesuai petunjuk yang diberikan.
// 4. Uji implementasi Anda dengan menambah, menyelesaikan, dan menghapus tugas.
// 5. Secara opsional, Anda dapat menata aplikasi lebih lanjut dengan memodifikasi file `styles.css`.

// ## Persyaratan

// - Web daftar tugas yang sederhana harus dapat menambah, menyelesaikan, dan menghapus tugas.
// - Sejak awal, web harus menampilkan 3 tugas acak dari pengambilan API.
// - Menerapkan validasi untuk memastikan bahwa pengguna tidak dapat menambahkan tugas kosong.
// - Gunakan manipulasi DOM alih-alih `alert` untuk validasi dan interaksi dengan pengguna.
// - Pertahankan struktur kode yang baik, gunakan komentar, dan patuhi lekukan yang benar.

// ## Titik Akhir API

// Untuk mengambil tugas, ganti `'titik akhir-api-Anda'` dengan API sebenarnya di sini `'https://module3-api-is2m.onrender.com/random-todos'`.
let taskName = document.getElementById("newTask");
let buttonTask = document.getElementById("addTaskBtn");

buttonTask.addEventListener("click", function () {
  if (taskName.value == "") {
    alert("Task cannot be empty!!");
  } else {
    let containerTask = document.getElementById("taskList");
    let taskHTML = containerTask.innerHTML;
    taskHTML += "<li></li>";
    containerTask.innerHTML = taskHTML;
    taskHTML.value = "";
  }
});
