function Display() {
    var createPhoneNumber = function (myLinkNavBar) {
        var liPhoneNumber = document.createElement("li");
        liPhoneNumber.id = "myPhoneNumber";
        myLinkNavBar.appendChild(liPhoneNumber);
        return liPhoneNumber;
    };

    var createContactMe = function (myLinkNavBar) {
        var liContactMe = document.createElement("li");
        liContactMe.id = "myContactMe";
        liContactMe.innerHTML = "<a href='contact.html'><span class='fa fa-envelope' aria-hidden='true'></span><span> contactez nous</span></a>";
        myLinkNavBar.appendChild(liContactMe);
        return liContactMe;
    };

    var fctNavBar = function (index) {
        var myLinkNavBar = document.getElementById("myLinkNavBar");
        var myContactMe = document.getElementById("myContactMe");
        var myTwitterLink = document.getElementById("myTwitterLink");
        var myFacebookLink = document.getElementById("myFacebookLink");
        var phoneNumber = document.getElementById("myPhoneNumber");
        if (!phoneNumber) {
            phoneNumber = createPhoneNumber(myLinkNavBar);
        }
        if (!myContactMe) {
            myContactMe = createContactMe(myLinkNavBar);
        }

        if (window.innerWidth < 993) {
            if (myTwitterLink) {
                myTwitterLink.parentNode.removeChild(myTwitterLink);
            }
            if (myFacebookLink) {
                myFacebookLink.parentNode.removeChild(myFacebookLink);
            }

            phoneNumber.innerHTML = "<a href='tel:+33243237149'><span class='fa fa-phone' aria-hidden='true'></span><span> 02 43 23 71 49</span></a>";
        } else if (window.innerWidth >= 993) {
            if (!myTwitterLink) {
                var liTwitterLink = document.createElement("li");
                liTwitterLink.id = "myTwitterLink";
                liTwitterLink.innerHTML = "<a href='https://twitter.com/EurlPellier' target='_blank'><span class='fa fa-twitter' aria-hidden='true'></span></a>";
                myLinkNavBar.appendChild(liTwitterLink);
            }

            if (!myFacebookLink) {
                var liFacebookLink = document.createElement("li");
                liFacebookLink.id = "myFacebookLink";
                liFacebookLink.innerHTML = "<a href='https://www.facebook.com/fabrice.pellier.3?fref=ts' target='_blank'><span class='fa fa-facebook-official' aria-hidden='true'></span></a>";
                myLinkNavBar.appendChild(liFacebookLink);
            }

            phoneNumber.innerHTML = "<a href='#'><span class='fa fa-phone' aria-hidden='true'></span></a>";

            if (index === 100) {
                liContactMe.setAttribute("class", "active");
            } else {
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
    };

    return {
        navBar: fctNavBar
    }
}
