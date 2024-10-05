// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filterCards function
const filterCards = (e) => {
  // Remove active class from previously active button
  document.querySelector(".active").classList.remove("active");
  // Add active class to the clicked button
  e.target.classList.add("active");

  const filterName = e.target.dataset.name;
  // console.log(filterName);

  // Iterate over each filterable card
  filterableCards.forEach((card) => {
    // Hide all cards initially
    card.classList.add("hide");

    // Show cards that match the selected filter or show all if 'all' is selected
    if (filterName === "all" || card.dataset.name === filterName) {
      card.classList.remove("hide");
    }
  });
};

// Add click event listener to each filter button
filterButtons.forEach((button) => button.addEventListener("click", filterCards));
