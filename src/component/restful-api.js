// Fungsi untuk mengambil data catatan dari API
async function fetchNotesFromAPI() {
  try {
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
    if (!response.ok) {
      throw new Error('Failed to fetch notes data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
}

// Function untuk menampilkan catatan dari data yang diambil dari API
async function displayNotesFromAPI() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = ''; // Menghapus konten sebelum menampilkan catatan baru
  
  const notesFromAPI = await fetchNotesFromAPI();
  // Menampilkan catatan dari API
  notesFromAPI.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.body}</p>
    `;
    notesList.appendChild(noteElement);
  });
}
(async () => {
  // Mengambil semua catatan
  const notes = await getAllNotes();
  console.log('Catatan saat ini:', notes);

  // Menampilkan catatan dalam elemen HTML
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = ''; // Menghapus konten sebelum menampilkan catatan baru
  notes.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
    `;
    notesList.appendChild(noteElement);
  });
})();
(async () => {
  // Mengambil semua catatan
  const notes = await getAllNotes();
  console.log('Catatan saat ini:', notes);

  // Menampilkan catatan dalam elemen HTML
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = ''; // Menghapus konten sebelum menampilkan catatan baru
  notes.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
    `;
    notesList.appendChild(noteElement);
  });
})();

