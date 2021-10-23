const button = document.querySelector("#button-save");
const button1 = document.querySelector("#button-delete");
const text = document.querySelector("#text-input");
const ulList = document.querySelector("#ul-list");
const bodyContent = document.querySelector("#body-content")
const localStorageKey = "todoList";
let listStr = "";
var modalItem = null;

renderOnScreen();



function addClickButton() {
    if (text.value != '') {
        const item =
        {
            id: generateId(),
            text: text.value,
            createdDate: new Date(),
            status: 0
        };
        writeITemToLocalStorage(item);
        renderOnScreen();
        text.value = '';
    }
    else {
        alert("Text can not be null!")
    }
}
function generateId() {
    const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey)) ?? []
    return localStorageValue.length + 1;

}

function writeITemToLocalStorage(value) {
    const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey)) ?? []
    localStorageValue.push(value);
    writeOnLocalStorage(localStorageValue);
}

function writeOnLocalStorage(localStorageValue) {
    var data = JSON.stringify(localStorageValue);
    localStorage.setItem(localStorageKey, data);
}

function renderOnScreen() {

    var renderString = "";
    var data = localStorage.getItem(localStorageKey);
    data = data ? JSON.parse(data) : [];
    for (var i = 0; i < data.length; i++) {
        const item = data[i]
        const textValue = item.status == 0 ? "<p>" + item.text + "</p>" : "<del>" + item.text + "</del>"
        const rowHeader = "<th scope='row' class = 'row-header'> " + (i + 1) + "</th>"
        const description = "<td>" + textValue + "</td>"
        const deleteButton = "<button onclick='deleteItem(" + i + ")' class='btn btn-danger tableButton'> Delete </button>";
        const infoButton = "<button onclick='showItemInfo(" + i + ")'class='btn btn-info tableButton' > Info </button>"

        const statusButton = "<button onclick='setItemStatus(" + i + ")'class='btn btn-" + (item.status == 0 ? "success" : "warning") + " tableButton' > " + (item.status == 0 ? "Done" : "Pending") + "</button>"

        const actionButtons = "<td id='action-buttons-section'>" + deleteButton + infoButton + statusButton + "</td>";
        const row = "<tr>" + rowHeader + description + actionButtons + "</tr>";

        renderString += row;
    }
    ulList.innerHTML = renderString;

}
function deleteItem(itemIndex) {
    let localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    localStorageValue.splice(itemIndex, 1);
    writeOnLocalStorage(localStorageValue);
    location.reload()
}
function showItemInfo(itemIndex) {
    let localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    let item = localStorageValue[itemIndex];
    modalItem = item;
    renderInfoModal()
    $("#exampleModal").modal();
}
function deleteAllItem() {
    let deleteAllTasks = confirm("Do you want to delete all");
    if (deleteAllTasks) {
        localStorage.clear();
        location.reload()
    }
}
function setItemStatus(itemIndex) {
    let localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    let item = localStorageValue[itemIndex];
    item.status = item.status == 1 ? 0 : 1

    writeOnLocalStorage(localStorageValue);

    console.log(JSON.stringify(item))
    location.reload()

}
function renderInfoModal() {
    if (!modalItem)
        return
    let element = document.getElementById("exampleModal")
    if (element)
        element.parentNode.removeChild(element);

    const modal = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div><p>Todo task: `+ modalItem.text + `</p></div>
        <div><p>Creation Date: `+ new Date(modalItem.createdDate).toLocaleDateString() + `</p></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`

    bodyContent.innerHTML += modal

    renderOnScreen();
}
