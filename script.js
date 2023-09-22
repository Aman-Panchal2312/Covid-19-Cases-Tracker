function fetchdata() {
  var code = document.getElementById("code").value;
  // console.log("aman")
  // document.getElementById("case").value=
  fetch('https://api.covid19api.com/summary')
  .then((data) => {return data.json();})
  .then((rdata) => {
    console.log(rdata);
    if (code == "") {
      document.getElementById("error").innerHTML = "oops! you not enter code"
      // console.log(rdata);
    } else {
      document.getElementById("error").innerHTML = ""

      document.getElementById("code").value = (rdata.Countries[code].Country)
      document.getElementById("case").value = (`TOTAL (${rdata.Countries[code].TotalConfirmed})`)
      document.getElementById("newcase").value = (`NEW (${rdata.Countries[code].NewConfirmed})`)
      document.getElementById("recover").value = (`RECOVER (${rdata.Countries[code].NewRecovered})`)
      document.getElementById("deadth").value = (`DEADTHS (${rdata.Countries[code].TotalDeaths})`)
    }



    // document.getElementById("error").innerHTML="OOPS! CODE IS EMPTY"


    // let cases=document.getElementById("case").value;
    // let recover=document.getElementById("recover").value;
    // let deadth=document.getElementById("deadth").value;


  }).catch((error) => {
    console.log(error)
  })
 
}