function validate()
{
    var exampleInputEmail1=document.getElementById("exampleInputEmail1").nodeValue;
    var exampleInputPassword1=document.getElementById("exampleInputPassword1").nodeValue;
    if(exampleInputEmail1=="admin@gmail.com" && exampleInputPassword1=="admin")
    {
        window.location.href="welcome.html";
    }
    else
    {
        alert("login invalid");
    }
}