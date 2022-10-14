// overall script starts

function OpenPage() {
    window.location = "home.html";
    return false;
}

// student dashboard js 

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }
    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

var list = document.getElementById("myList");

function js_func() {
    var value = document.getElementById("to-do").value;
    var li = document.createElement("LI");
    var textNode = document.createTextNode(value);
    li.appendChild(textNode);
    list.appendChild(li);
}
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

// student details js

function printFunction() {
    var printbutton = document.getElementById("pntbtn");
    var submitbutton = document.getElementById("smtbtn");
    var Header_part = document.getElementById("header-part");
    var menu_btn = document.getElementById("menu-btn");
    printbutton.style.visibility = 'hidden';
    submitbutton.style.visibility = 'hidden';
    Header_part.style.visibility = 'hidden';
    menu_btn.style.visibility = 'hidden';
    window.print();
    printbutton.style.visibility = 'visible';
    submitbutton.style.visibility = 'visible';
    Header_part.style.visibility = 'visible';
    menu_btn.style.visibility = 'visible';
}

const myQuiz = document.getElementById("myQuiz");
myQuiz.addEventListener("submit", (e) => {
    e.preventDefault();

    var Name = document.getElementById("name").value;
    var Dob = document.getElementById("dob").value;
    var Email = document.getElementById("eml").value;
    var Mobileno = document.getElementById("mbl").value;
    var Gender = document.getElementById("gndr").value;
    var Marsta = document.getElementById("marsta").value;
    var Age = document.getElementById("age").value;
    var Comuty = document.getElementById("cmty").value;
    var Caste = document.getElementById("cste").value;
    var Addtype = document.getElementById("addty").value;
    var Areatype = document.getElementById("arty").value;
    var Country = document.getElementById("ctry").value;
    var Appartno = document.getElementById("appno").value;
    var Address1 = document.getElementById("adr1").value;
    var Address2 = document.getElementById("adr2").value;
    var City = document.getElementById("city").value;
    var Pincode = document.getElementById("pncd").value;
    var State = document.getElementById("state").value;
    var Totmem = document.getElementById("ttlmem").value;
    var FirGraduate = document.getElementById("firgrd").value;
    var Income = document.getElementById("inc").value;
    var Fthrname = document.getElementById("fthrna").value;
    var Fthrocc = document.getElementById("fthroc").value;
    var Fthrmobileno = document.getElementById("fthrmo").value;
    var Mthrname = document.getElementById("mthrna").value;
    var Mthrocc = document.getElementById("mthroc").value;
    var Mthrmobileno = document.getElementById("mthrmo").value;
    var Regno = document.getElementById("rgtr").value;
    var Degree = document.getElementById("degr").value;
    var Deptrt = document.getElementById("deprt").value;
    var Clgname = document.getElementById("clgna").value;
    var Yearpass = document.getElementById("yrpss").value;
    var Yearstu = document.getElementById("yrstu").value;
    var Mark10 = document.getElementById("m10").value;
    var Mark10mode = document.getElementById("m10mo").value;
    var Mark10ttl = document.getElementById("m10ttl").value;
    var Mark12 = document.getElementById("m12").value;
    var Mark12mode = document.getElementById("m12mo").value;
    var Mark12ttl = document.getElementById("m12ttl").value;
    var myWindow = window.open('','_blank');
    myWindow.document.writeln("NAME: " + Name + "<br>DOB: " + Dob + "<br>EMAIL: " + Email + "<br>MOBILE NUMBER: " + Mobileno + "<br>GENDER: " + Gender + "<br>MARITAL STATUS: " + Marsta + "<br>AGE: " + Age + "<br>COMMUNITY: " + Comuty + "<br>CASTE: " + Caste + "<br><br><br>ADDRESS TYPE: " + Addtype + "<br>AREA TYPE: " + Areatype + "<br>COUNTRY: " + Country + "<br>ADDRESS: " + Appartno + ",   " + Address1 + "   " + Address2 + "<br>CITY: " + City + "<br>PINCODE: " + Pincode + "<br>STATE: " + State + "<br><br><br>TOTAL MEMBERS: " + Totmem + "<br>FIRST GRADUATE: " + FirGraduate + "<br>TOTAL INCOME: " + Income + "<br>FATHER NAME: " + Fthrname + "<br>FATHER OCCUPATION: " + Fthrocc + "<br>FATHER MOBILE NUMBER: " + Fthrmobileno + "<br>MOTHER NAME: " + Mthrname + "<br>MOTHER OCCUPATION: " + Mthrocc + "<br>MOTHER MOBILE NUMBER: " + Mthrmobileno + "<br><br><br>REGISTER NUMBER: " + Regno + "<br>DEGREE: " + Degree + "<br>DEPARTMENT: " + Deptrt + "<br>COLLEGE NAME: " + Clgname + "<br>YEAR OF PASSING: " + Yearpass + "<br>YEAR OF STUDYING: " + Yearstu + "<br>10th MARK: " + Mark10 + "<br>10th STD MODE: " + Mark10mode + "<br>10th TOTAL MARK: " + Mark10ttl + "<br>12th MARK: " + Mark12 + "<br>12th STD MODE: " + Mark12mode + "<br>12th TOTAL MARK: " + Mark12ttl);
    myWindow.focus();
});

// Attendance js 

function SetDate() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var week = date.getDay();
    var select = document.getElementById('att');
    var Submitbtn = document.getElementById('smtbtn');
    var option1 = document.getElementById('hide1');
    var Absent = document.getElementById('abs').value;

    var ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) hours = hours - 12;

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    var today = year + "-" + month + "-" + day;
    var time = hours + ":" + minutes;
    document.getElementById('myDate').value = today;
    document.getElementById('mytime').value = time;

    if (week == "6" || week == "7") {
        select.disabled = true;
        Submitbtn.hidden = true;
    }

    if (time < "09:00" && ampm == 'AM' || time > "11:00" && ampm == 'AM' || ampm == 'PM') {
        select.disabled = true;
        Submitbtn.hidden = true;
    }

    if (time > "09:15" && ampm == 'AM') {
        option1.hidden = true;
    }

    if (time > "09:30" && ampm == 'AM') {
        select.value = Absent;
        select.disabled = true;
    }

}