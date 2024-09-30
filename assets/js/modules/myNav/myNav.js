export function buildNav() {
  const header = document.getElementById("header");
  const nav = document.createElement("nav");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const yourName = document.createElement("h1");

  button.textContent = "button";

  header.appendChild(nav);
  nav.appendChild(input);
  nav.appendChild(button);
  nav.appendChild(yourName);
  getName(button, input, yourName);
}

function getName(button, input, yourName) {
  button.addEventListener("click", (e) => {
    const value = input.value;
    yourName.innerHTML = value;
  });
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const value = input.value;
      yourName.innerHTML = value;
    }
  });
}
