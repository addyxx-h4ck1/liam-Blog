const newPosts = () => {
  const fetchFunc = async () => {
    const req = await fetch('database/newPost.json');
    const res = await req.json();
    const arr = res.newPosts;
    const append = document.querySelector('.popular-posts');
    arr.forEach(post => {
      let html = `<div class="pop-card">
           <img
             src="${post.img}"
             alt="">
           <div>
             <a href="${post.link}">${post.text}</a>
             <p><span>Category:</span>${post.category}</p>
           </div>
 
         </div>`
      append.innerHTML += html;
    });
  }
  fetchFunc();
}

newPosts();