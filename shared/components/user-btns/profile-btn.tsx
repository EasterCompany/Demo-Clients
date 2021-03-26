import userImage from '../../assets/icons/userImage.svg';


const ProfileBtn = () => {
  return <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '248px',
      height: '100%',
      maxHeight: '42px',
      margin: 'auto 0 auto auto',
      justifyContent: 'space-between',
      userSelect: 'none',
      cursor: 'pointer',
    }}
  >
    <img
      src={userImage}
      alt='user'
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '42px',
        maxHeight: '42px',
        margin: 'auto 12px auto auto',
      }}
    />
    <p style={{
        fontSize: 'calc(8px + 1.5vmin)',
        margin: 'auto 0 auto 12px'
      }}
    > user_name_here </p>
  </div>
}


export default ProfileBtn;
