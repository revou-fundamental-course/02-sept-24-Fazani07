// ini javascript

// Validasi Input
function validateInput(value) {
    return value && value > 0;
}

// Hitung Luas Segitiga
document.getElementById('hitungLuasBtn').addEventListener('click', function() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    // Validasi input
    if (!validateInput(alas) || !validateInput(tinggi)) {
        alert("Harap masukkan nilai alas dan tinggi yang valid (lebih besar dari 0).");
        return;
    }

    // Perhitungan luas
    const luas = (alas * tinggi) / 2;

    // Menampilkan hasil
    document.getElementById('hasilLuas').textContent = `Luas Segitiga: ${luas} cm²`;
});