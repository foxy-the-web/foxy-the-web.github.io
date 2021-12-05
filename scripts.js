// define base component path
const base = './HTMLcomponents/';

// define relevant page elements
const elements = [
  'home',
  'profile',
  'service',
  'contact',
  'disclaimer',
  'privacyPolicy'
];

// empty nodes object
let html = {};

// load html document
const loadHtml = async (file) => {
  const res = await fetch(file);
  
  if (res.ok) {
    const htmlValue = await res.text();
    return Promise.resolve(htmlValue);
  } 
  else {
    return Promise.reject('*** HTML file not found');
  } 
}

const intialize = async () => {

  // get all html files and its content
  for (element of elements) {
    html[element] = await loadHtml(`${base}${element}.html`);  
  }

  // find main
  const mainArea = document.getElementById("mainArea");
  let combinedNodes = '';

  // create main content
  for ( i = 0; i < 4; i++ ) {
    
    // get all relevant nodes for all
    let key = elements[i];
    combinedNodes = combinedNodes + html[key];
  }

  mainArea.innerHTML = combinedNodes;
  
}

// inner html 
const createHTML = async (file) => {

  loadHtml(file)
    .then( html => {
      console.log(`Loaded: ${file}`)
      mainArea.innerHTML = html 
    })
    .catch(console.error);
}

/*

const disclaimer = document.getElementById("disclaimer");
const privacyPolicy = document.getElementById("privacyPolicy");
const logo = document.getElementById("logo");

disclaimer.addEventListener('click', () => createHTML('impressum.html'), { once: true });
privacyPolicy.addEventListener('click', () => createHTML('datenschutz.html'), { once: true });
logo.addEventListener('click', (e) => console.log(e));
*/

intialize();