// Array of sentences for comparison
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A stitch in time saves nine.",
    "An apple a day keeps the doctor away.",
    "Actions speak louder than words.",
    "Beauty is in the eye of the beholder."
];

const inputField = document.getElementById('inputField');
const resultsContainer = document.getElementById('resultsContainer');

// Add input event listener to input field
inputField.addEventListener('input', function (event) {
    const inputValue = event.target.value.toLowerCase(); // Get input value in lowercase

    // Filter sentences that contain the input value
    const filteredSentences = sentences.filter(sentence => sentence.toLowerCase().includes(inputValue));

    // Generate HTML for displaying filtered sentences or "Not in memory" if no results
    const resultsHTML = filteredSentences.length > 0 ? filteredSentences.map(sentence => `<div class="result">${sentence}</div>`).join('') : 'Not in memory';

    // Update results container with generated HTML
    resultsContainer.innerHTML = resultsHTML;

    if (inputValue === '') {
        resultsContainer.style.display = 'none'; // Hide results container when input is empty
    } else {
        resultsContainer.style.display = 'block'; // Show results container when input has value
    }
});

// Add click event listener to results container
resultsContainer.addEventListener('click', function (event) {
    const clickedResult = event.target;
    if (clickedResult.classList.contains('result')) {
        inputField.value = clickedResult.textContent; // Set clicked result as input value
        resultsContainer.style.display = 'none'; // Hide results container after click
    }
});
