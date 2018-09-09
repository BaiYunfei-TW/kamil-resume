let barsWithEnterMotion = ['skills-item', 'language-icon-level'];

barsWithEnterMotion.forEach(bar => {
    let items = document.getElementsByClassName(bar)
    for(let i = 0; i < items.length; i++){
        let item = items[i];
        let percentage = item.getAttribute('data-percent');
        let parentsWidth = item.parentElement.clientWidth;
        item.style.width = '0px';
        let interval = setInterval(function () {
            let currentWidth = parseFloat(item.style.width.replace('px', ''));
            currentWidth = currentWidth + item.parentElement.clientWidth / 80;
            if(currentWidth > parentsWidth){
                currentWidth = parentsWidth;
            }
            item.style.width = currentWidth + 'px';
            if (parseInt(item.style.width) >= item.parentElement.clientWidth * percentage) {
                clearInterval(interval);
            }
        }, 1)
    }
});