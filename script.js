function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  if (menu == document.getElementById("sidebar")) {
    document.querySelector("sidebar-selector-text").innerText = "Songs ⯅";
  }
}

document.getElementById("content-container").addEventListener("click", () => {
  if (document.getElementById("menu-icon").classList.contains("open")) {
    toggleMobileMenu(document.getElementById("menu-icon"));
  }
});

document.getElementById("header-img-container").addEventListener("click", () => {
  if (document.getElementById("menu-icon").classList.contains("open")) {
    toggleMobileMenu(document.getElementById("menu-icon"));
  }
});

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

function getBinder() {
  let binderItems = JSON.parse(localStorage.getItem("binder"));
  return binderItems;
}
