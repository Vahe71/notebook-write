const info = document.querySelector('.note .page h1');
const page = document.querySelector('.note .page');
const ul = document.querySelector('.note .page ul');
const clearPosts = document.querySelector('.note .clearPosts');
const eraser = document.querySelector('.note .eraser');
clearPosts.onclick = () => {
    if (localStorage.getItem("postCurrent")) {
        localStorage.clear();
        eraser.style = 'animation: eraser 2s ease-in-out forwards; display: block;';
        setTimeout(() => {
            eraser.style.display = 'none';
            window.location.reload();
        }, 2000);
    }
};
for (let i = 0; i <= localStorage.getItem("postCurrent")-1; i++) {
    let createLiFor = document.createElement('li');
    createLiFor.setAttribute('title', 'Click to delete post');
    ul.appendChild(createLiFor);
    if (ul.children.length > 0 && localStorage.getItem("item1") && localStorage.getItem("item"+[i+1]) != null) {
        ul.children[i].innerText = i+1+'. '+localStorage.getItem("item"+[i+1]);
    }
}
localStorage.getItem("postCurrent") ? info.style.display = 'none' : '';
let postCurrent = 0;
localStorage.getItem("postCurrent") == null ? postCurrent = 0 : postCurrent = localStorage.getItem("postCurrent");
function postAdd() {
    let post = prompt('Enter text here.');
    if (post != "" && post != " " && post[0] != " ") {
        info.style = 'display: none;';
        info.innerText = '';
        postCurrent++;
        localStorage.setItem("postCurrent", postCurrent);
        let createLi = document.createElement('li');
        createLi.className = 'li' + postCurrent;
        createLi.innerText = postCurrent + `. ${post}`;
        let localCurrent = 'item' + postCurrent;
        localStorage.setItem(localCurrent, (createLi.innerText).slice(3));
        createLi.setAttribute('title', 'Click to delete post');
        ul.appendChild(createLi);
    } 
}
page.addEventListener('click', () => postAdd());
document.body.addEventListener('keydown', e => e.keyCode == 13 ? postAdd() : '');