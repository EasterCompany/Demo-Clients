import { verifySession } from './login';


const cookie = (key: string) => {
  const c = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return c ? c.pop() : "";
};


const getUserData = () => {
  const localData = {
    "uid": cookie('UID'),
    "key": cookie('KEY'),
    "dname": cookie('DNME'),
    "fname": cookie('FNME'),
    "lname": cookie('LNME'),
    "email": cookie('EMAIL'),
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
