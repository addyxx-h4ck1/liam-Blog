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

///////////////////////
///////////////////////
// {
//     "img": "https://cdn.shortpixel.ai/spai/w_924+q_lossy+ret_img+to_auto/thequeenmomma.com/wp-content/uploads/2021/04/texting-woman-YTB3E7Q-2048x1367.jpg",

//     "link": "/pages/30 Flirting Techniques for Texting with Your Boyfriend.html",

//     "text" : " 30 Flirting Techniques for Texting with Your Boyfriend",

//     "parag" : "Flirting has always been an essential component of any romantic relationship, and in the digital age, mastering the art of texting can take.......",

//     "date" : "Feb 5th 2024",

//     "category" : "Dating"
// },



// {
//     "img": "https://www.brides.com/thmb/0efxUo1O-eA11YG5S0u_nUnegqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wedding-planning-ultimate-guide-twitter-Janet-Lin-Photography-32e636bbd320476d8b343e2724a52509.jpg",

//     "link": "/pages/A Comprehensive Guide: How to Become a Wedding Planner and Thrive in the Industry.html",

//     "text" : " A Comprehensive Guide: How to Become a Wedding Planner and Thrive in the Industry",

//     "parag" : "The world of wedding planning is a dynamic and rewarding field that allows individuals to turn dreams into reality .......",

//     "date" : "Feb 14th 2024",

//     "category" : "Planning"
// },

// {
//     "img": "https://bestlifeonline.com/wp-content/uploads/sites/3/2023/02/distressed-couple-on-couch-breakup.jpg?quality=82&strip=all",

//     "link": "/pages/A Comprehensive Guide on How to Break Up with Your Girlfriend with Respect and Sensitivity.html",

//     "text" : " A Comprehensive Guide on How to Break Up with Your Girlfriend with Respect and Sensitivity",

//     "parag" : "Ending a romantic relationship is never easy, and navigating the process of breaking up with your girlfriend can be........",

//     "date" : "Feb 15th 2024",

//     "category" : "Dating"
// },

// {
//     "img": "https://www.lovepanky.com/wp-content/uploads/2016/05/how-to-sweet-talk-a-girl.jpg",

//     "link": "/pages/20 Clever Ways to Melt Her Heart with Sweet Talk.html",

//     "text" : " 20 Clever Ways to Melt Her Heart with Sweet Talk",

//     "parag" : "Effective communication is the cornerstone of any successful relationship, and when it comes to expressing your feelings, sweet talk can be a powerful tool. If you're ........",

//     "date" : "Feb 20th 2024",

//     "category" : "Relationship"
// }
///////////////////////
///////////////////////