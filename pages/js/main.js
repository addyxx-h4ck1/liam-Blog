const morePosts = () => {
    const fetchFunc = async () => {
        const req = await fetch('/database/morePost.json');
        const res = await req.json();
        const arr = res.morePosts;
        const append = document.querySelector('.recent-main-block')
        arr.forEach(post => {
            let html = `<div class="recent-overlay" style="background-image: url(${post.img});">
            <div class="recent-post">
              <a href="${post.link}"><button>Read Post</button></a>
              <p>${post.text}</p>
            </div>
          </div>`
            append.innerHTML += html;
        });
    }
    fetchFunc();
}
morePosts();