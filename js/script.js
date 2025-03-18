// This file contains JavaScript code to handle the RSVP form submission for the birthday party website.

document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const attendance = document.getElementById('attendance').value;

        if (attendance === 'yes') {
            alert(`Merci ${name} pour votre confirmation ! Nous avons hâte de vous voir.`);
        } else {
            alert(`Merci ${name}. Nous espérons vous voir à un autre événement !`);
        }

        rsvpForm.reset();
    });
});