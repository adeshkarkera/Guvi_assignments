let fvalue = document.getElementById("form");
fvalue.addEventListener("submit", (event) => {
    event.preventDefault();
    let clicCount = 0;
    let food = "";
    let clk = document.getElementsByName("food");
    for (let c of clk) {
        if (c.checked == true){
            clicCount++;
            if (clicCount == 1) {
                food += c.value;
            } else if(clicCount>1){
                food += "," + c.value;
            }
            
        }

    }
     
    if (clicCount>=2) {
        let fname = document.getElementById("first-name").value;
        let lname = document.getElementById("last-name").value;
        let address = document.getElementById("inputPassword5").value;
        let pincode = document.getElementById("inputPassword6").value;
        let state = document.getElementById("inputEmail7").value;
        let country = document.getElementById("inputEmail8").value;
        let radioData = document.getElementsByName("gneder");
        let gender = "";

        for (let g of radioData) {
            if (g.checked == true) {
                gender = g.value;
            }
        }


        let tdata = "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + address + "</td><td>" + pincode + "</td><td>" + gender+ "</td><td>" +food + "</td><td>" + state + "</td><td>" + country + "</td></tr>";
   
        document.getElementById("result").innerHTML += tdata;

        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("inputPassword5").value = "";
        document.getElementById("inputPassword6").value = "";
        document.getElementById("inputEmail7").value = "";
        document.getElementById("inputEmail7").value = "";
        document.getElementById("inputEmail8").value = "";
        
        for (let i of clk) {
            i.checked = false;
        }

        for (let i of radioData) {
            i.checked = false;
        }

    } else {
        document.getElementById("note").innerText = "**Please select minimum 2 options";
        return false;
    }
});

