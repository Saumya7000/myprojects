//DOM Elements
const items = document.getElementById("item");
const boxright = document.getElementsByClassName("box2");
const resetButton = document.getElementById('resetButton');
items.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners for dragover and drop
boxright.addEventListener('dragover', dragOver);
boxright.addEventListener('drop', drop);

// Reset button event listener
resetButton.addEventListener('click', resetContainers);

// Drag functions
function dragStart(event) {
  // Store the dragged item's ID and set its opacity
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.style.opacity = '0.5';
}

function dragEnd(event) {
  // Restore the dragged item's opacity
  event.target.style.opacity = '1';
}

// Drop functions
function dragOver(event) {
  // Prevent default to allow drop
  event.preventDefault();
}

function drop(event) {
  // Get the dragged item's ID
  const itemId = event.dataTransfer.getData('text/plain');
  const itemElement = document.getElementById(itemId);

  // Append the dragged item to the target container
  boxright.appendChild(itemElement);

  // Display success message or update UI
  alert('Item dropped successfully!');
}

// Reset containers
function resetContainers() {
  // Clear the target container
  boxright.innerHTML = '';

  // Restore the original state of the source container
  const sourceContainer = document.getElementById('box1');
  const originalItems = sourceContainer.querySelectorAll('.item');

  originalItems.forEach((item) => {
    sourceContainer.appendChild(item);
  });
}

//Loop through each boxes element
//boxright.array.forEach(box => {
    //boxright.addEventListener("dragenter", (e) => {
     //   e.preventDefault(); //Prevent default behaviour
    //    boxright.classList.add("hovered");
      //});

       //When a draggable element leaves box element
 // boxright.addEventListener("dragover", () => {
   // boxright.classList.remove("hovered");
 // });

  //When a draggable element is dropped on a box elemen
//  boxright.addEventListener("drop", () => {
  //  boxright.appendChild(image);
  //  boxright.classList.add("hovered");
//  });
// });

  