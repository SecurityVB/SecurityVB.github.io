colors = [
    ["#101820", "#FEE715", "#c4b211", "#fee71554"],
    ["#2B5288", "#E5E0D9", "#b9b5afff", "#e5e0d965"],
    ["#004643", "#E5E0D9", "#c0bcb5ff", "#e5e0d960"],
]

function* colorNext() {
  let i = 0;
  while (true) {
    yield i;
    i = (i + 1) % colors.length;
  }
}

const gen = colorNext();

button = document.getElementById("10");

button.addEventListener("click", () => {
    const idx = gen.next().value;
    const clrs = colors[idx];

    document.documentElement.style.setProperty('--back-color', clrs[0]);
    document.documentElement.style.setProperty('--titels-color', clrs[1]);
    document.documentElement.style.setProperty('--titels-hover-color', clrs[2]);
    document.documentElement.style.setProperty('--shadow-color', clrs[3]);
});