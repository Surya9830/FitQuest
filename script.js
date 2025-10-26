const Name = localStorage.getItem("name");
document.getElementById("ug").textContent = "Welcome, " + Name;



function nextpage(){
window.location.href = "chal.html";
}