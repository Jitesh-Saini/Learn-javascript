function calculateTotal() {
  
    let hindi = Number(document.getElementById("hindi").value) || 0;
    let english = Number(document.getElementById("english").value) || 0;
    let math = Number(document.getElementById("math").value) || 0;
    let socialScience = Number(document.getElementById("socialScience").value) || 0;
    let computer = Number(document.getElementById("computer").value) || 0;

    let totalMarks = hindi + english + math + socialScience + computer;

    document.getElementById("total").innerText = totalMarks;
    


}