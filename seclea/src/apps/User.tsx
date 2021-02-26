import { useState } from 'react';
import fetchData, { data as noData } from '../library/fetchAPI';
import "./User.css";

const User = () => {
  const [user, setUser] = useState(noData);
  const [size, setSize] = useState('user-img');
  const [image, setImage] = useState(noData.small);

  const newUser = (newData: any) => {
    setSize('user-img')
    setUser(newData)
    setImage(newData.small)
  }

  const toggleSize = () => {
    if (size === 'user-img') {
      setImage(user.large)
      setSize('user-img-large')
    }
    else {
      setSize('user-img')
      setImage(user.small)
    }
  }

  const nextUserPressed = () => setUser(fetchData(newUser))

  const imageAnimation = () => {
    if (image === noData.small) return 'spin 6500ms linear infinite'
    else return 'none'
  }

  return <div id="user-container">
    <div
      id="user-img"
      className={size}
      style={{
        backgroundImage: `url(${image})`,
        animation: imageAnimation()
      }}
      onClick={toggleSize}
    />

    <p id="user-name">{user.name}</p>
    <p id="user-uuid">{user.uuid}</p>

    <button
      id="user-next"
      onClick={nextUserPressed}
    > Next </button>

    <h6> click image to enlarge/minimize </h6>

  </div>
};

export default User;
