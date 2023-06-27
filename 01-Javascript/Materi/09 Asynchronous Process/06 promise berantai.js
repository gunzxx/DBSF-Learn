// Promise berantai / Chaining Promise
function ambilUangDiBank(jumlah) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (jumlah > 100) {
                return reject(new Error("Saldo tidak cukup."));
            }
            resolve(jumlah);
        }, 1000);
    });
}

function beliTiket(uang) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (uang < 25) {
                return reject(new Error("Uang tidak cukup untuk membeli tiket."));
            }
            const tiket = Math.floor(uang / 25);
            resolve({ tiket: tiket, pesan: `Sisa uang anda : ${uang - (tiket * 25)}` });
        }, 1000);
    });
}

function masukBioskop(tiket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!tiket) {
                return reject(new Error("Tidak ada tiket."));
            }
            resolve("Selamat menonton film.");
        }, 1000);
    });
}

function nontonBioskop(uang) {
    ambilUangDiBank(uang)
        .then((uang) => {
            console.log(`Anda berhasil mengambil uang. Uang anda : ${uang}`);
            return beliTiket(uang);
        })
        .then(({ tiket, pesan }) => {
            console.log(`Anda berhasil membeli tiket. Tiket anda : ${tiket}`);
            console.log(pesan);
            return masukBioskop(tiket);
        })
        .then((hasil) => console.log(hasil))
        .catch((err) => console.log(err.message));
}

// const args = process.argv.slice(2);
// console.log("Argumen yang diterima:", args);

nontonBioskop(99)