(function () {
  function fetch(fn) {
    var request = new XMLHttpRequest();

    request.open("POST", "http://mentionizer.herokuapp.com/users", true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

    var encoded = encodeURIComponent(document.documentElement.outerHTML);
    encoded = encoded.replace('%20','+').replace('%3D','=');

    request.send("html=" + encoded);

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        var response = JSON.parse(request.responseText)[0];

        fn(response ? response.username : null);
      }
    }
  }

  fetch(function (username) {
    if (username) {
      var el = document.createElement("div");
      var style = [
                    "position: fixed;",
                    "top: 50%;",
                    "left: 50%;",
                    "width: 400px;",
                    "height: 150px;",
                    "margin-top: -75px;",
                    "margin-left: -200px;",
                    "text-align: center;",
                    "z-index: 9999;",
                    "background-color: white;",
                    "border-radius: 5px;",
                    "line-height: 150px;",
                    "font-size: 20px;",
                    "font-family: Helvetica Neue, Arial, sans-serif;"
                  ].join("");

      el.setAttribute("style", style);
      el.textContent = username;

      document.body.appendChild(el);
    }
  });
})();
