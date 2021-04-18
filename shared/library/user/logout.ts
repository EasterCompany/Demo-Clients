

const logout = () => {
    // Cookies to remove
    const toRemove = [
        'KEY', 'UID', 'DIMG', 'DNME', 'FNME', 'LNME', 'EMAIL'
    ]
    // Remove user cookies
    toRemove.forEach(
        v => {
            document.cookie = `${v}=none;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        }
    )
    // Reload the page
    window.location.reload();
}


export default logout;
