const relatedPosts = () => {
  const fetchFun = async () => {
    const req = await fetch("database/relatedPost.json");
    const res = await req.json();
    const arr = res.relatedPosts;
    const append = document.querySelector('.recent-block')
    arr.forEach((post) => {
      let html = `<div class="row-1-card">
            <img
              src="${post.img}"
              alt="">
            <div>
              <a href="${post.link}">${post.text}</a>
            </div>
          </div>`
          append.innerHTML += html;
    });
  };

  fetchFun();
};
relatedPosts();
