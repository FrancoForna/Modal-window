'use strict';

// Declaring variables to use //////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Function to delete the hidden class //////////////////////////////////
const deleteHidden = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Bucle para recorrer los elementos de la clase y aplicar la funcion de remover la clase hidden a cada uno //////////////////////////////////////////////////////////////////
// loop to rove the elements of the class and apply the function to them //////////////////////////////////////////////////////////////////
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', deleteHidden);
}

// Close the popup //////////
const closeThePopup = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeThePopup);
overlay.addEventListener('click', closeThePopup);

// Close the window with escape key //////////////////
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeThePopup();
  }
});
