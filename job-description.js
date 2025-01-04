const searchParams = new URLSearchParams(window.location.search);
const jobID = searchParams.get("id");
console.log(jobID);

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(items => {
    // Now 'items' contains the parsed JSON data
    // console.log(items);
    const job = items.find((item) => {
      return item.id === parseInt(jobID);
    })
    console.log(job);
      createHeader(job);
      createJobDescription(job);
      generateFooter(job);
      displayJobTitle(job);
    }
  )
  .catch(error => console.error('Error fetching JSON:', error));

const jobAdvert = document.querySelector("main");
const companyHeader = document.querySelector("header")

function createHeader(job) {
  const centeredContainer = document.createElement("div");
  centeredContainer.classList.add("centered-div")

  const companyBanner = document.createElement("div");
  companyBanner.classList.add("company-info");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.style.backgroundColor = job.logoBackground

  const logoText = document.createElement("p");
  logoText.textContent = job.company;
  logoText.style.color = "white"

  const companyDetails = document.createElement("div");
  companyDetails.classList.add("company-name");

  const companyTitle = document.createElement("h2");
  companyTitle.textContent = job.company;

  const companyURL = document.createElement("a")
  companyURL.setAttribute("href", job.website);
  companyURL.textContent = job.company.toLowerCase() + ".com";

  const companyLogoAndTitle = document.createElement('div');
  companyLogoAndTitle.classList.add("logoAndTitle");

  const button = document.createElement("button");
  button.id = "company-site";

  const companyWebsite = document.createElement("a");
  companyWebsite.setAttribute("href", job.website);
  companyWebsite.textContent = "Company Site";

  logo.appendChild(logoText);
  // companyBanner.appendChild(logo);
  companyDetails.append(companyTitle, companyURL);
  companyLogoAndTitle.append(logo,companyDetails);
  button.appendChild(companyWebsite);
  companyBanner.append(companyLogoAndTitle, button);
  centeredContainer.appendChild(companyBanner);
  companyHeader.appendChild(centeredContainer);
}

function createJobDescription(job) {
  const centeredContainer = document.createElement("div");
  centeredContainer.classList.add("jobDescription")
  // centeredContainer.id = job.id;

  const jobHighlights = document.createElement("div")
  jobHighlights.classList.add("job-spec");

  const roleInformation = document.createElement("div");
  roleInformation.classList.add("role-information");

  const postingUpdate = document.createElement("div");
  postingUpdate.classList.add("posting-update")

  const timeListed = document.createElement("span");
  timeListed.setAttribute("id", "time-listed")
  timeListed.textContent = job.postedAt;

  const shiftType = document.createElement("ul")
  shiftType.id = "shift-type";
  const contract = document. createElement("li")
  contract.textContent = job.contract;

  const role = document.createElement("p");
  role.textContent = job.position;
  role.id = "title";

  const location = document.createElement("p");
  location.textContent = job.location;
  location.id = "location";

  const applyBtn = document.createElement("button")
  applyBtn.id = "apply";
  // applyBtn.textContent = "Apply";

  const applyBtnLink = document.createElement("a");
  applyBtnLink.setAttribute("href", job.apply);
  applyBtnLink.textContent = "Apply Now";
  
  const jobIntro = document.createElement("div");
  jobIntro.classList.add("job-intro");
  
  const jobDescription = document.createElement("p");
  jobDescription.classList.add("job-description-content");
  jobDescription.textContent = job.description;

  const jobRequirements = document.createElement("div");
  jobRequirements.classList.add("job-requirements");
  
  const requirementsTitle = document.createElement("div");
  requirementsTitle.classList.add("requirements");
  
  const requirementsHeader = document.createElement("h3");
  requirementsHeader.textContent = "Requirements";
  
  const requirementsDescription = document.createElement("div");
  requirementsDescription.classList.add("requirements-description");
  
  const requirementsContent = document.createElement("p");
  requirementsContent.classList.add("job-description-content");
  requirementsContent.textContent = job.requirements.content;
  
  const skills = document.createElement("ul");
  skills.classList.add("skills-area", "job-description-content");
  const skill1 = document.createElement("li");
  skill1.classList.add("skills-required")

  const skill2 = document.createElement("li");
  skill2.classList.add("skills-required");

  const skill3 = document.createElement("li");
  skill3.classList.add("skills-required")

  const skill4 = document.createElement("li");
  skill4.classList.add("skills-required");

  const spanItem1 = document.createElement("span");
  spanItem1.classList.add("skills-text");
  spanItem1.textContent = job.requirements.items[0]
  const spanItem2 = document.createElement("span");
  spanItem2.classList.add("skills-text");
  spanItem2.textContent = job.requirements.items[1]
  const spanItem3 = document.createElement("span");
  spanItem3.classList.add("skills-text");
  spanItem3.textContent = job.requirements.items[2]
  const spanItem4 = document.createElement("span");
  spanItem4.classList.add("skills-text");
  spanItem4.textContent = job.requirements.items[3];

  //What you will do 

  const candidateSection = document.createElement("div");
  candidateSection.classList.add("candidateSection");

  const candidateRequirements = document.createElement("div");
  candidateRequirements.classList.add("requirements");
  
  const candidateHeader = document.createElement("h3");
  candidateHeader.textContent = "What You Will Do";
  
  const candidateDescription = document.createElement("div");
  candidateDescription.classList.add("requirements-description");
  
  const candidateContent = document.createElement("p");
  candidateContent.classList.add("job-description-content");
  candidateContent.textContent = job.requirements.content;
  
  const candidateTasks = document.createElement("ol");
  candidateTasks.classList.add("skills-area", "job-description-content");
  const task1 = document.createElement("li");
  task1.classList.add("skills-required")

  const task2 = document.createElement("li");
  task2.classList.add("skills-required");

  const task3 = document.createElement("li");
  task3.classList.add("skills-required")

  const task4 = document.createElement("li");
  task4.classList.add("skills-required");

  const spanTask1 = document.createElement("span");
  spanTask1.classList.add("skills-text");
  spanTask1.textContent = job.role.items[0]
  const spanTask2 = document.createElement("span");
  spanTask2.classList.add("skills-text");
  spanTask2.textContent = job.role.items[1]
  const spanTask3 = document.createElement("span");
  spanTask3.classList.add("skills-text");
  spanTask3.textContent = job.role.items[2]
  const spanTask4 = document.createElement("span");
  spanTask4.classList.add("skills-text");
  spanTask4.textContent = job.role.items[3];




  shiftType.appendChild(contract);
  postingUpdate.appendChild(timeListed);
  postingUpdate.appendChild(shiftType);
  roleInformation.appendChild(postingUpdate);
  roleInformation.appendChild(role);
  roleInformation.appendChild(location);
  jobHighlights.appendChild(roleInformation);
  applyBtn.appendChild(applyBtnLink);
  jobHighlights.appendChild(applyBtn);
  centeredContainer.appendChild(jobHighlights);
  jobIntro.appendChild(jobDescription);
  requirementsTitle.appendChild(requirementsHeader);
  jobRequirements.appendChild(requirementsTitle);
  jobRequirements.appendChild(requirementsContent);
  skills.append(skill1, skill2, skill3, skill4);
  skill1.appendChild(spanItem1);
  skill2.appendChild(spanItem2);
  skill3.appendChild(spanItem3);
  skill4.appendChild(spanItem4);
  requirementsDescription.appendChild(skills);
  jobRequirements.appendChild(requirementsDescription);
  candidateRequirements.appendChild(candidateHeader);
  task1.appendChild(spanTask1);
  task2.appendChild(spanTask2);
  task3.appendChild(spanTask3);
  task4.appendChild(spanTask4);
  candidateTasks.append(task1, task2, task3, task4);
  candidateDescription.append(candidateContent, candidateTasks);
  candidateSection.append(candidateRequirements, candidateDescription);



  centeredContainer.appendChild(jobIntro);
  centeredContainer.appendChild(jobRequirements);
  centeredContainer.appendChild(candidateSection);
  jobAdvert.appendChild(centeredContainer);
  
}

const footerRole = document.querySelector("footer");

function generateFooter(job) {
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("container-footer", "centered-div");
  footerContainer.id = job.id

  const roleSection = document.createElement("div");
  roleSection.classList.add("footer-job");

  const jobTitle = document.createElement("div");
  jobTitle.classList.add("job-title");

  const position = document.createElement("h2");
  position.textContent = job.position;

  const company = document.createElement("p");
  company.textContent = job.company;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("apply-button");

  const button = document.createElement("button");
  // button.textContent = "Apply now";

  const applyBtnLink = document.createElement("a");
  applyBtnLink.setAttribute("href", job.apply);
  applyBtnLink.textContent = "Apply Now";

  jobTitle.append(position, company,);
  button.appendChild(applyBtnLink)
  buttonContainer.appendChild(button);
  roleSection.append(jobTitle, buttonContainer);
  footerContainer.append(roleSection);
  footerRole.appendChild(footerContainer);
}

//Darkmode

const darkModeToggle = document.getElementById("check");

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("darkmode");

  const elementsToToggle = [
    '.jobDescription',
    ".company-info",
    ".job-spec",
    ".job-intro",
    ".job-requirements",
    ".candidateSection",
    ".requirements",
    ".container-footer",
  ];

  elementsToToggle.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.toggle("darkmode-elements");
    }
  });
});

// Save dark mode preference to local storage
document.addEventListener("DOMContentLoaded", () => {
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
  darkModeToggle.checked = isDarkModeEnabled;

  if (isDarkModeEnabled) {
    darkModeToggle.dispatchEvent(new Event("change"));
  }
});

darkModeToggle.addEventListener("change", () => {
  localStorage.setItem("darkMode", darkModeToggle.checked ? "enabled" : "");
});

const header = document.querySelector("head");

function displayJobTitle(job) {
  const headerTitle = document.createElement("title");
  headerTitle.textContent = "devjobs" + " - " + job.position
  header.append(headerTitle);
}


