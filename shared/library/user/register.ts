import serverAdr from '../server/address';
import { md5 } from 'hash-wasm';


const userRegisterForm = async (
    email: string, password: string,
    dob: string, loader: Function
  ) => {
  const userData =
    '?data=' + encodeURIComponent(email) +
    '?data=' + encodeURIComponent( await md5(password) ) +
    '?data=' + encodeURIComponent(dob)
  // Fetch user registeration status
  fetch(serverAdr + 'api/register', {
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': userData
  }
  }).then((response) => {response.json().then((data) => {
      const result = data['status'];
      if (result !== 'OK') alert(result);
      loader('none')
      if (result === 'OK') window.location.reload();
    })
  })
};


export default userRegisterForm;
