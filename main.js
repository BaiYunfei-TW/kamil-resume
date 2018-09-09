let items = document.getElementsByClassName("skills-item")
for(let i = 0; i < items.length; i++){
    let item = items[i];
    let percentage = item.getAttribute('data-percent');
    item.style.width = 0;
    let interval = setInterval(function () {
        let currentWidth = parseFloat(item.style.width.replace('px', ''));
        currentWidth = currentWidth + item.parentElement.clientWidth / 80;
        if(currentWidth > item.parentElement.clientWidth){
            currentWidth = item.parentElement.clientWidth;
        }
        item.style.width = currentWidth + 'px';
        if (parseInt(item.style.width) >= item.parentElement.clientWidth * percentage) {
            clearInterval(interval);
        }
    }, 1)
}