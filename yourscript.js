const newsData = [
    { title: "Breaking News 1", content: "Lorem ipsum dolor sit amet...", date: "2024-01-21" },
    { title: "Important Update", content: "Consectetur adipiscing elit...", date: "2024-01-20" },
    { title: "Test News", content: "Consectetur adipiscing elit Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...", date: "2024-01-22" },
    // Add more news items as needed
];

// Function to display news on the news page
function displayNews() {
    // Sort newsData by date in descending order
    const sortedNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Display news on the news page
    const newsContainer = document.getElementById("newsContainer");
    sortedNews.forEach(item => {
        const newsItem = document.createElement("div");
        newsItem.className = "mb-4";
        newsItem.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.content}</p>
            <p class="text-muted">${formatDate(item.date)}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Function to format the date (optional)
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Call the displayNews function when the page is loaded
document.addEventListener("DOMContentLoaded", displayNews);
