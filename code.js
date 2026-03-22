// Events
const events = [
  { title: "The 100 Event: Day 1", date: "Apr 11, 2026" },
  { title: "The 100 Event: Day 2", date: "Apr 12, 2026" },
];

const eventList = document.getElementById("event-list");
events.forEach(event => {
  const card = document.createElement("div");
  card.classList.add("event-card");
  const title = document.createElement("h3");
  title.textContent = event.title;
  const date = document.createElement("p");
  date.textContent = event.date;
  card.appendChild(title);
  card.appendChild(date);
  eventList.appendChild(card);
});

// Smooth nav scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    document.querySelector('.sections-container').scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Images for scrolling strips
const aboutImages = ["image1.png","image2.png","image3.png"];
const eventImages = ["event1.png","event2.png","event3.png"];

function setupInfiniteScroll(containerId, images) {
  const container = document.getElementById(containerId);
  const allImages = [...images, ...images]; // duplicate
  allImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = src;
    container.appendChild(img);
  });

  let scrollPos = 0;
  function step() {
    scrollPos += 0.5; // speed in pixels
    if (scrollPos >= container.scrollWidth / 2) scrollPos = 0;
    container.style.transform = `translateX(-${scrollPos}px)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

setupInfiniteScroll("about-images", aboutImages);
setupInfiniteScroll("event-images", eventImages);
