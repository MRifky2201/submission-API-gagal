async function getAllNotes() {
  try {
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
    if (!response.ok) {
      throw new Error('Gagal mengambil data catatan');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil catatan:', error.message);
    throw error; // Melempar kembali error untuk ditangani oleh pemanggil fungsi
  }
}
  
  // Fungsi untuk membuat catatan baru
  async function createNote(title, content) {
    try {
      const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) {
        throw new Error('Gagal membuat catatan');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Fungsi untuk menghapus catatan berdasarkan ID
  async function deleteNote(noteId) {
    try {
      const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Gagal menghapus catatan');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Contoh penggunaan fungsi
  (async () => {
    // Mengambil semua catatan
    const notes = await getAllNotes();
    console.log('Catatan saat ini:', notes);
  
    // Membuat catatan baru
    const newNote = await createNote('Judul Catatan Baru', 'Isi catatan baru');
    console.log('Catatan baru:', newNote);
  
    // Menghapus catatan
    const deletedNote = await deleteNote(newNote.id);
    console.log('Catatan yang dihapus:', deletedNote);
  })();
  