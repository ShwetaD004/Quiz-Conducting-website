document.getElementById('startQuiz').addEventListener('click', function() {
    const selectedSubject = document.getElementById('selectSubject').value;

    if (selectedSubject === "") {
        alert("Please choose a subject.");
    } else {
        // Store the selected subject in session storage
        sessionStorage.setItem('selectedSubject', selectedSubject);
        // Redirect to the quiz page
        window.location.href = 'quiz.html';
    }
});