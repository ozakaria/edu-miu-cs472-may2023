window.onload = function() {

    document.getElementById('btnReset').addEventListener("click", btnResetFun);

    document.getElementById('btnRegisterPatient').addEventListener("click", btnSubmitFun);

    document.getElementById('btnRegisterPatient').addEventListener("click", btnSubmitFun);

    document.getElementById('chkElderlyPatients').onclick = chkElderlyPatientsFun;

    document.getElementById('chkShowOutPatients').onclick = chkElderlyPatientsFun;


}

function btnResetFun(){
    document.getElementById("patientForm").reset();
}

function btnSubmitFun(){
    const tableBody = document.getElementById("tbodyPatientsList");
    const patientIdNumberText = document.getElementById("patientIdNumber").value;
    const firstNameText = document.getElementById("firstName").value;
    const middleInitialsText = document.getElementById("middleInitials").value;
    const lastNameText = document.getElementById("lastName").value;
    const dateOfBirthText = document.getElementById("dateOfBirth").value;
    const ddlDepartmentText = document.getElementById("ddlDepartment").value;
    const radioIsOutPatientRadioYes = document.getElementById("radioIsOutPatientYes").checked;
    const radioIsOutPatientRadioNo = document.getElementById("radioIsOutPatientNo").checked;

    if(patientIdNumberText == "" || firstNameText == "" || middleInitialsText == "" || lastNameText == "" ||
    dateOfBirthText == "" || ddlDepartmentText == "" || (radioIsOutPatientRadioYes == "" && radioIsOutPatientRadioNo == "")){
        alert("Please fill out all the required fields");
        return;
    }
    
    
    const row = document.createElement("tr");
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    let c5 = document.createElement("td")
    let c6 = document.createElement("td")
    let c7 = document.createElement("td")

    c1.innerHTML = patientIdNumberText;
    c2.innerHTML = firstNameText;
    c3.innerHTML = middleInitialsText;
    c4.innerHTML = lastNameText;
    c5.innerHTML = dateOfBirthText;
    c6.innerHTML = ddlDepartmentText;
    if(radioIsOutPatientRadioYes){
        c7.innerHTML = "YES";
    }
    if(radioIsOutPatientRadioNo){
        c7.innerHTML = "NO";
    }
    

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);
    row.appendChild(c7);

    tableBody.appendChild(row);

    document.getElementById("patientForm").reset();

    event.preventDefault();
}

function chkElderlyPatientsFun(){
    let elderlyCheckbox = document.getElementById('chkElderlyPatients');
    let checkOutCheckbox = document.getElementById('chkShowOutPatients');
    let table = document.getElementById("patientInfoTable");

    
    
    if(elderlyCheckbox.checked && !checkOutCheckbox.checked){
        for (let i = 1, row; row = table.rows[i]; i++) {
            if(new Date(row.cells[4].innerText) < new Date("1958-04-21")){
                row.style.display = "";
            }else{
                row.style.display = "none";
            }
        }
    }
    if(checkOutCheckbox.checked && !elderlyCheckbox.checked){
        for (let i = 1, row; row = table.rows[i]; i++) {
            if(row.cells[6].innerText === "YES"){
                row.style.display = "";
            }else{
                row.style.display = "none";
            }
        }
    }

    if(checkOutCheckbox.checked && elderlyCheckbox.checked){
        for (let i = 1, row; row = table.rows[i]; i++) {
            if(row.cells[6].innerText === "YES"){
                if(new Date(row.cells[4].innerText) < new Date("1958-04-21")){
                row.style.display = "";
                }else{
                    row.style.display = "none";
                }
            }else{
                row.style.display = "none";
            }
        }
    }

    if(!checkOutCheckbox.checked && !elderlyCheckbox.checked){
        for (let i = 1, row; row = table.rows[i]; i++) {
            row.style.display = "";
        }
    }    

}



