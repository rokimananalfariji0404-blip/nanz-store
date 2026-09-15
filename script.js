// Menambahkan pesan sambutan di konsol browser (Opsional / Penanda file berfungsi)
console.log("Website Nanz Store berhasil dimuat dengan animasi gerak!");

// Contoh interaksi tambahan: Memberikan efek klik interaktif pada tombol
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".link-button");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Pengunjung mengarahkan tautan ke: " + btn.textContent.trim());
        });
    });
});