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

//////////////////////
//////////////////////
// {
//   "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARylTOlZF5CXVgBNsb0OFJ_h-9WgSJtSECERaNRdYnCyCn-Sum9xjQ00sTLd1vkpJm9c&usqp=CAU",
//   "link" : "/pages/30 Flirting Techniques for Texting with Your Boyfriend.html",
//   "text" : "30 Flirting Techniques for Texting with Your Boyfriend"
  
// },
// {
//   "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17DLAc2M14QQnMRnoPj1e6cdo7QPbpD2U1TmWtcmAaL2DT21kPFolYor1dHwhnEQCmHA&usqp=CAU",
//   "link" : "/pages/A Comprehensive Guide: How to Become a Wedding Planner and Thrive in the Industry.html",
//   "text" : "A Comprehensive Guide: How to Become a Wedding Planner and Thrive in the Industry"
// },
// {
//   "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17DLAc2M14QQnMRnoPj1e6cdo7QPbpD2U1TmWtcmAaL2DT21kPFolYor1dHwhnEQCmHA&usqp=CAU",
//   "link" : "/index.html",
//   "text" : "40 Best Tips On Making A Long-Distance Relationship Work[STEP-BY-STEP GUIDE]"
// }
//////////////////////
//////////////////////