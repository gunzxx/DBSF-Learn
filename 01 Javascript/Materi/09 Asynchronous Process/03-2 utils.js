const getProvinces = (callback) => {
    setTimeout(() => {
        const provinces = ['Jawa Timur', 'Jawa Tengah', 'Jawa Barat']
        callback(null, provinces)
    }, 3000)
}

module.exports = { getProvinces };
// export { getProvinces };