function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === '') {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var textNode = document.createTextNode(input);
    li.appendChild(textNode);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
        li.parentNode.removeChild(li);
    };
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}
