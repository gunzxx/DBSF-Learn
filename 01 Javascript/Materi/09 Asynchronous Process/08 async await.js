// Promise berantai / Chaining Promise
function ambilUangDiBank(jumlah) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!jumlah) {
                return reject(new Error("Masukkan jumlah!"));
            }
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

function nontonBioskopOld(uang) {
    ambilUangDiBank(uang)
        .then((uang) => beliTiket(uang))
        .then(({ tiket, pesan }) => masukBioskop(tiket))
        .then((hasil) => console.log(hasil))
        .catch((err) => console.log(err.message));
}

async function nontonBioskopAsync(inputUang) {
    if(!inputUang){
        throw new Error("Masukkan jumlah!");
    }
    try {
        const uang = await ambilUangDiBank(inputUang);
        const { tiket } = await beliTiket(uang);
        const hasil = await masukBioskop(tiket);

        return hasil;
    } catch (err) {
        throw err;
    }
}


nontonBioskopAsync(30)
    .then((hasil) => console.log(hasil))
    .catch((err) => console.log(err.message));