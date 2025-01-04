const modal = document.querySelector(".modal");
const mobileLocationInput = document.getElementById("mobile-location");
const mobileFullTimeCheckbox = document.getElementById("mobile-checkbox");
const mobileSearchButton = document.getElementById("mobile-searchBtn");
const iconSearchButton = document.getElementById("search-icon");
const showModalButton = document.getElementById("filter-icon");
let filteredRoles = [];
const jobCardTemplate = document.querySelector(".ads");
let items = [];


fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Now 'data' contains the parsed JSON data
    // console.log(data);
    items = data; // Assign data to the wider scoped variable

    for (let job of items.slice(0, 12)) {
      jobCards(job);
    }
  })
  .catch(error => console.error('Error fetching JSON:', error));
  
const jobAds = document.querySelector(".ads");

function jobCards(job) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("job-ad");

    const logoContainer = document.createElement("div")
    logoContainer.classList.add("company-logo");    
    logoContainer.style.backgroundColor = job.logoBackground;
    
    const logo = document.createElement("img");
    logo.setAttribute("src", job.logo);

    const rolePreview = document.createElement("div");
    rolePreview.classList.add("role-preview");
    rolePreview.setAttribute("dataID", job.id)

    const roleSpecs = document.createElement("div");
    roleSpecs.classList.add("role-specs");

    const timeListed = document.createElement("span")
    timeListed.setAttribute("id", "time-listed")
    timeListed.textContent = job.postedAt;

    const shiftType = document.createElement("ul")
    shiftType.id = "shift-type";
    const contract = document. createElement("li")
    contract.textContent = job.contract;

    const role = document.createElement("h2");
    role.textContent = job.position;
    role.id = "role";

    const employer = document.createElement("p");
    employer.textContent = job.company;
    employer.id = "employer";

    const location = document.createElement("p");
    location.textContent = job.location;
    location.id = "job-location";

    logoContainer.appendChild(logo);
    cardContainer.appendChild(logoContainer);
    shiftType.appendChild(contract);
    roleSpecs.appendChild(timeListed);
    roleSpecs.appendChild(shiftType);
    rolePreview.appendChild(roleSpecs);
    rolePreview.appendChild(role);
    rolePreview.appendChild(employer);
    rolePreview.appendChild(location);
    cardContainer.appendChild(rolePreview);
    jobAds.appendChild(cardContainer);

    rolePreview.addEventListener("click", (e) => {
       if(e.target.attributes.dataID) {
        window.location.href=`job-description.html?id=${job.id}`
       }
    })
}

const searchInput = document.getElementById("title");
const locationInput = document.getElementById("location");
const fullTimeCheckbox = document.getElementById("checkbox");
const searchButton = document.getElementById("searchBtn")

//Mobile Search Variables



// Assume you have a button with id "resetFiltersButton" in your HTML
const resetFiltersButton = document.getElementById("resetFiltersButton");

// Add an event listener for the Reset Filters button
resetFiltersButton.addEventListener("click", resetFilters);

// Add an event listener for the Search button
searchButton.addEventListener("click", () => {
  let searchValue = searchInput.value;
  let locationValue = locationInput.value; 
  let checkboxValue = fullTimeCheckbox.checked;

  if (searchValue || locationValue || checkboxValue) {
    handleFilter(searchValue, locationValue, checkboxValue)}
});

mobileSearchButton.addEventListener("click", () => {
  let searchValue = searchInput.value;
  let locationValue = mobileLocationInput.value; 
  let checkboxValue = mobileFullTimeCheckbox.checked;

  if (searchValue || locationValue || checkboxValue) {
    handleFilter(searchValue, locationValue, checkboxValue)}
})

iconSearchButton.addEventListener("click", () => {
  let searchValue = searchInput.value;
  let locationValue = mobileLocationInput.value; 
  let checkboxValue = mobileFullTimeCheckbox.checked;

  if (searchValue || locationValue || checkboxValue) {
    handleFilter(searchValue, locationValue, checkboxValue)}
})



function handleFilter(searchValue, locationValue, isFullTime) {

  // Remove all existing job cards
  jobAds.innerHTML = "";

  // Filter jobs based on the input values and checkbox state
    const filteredJobs = items.filter(job => {
    const jobTitle = job.position.toLowerCase();
    const companyName = job.company.toLowerCase();
    const description = job.description.toLowerCase();
    const jobLocation = job.location.toLowerCase();
    const jobType = job.contract.toLowerCase();

    // Check if the input values match any part of the job title, company name, description, and location
    const titleMatch = jobTitle.toLowerCase().includes(searchValue.toLowerCase()) || companyName.toLowerCase().includes(searchValue.toLowerCase()) || description.toLowerCase().includes(searchValue.toLowerCase());
    const locationMatch = jobLocation.toLowerCase().includes(locationValue.toLowerCase());
    const typeMatch = !isFullTime || (isFullTime && jobType === "full time");
    return titleMatch && locationMatch && typeMatch;
  });

  // If there are no filtered jobs, display an error message
  if (filteredJobs.length === 0) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "No matching jobs found.";
    errorMessage.classList.add("error-message");
    jobAds.appendChild(errorMessage);
    // Insert clear filters button
  } else {
    // Render the filtered job cards
    filteredJobs.forEach(job => {
      jobCards(job);
    });
  }
  if (filteredJobs.length <= 12) {
    loadMore.style.display = "none";
  }

  resetFiltersButton.style.display = "inline";
}

// Function to reset all filters and show all job cards
function resetFilters() {
  // Reset your filters or perform any other actions
  searchInput.value = ""; // Clear search input
  locationInput.value = ""; // Clear location input
  mobileLocationInput.value ="";
  mobileFullTimeCheckbox.checked = false;
  fullTimeCheckbox.checked = false; // Uncheck the full-time checkbox

  jobAds.innerHTML = "";
  // Call your filter function again to show all jobs
  // items.forEach(job => {
  //   jobCards(job)
  // })

  for (let job of items.slice(0, 12)) {
    jobCards(job);
  }

  resetFiltersButton.style.display = "none";

  loadMore.style.display = "inline";
}

resetFiltersButton.addEventListener("click", resetFilters);


const loadMore = document.getElementById("load-jobs");

loadMore.addEventListener("click", () => {
  for (let job of items.slice(12, 15)) {
    jobCards(job);
  }
  loadMore.style.display = "none"
});

// Show modal when clicking the filter icon
showModalButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Hide modal when clicking outside the modal
modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Stop event propagation for specific elements inside the modal
const stopPropagationElements = ["mobile-filter2", "mobile-filter3", "mobile-search-button"];
stopPropagationElements.forEach((elementClass) => {
  const element = document.querySelector(`.${elementClass}`);
  element?.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

// Function to handle the search logic
const performSearch = () => {
  const locationValue = mobileLocationInput.value;
  const isFullTimeChecked = mobileFullTimeCheckbox.checked;

  // Your search logic here based on locationValue and isFullTimeChecked

  // Close the modal after performing the search
  modal.style.display = "none";
};

// Handle search button click
mobileSearchButton.addEventListener("click", performSearch);

// Optionally, handle pressing Enter key to trigger search
mobileLocationInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});
