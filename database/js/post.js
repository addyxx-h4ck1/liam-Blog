//fetch posts
fetch('database/posts.json')
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    const parent = document.querySelector('.posts-sec')
    const postsData = res.posts

    function displayPosts(arr) {
      let html = arr.map((post) => {
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
      html = html.join('')
      parent.innerHTML = html
    }
    displayPosts(postsData)

    //////////////
    const buttons = document.querySelectorAll('.filter-block li')

    buttons.forEach((link) => {
      link.addEventListener('click', (e) => {
        const category = e.target.dataset.id
        const filterdPosts = postsData.filter((post) => {
          if (post.category === category) {
            return post
          }
        })

        ///Show Posts///
        if (category === 'All') {
          displayPosts(postsData)
        } else {
          displayPosts(filterdPosts)
        }
        link.style.backgroungColor = 'transparent'
      })
    })
  })

///////////////////////
///////////////////////

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
