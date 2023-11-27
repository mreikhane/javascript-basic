let jumlahsaldoawal = prompt('masukan jumlah saldo awal kamu')
let jumlahsaldotambahan = prompt('masukan jumlah saldo tambahan anda')
let awal = parseInt(jumlahsaldoawal)
let tambahan = parseInt(jumlahsaldotambahan)
const jumlahsaldototal = awal + tambahan
alert (`jumlah saldo total anda adalah Rp.${jumlahsaldototal}`)