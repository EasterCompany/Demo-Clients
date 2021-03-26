import serverAdr from '../server/address';
import { md5 } from 'hash-wasm';


const userLoginForm = async (email: string, password: string, loader: Function) => {
  // Fetch login credentials
  fetch(serverAdr + 'api/login', {
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': email + ' ' + await md5(password)
  }
  }).then((response) => {response.json().then((data) => {
      const result = data['status'];
      loader('none');
      if (result === 'BAD') {
        const errorEl = document.getElementById('login-error-message') as HTMLElement;
        if (errorEl !== null) errorEl.style.display = 'block';
      } else {
        document.cookie =
          `KEY=${data['session']};path=/;Secure;SameSite=None;`
        document.cookie =
          `UID=${data['uid']};path=/;Secure;SameSite=None;`
        window.location.reload();
      }
    })
  })
};


const verifySession = async (uid: any, key: any) => {
  await fetch(serverAdr + 'api/login/verify', {
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': uid + ' ' + key
    }
  }).then(response => {response.json().then((data) => {
    console.log(uid, key, data);
    if (data['status'] === 'BAD') {
      document.cookie = `KEY=none;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
      document.cookie = `UID=none;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
      window.location.reload();
    }
  })})
}


export default userLoginForm;
export { verifySession };
