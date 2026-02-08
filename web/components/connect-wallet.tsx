"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

interface ConnectWalletProps {
  variant?: "header" | "mobile";
}

export function ConnectWallet({ variant = "header" }: ConnectWalletProps) {
  const isMobile = variant === "mobile";
  const visibilityClass = isMobile ? "" : "max-lg:hidden";

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="flex items-center"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className={`uppercase ${visibilityClass} transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80 ${isMobile ? "text-xl py-2" : ""}`}
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className={`uppercase ${visibilityClass} transition-colors ease-out duration-150 font-mono text-red-500 hover:text-red-400 ${isMobile ? "text-xl py-2" : ""}`}
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className={`flex items-center gap-3 ${visibilityClass} ${isMobile ? "flex-col items-start" : ""}`}>
                  <button
                    onClick={openChainModal}
                    className={`uppercase transition-colors ease-out duration-150 font-mono text-foreground/60 hover:text-foreground/100 ${isMobile ? "text-xl py-2" : "text-sm"}`}
                  >
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    className={`uppercase transition-colors ease-out duration-150 font-mono text-primary hover:text-primary/80 ${isMobile ? "text-xl py-2" : ""}`}
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
