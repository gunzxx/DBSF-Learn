const averageScore = (valuesExam) => {
    const numberValidation = valuesExam.every(exam => typeof exam == "number");
    // if (!numberValidation) throw Error("Masukkan nilai dengan benar.");

    const sumValues = valuesExam.reduce((prev, curr) => prev + curr, 0);
    return sumValues / valuesExam.length;
}

const studentPassed = (valuesExam, nama) => {
    const minValues = 75;
    const average = averageScore(valuesExam);

    if (average > minValues) {
        // console.log(`Selamat, ${nama} lulus.`);
        return true;
    }

    // console.log(`Maaf, ${nama} tidak lulus.`);
    return false;
}

// studentPassed([90,70,83,92,86,100],'Bayu')
module.exports = { averageScore, studentPassed }