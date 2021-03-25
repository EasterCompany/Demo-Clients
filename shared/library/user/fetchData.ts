
const cookie = (key: string) => {
  const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};


const getUserData = () => {
  return {
    "uid": cookie('UID'),
    "key": cookie('KEY')
  };
};


const userData = getUserData();


const isUser = () => {
  return userData['uid'] && userData['key']
}


export default isUser;
