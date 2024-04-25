let ham = document.getElementById("ham");

function Open() {
  hamBtn.classList.add("hidden");
  ham.classList.add("duration-500");
  ham.classList.remove("hidden");
  closeBtn.classList.remove("hidden");
}

function Close() {
  hamBtn.classList.remove("hidden");
  ham.classList.add("hidden");
  closeBtn.classList.add("hidden");
}
