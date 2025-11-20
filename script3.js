const btn = document.getElementById("cartBtn");
const toast = document.getElementById("toast");

btn.onclick = () => {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
};
