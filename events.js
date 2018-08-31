document.addEventListener('DOMContentLoaded', function () {
    let eventCount = 1;
    let goalCount = 1;
    let taskCount = 1;
    function addItem(itemCount, inputType, section, item) {
        if (document.getElementById(inputType).value) {
            let type = document.getElementById(section);
            //Setup of div
            let itemDiv = document.createElement('div');
            itemDiv.setAttribute('id', item + '-' + itemCount);
            itemDiv.setAttribute('class', 'addedElements');
            let itemToAdd = document.getElementById(inputType).value;
            //Setup of checkbox
            let itemCheckbox = document.createElement('input');
            itemCheckbox.setAttribute('type', 'checkbox');
            let itemLabel = document.createElement('label');
            itemCheckbox.setAttribute('id', item + 'Label-' + itemCount);
            itemCheckbox.setAttribute('name', item);
            itemLabel.setAttribute('for', item + 'Label-' + itemCount);
            //Setup of buttons
            let itemEditButton = document.createElement('button');
            itemEditButton.setAttribute('id', 'edit');
            itemEditButton.setAttribute('class', 'btn');
            itemEditButton.setAttribute('onClick', 'editItem(this.parentElement, this)');
            itemEditButton.innerHTML = "Edit";
            let itemDeleteButton = document.createElement('button');
            itemDeleteButton.setAttribute('id', 'delete');
            itemDeleteButton.setAttribute('class', 'btn');
            itemDeleteButton.setAttribute('onClick', 'deleteItem(this.parentElement)');
            itemDeleteButton.innerHTML = "Delete";
            //Setup of page structure
            type.appendChild(itemDiv);
            itemDiv.appendChild(itemCheckbox);
            itemDiv.appendChild(itemLabel);
            itemLabel.innerHTML = itemToAdd;
            itemDiv.appendChild(itemEditButton);
            itemDiv.appendChild(itemDeleteButton);
        }
        document.getElementById(inputType).value = '';
    }

    document.getElementById('addEvent').onclick = function () {
        addItem(eventCount, 'inputEvent', 'events', 'event');
        eventCount++;
    }
    document.getElementById('addGoal').onclick = function () {
        addItem(goalCount, 'inputGoal', 'goals', 'goal');
        goalCount++;
    }
    document.getElementById('addTask').onclick = function () {
        addItem(taskCount, 'inputTask', 'todo', 'task');
        taskCount++;
    }
})