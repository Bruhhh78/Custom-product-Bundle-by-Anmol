// Select all checkboxes with the class "chocolate"
const checkboxes = document.querySelectorAll('.chocolate');
// Select the element where the total price will be displayed
const totalElement = document.getElementById('totalAmount');
// Initialize variables to keep track of selected items and the total price
let selectedItems = 0;
let totalPrice = 0;

// Function to update the total price and display it
function updateTotalPrice(price) {
    totalPrice += price;
    totalElement.textContent = totalPrice.toFixed(2);
}

// Function to handle changes in a checkbox's state
function handleCheckboxChange(checkbox) {
    // Check if the checkbox is checked
    const isChecked = checkbox.checked;
    // Get the price of the chocolate item from the 'data-price' attribute
    const price = parseFloat(checkbox.getAttribute('data-price'));

    // Check if the checkbox is checked and the item limit (8) is not reached
    if (isChecked && selectedItems < 8) {
        selectedItems++; // Increment the selected item count
        updateTotalPrice(price); // Add the price to the total
    } 
    // Check if the checkbox is unchecked and there are selected items
    else if (!isChecked && selectedItems > 0) {
        selectedItems--; // Decrement the selected item count
        updateTotalPrice(-price); // Subtract the price from the total
    } 
    // Check if the checkbox is checked but the item limit (8) is reached
    else if (isChecked && selectedItems >= 8) {
        checkbox.checked = false; // Uncheck the checkbox
        alert("Custom Pack item list exceeded"); // Show an alert
    }
}

// Add a change event listener to each checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // Call the handleCheckboxChange function when a checkbox changes
        handleCheckboxChange(checkbox);
    });
});
