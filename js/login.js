document.getElementById('loginButton').addEventListener('click', function() {
    // Redirect to the marketplace.html page
    window.location.href = 'marketplace.html';
  });

    const loginModal = document.getElementById("loginModal");
    const loginForm = document.getElementById("loginForm");
    const closeButton = document.getElementById("closeButton");
    const submitButton = document.getElementById("submitButton");

    // Function to open the login modal
    function openLoginModal() {
      loginModal.style.display = "block";
    }

    // Function to close the login modal
    function closeLoginModal() {
      loginModal.style.display = "none";
    }

    // Event listener for the close button
    closeButton.addEventListener("click", closeLoginModal);

    // Event listener for the submit button (assuming you have a submit button in your HTML)
    submitButton.addEventListener("click", closeLoginModal);

    // Event listener to close the modal when clicking outside the modal
    window.addEventListener("click", (event) => {
      if (event.target != loginModal) {
        closeLoginModal();
      }
    });