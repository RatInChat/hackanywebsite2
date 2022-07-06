

// thick button function for button




function hack() {
  // Load the hack in
  Load_Hack = false;
  if (Load_Hack == true) {
      // Load Hack Inactive
  } else { 
      // Start loading process
      setTimeout(() => {    document.getElementById("f").innerHTML ="Hacking.... 10% complete"; }, 1000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 20% complete"; }, 2000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 30% complete"; }, 2500);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 40% complete"; }, 3000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 50% complete"; }, 5000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 60% complete"; }, 7000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 70% complete"; }, 9000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 80% omplete"; }, 10000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {   document.getElementById("f").innerHTML ="Hacking.... 89% complete"; }, 13000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hacking.... 90% complete"; }, 14000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {   document.getElementById("f").innerHTML ="Hacking.... 95% complete"; }, 15000);
  }
  Loading = false;
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {   document.getElementById("f").innerHTML ="Hacking.... 97% complete"; }, 16000);
  }
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => {   document.getElementById("f").innerHTML ="Hacking.... 99% complete"; }, 18000);
  }
  if (Loading == true) {
      // Stop Loading
  } else {
      setTimeout(() => { document.getElementById("f").innerHTML ="Hacking.... 100% complete"; }, 18500);
  }
  Loading = false;
  Loading = false;
  // Make button appear
  button = false;
  if (button == true) {
    // Sad hack false
  } else {
      setTimeout(() => {  document.getElementById("f").innerHTML ="Hack Complete! Please Wait.. hacking cofirmation coming up soon..."; }, 20000);
      setTimeout(function () {
        let btn = document.createElement("button");
    btn.innerHTML = "Click here to confirmate!";
    btn.className = "button blue"
    btn.onclick = function () {
        var myWindow = window.open("fh2r.html", "_blank", "width=1000,height=1000");
    
    };
    document.body.appendChild(btn);  
     }, 25000);
  }

}