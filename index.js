const button = document.querySelector("#button-save");
const button1 = document.querySelector("#button-delete");
const text = document.querySelector("#text-input");
const ulList = document.querySelector("#ul-list");
const localStorageKey = "todoList";
let listStr = "";
//const bootstrap = require('bootstrap');

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
        //alert("SAVE IS SUCCESS")
        text.value = '';
    }
    else {
        //alert("TEXT CAN NOT BE NULL")
    }
}
function generateId() {
    const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey)) ?? []
    var Id = 0;
    localStorageValue.forEach(element => {
        if (element.Id >= Id) {
            Id = element.Id;
        }
    });
    return Id + 1;

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
        const description = "<td>"+textValue+"</td>"
        const deleteButton = "<td><button onclick='deleteItem(" + i + ")' class='btn btn-danger tableButton'> DELETE </button></td>";
        const infoButton = "<td><button onclick='showItemInfo(" + i + ")'class='btn btn-info tableButton' > info </button></td>"
        const statusButton = "<td><button onclick='setItemStatus(" + i + ")'class='btn btn-info tableButton' > Status </button></td>"

        const actionButtons = deleteButton + infoButton + statusButton;
        const row = "<tr>" + rowHeader + description + actionButtons + "</tr>";


        //<li class="list-group-item list-group-item-success">First item</li>

        renderString += row;
    }
    ulList.innerHTML = renderString;
}
function deleteItem(itemIndex) {
    let localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    localStorageValue.splice(itemIndex, 1);
    writeOnLocalStorage(localStorageValue);
    renderOnScreen();
}
function showItemInfo(itemIndex) {
    let localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(JSON.stringify(localStorageValue[itemIndex]))
    let item = localStorageValue[itemIndex];
    const alertString = "Message: " + item.text + " Creation date:" + new Date(item.createdDate).toLocaleDateString()
    alert(alertString);
}
function deleteAllItem() {
    let deleteAllTasks = confirm("Do you want to delete all list");
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
    renderOnScreen();




}
