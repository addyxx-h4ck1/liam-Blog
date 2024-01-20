
const fetchdata = async () => {
    const req = await fetch('database/posts.json');
    const res = await req.json();
    const arr = res.posts;
    
    return arr;
   
}
const parent = document.querySelector('.posts-sec')
 async function showPosts() {
    const data =  await fetchdata();
    let html = data.map(post => {
        return `<div class="post">
                <img
                src="${post.img}"
                alt="">
                <a href="${post.link}">${post.text}
                </a>
                <p>
                ${post.parag} <a href="${post.link}">Read More</a>
                </p>
                <div>
                <p><i class="fa fa-bars"></i> ${post.category}</p>
                <p><i class="fa fa-clock"></i> ${post.date}</p>
                </div>
            </div>`
    })
    html = html.join("");
    parent.innerHTML += html;
}

showPosts();