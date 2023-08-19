export class SearchMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` <div class="container">
        <input type="search" placeholder="Search.." id="search">
        <div id="par"></div>
    </div>`;

    let input = document.getElementById("search");
    let arrHints = ["дом", "телевизор", "кот", "семья"].sort();

    let par = document.getElementById("par");
    function checkWord(str) {
      return /^[а-яё]+$/.test(str);
    }

    input.addEventListener("input", function () {
      let searchVal = document.getElementById("search").value;
      par.textContent = "";
      if (checkWord(searchVal)) {
        par.style.display = "block";
        arrHints.forEach(function (word) {
          let element = document.createElement("p");
          element.textContent = word;
          par.appendChild(element);
        });
      } else {
        par.style.display = "block";
        par.textContent = "Введите буквы";
        if (searchVal == "") {
          par.textContent = "";
        }
      }
      if (searchVal == "") {
        par.textContent = "";
      }
    });
  }
}
