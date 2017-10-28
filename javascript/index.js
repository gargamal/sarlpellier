function displayNavBar(index) {
    var contactMe = document.getElementById("contactMe");
    var myTwitterLink = document.getElementById("myTwitterLink");
    var myFacebookLink = document.getElementById("myFacebookLink");
    var phoneNumber = document.getElementById("phoneNumber");

    if (window.innerWidth < 992 && (contactMe || myTwitterLink || myFacebookLink)) {
        contactMe.parentNode.removeChild(contactMe);
        myTwitterLink.parentNode.removeChild(myTwitterLink);
        myFacebookLink.parentNode.removeChild(myFacebookLink);
        phoneNumber.setAttribute("href", "tel:+33243237149");

    } else if (window.innerWidth >= 992 && (!myTwitterLink || !myFacebookLink)) {
        var myLinkNavBar = document.getElementById("myLinkNavBar");

        var liContactMe = document.createElement("li");
        liContactMe.id = "contactMe";
        liContactMe.innerHTML = "<a href='#'><span class='fa fa-envelope' aria-hidden='true'></span></a>";
        myLinkNavBar.appendChild(liContactMe);

        var liTwitterLink = document.createElement("li");
        liTwitterLink.id = "myTwitterLink";
        liTwitterLink.innerHTML = "<a href='#'><span class='fa fa-twitter' aria-hidden='true'></span></a>";
        myLinkNavBar.appendChild(liTwitterLink);

        var liFacebookLink = document.createElement("li");
        liFacebookLink.id = "myFacebookLink";
        liFacebookLink.innerHTML = "<a href='#'><span class='fa fa-facebook-official' aria-hidden='true'></span></a>";
        myLinkNavBar.appendChild(liFacebookLink);

        phoneNumber.setAttribute("href", "#");

        var nivBar = document.getElementById("menuNavBar");
        var liMenu = nivBar.getElementsByTagName("li");
        for (var i = 0; i < liMenu.length; i++) {
            if (i === index) {
                liMenu[i].setAttribute("class", "active");
                break;
            }
        }
    }
}
