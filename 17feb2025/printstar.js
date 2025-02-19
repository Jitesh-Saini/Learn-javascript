function pattern(){
    var n = document.getElementById("n1").value;
    let output="";
    var i,j;
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            output = output + "* ";
        }
        output = output + "<br>";

 
    }
    document.getElementById("result").innerHTML = output;

}
function clearr(){
    return(
        document.getElementById("n1").value = "",
        document.getElementById("result").innerHTML = ""
    );

}


