let selectedRow = null;

const form = document.querySelector(".form-group");
// form event
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let formData = new ReadData();
  if(selectedRow === null) {
    insertData(formData);
  } else {
    updateData(formData);
  }
  resetForm();
});


// READ data
function ReadData() {
  this.nim = document.querySelector(".nim").value;
  this.nama = document.querySelector(".nama").value;
  this.jurusan = document.querySelector(".jurusan").value;
}
// --

// CREATE data
function insertData(data) { 
  let table = document.querySelector(".table-list");
  let newRow = table.insertRow(table.length);

  let cell_0 = newRow.insertCell(0);
  cell_0.innerHTML = data.nim;
  let cell_1 = newRow.insertCell(1);
  cell_1.innerHTML = data.nama;
  let cell_2 = newRow.insertCell(2);
  cell_2.innerHTML = data.jurusan;
  let cell_3 = newRow.insertCell(3);
  cell_3.innerHTML = `
    <button type="button" class="btn btn-edit" onClick="onEdit(this)" title="edit button"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-delete" onClick="onDelete(this)" title="delete button"><i class="fas fa-trash"></i></button>
  `;
}
// --

// reset form input
function resetForm() {
  document.querySelector(".nim").value = "";
  document.querySelector(".nama").value = "";
  document.querySelector(".jurusan").value = "";

  selectedRow = null;
}
// --

// UPDATE data
function onEdit(btn) {
  selectedRow = btn.parentElement.parentElement;
  
  document.querySelector(".nim").value = selectedRow.cells[0].innerHTML;
  document.querySelector(".nama").value = selectedRow.cells[1].innerHTML;
  document.querySelector(".jurusan").value = selectedRow.cells[2].innerHTML;
}

function updateData(data) {
  selectedRow.cells[0].innerHTML = data.nim;
  selectedRow.cells[1].innerHTML = data.nama;
  selectedRow.cells[2].innerHTML = data.jurusan;
}
// --

// DELETE data
function onDelete(btn) {
  if(confirm("Yakin kamu..?")) {
    selectedRow = btn.parentElement.parentElement;

    document.querySelector(".table-list").deleteRow(selectedRow.rowIndex);
    resetForm();
  }
}