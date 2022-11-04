let elPostsList = document.querySelector('.posts-list');
let elSearchIcon = document.querySelector('.search-icon');
let elInputBox = document.querySelector('.short-input-box');
let elSearchBox = document.querySelector('.short-search-box');


elSearchIcon = document.addEventListener('click', ()=> {
    elInputBox.classList.add('search-input');
    elInputBox.classList.remove('short-input-box');
    elSearchBox.classList.add('input-box');
    elSearchBox.classList.remove('short-search-box');
});


document.addEventListener('DOMContentLoaded', async () => {
    let data = await fetch('https://dummyjson.com/posts', {
        method: 'GET',
    });
    let post_data = await data.json();
    let elFrag = document.createDocumentFragment();
    post_data.posts.forEach(element => {
        let newTitle = document.createElement('a');
        let newLi = document.createElement('li');
        let newText = document.createElement('p');
        let newTags = document.createElement('p');
        newTitle.href = '#';
        newTitle.textContent = element.title;
        newText.textContent = element.body;
        newTags.textContent = element.tags;
        newLi.append(newTitle);
        newLi.append(newText);
        newLi.append(newTags);
        elFrag.append(newLi);
    });
    elPostsList.append(elFrag);
});
// elInputBox.addEventListener('change', ()=> {
//     if (newTitle.textContent.toLowerCase().includes(elInputBox.value.toLowerCase()) == false) {
//         elPostsList.classList.add('none');
//     }
// });
