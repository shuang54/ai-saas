"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("aa4b18da-7f2e-453a-83c2-1c5a0f0de8eb");
  }, []);

  return null;
};
