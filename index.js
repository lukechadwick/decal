var decalImage = new Image;


decalImage.src = './public/blood.png';

let weaponImage = './public/wKnife.png'


document.addEventListener('mousemove', function(e) {
    e = e || window.event;
    var weaponImg = document.getElementById('curWeapon');

    let offset = 120;

    weaponImg.src = weaponImage
    weaponImg.style.position = 'absolute';
    weaponImg.style.zIndex = 1;
    weaponImg.style.top = (e.pageY - offset || e.clientY - offset) + 'px';
    weaponImg.style.left = (e.pageX - offset || e.clientX- offset) + 'px';

}, false);


document.addEventListener('click', function(e) {
    e = e || window.event;
    var decalImg = document.createElement('img');

    let offset = 120;

    decalImg.src = decalImage.src;
    decalImg.style.zIndex = 0;

    decalImg.style.position = 'absolute';
    decalImg.style.height = '150px';
    decalImg.style.width = '150px';
    decalImg.style.top = (e.pageY - offset || e.clientY - offset) + 'px';
    decalImg.style.left = (e.pageX - offset || e.clientX- offset) + 'px';
    this.body.appendChild(decalImg);
}, false);

