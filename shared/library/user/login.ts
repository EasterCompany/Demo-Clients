import logout from './logout';
import { md5 } from 'hash-wasm';
import serverAdr from '../server/address';


const updateUserData = (data: any) => {
  document.cookie =
    `DNME=${data['dname']};path=/;Secure;SameSite=None;`
  document.cookie =
    `DIMG=${data['image']};path=/;Secure;SameSite=None;`
  document.cookie =
    `FNME=${data['fname']};path=/;Secure;SameSite=None;`
  document.cookie =
    `LNME=${data['lname']};path=/;Secure;SameSite=None;`
}


const userLoginForm = async (email: string, password: string, loader: Function) => {
  // Fetch login credentials
  fetch(serverAdr + 'api/login', {
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': email + ' ' + await md5(password)
  }
  }).then((response) => {response.json().then((data) => {
      const result = data['status'];
      if (result === 'BAD') {
        const errorEl = document.getElementById('login-error-message') as HTMLElement;
        if (errorEl !== null) errorEl.style.display = 'block';
        loader('none');
      } else {
        document.cookie =
          `KEY=${data['key']};path=/;Secure;SameSite=None;`
        document.cookie =
          `UID=${data['uid']};path=/;Secure;SameSite=None;`
        document.cookie =
          `EMAIL=${data['email']};path=/;Secure;SameSite=None;`
        updateUserData(data);
        window.location.reload();
      }
    })
  })
};


const verifySession = async (uid: any, key: any) => {
  // Fetch session verification
  await fetch(serverAdr + 'api/login/verify', {
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': uid + ' ' + key
    }
  }).then(response => {response.json().then((data) => {
    if (data['status'] === 'OK') return updateUserData(data);
    logout();
    return window.location.reload();
  })})
}


export default userLoginForm;
export { verifySession };
