const classA = [
    {
        name: "Ruanzito",
        grade: 9.6
    },
    {
        name: "Ítalo funkeiro",
        grade: 7.4
    },
    {
        name: "Marco Véio",
        grade: 3
    }
]

const classB = [
    {
        name: "Jurema",
        grade: 1.6
    },
    {
        name: "Jacinto",
        grade: 4.4
    },
    {
        name: "Pafúncio",
        grade: 7
    }
]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }
    const average = sum / students.length
    return average
}

const avarage1 = calculateAverage(classA)
const avarage2 = calculateAverage(classB)

function sendMenssage(average, classroom) {
    if (average > 6) {
        console.log(`The ${classroom} avarage is ${average.toFixed(2)}, congrats`)
    } else {
        console.log(`The ${classroom} avarage is bellow 6.`)
    }
}

sendMenssage(avarage1, "class A");
sendMenssage(avarage2, "class B");

function MarkAsFlunked(student) {
    student.flunked = false;
    
    if (student.grade < 6) {
        student.flunked = true;

    }
}

function sendMenssageFlunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsflunked(students) {
    for (let student of students){
        MarkAsFlunked(student);
        sendMenssageFlunked(student);
    }
}

studentsflunked(classA)
studentsflunked(classB)