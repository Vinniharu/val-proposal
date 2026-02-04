"use client";

import { ReactLenis } from "lenis/react";
import AudioPlayer from "@/components/AudioPlayer";
import Preloader from "@/components/Preloader";
import { useState } from "react";

// Sections
import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import MarchBegan from "@/components/sections/MarchBegan";
import Timeline from "@/components/sections/Timeline";
import Growth from "@/components/sections/Growth";
import Meeting from "@/components/sections/Meeting";
import Meaning from "@/components/sections/Meaning";
import Special from "@/components/sections/Special";
import Valentines from "@/components/sections/Valentines";
import Promises from "@/components/sections/Promises";
import Message from "@/components/sections/Message";
import Closing from "@/components/sections/Closing";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started && <Preloader onComplete={() => setStarted(true)} />}

      {started && (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
          <main className="w-full min-h-screen bg-navy-950 text-silver-100 overflow-x-hidden">
            <AudioPlayer autoStart={true} />

            <Hero />
            <Quote />
            <MarchBegan />
            <Timeline />
            <Growth />
            <Meeting />
            <Meaning />
            <Special />
            <Valentines />
            <Promises />
            <Message />
            <Closing />
          </main>
        </ReactLenis>
      )}
    </>
  );
}
