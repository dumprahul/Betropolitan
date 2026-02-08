"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Betropolitan",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "066465a4f5d400c9eccad76612f98c5a",
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
