// =========================
// Mobile Navigation
// =========================

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// =========================
// Room Booking Button
// =========================

function bookRoom(roomName) {

    const roomSelect = document.getElementById("room");

    roomSelect.value = roomName;

    // Scroll to booking form
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// Booking Form
// =========================

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const room =
        document.getElementById("room").value;

    const date =
        document.getElementById("date").value;


    if (!name || !email || !room || !date) {

        alert("Please fill in all fields.");

        return;
    }


    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your booking request for " +
        room +
        " on " +
        date +
        " has been received."
    );


    // Clear form
    bookingForm.reset();
});
