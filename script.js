document.addEventListener("DOMContentLoaded", () => {

    // Efek klik pada semua tombol
    const buttons = document.querySelectorAll(".link-button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Efek kecil ketika tombol ditekan
            button.style.transform = "scale(0.97)";

            setTimeout(() => {
                button.style.transform = "";
            }, 150);

        });

    });


    // Animasi tambahan saat halaman dibuka
    document.body.classList.add("loaded");

});
