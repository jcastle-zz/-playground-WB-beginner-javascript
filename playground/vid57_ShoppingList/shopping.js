// Topics: Custom events, Event delegation, Local storage, DOM events, Object reference
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state. State means a bunch of data that reflects the state of your application. Here it is a list of items, how many of each item, how expensive, coupons, etc. You should always be able to recreate application given the data. It should be reflected in object or array.
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push the items into state
  items.push(item);
  // Clear the form
  e.target.reset();
  // Fire off custom event to tell anyone else who cares that the items have been updated.
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Now we need to display our items.
function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
        <input
          value="${item.id}"
          type="checkbox"
          ${item.complete && 'checked'}
        >
        <span class="itemName">${item.name}</span>
        <button
          aria-label="Remove ${item.name}"
          value="${item.id}"
        >&times;</button aria-label="Remove>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

// Save data in local storage
function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

// Bring data back from local storage
function restoreFromLocalStorage() {
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    // items.push(lsItems[0], lsItems[1]);
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // update our items array without this one
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: We listen or the click on the list <ul> but then delegate the click over to the button if that is what was clicked.
list.addEventListener('click', function(e) {
  if (e.target.matches('button')) {
    deleteItem(parseInt(e.target.value));
  }
});

restoreFromLocalStorage();
