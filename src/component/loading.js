// loading.js

const loadingIndicator = document.getElementById('loading');

// Fungsi untuk menampilkan loading indicator
function showLoading() {
  loadingIndicator.classList.add('active');
}

// Fungsi untuk menyembunyikan loading indicator
function hideLoading() {
  loadingIndicator.classList.remove('active');
}

export { showLoading };
export { hideLoading };
