const studentGrades = [
    {
        grade: "V",
        students: [
            { name: "Nrupul", marks: [10, 20, 30] },
            { name: "Prateek", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VI",
        students: [
            { name: "Aman", marks: [10, 20, 30] },
            { name: "Albert", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VII",
        students: [
            { name: "Yogesh", marks: [10, 20, 30] },
            { name: "Sandhya", marks: [20, 30, 40] }
        ]
    }
];

// Iterate over each grade
for (const gradeData of studentGrades) {
    const { grade, students } = gradeData;

    // Find the highest scored student for the grade
    let highestScoredStudent = null;
    let highestTotalMarks = 0;

    for (const student of students) {
        const totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);

        if (totalMarks > highestTotalMarks) {
            highestTotalMarks = totalMarks;
            highestScoredStudent = student;
        }
    }

    
    console.log(grade+"-"+highestScoredStudent.name+"-"+highestTotalMarks)
}

// let h=studentGrades[2].students[0].marks
// console.log(h)