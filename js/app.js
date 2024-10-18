const form = document.querySelector(".hero__form");
const inputUser = document.querySelector(".hero__form input[type=text]");
const inputPassword = document.querySelector(".hero__form input[type=password]");

// Ustoz bergan API ishlamadi

const BASE_URL = "https://dummyjson.com";

form.addEventListener("submit", e => {
    e.preventDefault();

    let user = {
        username: inputUser.value,
        password: inputPassword.value
    }

    fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw Error("username or password is incorrect")
        })
        .then(res => {
            open("/pages/dashboard", "_self")
        })
        .catch(err => {
            alert(err.message)
        })
        .finally(() => console.log("tugadi"))
})