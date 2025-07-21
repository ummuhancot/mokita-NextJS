import TurkishLiterature from '@/components/turkish-literature'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <TurkishLiterature/>
      {children}
    </div>
  );
};

export default Layout