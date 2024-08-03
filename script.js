document.addEventListener("DOMContentLoaded", function() {
    const notes = document.querySelectorAll(".note");
    const detailContent = document.getElementById("detail-content");

    function updateDetails() {
        let noteInView;
        for (let note of notes) {
            const rect = note.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                noteInView = note;
                break;
            }
        }

        if (noteInView) {
            detailContent.innerHTML = `
                <h2>${noteInView.querySelector("h2").innerText}</h2>
                <p>Details for ${noteInView.querySelector("h2").innerText}</p>
            `;
        }
    }

    document.querySelector(".middle-column").addEventListener("scroll", updateDetails);
});
