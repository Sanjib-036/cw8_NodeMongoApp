const { urlencoded, response } = require("express");

$('#submit').click(function () {
    let name = $('#name').val();
    let content = $('#content').val();

    console.log('User Name:', name);
    console.log('Content', content);

    let user = {
        name: name,
        content: content
    }
    console.log('New User', user);

    $.ajax({
        type: 'POST',
        url: '/article/new',
        data: article,
        success: response => {
            console.log(response)
        },
        error: response => {
            console.log(response);
        }

    });

    // let allUsers = localStorage.getItem('allUsers');
    // if (allUsers == null) allUsers = [];
    // localStorage.setItem('newUser', JSON.stringify(user));
    // allUsers.push(user);
    // localStorage.setItem('allUsers', JSON.stringify(allUsers));


});