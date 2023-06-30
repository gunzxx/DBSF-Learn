const { averageScore, studentPassed } = require('../soal1');

describe("Cek nilai mahasiswa.", () => {
    test("Mengambil nilai rata-rata siswa.", () => {
        const scores = [100, 100, 100];
        expect(averageScore(scores)).toEqual(100);
    });

    test("Mengecek berhasil kelulusan siswa.", () => {
        const scores = [100, 100, 100];
        expect(studentPassed(scores, "John")).toEqual(true);
    });

    test("Mengecek gagal kelulusan siswa.", () => {
        const scores = [10, 10, 10];
        expect(studentPassed(scores, "John")).toEqual(false);
    });
})