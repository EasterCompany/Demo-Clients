import serverAdr from '../server/address';


const userLoginForm = async (email: string, password: string, loader: Function) => {
  // Fetch login credentials
  fetch(serverAdr + 'api/login', {
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': email + ' ' + password
  }
  }).then((response) => {response.json().then((data) => {
      const result = data['status'];
      loader('none');
      if (result === 'BAD') {
        const errorEl = document.getElementById('login-error-message') as HTMLElement;
        if (errorEl !== null) errorEl.style.display = 'block';
      } else {
        document.cookie = `session_token=${result};`
        window.location.reload();
      }
    })
  })
};


export default userLoginForm;
