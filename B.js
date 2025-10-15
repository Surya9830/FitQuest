function savename(){
    const Name=document.getElementById("username").value;
    localStorage.setItem("name",Name);

    window.location.href="home.html";}
