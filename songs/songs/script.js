var searchbar = document.getElementById("searchbar");

var searchbarM = document.getElementById("searchbarM");

var contentContainer = document.querySelector(".content-container");
var contentContainerHtml = contentContainer.innerHTML;

var currentStateLength = history.length;

contentContainer.addEventListener("click", () => {
  if (document.getElementById("menu-icon").classList.contains("open")) {
    toggleMobileMenu(document.getElementById("menu-icon"));
  }
});

if (location.hash.includes("q=")) {
  searchbar.value = location.hash.slice(3);
}

if (window.location.hash == "") {
  toggleMobileMenu(document.getElementById("sidebar"));
}

window.addEventListener("popstate", function (event) {
  // This function will be called when the user navigates back in history
  // console.log('User navigated back in history');
  event.preventDefault;
  contentContainer.innerHTML = contentContainerHtml;
  searchbar.value = "";
  searchbarM.value = "";
  // console.log(contentContainerHtml);
  if (location.hash == "") {
    searchbarM.value = "";
    searchbar.value = "";
  }
});

function goTo(item) {
  contentContainer.innerHTML = contentContainerHtml;
  document.getElementById(item).scrollIntoView();
  window.location.hash = item;
  toggleMobileMenu(document.getElementById("sidebar"));
}

var r = "";

function register() {
  r = window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdOjRveBPyuYeAdD_xUUSfCMn5__BT8JZ_IWFuc15mDIxQFqw/viewform",
    "",
    `width=${window.screen.width * 0.7},height=${window.screen.height * 0.7}`,
  );

  r.document
    .querySelectorAll(".l4V7wb")
    .addEventListener("click", closeRegisterWindow);

  // r.document.write(`
  // <html>
  // <head>
  //   <style>
  //     .done-btn {
  //       background: #1B065E;
  //       color: white;
  //       border-radius: 50px;
  //       padding: 11px;
  //       transition: 0.5s;
  //       border: none;
  //       cursor: pointer;
  //       font-size: 15pt;
  //     }

  //     .done-btn:hover {
  //       background: #4a20d5;
  //     }
  //   </style>
  //   <title>Register Now - Kavithaalaya</title>
  // </head>
  // <body>
  // <center>
  //   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOjRveBPyuYeAdD_xUUSfCMn5__BT8JZ_IWFuc15mDIxQFqw/viewform?embedded=true" width="640" height="770" frameborder="0" marginheight="0" marginwidth="0">
  //     Loading…
  //   </iframe>
  //   <br>
  //   <button onclick="closeForm();" class="done-btn">Done</button>
  // </center>
  // <script>
  //   function closeForm() {
  //     window.close();
  //   }
  // </script>
  // </body>
  // </html>
  // `);
}

// var currentStateLength = history.length;

// setInterval(function() {
//   if (history.length < currentStateLength) {
//     console.log('User navigated back in history');
//     currentStateLength = history.length;
//   }
// }, 1000); // Check every second for changes in history length

// window.addEventListener('popstate', function() {
//   if (history.length < currentStateLength) {
//     // The back button was pressed
//     // You can add your logic here to handle the back button press
//     console.log('Back button pressed');
//     alert("back button pressed");
//   }
//   currentStateLength = history.length;
// });

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  if (
    menu == document.getElementById("sidebar") &&
    document.getElementById("sidebar").classList.contains("open")
  ) {
    document.querySelector(".sidebar-selector-text").innerHTML =
      `Catalog <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="28px" fill="#4a20d5"><path d="m280-400 200-200.67L680-400H280Z"/></svg>`;
  } else {
    document.querySelector(".sidebar-selector-text").innerHTML =
      `Catalog <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="28px" fill="#4a20d5"><path d="M480-360 280-559.33h400L480-360Z"/></svg>`;
  }
}

function printPDF(fileName) {
  window.open(fileName).print();
}

function goBack() {
  contentContainer.innerHTML = contentContainerHtml;
  searchbar.value = ``;
  searchbarM.value = ``;
}

// Searchbar functionality

const keywords = [
  "bhagyada lakshmi ragam shree ragam shri ragam talam adi talam",
  "devi bhajan amba parameshwari talam eka talam",
  "devi neeye thunai ragam keeravani ragam talam adi talam papanasam shivan",
  "durga lakshmi talam eka talam ekam talam",
  "gajanana talam adi talam",
  "gajavadana ragam shri ranjani ragam paapanaasam shivan talam adi talam",
  "hanuman bhajan jai jai hanuman talam eka talam",
  "mayil meedhu vilayadum talam adi talam ragam vasanthi ragam sathur karpagam",
  "saibhajan mythilipate talam eka talam",
  "naarayana ragam sudda dhanyaasi ragam talam adi talam",
  "nandalala talam eka talam ekam talam",
  "neeraja talam adi talam",
  "note one shyamale talam adi talam",
  "radhe radhe bhajan talam eka talam",
  "rama rama ragam nilambari ragam neelambari ragam talam adi talam",
  "ramanukku mannan mudi",
  "saraswathi namosthuthe saraswathi namostute ragam saraswathi ragam talam adi talam",
  "unai marandhariyen",
  "vel vel",
  "vittal bhajan",
];

const stuff = [
  "bhagyada lakshmi",
  "devi bhajan",
  "devi neeye thunai",
  "durga lakshmi",
  "gajanana",
  "gajavadana",
  "hanuman bhajan",
  "mayil meedhu vilayadum",
  "mythili",
  "naarayana",
  "nandalala",
  "neeraja",
  "note one shyamale",
  "radhe",
  "rama rama",
  "ramanukku mannan mudi",
  "saraswathi namosthuthe",
  "unai marandhariyen",
  "vel vel",
  "vittal bhajan",
];

var newStuff = Array.from(contentContainer.querySelectorAll("*[id]"));
var contentContainerHtml = contentContainer.innerHTML;

function search(event, fromForm) {
  searchbarM.value = searchbar.value

  if (fromForm == true) {
    event.preventDefault();
  }

  document.getElementById("up").scrollIntoView();

  searchbarValue = document.getElementById("searchbar").value;
  searchbar.blur();
  window.location.hash = "#search";

  if (searchbarValue == "") {
    contentContainer.innerHTML = contentContainerHtml;
    return;
  }

  const result = keywords.filter((word) => {
    return word.includes(searchbarValue.toLowerCase()) == true;
  });

  // const result = stuff.filter((word) => {
  //   return word.includes(searchbarValue.toLowerCase()) == true;
  // });

  console.log(result);

  let text = "";
  contentContainer.innerHTML = contentContainerHtml;

  for (let i = 0; i < result.length; i++) {
    var resultI = result[i];
    var indexOfResultIinKeywords = keywords.indexOf(resultI.toLowerCase());
    var idOfResultI = stuff[indexOfResultIinKeywords];
    var elementOfResultI = document.getElementById(idOfResultI);
    var codeOfResultI = elementOfResultI.innerHTML;
    console.log(idOfResultI);
    console.log(stuff[keywords.indexOf(result[i].toLowerCase())]);
    text += codeOfResultI;
    // text += document.getElementById(stuff[keywords.indexOf(result[i].toLowerCase())]).innerHTML;
    // text += document.getElementById(result[i].toLowerCase()).innerHTML;
  }

  if (text == "") {
    text = `<center>There are no results for "${searchbarValue}"</center>`;
  }

  contentContainer.innerHTML =
    `<center title="Go back" id='search-results-banner' onclick='goBack()'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4a20d5"><path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"/></svg>Search Results</center>` + text;
  console.log(text);
  const searchResultsBanner = document.getElementById(
    "search-results-banner",
  ).style;
  searchResultsBanner.width = "100px";
  searchResultsBanner.textAlign = "center";
  searchResultsBanner.width = "100%";
  searchResultsBanner.padding = "10px";
  searchResultsBanner.marginBottom = "5px";
}

// mobile search

function searchM(event, fromForm) {
  searchbar.value = searchbarM.value

  if (fromForm == true) {
    event.preventDefault();
  }

  document.getElementById("up").scrollIntoView();

  if (document.getElementById("sidebar").classList.contains("open")) {
    toggleMobileMenu(document.getElementById("sidebar"));
  }

  searchbarValue = document.getElementById("searchbarM").value;
  searchbarM.blur();
  window.location.hash = "#search";

  if (searchbarValue == "") {
    contentContainer.innerHTML = contentContainerHtml;
    return;
  }

  const result = keywords.filter((word) => {
    return word.includes(searchbarValue.toLowerCase()) == true;
  });

  // const result = stuff.filter((word) => {
  //   return word.includes(searchbarValue.toLowerCase()) == true;
  // });

  console.log(result);

  let text = "";
  contentContainer.innerHTML = contentContainerHtml;

  for (let i = 0; i < result.length; i++) {
    var resultI = result[i];
    var indexOfResultIinKeywords = keywords.indexOf(resultI.toLowerCase());
    var idOfResultI = stuff[indexOfResultIinKeywords];
    var elementOfResultI = document.getElementById(idOfResultI);
    var codeOfResultI = elementOfResultI.innerHTML;
    console.log(idOfResultI);
    console.log(stuff[keywords.indexOf(result[i].toLowerCase())]);
    text += codeOfResultI;
    // text += document.getElementById(stuff[keywords.indexOf(result[i].toLowerCase())]).innerHTML;
    // text += document.getElementById(result[i].toLowerCase()).innerHTML;
  }

  if (text == "") {
    text = `<center>There are no results for "${searchbarValue}"</center>`;
  }

  contentContainer.innerHTML =
    `<center title="Go back" id='search-results-banner' onclick='goBack()'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4a20d5"><path d="m142-480 294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480Z"/></svg>Search Results</center>` + text;
  console.log(text);
  const searchResultsBanner = document.getElementById(
    "search-results-banner",
  ).style;
  searchResultsBanner.width = "100px";
  searchResultsBanner.textAlign = "center";
  searchResultsBanner.width = "100%";
  searchResultsBanner.padding = "10px";
  searchResultsBanner.marginBottom = "5px";
}
