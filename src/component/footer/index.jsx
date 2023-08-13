import React from 'react';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', backgroundColor: '#f2f2f2', padding: '10px 0' }}>
      &copy; {new Date().getFullYear()} Your Attendance App. All rights reserved.
    </footer>
    
  );
};

export default Footer;