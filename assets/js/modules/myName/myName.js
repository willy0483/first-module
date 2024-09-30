export default function myName() {
  const headerContainer = document.getElementById("header");
  const h1 = document.createElement("h1");

  h1.innerHTML = "William";
  headerContainer.appendChild(h1);
}
