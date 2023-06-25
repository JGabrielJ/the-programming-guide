let nome = document.getElementById("name");
let desc = document.getElementById("desc");
let date = document.getElementById("date");
let email = document.getElementById("email");
let image = document.getElementById("image");
let username = document.getElementById("userName");
let showHide = document.getElementById("showHide");
let change = document.getElementById("change");
let profile = document.getElementById("profile");

let usersData = {
    2501: {
        username: "JGabrielJ",
        image: "photo.jpg",
        name: "João Gabriel",
        description: "Tô de boa na lagoa",
        birthday: "2005-07-07",
        email: "gabriel.jacinto61@aluno.ifce.edu.br"
    }
}
listIDs = Object.keys(usersData);

/* nome.value = usersData[listIDs[0]].name;
desc.value = usersData[listIDs[0]].description;
date.value = usersData[listIDs[0]].birthday;
email.value = usersData[listIDs[0]].email;
image.src = "./images/" + usersData[listIDs[0]].image; */
username.value = usersData[listIDs[0]].username;

let shown = false;
showHide.addEventListener("click", () => {
    if (!shown) {
        shown = true;
        showHide.src = "./images/hide.png";
        username.value += "@" + listIDs[0];
    } else {
        shown = false;
        showHide.src = "./images/show.png";
        username.value = usersData[listIDs[0]].username;
    }
});

profile.addEventListener("change", (e) => {
    let file = e.target.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = (e) => {
            image.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

change.addEventListener("click", () => {
    console.log("Hello");
});
