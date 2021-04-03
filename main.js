var studentNames = [];

function submit() {
    var displayStudentArray = [];

    for (var j = 1; j<=4; j++) {
        var studentName = document.getElementById("studentName" + j).value;
        console.log(studentName);
        studentNames.push(studentName);
    }

    var studentNameLength = studentNames.length;

    for (var k = 0; k < studentNameLength; k++){
        displayStudentArray.push("<h4>NAME - " + studentNames[k] + "</h4>")
    }
    document.getElementById("displayName").innerHTML = displayStudentArray;
    document.getElementById("sortButton").style.display = "inline-block";
    document.getElementById("submitButton").style.display = "none";

    var removeCommas = displayStudentArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}

function sorting() {
    studentNames.sort();
    console.log(studentNames);

    var displaySortedStudentNames = [];

    var studentNameLength = studentNames.length;

    for (var k = 0; k < studentNameLength; k++){
        displaySortedStudentNames.push("<h4>NAME - " + studentNames[k] + "</h4>");
    }

    var removeCommas = displaySortedStudentNames.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}

function newUpdate(){
    document.getElementById("displayNameWithoutCommas").innerHTML = "<h1>"+studentNames + "</h1>";
}