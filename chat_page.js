var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "<u>Welcome " + username + "!</u>";

function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

function addroom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_room.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapShot) {
            childKey = childSnapShot.key;
            Room_names = childKey;
            //Start code
            console.log(Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick = 'redricToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
} getData();

function redricToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location - "chat_room.html";
}