// define base component path
const base = './HTMLcomponents/';

// define relevant page elements
const elements = [
  'home',
  'philosophy',
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

// switch view between header and footer navigation
const switchView = async () => {

   // get navigation elements
  const navi = {
    main: document.getElementById("mainNavi"),
    footer: document.getElementById("footerNavi")
  }

  // add event listners
  navi.main.addEventListener('click', () => {
    additionalArea.classList.add('hide');
    mainArea.classList.remove('hide');
  });

  navi.footer.addEventListener('click', () => {
    mainArea.classList.add('hide');
    additionalArea.classList.remove('hide');
  });

}

// create structure
const intialize = async () => {

  // get all html files and its content
  for (element of elements) {
    html[element] = await loadHtml(`${base}${element}.html`);  
  }

  // find main
  const mainArea = document.getElementById("mainArea");
  const additionalArea = document.getElementById("additionalArea");

  let mainNodes = '';
  let additionalNodes = '';

  // create main content
  for ( element of elements ) {

    // cases for main and additional
    if ( !(element == 'disclaimer' || element == 'privacyPolicy' ) ) {
      mainNodes = mainNodes + html[element];
    }
    else {
      additionalNodes = additionalNodes + html[element]
    }

  }

  mainArea.innerHTML = mainNodes;
  additionalArea.innerHTML = additionalNodes;

  switchView();
  
}

intialize();