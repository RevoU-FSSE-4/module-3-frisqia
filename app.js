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
let containerTask = document.getElementById("taskList");

buttonTask.addEventListener("click", function () {
  var requiredForm = taskName.required; //mas9h di kulik
  if (taskName.value == "") {
    alert("Task cannot be empty!!");
    //return requiredForm; // masih dikulik
  } else {
    let taskHTML = containerTask.innerHTML;
    taskHTML += `<li class="list-item"> 
                      <div>
                      <input class="form-check" type="checkbox">
                      <span>${taskName.value}</span>
                      </div>
                      <button class="badge border-0 bg-danger remove-btn">x</button>
                </li>`;
    containerTask.innerHTML = taskHTML;

    let checkTask = document.querySelectorAll(".form-check");
    //console.log(checkTask); // target input.from-chek
    for (let ceck = 0; ceck < checkTask.length; ceck++) {
      const input = checkTask[ceck];
      //console.log(input);

      let taskSpan = input.nextElementSibling;
      //console.log(taskSpan);
      //taskSpan.className += "complete"; // menghailkan kebalikan jadi tulisannya akan di style dlu setelah dicentang baru hilang stylenya
      input.addEventListener("change", async function () {
        //let taskSpan = input.nextElementSibling;
        //console.log(taskSpan); //menghasilkan <span>${taskName.value}</span>
        taskSpan.classList.toggle("complete"); // menstyling taskpan agar bergaris tapi disini saya menambahkan css complete di file css
      });
    }

    let removeButton = document.querySelectorAll(".remove-btn");
    // console.log(removeButton);
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
});
