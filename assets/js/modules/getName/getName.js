export function getName() {
  const name = document.getElementById("yourname");
  const button = document.getElementById("mybutton");
  const input = document.getElementById("myinput");

  button.addEventListener("click", (e) => {
    const value = input.value;
    name.innerHTML = value;
  });
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const value = input.value;
      name.innerHTML = value;
    }
  });
}
