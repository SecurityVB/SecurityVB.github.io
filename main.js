colors = [
    ["#7B3B4B", "#D6A53C", "#aa832fff", "#d6a53c52", "#00000040", "#00000096"],
    ["#2B5288", "#E5E0D9", "#b9b5afff", "#e5e0d965", "#00000040", "#ffffff96"],
    ["#004643", "#E5E0D9", "#c0bcb5ff", "#e5e0d960", "#ffffff40", "#ffffff96"],
    ["#233d4d", "#fe7f2d", "#d46b24ff", "#fe812d5e", "#00000040", "#00000096"],
    ["#101820", "#FEE715", "#c4b211", "#fee71554", "#ffffff40", "#ffffff96"],
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
    document.documentElement.style.setProperty('--shadow-container-color', clrs[4]);
    document.documentElement.style.setProperty('--shadow-text-color', clrs[5]);
});