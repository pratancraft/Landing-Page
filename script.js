// ================= MOBILE MENU =================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});

// ================= NAVBAR SHADOW =================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 8px 25px rgba(20,30,50,.06)'
    : 'none';
});

// ================= WHATSAPP =================
// GANTI nomor di bawah dengan nomor WhatsApp klien.
const nomorWhatsApp = '6281234567890';
const pesan = 'Halo, saya tertarik dengan layanan NAMA BISNIS. Saya ingin konsultasi.';
const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.href = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
whatsappButton.target = '_blank';
whatsappButton.rel = 'noopener noreferrer';

// ================= YEAR =================
document.getElementById('year').textContent = new Date().getFullYear();
