const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs() {
    const arr = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]],
    ];
    const line1 = arr[0];
    const line2 = arr[1];
    const line3 = arr[2];
    document.getElementById("array__1").innerHTML = `Пари   :<br>
    [<br>
        [${line1}],<br>
        [${line2}],<br>
        [${line3}],<br>
    }]`;
    return arr;

}


function getThemes() {
    let resultArr = [];
    for (let i = 0; i < getPairs().length; i++) {
        let arr = ([getPairs()[i][0], "i", getPairs()[i][1]]).join("  ");
        resultArr[i] = [arr, themes[i]];
    }
    const line1 = resultArr[0];
    const line2 = resultArr[1];
    const line3 = resultArr[2];
    document.getElementById("array__2").innerHTML = `Теми для пар:<br>
    [<br>
        [${line1}],<br>
        [${line2}],<br>
        [${line3}],<br>
    }]`;
    return resultArr;
}


function getMarks() {
    let setMarks = []
    for (let i = 0; i < students.length; i++) {
        setMarks[i] = [students[i], marks[i]];
    }
    const line1 = setMarks[0];
    const line2 = setMarks[1];
    const line3 = setMarks[2];
    const line4 = setMarks[3];
    const line5 = setMarks[4];
    const line6 = setMarks[5];
    document.getElementById("array__3").innerHTML = `Оцінки:<br>
    [<br>
        [${line1}],<br>
        [${line2}],<br>
        [${line3}],<br>
        [${line4}],<br>
        [${line5}],<br>
        [${line6}],<br>
    }]`;
    return setMarks;
}

function getMarksForPairs() {
    let marksPairs = []
    for (let i = 0; i < getThemes().length; i++) {
        const mark = Math.floor((Math.random() * 5) + 1);
        marksPairs[i] = [getThemes()[i][0], mark]
    }
    console.log(marksPairs);
    const line1 = marksPairs[0];
    const line2 = marksPairs[1];
    const line3 = marksPairs[2];
    document.getElementById("array__4").innerHTML = `Оцінки для пар:<br>
    [<br>
        [${line1}],<br>
        [${line2}],<br>
        [${line3}],<br>
    }]`;
    return marksPairs;
}