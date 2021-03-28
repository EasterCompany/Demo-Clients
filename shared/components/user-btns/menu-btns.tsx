import menuImage from '../../assets/icons/menu.svg';
import chatImage from '../../assets/icons/chat.svg';


const MenuBtns = () => {
  return <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '248px',
      height: '100%',
      maxHeight: '42px',
      margin: 'auto auto auto auto',
      justifyContent: 'space-around',
      userSelect: 'none'
    }}
  >
    <img
      src={chatImage}
      alt='menu'
      style={{
        width: '42px',
        height: '42px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    />
    <img
      src={menuImage}
      alt='menu'
      style={{
        width: '42px',
        height: '42px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    />
  </div>
}


export default MenuBtns;
