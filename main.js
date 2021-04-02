var studentNames = [];

function submit() {
    var studentName1 = document.getElementById("studentName1").value;
    var studentName2 = document.getElementById("studentName2").value;
    var studentName3 = document.getElementById("studentName3").value;
    var studentName4 = document.getElementById("studentName4").value;

    studentNames.push(studentName1);
    studentNames.push(studentName2);
    studentNames.push(studentName3);
    studentNames.push(studentName4);

    console.log(studentNames);

    document.getElementById("displayName").innerHTML = studentNames;
    document.getElementById("sortButton").style.display = "inline-block";
    document.getElementById("submitButton").style.display = "none";
}

function sorting() {
    studentNames.sort();
    console.log(studentNames);
    document.getElementById("displayName").innerHTML = studentNames;
}