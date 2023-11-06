function penjumlahan() {
    let inputan1 = prompt("Angka Pertama")
    let inputan2 = prompt("Angka Kedua")
    let hasil = parseInt(inputan1) + parseInt(inputan2)
    alert("Hasilnya adalah " + hasil)
}

function pengurangan() {
     let inputan1 = prompt("Angka Pertama")
    let inputan2 = prompt("Angka Kedua")
    let hasil = parseInt(inputan1) - parseInt(inputan2)
    alert("Hasilnya adalah " + hasil)

}

function perkalian() {
    let inputan1 = prompt("Angka Pertama")
    let inputan2 = prompt("Angka Kedua")
    let hasil = parseInt(inputan1) * parseInt(inputan2)
    alert("Hasilnya adalah " + hasil)
}

function pembagian() {
    let inputan1 = prompt("Angka Pertama")
    let inputan2 = prompt("Angka Kedua")
    let hasil = parseInt(inputan1) / parseInt(inputan2)
    alert("Hasilnya adalah " + hasil)
    
}

const t = document.getElementById("jumlah")
t.addEventListener("click", penjumlahan)

const klik = document.getElementById("kali")
klik.addEventListener("click", perkalian)

const b = document.getElementById("bagi")
b.addEventListener("click", pembagian)

const k = document.getElementById("kurang")
k.addEventListener("click", pengurangan)

