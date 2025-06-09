const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

// change-able variable that is an array that is equal to the results of the function getChaptersList or an enpty list.
// || means or and [] means an empty array if the function returns null or undefined.
let chaptersArray = getChaptersList() || [];

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);  
        setChapterList(); 
        input.value = '';
        input.focus();
    }
});

// Takes the chapters array and loops through each item in the array displaying each chapter in the list.
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌'
    li.append(deleteButton);
    list.append(li); 
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'))
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    // returns everything except the chapter to be removed
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList()
}