const hamburger = document.getElementById('hamburger');
const dropId = document.getElementById('dropId');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('aktif');
    dropId.classList.toggle('aktif');

});

    