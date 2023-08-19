export class Tooltip extends HTMLElement {
  constructor() {
    super();
  }
  // connectedCallback() {
  //   this.innerHTML = `<div id='tooltip'>Наведи на меня</div>`;
  //   this.addEventListener("mousemove", function () {
  //     this.innerHTML = `<div id='tooltip'>Наведи на меня
  //   <span class="tooltiptext">Tooltip</span>
  // </div>`;
  //   });
  //   this.addEventListener("mouseout", function () {
  //     this.innerHTML = `<div id='tooltip'>Наведи на меня
  // </div>`;
  //   });
  // }

  connectedCallback() {
    this.innerHTML = `<div id='tooltip'>Наведи на меня</div>`;

    document.addEventListener("mousemove", function (event) {
      if (event.target.id == "tooltip") {
        let idElement = document.getElementById("tooltip");
        idElement.innerHTML = `<div id='tooltip'>Наведи на меня
    <span class="tooltiptext">Tooltip</span> 
  </div>`;
      } else {
        let idElement = document.getElementById("tooltip");

        idElement.innerHTML = `<div id='tooltip'>Наведи на меня 
    </div>`;
      }
    });
  }
}
