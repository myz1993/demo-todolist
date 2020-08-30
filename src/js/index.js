"use strict";

const addButton = document.querySelector('section.addItem button')
const addItem = document.querySelector('section.addItem input')
const ulTag = document.querySelector('section.itemList ul')

const deleteLiTag = function (event) {
  //find clicked button tag
  const clickedDeleteButton = event.target
  //find the parent
  const targetLi = clickedDeleteButton.parentElement
  //remove li tag
  targetLi.remove()
}


const createLiTag = function (value) {
  // create li tag
  const LiTag = document.createElement('li')
  //create span tag
  const spanTag = document.createElement('span')
  //create delete button
  const deleteButton = document.createElement('button')
  //put input value into span tag
  spanTag.innerText = value
  //put delete text into delete button
  deleteButton.innerText = 'Delete'

  //add listen event to delete button
  deleteButton.addEventListener('click', deleteLiTag)
  //put span and delete into li tag
  LiTag.appendChild(spanTag)
  LiTag.appendChild(deleteButton)
  //return li tag
  return LiTag
}

const createNewList = function () {
  console.log('clicked')

  //get input value
  const inputValue = addItem.value

  //use input value generate li 
  const liTag = createLiTag(inputValue)
  //append li into ul
  ulTag.appendChild(liTag)

  addItem.value = ''
}

addButton.addEventListener('click', createNewList)
