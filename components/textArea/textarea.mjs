export class TextArea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<textarea id="text" cols="30" rows="1" placeholder="Введи несколько строк текста.."></textarea>`;

    let text = document.getElementById("text");
    text.addEventListener("keydown", function autoHeight() {
      text.style.height = "8px";
      text.style.height = text.scrollHeight + "px";
    });
  }
}
