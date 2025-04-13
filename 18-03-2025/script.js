const sch_obj ={
    name : "DPS",
    establish : "1949",
    classes : [
        {class : "1st",
            subjects : ["English","Maths","Hindi"],
            sections :[{
                section : "A",
                students : 
                [
                    {name : "Aman",
                            father_name : "Raj",
                            mother_name : "Rani",
                            DOB : "11-12-2001",
                            marks :
                            {
                                English : 80,
                                Maths : 90,
                                Hindi : 70
                            }
                    },
                    {name : "Amit",
                    father_name : "Ram",
                    mother_name : "Sita",
                    DOB : "11-12-2002",
                    marks :
                    {
                        English : 70,
                        Maths : 60,
                        Hindi : 70
                    }
                   
                    },
                    {name : "Ankit",
                    father_name : "Vinod",
                    mother_name : "Kiran",
                    DOB : "11-12-2003",
                    marks :
                    {
                        English : 90,
                        Maths : 50,
                        Hindi : 60
                    }
                 
                    }
                ]
            }]
        }
    ]
}

// console.log(sch_obj.classes[0].sections[0].students[1].marks.English)


var students = sch_obj.classes[0].sections[0].students;

// Using a regular for loop to calculate total marks
for (var i = 0; i < students.length; i++) {
    var student = students[i]; 
    var totalMarks = student.marks.English + student.marks.Maths + student.marks.Hindi;
    console.log(student.name + ": " + totalMarks);
}




// let classes = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"]
// for(let i = 0; i < classes.length; i++){
//     let section = []:
    
// }