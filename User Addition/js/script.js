var users = [];
class User{
    constructor(name, technology, experience, designation){
        this.name = name;
        this.technology = technology;
        this.experience = experience;
        this.designation = designation;
    }
}

function validate(name,technology,experience,designation) {
    var regName = /^[a-zA-Z]+$/;
    if (name == "" || technology == "" || experience == "" || designation == "") {
        alert("Please enter all fields.")
        return false;
    }else if (!regName.test(name)) {
        alert("Please enter valid name");
        return false;
    }else if (!(experience >= 0 && experience <=50)) {
        alert("Please enter valid experience between 0 to 50.")
        return false
    }else{
        return true;
    }
}
function resetForm(params) {
    document.getElementById('name').value = "";
    document.getElementById('technology').value = "";
    document.getElementById('experience').value = "";
    document.getElementById('designation').value = "";

}

const addUser = (ev)=>{
    ev.preventDefault();

    var name = document.getElementById('name').value;
    var technology = document.getElementById('technology').value;
    var experience = document.getElementById('experience').value;
    var designation = document.getElementById('designation').value;
    if (validate(name,technology,experience,designation)) {
        
        const u =  new User(name,technology,experience,designation);
        
        users.push(u);
        console.log(users);
        resetForm();
    }
    
}

const displayTable = (ev)=>{
    ev.preventDefault();
    var tableParent = document.getElementById('table');
    tableParent.innerHTML = "";
    var table = document.createElement('table');
    table.border = "1";
    
    tableParent.appendChild(table);
    for (var i = 0; i < users.length; i++){
        var row = `<tr>
                        <td>${users[i].name}</td>
                        <td>${users[i].technology}</td>
                        <td>${users[i].experience}</td>
                        <td>${users[i].designation}</td>
                  </tr>`
        table.innerHTML += row
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('Add').addEventListener('click', addUser);
    document.getElementById('Display').addEventListener('click',displayTable);
});