var searchbar = document.getElementById("searchbar");

var searchbarM = document.getElementById("searchbarM");

var contentContainer = document.querySelector(".content-container");
var contentContainerHtml = contentContainer.innerHTML;

var currentStateLength = history.length;

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

// Searchbar functionality

const keywords = [
  "shankarabharanam varnam 1 varnam 1 talam adi talam sami ninne kori sāmi ninnē kōri ragam shankarabharanam ragam",
  "mohanam varnam 2 varnam 2 talam adi talam ninnu kōri ninnu kori ragam mohanam ragam",
];

const stuff = ["shankarabharanam", "mohanam"];

var newStuff = Array.from(contentContainer.querySelectorAll("*[id]"));
var contentContainerHtml = contentContainer.innerHTML;

function search(event, fromForm) {
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
    "<center id='search-results-banner'>Search Results</center>" + text;
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
  if (fromForm == true) {
    event.preventDefault();
  }

  document.getElementById("up").scrollIntoView();

  if (document.getElementById("sidebar").classList.contains("open")) {
    toggleMobileMenu(document.getElementById("sidebar"));
  }

  searchbarValue = document.getElementById("searchbarM").value;
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
    "<center id='search-results-banner'>Search Results</center>" + text;
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
