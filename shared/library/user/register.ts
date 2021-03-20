import serverAdr from '../server/address';


const userRegisterForm = async (
    email: string, password: string,
    dob: string, loader: Function
  ) => {
  const userData = '?data=' + encodeURIComponent(email) +
  '?data=' + encodeURIComponent(password) + '?data=' + encodeURIComponent(dob)
  console.log(userData);
  // Fetch user registeration status
  fetch(serverAdr + 'api/register', {
    headers: {
      'Content-Type': 'text/plain',
      'Authorization': userData
  }
  }).then((response) => {response.json().then((data) => {
      const result = data['status'];
      console.log(result);
      loader('none')
    })
  })
};


export default userRegisterForm;
