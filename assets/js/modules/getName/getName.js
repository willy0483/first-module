export default function getName(value) {
  const name = document.getElementById("yourname");
  const button = document.getElementById("mybutton");
  const input = document.getElementById("myinput");

  name.innerHTML = value;
  console.log(value);
}
