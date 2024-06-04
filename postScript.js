function fetchPostData() {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const apiUrl = "https://v2.api.noroff.dev/blog/posts/Synthia/"+postId;
    const postSlider = document.getElementById("main-content-wrapper");
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayPosts(data.data);
        })
        .catch(error => console.error("Error fetching posts:", error));

    function displayPosts(posts) {
            const postElement = createPostElement(posts);
            console.log(postElement)
            postSlider.appendChild(postElement);

    }

    function createPostElement(post) {
        const mainContentWrapper = document.createElement("div");
        mainContentWrapper.className = "main-content-wrapper";
    
        const mainContent = document.createElement("div");
        mainContent.className = "main-content single";
    
        const postTitle = document.createElement("h1");
        postTitle.className = "post-title";
        postTitle.textContent = post.title;
    
        const postContent = document.createElement("div");
        postContent.className = "post-content";
    
        const postBannerImage = document.createElement("img");
        postBannerImage.src = post.media?.url;
        postBannerImage.alt = "post banner image";
        postBannerImage.className = "post-banner-image";
    
        const paragraphs = post.body.split("\n").map(paragraphText => {
            const paragraph = document.createElement("p");
            paragraph.textContent = paragraphText.trim();
            return paragraph;
        });
    
        const subheadings = ["User-Centric Design", "Empowering the Future"].map(subheadingText => {
            const subheading = document.createElement("h2");
            subheading.textContent = subheadingText;
            return subheading;
        });
    
        postContent.appendChild(postBannerImage);
        paragraphs.forEach(paragraph => postContent.appendChild(paragraph));
        subheadings.forEach(subheading => postContent.appendChild(subheading));
    
        mainContent.appendChild(postTitle);
        mainContent.appendChild(postContent);
    
        mainContentWrapper.appendChild(mainContent);
    
        return mainContentWrapper;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetchPostData();
});
