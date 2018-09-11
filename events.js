function setupDiv (item, itemCount, inputType) {
  let itemDiv = document.createElement('div')
  itemDiv.setAttribute('id', item + '-' + itemCount)
  itemDiv.setAttribute('class', 'addedElements')
  let itemToAdd = document.getElementById(inputType).value
  return { itemDiv, itemToAdd }
}

function setupCheckbox (item, itemCount) {
  let itemCheckbox = document.createElement('input')
  itemCheckbox.setAttribute('type', 'checkbox')
  let itemLabel = document.createElement('label')
  itemCheckbox.setAttribute('id', item + 'Label-' + itemCount)
  itemCheckbox.setAttribute('name', item)
  itemLabel.setAttribute('for', item + 'Label-' + itemCount)
  return { itemCheckbox, itemLabel }
}

function setupButtons () {
  let itemEditButton = document.createElement('button')
  itemEditButton.setAttribute('id', 'edit')
  itemEditButton.setAttribute('class', 'btn')
  itemEditButton.setAttribute('onClick', 'editItem(this.parentElement, this)')
  itemEditButton.innerHTML = 'Edit'
  let itemDeleteButton = document.createElement('button')
  itemDeleteButton.setAttribute('id', 'delete')
  itemDeleteButton.setAttribute('class', 'btn')
  itemDeleteButton.setAttribute('onClick', 'deleteItem(this.parentElement)')
  itemDeleteButton.innerHTML = 'Delete'
  return { itemEditButton, itemDeleteButton }
}

document.addEventListener('DOMContentLoaded', function () {
  let eventCount = 1
  let goalCount = 1
  let taskCount = 1
  function addItem (itemCount, inputType, section, item) {
    if (document.getElementById(inputType).value) {
      let type = document.getElementById(section)
      const divVars = setupDiv(item, itemCount, inputType)
      const checkboxVars = setupCheckbox(item, itemCount)
      const buttonVars = setupButtons()
      // Setup of page structure
      type.appendChild(divVars.itemDiv)
      divVars.itemDiv.appendChild(checkboxVars.itemCheckbox)
      divVars.itemDiv.appendChild(checkboxVars.itemLabel)
      checkboxVars.itemLabel.innerHTML = divVars.itemToAdd
      divVars.itemDiv.appendChild(buttonVars.itemEditButton)
      divVars.itemDiv.appendChild(buttonVars.itemDeleteButton)
    }
    document.getElementById(inputType).value = ''
  }

  document.getElementById('addEvent').onclick = function () {
    addItem(eventCount, 'inputEvent', 'events', 'event')
    eventCount++
  }
  document.getElementById('addGoal').onclick = function () {
    addItem(goalCount, 'inputGoal', 'goals', 'goal')
    goalCount++
  }
  document.getElementById('addTask').onclick = function () {
    addItem(taskCount, 'inputTask', 'todo', 'task')
    taskCount++
  }
})
