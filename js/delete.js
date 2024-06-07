function fetchPostData() {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const apiUrl = "https://v2.api.noroff.dev/blog/posts/Synthia/"+postId;
    const postSlider = document.getElementById("main-content-wrapper");
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // displayPosts(data.data);----- reload the page instead 
                })
        .catch(error => console.error("Error fetching posts:", error));

    function deletePost() {
            const deleteUrl = "https://v2.api.noroff.dev/blog/posts/Synthia"; // Replace with your actual delete URL
            fetch(deleteUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if required
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // handle successful response
                console.log('Resource deleted successfully');
            })
            .catch(error => {
                // handle error
                console.error('There was a problem with your fetch operation:', error);
            });
        }
        
        // Call fetchPostData when DOM is loaded
        document.addEventListener("DOMContentLoaded", function () {
            fetchPostData();
        });
        

   
}

function deletePost(postId) {
    const deleteUrl = `https://v2.api.noroff.dev/blog/posts/Synthia`;

    fetch(deleteUrl, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            alert("Post deleted successfully.");
            // Remove the post from the table
            const row = document.querySelector(`button.delete[data-id='${postId}']`).closest("tr");
            row.remove();
        } else {
            throw new Error("Failed to delete post.");
        }
    })
    .catch(error => console.error("Error deleting post:", error));
}

document.addEventListener("DOMContentLoaded", function() {
    const deleteButtons = document.querySelectorAll("button.delete");

    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const postId = button.getAttribute("data-id");
            deletePost(postId);
        });
    });
});