import logo from '../assets/logo.svg';

const data = {
  uuid: 'xxx-xxx-xxx',
  name: 'No User',
  small: logo,
  large: logo,
}

const fetchData = (callback: Function) => {
  fetch('https://randomuser.me/api').then(resp => {
  resp.json().then(data => {
      const user = data.results[0];
      data.uuid = user.login.uuid;
      data.name = user.login.username;
      data.small = user.picture.medium;
      data.large = user.picture.large;
      return callback(data);
    })
  })
  return data;
}

export default fetchData;
export { data };
