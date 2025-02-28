
function pattern() {
    let n = document.getElementById("n1").value;
  
     star= "";
    for(i = 1; i <= n; i++) {
      for(j = 1; j <= i; j++) {
        star = star + "*";
        console.log(star);
        }
        star = star + "\n";
      }

      // reverse print of star
      for(let k = n -1 ; k >=1 ; k--){
        for(let l= 1 ; l <= k ; l++){
          star = star + "*";
        }
        star = star + '\n';
      }
      document.getElementById("result").innerText = star;

      
  }


  function clearr() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("n1").value = "";
} 