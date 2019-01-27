function Display() {
    const createPhoneNumber = function (myLinkNavBar) {
        let liPhoneNumber = document.createElement("li");
        liPhoneNumber.id = "myPhoneNumber";
        myLinkNavBar.appendChild(liPhoneNumber);
        return liPhoneNumber;
    };

    const createContactMe = function (myLinkNavBar) {
        let liContactMe = document.createElement("li");
        liContactMe.id = "myContactMe";
        liContactMe.innerHTML = "<a href='contact.html'><span class='fa fa-envelope' aria-hidden='true'></span><span> contactez nous</span></a>";
        myLinkNavBar.appendChild(liContactMe);
        return liContactMe;
    };

    const navBar = function (index) {
        let myLinkNavBar = document.getElementById("myLinkNavBar");
        let myContactMe = document.getElementById("myContactMe");
        let myTwitterLink = document.getElementById("myTwitterLink");
        let myFacebookLink = document.getElementById("myFacebookLink");
        let phoneNumber = document.getElementById("myPhoneNumber");
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
                let liTwitterLink = document.createElement("li");
                liTwitterLink.id = "myTwitterLink";
                liTwitterLink.innerHTML = "<a href='https://twitter.com/EurlPellier' target='_blank'><span class='fa fa-twitter' aria-hidden='true'></span></a>";
                myLinkNavBar.appendChild(liTwitterLink);
            }

            if (!myFacebookLink) {
                let liFacebookLink = document.createElement("li");
                liFacebookLink.id = "myFacebookLink";
                liFacebookLink.innerHTML = "<a href='https://www.facebook.com/fabrice.pellier.3?fref=ts' target='_blank'><span class='fa fa-facebook-official' aria-hidden='true'></span></a>";
                myLinkNavBar.appendChild(liFacebookLink);
            }

            phoneNumber.innerHTML = "<a href='#'><span class='fa fa-phone' aria-hidden='true'></span></a>";

            if (index === 100) {
                myContactMe.setAttribute("class", "active");
            } else {
                let nivBar = document.getElementById("menuNavBar");
                let liMenu = nivBar.getElementsByTagName("li");
                for (let i = 0; i < liMenu.length; i++) {
                    if (i === index) {
                        liMenu[i].setAttribute("class", "active");
                        break;
                    }
                }
            }
        }
    };

    return {
        navBar,
    }
}
