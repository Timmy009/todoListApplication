document.addEventListener("DOMContentLoaded", function () {
  const addTaskBut = document.getElementById("addTask");
  const textInput = document.getElementById("textInput");
  const listHeader = document.getElementById("list");

  function addTask() {
    let textInp = textInput.value.trim();

    if (textInp == "") {
      return;
    }
    const listItem = document.createElement("li");

    listItem.innerHTML = `<span>${textInp}  </span>
                        <button class= "edit" >Edit</button>
                        <button class= "delete">Delete</button>
                      `;

    listHeader.appendChild(listItem);
    textInput.value = "";

    const deleteBut = listItem.querySelector(".delete");
    const editBut = listItem.querySelector(".edit");
    deleteBut.addEventListener("click", function () {
      deleteTask(listItem);
    });

    editBut.addEventListener("click", function () {
      editTask(listItem);
    });
  }

  function editTask(listItem) {
    const wordInput = listItem.querySelector("span");
    const editText = prompt("Enter text to edit task ", wordInput.textContent);

    if (editText != null) {
      wordInput.textContent = editText;
    }
  }

  function deleteTask(listItem) {
    listItem.remove();
  }

  addTaskBut.addEventListener("click", addTask);
  textInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
