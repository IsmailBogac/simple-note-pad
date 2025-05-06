const note = document.getElementById("note");
const save = document.getElementById("save");
const container = document.getElementById("container");

let notesArr = [];

save.addEventListener("click", () => {
  const value = note.value;
  if (value !== "") {
    notesArr.push(value);
    console.log(notesArr);
    showNotes(notesArr);
    note.value = "";
  }
});

const showNotes = (items) => {
  items.forEach((item, index) => {
    let itemDiv = document.createElement("div");
    itemDiv.className = "item";

    let textarea = document.createElement("textarea");

    textarea.className = "note";
    textarea.value = item;
    textarea.style.pointerEvents = "none";

    let editBtn = document.createElement("button");
    editBtn.className = "editBtn save";
    editBtn.textContent = "Edit";

    let saveEdited = document.createElement("button");
    saveEdited.textContent = "Save Edited";
    saveEdited.className = "saveEdited save";
    saveEdited.style.display = "none";

    editBtn.addEventListener("click", () => {
      textarea.style.pointerEvents = "fill";
      editBtn.style.display = "none";
      saveEdited.style.display = "block";
    });

    saveEdited.addEventListener("click", () => {
      textarea.style.pointerEvents = "none";
      let edited = (notesArr[index] = textarea.value);
      saveEdited.style.display = "none";
      editBtn.style.display = "block";
      console.log(edited);
    });

    itemDiv.appendChild(textarea);
    itemDiv.appendChild(editBtn);
    itemDiv.appendChild(saveEdited);
    container.appendChild(itemDiv);

    notesArr = [];
  });
};


