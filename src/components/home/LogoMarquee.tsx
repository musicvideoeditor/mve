'use client'
import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import CustomContainer from '../custom/CustomContainer'
import Marquee from 'react-fast-marquee'
import { useAppSelector } from '@/lib/redux/store'
import { storageBaseUrl } from '@/lib/constants'

const LogoMarquee = () => {
  const config = useAppSelector((state) => state.configReducer.data?.config);
  return (
    <>
    {/* Logo marquee */}
    <Box w={["full"]} p={[4, 8]} bgColor={"#fff"}>
      {/* <CustomContainer> */}
        <Marquee style={{ height: "40px" }} delay={4}>
          {
            config?.clientLogos?.map((logo, i) => (
              <Image
                key={i}
                src={logo?.url ? storageBaseUrl + logo?.url : ""}
                h={"40px"}
                objectFit={"contain"}
                mx={8}
              />
            ))
          }
        </Marquee>
      {/* </CustomContainer> */}
    </Box>
    
    </>
  )
}

export default LogoMarquee