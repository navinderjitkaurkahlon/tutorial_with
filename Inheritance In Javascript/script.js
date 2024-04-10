/* Declaring base class - Student*/
class Student{
    constructor(name,id,phone){
        this.id = id;
        this.phone= phone;
        this.name = name;
    }
    print(){
           console.log("You can reach",this.name," at ",this.id," or at ",this.phone)
        }
    }
    
    /* Declaring InternationalStudent */
    class InternationalStudent extends Student{
        constructor(name,id,phone,country){
            super(name,id,phone);
            this.country=country;
        }
        welcome(){
            console.log("Welcome to Canada ",this.name);
        }
    }

    let s1 = new Student('Harman D\'Souza','harman@gmail.com','4318171849');
    let s2 = new Student('Adam Sandex','adam@gmail.com','31817211');
    let s3 = new Student('Catherine Bateman','bateman@gmail.com','4313514911');
    let s4= new InternationalStudent('Catherine Bateman','bateman@gmail.com','4313514911','Zambia');

    let students=[];
    students.push(s1);
    students.push(s2);
    students.push(s3);
    students.push(s4);

    function generateTable(){
        //Fetch the body of the table
        var tbody = document.getElementById('tab_body');
        //'rows' variable stores the list of rows to be added to the table
        var rows="";

        //Iterate over elements of the students array
        for(var i=0;i<students.length;i++){
            //Create a row for every array element
            var tr = "<tr>";
            //Add name, id and phone as 'td's to every row
            tr += "<td>" + students[i].name + "</td>" + "<td>" + students[i].id + "</td><td>"+students[i].phone+"</td></tr>";
            //Add row to list of rows
            rows+=tr;
        }

        //Add list of rows to the table body. 
        tbody.innerHTML=rows;
    }