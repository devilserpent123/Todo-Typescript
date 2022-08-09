var submitB = document.querySelector("#SubmitButton");
var formData = document.querySelector("#horses");
var assigneeDrop = document.querySelector("#selectAssignee");
var Ptable = document.querySelector("#InProgress");
var Ctable = document.querySelector("#Completed");
var t1 = document.querySelector("#staskName");
var t2 = document.querySelector("#sassigneeName");
var t3 = document.querySelector("#sdueDate");
var assigneeName = ["Rahul", "Vishwnath", "Rahul",
    "Prabhjot", "Hari", "Shibo",
    "Sarthak", "Rishab", "Rakesh"];
var AssigneeDropDown = function () {
    for (var _i = 0, assigneeName_1 = assigneeName; _i < assigneeName_1.length; _i++) {
        var aname = assigneeName_1[_i];
        var newOption = document.createElement("option");
        newOption.value = aname;
        newOption.innerHTML = aname;
        assigneeDrop.appendChild(newOption);
    }
};
AssigneeDropDown();
var getForm = function (event) {
    // clearErrors();
    var Counter = '';
    event.preventDefault();
    var data = new FormData(formData);
    var TName = data.get("11");
    var AssName = data.get("12");
    var DateName = data.get("13");
    clearInputs();
    // clearErrors();
    var Row = document.createElement("tr");
    var d1 = document.createElement("td");
    var d2 = document.createElement("td");
    var d3 = document.createElement("td");
    var d4 = document.createElement("td");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", function (E) {
        var taskid = E.target.id;
        var task = document.getElementById(taskid);
        var parent = task === null || task === void 0 ? void 0 : task.closest("tr");
        Ctable === null || Ctable === void 0 ? void 0 : Ctable.appendChild(parent);
    });
    checkbox.id = Counter + 'a'; //id can be set to change it
    d1.textContent = TName;
    d2.innerHTML = AssName;
    d3.innerHTML = DateName.split("-").reverse().join("-");
    d4.appendChild(checkbox);
    Row.append(d1);
    Row.append(d2);
    Row.append(d3);
    Row.append(d4);
    Ptable.append(Row);
};
var clearInputs = function () {
    var temp = formData;
    temp.reset();
};
var clearErrors = function () {
    t1.innerHTML = "";
    t2.innerHTML = "";
    t3.innerHTML = "";
};
submitB.addEventListener("click", getForm);
