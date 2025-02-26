import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import VerticalSpacer from '@/components/extras/VerticalSpacer'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
    <VerticalSpacer />
    {children}
    <Footer />
    </>
  )
}

export default layout