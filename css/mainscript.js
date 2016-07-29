$(function () {
    var banner = document.getElementById('_spotlight');
    var bannerHeader = document.getElementById('_spotlight-header');
    var bannerHeader2 = document.getElementById('_spotlight-header-2');
    var backgrounds = [
      'url(img/pan.jpg)',
      'url(img/klayar.jpg)'];
    var headers = [
      'Back to</br>Classic History',
      'Salt & Rocks'];
    var headers2 = [
      'Back to Classic History',
      'Klayar Beach with White Rocks'];
    var current = 0;

    function nextBackground() {
        var a = current = ++current % backgrounds.length;
        banner.style.backgroundImage = backgrounds[a];
        bannerHeader.innerHTML = headers[a];
        bannerHeader2.innerHTML = headers2[a];
        setTimeout(nextBackground, 10000);
    }
    setTimeout(nextBackground, 10000);
    banner.style.backgroundImage = backgrounds[0];
    bannerHeader.innerHTML = headers[0];
    bannerHeader2.innerHTML = headers2[0];
});
