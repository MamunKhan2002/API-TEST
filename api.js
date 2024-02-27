function getApiData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => getUserData(data));
}



function getUserData(data) {
    console.log(data);
}