function add(){
    let input=document.getElementById("todo").value;
    const task=document.createElement("li");
    task.textContent=input;
    let list=document.getElementById("list");
    list.appendChild(task)
    document.getElementById("todo").value = "";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        task.remove(); 
    };
    const editbtn=document.createElement("button");
    editbtn.textContent="Edit";
    editbtn.className="edit-btn";
    editbtn.onclick = function () {
        const val = prompt("Edit your task:", task.firstChild.textContent); 
        if (val) {
            task.firstChild.textContent = val;
        }
    };
    const btncontainer=document.createElement("div");
    btncontainer.className="btn-container";
    btncontainer.appendChild(deleteBtn);
    btncontainer.appendChild(editbtn);

    task.appendChild(btncontainer)
}

