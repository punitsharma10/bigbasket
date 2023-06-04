document.getElementById("LogOut").addEventListener("click",LogOut);
function LogOut(){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("UserName");
    location.reload();

}