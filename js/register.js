document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("registerButton");
    const registerModal = document.getElementById("registerModal");
    const closeRegisterButton = document.getElementById(
        "closeRegisterButton"
    );

    function openRegisterModal() {
        registerModal.style.display = "block";
    }
    function closeRegisterModal() {
        registerModal.style.display = "none";
    }

    registerButton.addEventListener("click", openRegisterModal);
    closeRegisterButton.addEventListener("click", closeRegisterModal);

    window.addEventListener("click", (event) => {
        if (event.target === registerModal) {
            closeRegisterModal();
        }
    });

    document
        .querySelector("form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            closeRegisterModal();
        });
});
