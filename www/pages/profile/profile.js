var uname = Cookies.get("username");


$(document).ready(function () {
    getProfileData();
});

function getProfileData() {
    showWait();
    $.get(hostaddress + "/userdata", {
        username: uname
    }, function (data) {
        var innerdata = "";
        for (var term in data) {
            innerdata = innerdata.concat("<tr><td class='strong cyan-text text-accent-3'>" + term + "</td><td class=' cyan-text text-accent-3'>" + data[term] + "</td></tr>");
        }
        //console.log(innerdata);
        document.getElementById("info-table-body").innerHTML = innerdata;
        //document.getElementById("user-img").setAttribute("src", data["user-img"]);
        hideWait();
    });
}
