const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const amountName = document.getElementById("amount");
const addBtn = document.querySelector(".btn");
const studentList = document.getElementById("studentList");

addBtn.addEventListener("click",function(event){
    event.preventDefault();
    if(studentName.value == "" || courseName.value == "" || amountName.value == ""  ){
        alert("Please fillout all the field in the form");
    }else{
        const newRow = document.createElement('tr');
        const newStudentName =document.createElement("td");
        newStudentName.innerHTML= studentName.value;
        newRow.appendChild(newStudentName);

        const newCourseName =document.createElement("td");
        newCourseName.innerHTML= courseName.value;
        newRow.appendChild(newCourseName);

        const newCourseAmount =document.createElement("td");
        newCourseAmount.innerHTML= amountName.value;
        newRow.appendChild(newCourseAmount);

        // creating a delete field
        const newDeleteField = document.createElement("td");
        newRow.appendChild(newDeleteField);
        
        // creating a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-danger");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML="Delete Item";
        newDeleteField.appendChild(deleteBtn);

        studentList.appendChild(newRow);
        

        let deleteItems = document.querySelectorAll(".delete");

        for (const btn of deleteItems){
            btn.addEventListener("click",function(e){
                e.target.parentElement.parentElement.remove();
            })
        }


        

        studentName = "";
        courseName = "";
        amountName = "";



       


    }
})