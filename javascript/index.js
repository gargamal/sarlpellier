function displarNavBar() {
    var myTwitterLink = document.getElementById("myTwitterLink");
    var myFacebookLink = document.getElementById("myFacebookLink");

    if (window.innerWidth < 992 && (myTwitterLink || myFacebookLink)) {
        myTwitterLink.parentNode.removeChild(myTwitterLink);
        myFacebookLink.parentNode.removeChild(myFacebookLink);
    } else if (window.innerWidth >= 992 && (!myTwitterLink || !myFacebookLink)) {
        var myLinkNavBar = document.getElementById("myLinkNavBar");

        var liTwitterLink = document.createElement("li");
        liTwitterLink.id = "myTwitterLink";
        liTwitterLink.innerHTML = "<a href='#'><span class='fa fa-twitter' aria-hidden='true'></span></a>";
        myLinkNavBar.appendChild(liTwitterLink);

        var liFacebookLink = document.createElement("li");
        liFacebookLink.id = "myFacebookLink";
        liFacebookLink.innerHTML = "<a href='#'><span class='fa fa-facebook-official' aria-hidden='true'></span></a>";
        myLinkNavBar.appendChild(liFacebookLink);
    }
}
