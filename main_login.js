function addUserName(){
        userName = document.getElementById("username_receive").value;
        if(userName == ""){
                window.alert("Please Enter A User Name");
                console.log("UserName not recieved");
        }
        else{
                localStorage.setItem("Name" , userName);
                window.location = "index_room.html";
        }

      
    }

    function refresh(){
        localStorage.removeItem("Name");
        localStorage.removeItem("Room");
    }

    refresh();
    