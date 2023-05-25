/*
 * Created By: Osama A. Abdelhamid
 * Creation Date: 22 May, 2023
 * Student ID: 615881
 * Contact: osamaahmed.abdelhamid@miu.edu
 * Description: WAP-CS472 - May2023 - Final Project
 */

// Checking authentication

window.onload = function () {
    if (!!sessionStorage.getItem("accessToken")) {
        location.href = 'product.html';
    }
}

//  Login Handler

document.getElementById("login-button").addEventListener('click', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!!username && !!password) {
        console.log(`username = ${username} and password = ${password}`);
        console.log();

        login(username, password).then(data => {
            console.log(data);
            let { error, accessToken } = data;

            if (error) {
                alert(error)
            } else {
                sessionStorage.setItem('accessToken', accessToken);
                location.href = 'product.html';
                // document.getElementById('login').remove();
                // document.getElementById('main-content').style.display = 'block';
            }
        })

    } else {
        alert("Please enter valid username and password")
    }

});

async function login(username, password) {
    console.log('Logging in');
    let b = { "username": username, "password": password }
    let setting = {
        method: 'POST',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/login", setting);
    const jsonData = await response.json();
    return jsonData;
}