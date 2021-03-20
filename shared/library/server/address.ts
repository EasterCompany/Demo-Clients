
const getServerAdr = () => {
    if (window.location.host.startsWith('localhost')){
        return 'http://localhost:8000/';
    } else {
        return 'https://' + window.location.host + '/';
    }
}


const serverAdr = getServerAdr();

export default serverAdr;
