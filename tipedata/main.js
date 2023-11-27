let nama = 'reikhan'  //tipe string
let usia = 21         //tipe int atau number jika int atau number tidak usah menggunakan ''
let tinggiBaadan = 178.5 //tipe double atau float 
let beratBadan      //tipe belum ada value
let pacar =    // jika null di ganti satu maka akan berubah menjadi sudah punya

beratBadan = 50

if (pacar == null){
    pacar = 'belum punya'
} else {
    pacar = 'sudah punya'
}

//selain if bisa menggunakan switch

// switch(pacar){
//     case 1 :
//         pacar : 'punya pacar hanya 1'
//         break
//     case 2 :
//         pacar : 'aku punya 2'
//         break
//     default :
//         pacar : ' belum punya'
//         break
    
// }

let saldoAwal = 50000
let saldoTambahan = 100000
let saldoAkhir = saldoAwal + saldoTambahan


// alert('nama anda adalah '+ nama + (' usia anda adalah ' + usia))

// lebih simple mengunakan
alert(
    `nama saya adalah ${nama} usia saya adalah ${usia} tinggi badan saya ${tinggiBaadan} berat badan saya adalah ${beratBadan} dan pacar saya adalah ${pacar}`
)

alert(
    `saldo awal saya adalah Rp.${saldoAwal} dan saldo bertambah sebanyak Rp.${saldoTambahan} jadi saldo akhir saya adalah Rp.${saldoAkhir}`
)