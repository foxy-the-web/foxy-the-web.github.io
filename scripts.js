// get dom elements
const disclaimer = document.getElementById("disclaimer");
const mainArea = document.getElementById("mainArea");

// get html files
const loadDoc = (file) => {

  const xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = () => {

    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }

  };

  xhttp.open("GET", file);
  xhttp.send();
};

disclaimer.onclick = () => {
  loadDoc('impressum.html');
}

