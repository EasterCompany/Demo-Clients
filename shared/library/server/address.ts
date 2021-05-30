import { appName } from '../../../routes';


export const getEndpoints = () => {
  // Standalone Django Server
  if (window.location.host.endsWith(':3000')) {
    return {
      domain: 'http://localhost:3000/',
      api: 'http://localhost:3000/api'
    };
  }
  // Child Django Server
  else if (window.location.host.startsWith('localhost')){
    return {
      domain: 'http://localhost:8000/' + appName,
      api: 'http://localhost:8000/' + appName + '/api/'
    };
  }
  // Local Network React Application
  else if (window.location.host.startsWith('192.168.')) {
    return {
      domain: window.location.host.split(':')[0] + ':8000/' + appName,
      api: window.location.host.split(':')[0] + ':8000/' + appName + '/api/'
    };
  }
  // Public Domian
  else {
    return {
      domain: 'https://' + window.location.host + '/',
      api: 'https://' + window.location.host + '/api/'
    };
  }
}


export const endPoints = getEndpoints();
export const serverAdr = endPoints.domain;
export const serverAPI = endPoints.api;

//const serverAdr = getServerAdr();

export default serverAdr;
