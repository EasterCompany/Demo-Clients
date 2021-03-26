import { verifySession } from './login';


const cookie = (key: string) => {
  const c = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return c ? c.pop() : "";
};


const getUserData = () => {
  const localData = {
    "uid": cookie('UID'),
    "key": cookie('KEY')
  };
  if (localData.uid !== '' && localData.key !== '')
    verifySession(localData.uid, localData.key);
  return localData;
};


const userData = getUserData();
const isUser = (userData.uid !== '' && userData.key !== '');


export default isUser;
export {
  cookie,
  userData,
  getUserData,
};
