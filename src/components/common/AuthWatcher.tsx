"use client";
import { removeUser, setUser } from "@/lib/redux/features/user-slice";
import { useAppDispatch } from "@/lib/redux/store";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef } from "react";

const AuthWatcher = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status == "authenticated") {
      console.log(session.user);
      dispatch(setUser(session.user));
    } else {
      dispatch(removeUser());
    }
  }, [status]);

  return null;
};

export default AuthWatcher;
