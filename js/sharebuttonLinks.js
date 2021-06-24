/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const instagramBtn = document.querySelector(".instagram-btnn");
const facebookBtn = document.querySelector(".facebook-btnn");
const linkedinBtn = document.querySelector(".linkedin-btnn");
const whatsappBtn = document.querySelector(".whatsapp-btnn");

function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Check this out: ");

    instagramBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
    facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
    linkedinBtn.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
    whatsappBtn.setAttribute("href", `https://wa.me/?text=${postTitle} ${postUrl}`);
}

init();