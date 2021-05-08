import { appName } from '../../../routes';


export const getServerAdr = () => {
  // Standalone Django Server
  if (window.location.host.endsWith(':3000')) {
    return 'http://localhost:3000';
  }
  // Child Django Server
  else if (window.location.host.startsWith('localhost')){
    return 'http://localhost:8000/';
  }
  // Local Network React Application
  else if (window.location.host.startsWith('192.168.')) {
    return window.location.host.split(':')[0] + ':8000';
  }
  // Public Domian
  else {
    return 'https://' + window.location.host + '/';
  }
}


export const serverAPI = getServerAdr() + 'api/';

const serverAdr = getServerAdr();

export default serverAdr;
