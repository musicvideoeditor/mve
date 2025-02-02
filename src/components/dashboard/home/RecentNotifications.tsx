"use client";
import {
  Box,
  CircularProgress,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import NotificationCard from "./NotificationCard";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { fetchNotifications } from "@/lib/redux/features/notification-slice";

const RecentNotifications = () => {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notificationReducer);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchNotifications());
    ref.current = true;
  }, []);

  if (notifications.loading) {
    return (
      <Box>
        <VStack
          w={"full"}
          gap={4}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Box padding="4" rounded={4} w={"full"} bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
          </Box>
        </VStack>
      </Box>
    );
  }

  return (
    <>
      <Box>
        <VStack
          w={"full"}
          gap={4}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          {notifications.data?.map((item, i) => (
            <NotificationCard
              key={i}
              title={item.title}
              actionBtnLabel={item.ctaLabel}
              isSystemNotification={true}
              description={item?.description}
              actionBtnUrl={item.ctaUrl}
            />
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default RecentNotifications;
