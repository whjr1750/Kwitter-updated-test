function add_user()
{
    Name = document.getElementById("user").value;
    localStorage.setItem("Name" , Name);
    window.location = "kwitter_room.html";
}