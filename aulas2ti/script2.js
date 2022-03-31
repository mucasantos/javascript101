const text = document.getElementById("nome");
const email = document.getElementById("email");
const fone = document.getElementById("telefone");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
  const element = document.createElement("div");
 // const textNode = document.createTextNode(text.value);
 // element.appendChild(textNode);
  document.getElementById("linhas").appendChild(element);

  element.innerHTML = `<div class="card" >
  <img
    src="https://www.w3schools.com/howto/img_avatar2.png"
    alt="Avatar"
    style="width: 50%"
  />
  <div class="container" >
    <h4><b>${nome.value}</b></h4>
    <h4><b>${telefone.value}</b></h4>
    <h4><b>${email.value}</b></h4>
    <p>Interior Designer</p>
  </div>
</div>`;
});