function loadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => displayUserData(data))
}


function displayUserData(users) {
    const userContainer = document.getElementById("user_mail_list");
    for (const user of users) {
        console.log(user);
        userContainer.classList.add("users_box")

        const li = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");

        li.innerText = `name: ${user.name}`;
        li2.innerText = `Email: ${user.email}`;
        li3.innerText = `Phone: ${user.phone}`;

        userContainer.appendChild(li);
        userContainer.appendChild(li2);
        userContainer.appendChild(li3);
    }
}