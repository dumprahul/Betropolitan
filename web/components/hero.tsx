"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">BETA</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Bet on outcomes. <br />
          <i className="font-light">Earn when you&apos;re right.</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Trade YES/NO tokens on real-world events. Create prediction markets. Claim rewards when outcomes resolve.
        </p>

        <Link className="contents max-sm:hidden" href="#markets">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Explore Markets]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="#markets">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Explore Markets]
          </Button>
        </Link>
      </div>
    </div>
  );
}
