function reverse()
{
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
    /*This line splits the letters up.*/
    alert("split = " + splitStr1);
    var reverse = splitStr1.reverse();
    /*This line reverses the letters*/
    alert("reverse = " + reverse);
    var joinStr1 = reverse.join("");
    /*This line puts the letters back together reversed.*/

    if(str1 == joinStr1)
        /*This means if the word inputted is equal the the word after its reversed, it's a palindrome.*/
    {
        document.getElementById("palin").innerHTML = "This is a palindrome";
    }
    else
    {
        document.getElementById("palin").innerHTML = "This is not a palindrome";
    }
    /*This shows the result of the test under the submit button.*/
}

function input()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var zipCode = document.getElementById('zipCode').value;

    var fullName = firstName+ " " + lastName;

    if(fullName.length > 20 || fullName.length <= 3)
    {
        document.getElementById("loginStatus").innerHTML = "Name is invalid";
        var textColor = document.getElementById("loginStatus");
        textColor.style.color ='red';
        /* I want the warning text to be red to make it more obvious that something went wrong*/

    }
    else if(zipCode.length !== 5)
        /* With trial and error I realized I needed .length for it to know what 5 meant! */
    {
        document.getElementById("loginStatus").innerHTML = "Zip code is invalid";
        var textColor = document.getElementById("loginStatus");
        textColor.style.color ='red';
    }
    else
    {
        alert("Access Granted");
        location.replace("First HTML.html")
    }
} 