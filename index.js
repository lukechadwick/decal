var decalImage = new Image;


decalImage.src = './public/bullethole.png';

let weaponImage = './public/wGun.png'


document.addEventListener('click', function(e) {
    e = e || window.event;
    var decalImg = document.createElement('img');

    let offset = 120;

    decalImg.src = decalImage.src;
    decalImg.style.position = 'absolute';
    decalImg.style.height = '150px';
    decalImg.style.width = '150px';
    decalImg.style.top = (e.pageY - offset || e.clientY - offset) + 'px';
    decalImg.style.left = (e.pageX - offset || e.clientX- offset) + 'px';
    this.body.appendChild(decalImg);
}, false);


document.addEventListener('mousemove', function(e) {
    e = e || window.event;
    var weaponImg = document.getElementById('curWeapon');

    let offset = 120;

    weaponImg.src = weaponImage
    weaponImg.style.position = 'absolute';
    weaponImg.style.top = (e.pageY - offset || e.clientY - offset) + 'px';
    weaponImg.style.left = (e.pageX - offset || e.clientX- offset) + 'px';

}, false);
