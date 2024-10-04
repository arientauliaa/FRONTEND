var password = prompt ("Apa Password Kamu?")

if (password == "Momentum"){
    docoument.write("<p> Password ada anda masukan benar yaitu : "+ password + "</p>")
} else {
    alert ("Maaf password anda salah .. silahkan coba lagi :D")
    window.location = "prompteksternal.html"
}