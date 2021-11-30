interface Strak {
    name: string;
    id?: number;
    readonly age: number;
}

interface Student {
    sname: string;
    rollno: number;
    subject: string[];
    marks: Array<Type>;
    class: any;
    division: unknown;
    fees: (string | number); // union type
    caste?: string
}

var getStudent = function (student: Student): Student {

    console.log(student.fees);
    var subjects = student.subject;
    subjects.push("Typescript");
    console.log(`Subjetcs: ${subjects}`);
    var marks = student.marks;
    // this is callback function
    marks.forEach(function a(element) {
        console.log(element);
    });
    // this is arrow function
    marks.forEach(element => {
        var m = element.mark;
        var s = element.subject;
        console.log(`Subject and marks are ${s} : ${m}`);
    });
    return student;
}

getStudent({
    sname: "Shubhangi",
    rollno: 57,
    subject: ["C", "C#", "Javascript"],
    marks: [{ subject: "C#", mark: 50 }, { subject: "Javascipt", mark: 49 }],
    class: "MCA 1st Year",
    division: "A",
    fees: 40000
});

interface Type {
    subject: string;
    mark: number;
}

function printName(strak: Strak): Strak {
    console.log(strak.name);
    // strak.age = 32; // This is a read-only property
    console.log(strak.age);
    return strak;
}

printName({ name: "shubh", id: 1, age: 30 });

printName({ name: "Yogesh", age: 35 });

