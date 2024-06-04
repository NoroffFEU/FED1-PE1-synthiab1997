function fetchPostData() {
    const apiUrl = "https://v2.api.noroff.dev/blog/posts/Synthia";
    const postSlider = document.getElementById("post-wrapper");
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayPosts(data.data);
        })
        .catch(error => console.error("Error fetching posts:", error));

    function displayPosts(posts) {
        posts.forEach(post => {
            const postElement = createPostElement(post);
            console.log(postElement)
            postSlider.appendChild(postElement);
        });

    }

    function createPostElement(post) {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
    
        const postImage = document.createElement("img");
        postImage.src = post.media?.url;
        postImage.alt = post.media?.alt;
        postImage.className = "slider-image";
    
        const postInfo = document.createElement("div");
        postInfo.className = "post-info";
    
        const postTitle = document.createElement("h4");
        const postLink = document.createElement("a");
        postLink.href = `index_post.html?id=${post.id}`;
        postLink.textContent = post.title;
        postTitle.appendChild(postLink);
    
        const postAuthor = document.createElement("i");
        postAuthor.className = "fa fa-user";
        postAuthor.textContent = ` ${post.author.name}`;
    
        const postDate = document.createElement("i");
        postDate.className = "fa fa-calendar";
        postDate.textContent = ` ${new Date(post.created).toDateString()}`;
    
        postInfo.appendChild(postTitle);
        postInfo.appendChild(postAuthor);
        postInfo.appendChild(document.createTextNode(" "));
        postInfo.appendChild(postDate);
    
        postDiv.appendChild(postImage);
        postDiv.appendChild(postInfo);
    
        return postDiv;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetchPostData();
});
