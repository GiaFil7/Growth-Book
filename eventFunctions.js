function editItem (parentItem, editButton) {
  let deleteButton = parentItem.childNodes[3]
  deleteButton.classList.add('extraMargin')
  parentItem.removeChild(editButton)
  let itemLabel = parentItem.childNodes[1]
  let editInput = document.createElement('input')
  editInput.setAttribute('type', 'text')
  editInput.setAttribute('id', 'editText')
  parentItem.appendChild(editInput)
  editInput.value = itemLabel.innerHTML
  itemLabel.innerHTML = ''
  document.getElementById('editText').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      deleteButton.classList.remove('extraMargin')
      itemLabel.innerHTML = editInput.value
      parentItem.removeChild(editInput)
      parentItem.insertBefore(editButton, deleteButton)
    }
  })
}

function deleteItem (parentItem) {
  let section = parentItem.parentElement
  section.removeChild(parentItem)
}
