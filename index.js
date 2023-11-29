function print(){ console.log("Congatz, programmers gets a free beer at the bar, mortals will have to pay!") }

var video = document.querySelector('.video');
video.addEventListener("ended", print);

////////////Table booking/////////
function UserBooking(name, lastname){
    this.name = name;
    this.lastname = lastname;
}
function submitBooking(){
    userName = document.getElementById("name").value
    userLastname = document.getElementById("lastname").value
    var user1 = new CreateUser(userName, userLastname)
    console.log(user1)
    var greeting = "Hi " + user1.name + " " + user1.lastname + ", Welcome to our website!"
    document.getElementById("displayTitle").textContent = greeting
}
/////////// Create user/////////
function submitForm(){
    userName = document.getElementById("name").value
    userLastname = document.getElementById("lastname").value
    var user1 = new CreateUser(userName, userLastname)
    console.log(user1)
    var greeting = "Hi " + user1.name + " " + user1.lastname + ", Welcome to our website!"
    document.getElementById("displayTitle").textContent = greeting
}

var user2 = {
    name:""
}