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
          `KEY=${data['session']};expires=${data['expires']};path=/;Secure;SameSite=None;`
        document.cookie =
          `UID=${data['uid']};expires=${data['expires']};path=/;Secure;SameSite=None;`
        window.location.reload();
      }
    })
  })
};


export default userLoginForm;
