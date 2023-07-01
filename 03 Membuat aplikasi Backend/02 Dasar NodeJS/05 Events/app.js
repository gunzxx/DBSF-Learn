const {EventEmitter} = require("events")

const myEventEmitter = new EventEmitter();

const buatKopi = (nama)=>{
    console.log(`Kopi ${nama} telah dibuat.`);
}

const bayarKopi = (harga)=>{
    console.log(`Harga kopi sebesar Rp.${harga}.`);
}

const kopiDipesanListener = ({nama, harga})=>{
    buatKopi(nama);
    bayarKopi(harga);
}

myEventEmitter.on('pesan-kopi',kopiDipesanListener);

myEventEmitter.emit('pesan-kopi',{
    nama : "Robusta",
    harga : "10.000"
})