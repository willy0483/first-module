import getName from "../getName/getName.js";

export default function buildNav() {
  const header = document.getElementById("header");
  const nav = document.createElement("nav");
  const input = document.createElement("input");
  input.id = "myinput";
  const button = document.createElement("button");
  button.id = "mybutton";

  const yourName = document.createElement("h1");
  yourName.id = "yourname";

  button.textContent = "button";

  header.appendChild(nav);
  nav.appendChild(input);
  nav.appendChild(button);
  nav.appendChild(yourName);

  button.addEventListener("click", (e) => {
    getName(input.value);
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      getName(input.value);
    }
  });
}
