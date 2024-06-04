const  fetchPosts = ()=>{
    const response = await fetch(`https://v2.api.noroff.dev/square-eyes/${movieId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch movie ${movieId}`);
    }
    const data = await response.json();
}
