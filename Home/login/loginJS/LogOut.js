document.getElementById("LogOut").addEventListener("click",LogOut);
function LogOut(){
    localStorage.setItem("loggedIn",false);
    localStorage.removeItem("UserName");
    location.reload();

}