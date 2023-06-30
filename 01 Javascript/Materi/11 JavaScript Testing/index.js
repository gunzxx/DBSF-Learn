// import test from "jest";
import "jest";

test("Dua tambah dua adalah 4", () => {
    expect(2 + 2).toBe(4);
});

describe("Pengujian soal 1", () => {
    test("1 kali 2 = 2", () => {
        expect(1 * 2).toBe(2);
    })

    test("2 kali 3 = 6", () => {
        expect(2 * 3).toBe(6);
    })
})