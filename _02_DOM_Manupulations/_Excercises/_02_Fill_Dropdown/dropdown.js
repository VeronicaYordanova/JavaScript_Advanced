function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;
    let result = newItemText + newItemValue;

     let option = document.createElement('option');
     option.textContent = result;
     let menu = document.getElementById('menu');
     menu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}