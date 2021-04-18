
const getServerAdr = () => {
  if (window.location.host.startsWith('localhost')){
    return 'http://localhost:8000/';
  } else if (window.location.host.startsWith('192.168.')) {
    return window.location.host.split(':')[0] + ':8000';
  } else {
    return 'https://' + window.location.host + '/';
  }
}


const serverAdr = getServerAdr();

export default serverAdr;
