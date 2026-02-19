function showPage(id, el){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

function openModal(src){
  document.getElementById("modalImg").src = src;
  document.getElementById("imgModal").style.display = "flex";
}

function closeModal(){
  document.getElementById("imgModal").style.display = "none";
}
