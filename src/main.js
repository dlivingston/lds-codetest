const articleData = {
    "images": [
        {
            "src": "assets/photo01.jpg",
            "thumb": "assets/photo01-thumb.png",
            "img_title": "Corrupti quos dolores",
            "img_cap": "Facere possimus"
        },
        {
            "src": "assets/photo02.jpg",
            "thumb": "assets/photo02-thumb.png",
            "img_title": "Architecto beatae",
            "img_cap": "vitae dicta sunt explicabo"
        }
    ]
}



function switchImage(num) {
    const thumbs = document.querySelectorAll('.img-thumbs .thumb');
    for(let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove('selected');
    }
    thumbs[num].classList.add('selected');
    const articleImage = document.getElementById('article_image');
    articleImage.src = articleData.images[num].src;
    document.querySelector('.title-caption h4').innerText = articleData.images[num].img_title;
    document.querySelector('.title-caption h5').innerText = articleData.images[num].img_cap;
}