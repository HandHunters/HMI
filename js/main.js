const regions = [
  { name: "Регион 1", switches: 6 },
  { name: "Регион 2", switches: 4 },
  { name: "Регион 3", switches: 8 },
  { name: "Регион 4", switches: 5 },
  { name: "Регион 5", switches: 7 },
];

function showRegion(index) {
  const container = document.getElementById("regions");
  container.innerHTML = "";
  const region = regions[index];
  const title = document.createElement("h2");
  title.textContent = region.name;
  container.appendChild(title);

  for (let i = 0; i < region.switches; i++) {
    const block = document.createElement("div");
    block.innerHTML = `
      <h3>Разъединитель ${i + 1}</h3>
      <button onclick="toggle(this)" class="inactive">Отключить</button>
    `;
    container.appendChild(block);
  }
}

function toggle(btn) {
  if (btn.classList.contains("inactive")) {
    btn.classList.remove("inactive");
    btn.classList.add("active");
    btn.textContent = "Включить";
  } else {
    btn.classList.remove("active");
    btn.classList.add("inactive");
    btn.textContent = "Отключить";
  }
}

window.onload = () => showRegion(0);
