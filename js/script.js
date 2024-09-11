// ini javascript

// Validasi Input
function validateInput(value) {
    return value && value > 0;
}

// Menampilkan dan menyembunyikan form
document.getElementById('btnLuasSegitiga').addEventListener('click', function() {
    document.getElementById('formLuasSegitiga').style.display = 'block';
    document.getElementById('formKelilingSegitiga').style.display = 'none';
});

document.getElementById('btnKelilingSegitiga').addEventListener('click', function() {
    document.getElementById('formLuasSegitiga').style.display = 'none';
    document.getElementById('formKelilingSegitiga').style.display = 'block';
});

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


// Hitung Keliling Segitiga
document.getElementById('hitungKelilingBtn').addEventListener('click', function() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    // Validasi input
    if (!validateInput(sisi1) || !validateInput(sisi2) || !validateInput(sisi3)) {
        alert("Harap masukkan ketiga sisi yang valid (lebih besar dari 0).");
        return;
    }

    // Perhitungan keliling
    const keliling = sisi1 + sisi2 + sisi3;

    // Menampilkan hasil
    document.getElementById('hasilKeliling').textContent = `Keliling Segitiga: ${keliling} cm`;
});
