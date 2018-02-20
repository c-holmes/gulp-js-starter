const load = () => {
  console.log("load event detected!");
  const txt = "Hello World!";
  const root = document.getElementById('root');

  root.innerHTML += txt;
}
window.onload = load;
