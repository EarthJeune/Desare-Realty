document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const agentCards = document.querySelectorAll(".agent-card");

    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.toLowerCase().trim();
        
        agentCards.forEach(card => {
            const agentName = card.querySelector(".agent-name").textContent.toLowerCase();
            
            if (agentName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});