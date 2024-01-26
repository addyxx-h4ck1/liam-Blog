//fetch posts
fetch('database/posts.json')
.then(res => {
    return res.json();
})
.then(res => {
    const parent = document.querySelector('.posts-sec')
    const postsData = res.posts;
    
    function displayPosts (arr) {
      let html = arr.map(post => {
        return `<div class="post">
                <img
                src="${post.img}"
                alt="">
                <a href="${post.link}">${post.text}
                </a>
                <p>
                ${post.parag} <a href="${post.link}">Read Post</a>
                </p>
                <div>
                <p><i class="fa fa-bars"></i> ${post.category}</p>
                <p><i class="fa fa-clock"></i> ${post.date}</p>
                </div>
            </div>`
    })
    html = html.join("")
    parent.innerHTML = html;
}
displayPosts(postsData)

    //////////////
    const buttons = document.querySelectorAll('.filter-block li')
    
    buttons.forEach(link => {
        link.addEventListener('click', (e) => {
            const category = e.target.dataset.id;
            const filterdPosts = postsData.filter(post => {
                if(post.category === category){
                    return post;
                }
            })
            
            ///Show Posts///
            if(category === 'All'){
                displayPosts(postsData)
            }else{
                displayPosts(filterdPosts)
            }
            link.style.backgroungColor = 'transparent'
        })
    })
   
})

