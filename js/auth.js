// Simple Access Control

const USERS = {

    madre: "dburrell0099",
    novio: "bzimmer0077",
    creador: "rmitchell0033"

};


export function isAuthenticated(){
    return localStorage.getItem("auth") === "true";
}


export function login(username, password){

    if(USERS[username] === password){

        localStorage.setItem("auth", "true");
        localStorage.setItem("user", username);

        return true;
    }

    return false;
}


export function logout(){

    localStorage.removeItem("auth");
    localStorage.removeItem("user");

    window.location.href = "index.html";
}