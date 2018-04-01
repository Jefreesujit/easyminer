window.allowAds = true;

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

urlMapping = {
	xmr: 'https://mixpools.org:8117/stats',
	etn: 'https://api-etn.easyhash.io/stats',
	fno: 'https://api-fno.easyhash.io/stats',
	grft: 'https://api-grft.easyhash.io/stats',
	krb: 'https://api-krb.easyhash.io/stats',
	sumo: 'https://api-sumo.easyhash.io/stats',
	bcn: 'https://bytecoin.uk:8117/stats',
	itns: 'https://pool.intensecoin.net/api/stats',
	fbf: 'https://fbf.miner.rocks/api/stats',
	dero: 'https://dero.miner.rocks/api/stats',
	crep: 'https://crep.miner.rocks/api/stats',
	xhv: 'https://haven.miner.rocks/api/stats',
	xtl: 'https://stellite.miner.rocks/api/stats',
	sup: 'https://superior.superpools.net/api/stats',
	msr: 'https://masari.superpools.net/api/stats',
	trtl: 'https://pool.turtlecoin.fr:8117/stats',
	dcy: 'https://dcy.dreampool.info/api/stats',
	coal: 'https://bitcoal.dreampool.info/api/stats',
	ipbc: 'https://ipbc.dreampool.info/api/stats',
	btn: 'https://btn.dreampool.info/api/stats',
	aeon: 'https://api.aeon-pool.com/v1/stats',
	ird: 'https://irdpool.eu:8443/stats',
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
