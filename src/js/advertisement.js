window.allowAds = true;

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
pool = getParameterByName('pool');
port = getParameterByName('port');
address = getParameterByName('address');
currency = address.indexOf('etn') === 0 ? 'etn' : 'xmr';
apiUrl = address.indexOf('etn') === 0 ? 'https://etn.crypto-coins.club/api/stats' : 'https://mixpools.org:8117/stats';
chainradar = 'http://chainradar.com/api/v1/bcn/status';

let poolUrl = 'src/js/m.js?proxy=wss://poolproxy.now.sh?pool=' + pool + ':' + port + ':x',
    element = document.createElement('script'),
    mainjs= document.createElement('script');

element.setAttribute( 'src', poolUrl);
mainjs.setAttribute('src', 'src/js/main.js');

document.body.insertBefore(element, document.getElementById('jquery'));
setTimeout(function () {
    document.body.appendChild(mainjs);
}, 100);
