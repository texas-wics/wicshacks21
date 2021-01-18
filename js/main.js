window.onload = function() {
    loadXMLDoc();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('mode') && urlParams.get('mode') === 'dark') {
            changemode();
    } else {
        var button = document.getElementsByClassName("switch");
        button[0].checked = !button[0].checked;
    }
};


let current = true;
function changemode() {
    let root = document.documentElement;
    if (current) {
        root.style.setProperty('--bg', '#293438');
        root.style.setProperty('--fg', '#F1F5F3');
        root.style.setProperty('--shadow', '#F1F5F3');
        current = false;
    } else {
        root.style.setProperty('--fg', '#293438');
        root.style.setProperty('--bg', '#F1F5F3');
        root.style.setProperty('--shadow', '#D3DED9');
        current = true;
    }
}

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }

    };
    xmlhttp.open("GET", "faq.xml" , true);
    xmlhttp.send();

}

function myFunction(xml) {
    var x, i, xmlDoc, contents;
    xmlDoc = xml.responseXML;
    contents = "";
    x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i < x.length; i++) {
        var quest = x[i].getElementsByTagName("question")[0].childNodes[0].nodeValue;
        var ans = x[i].getElementsByTagName("answer")[0].childNodes[0].nodeValue;

        var code = String.fromCharCode('a'.charCodeAt() + i);

        contents += "<div class=\"question\">" +
            "<span id=\"" + code + "_t\">" + quest + "</span>" +
            "<a onclick=\"expand('" + code + "')\" id=\"" +
            code + "_l\" class=\"expand\">+</a>" +
            "<div id=\"" + code + "\" class=\"answer\">" +
            ans + "</div></div>";

    }

    document.getElementById("faq").innerHTML = contents;

}

function expand(param_id) {
    var div = document.getElementById(param_id);
    var title = document.getElementById(param_id + "_t");
    var link = document.getElementById(param_id + "_l");

    if (div.style.display === "block") {
        div.style.display = "none";
        link.innerHTML = "+";
    } else {
        div.style.display = "block";
        link.innerHTML = "-";
    }

}
