var search_button = document.getElementById('search-button'),
    input_box = document.getElementById('input-box'),
    list = document.getElementById('list');

search_button.addEventListener('click',()=>{
    list.innerHTML = input_box.value;
});