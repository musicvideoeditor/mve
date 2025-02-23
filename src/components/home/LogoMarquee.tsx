import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import CustomContainer from '../custom/CustomContainer'
import Marquee from 'react-fast-marquee'

const LogoMarquee = () => {
  return (
    <>
    {/* Logo marquee */}
    <Box w={["full"]} p={[4, 8]} bgColor={"#fff"}>
      {/* <CustomContainer> */}
        <Marquee style={{ height: "40px" }} delay={4}>
          <Image
            src="/brands.png"
            w={["full", "full"]}
            h={"40px"}
            objectFit={"contain"}
          />
        </Marquee>
      {/* </CustomContainer> */}
    </Box>
    
    </>
  )
}

export default LogoMarquee