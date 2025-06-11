const regions = [
  { name: "Асака", switches: 6 },
  { name: "Кон", switches: 4 },
  { name: "Орзу", switches: 8 },
  { name: "Маргилан", switches: 5 },
  { name: "Кул", switches: 7 },
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
