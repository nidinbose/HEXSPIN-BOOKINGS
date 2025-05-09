'use client'

import Landing from "./Components/Landing"
import SplashCursor from "../Engine/SplashCursor"
import WorkArea from "./Components/WorkArea"

export default function Home() {
    return (
        <div className="relative overflow-x-hidden scroll-smooth">

                       <div className="absolute inset-0 z-0  opacity-60">
                <SplashCursor />
            </div>

                      <div className="relative z-10">
                <section className="min-h-screen overflow-hidden">
                    <Landing />
                </section>
                <section>
                    <WorkArea />
                </section>

                <section className="min-h-screen overflow-hidden">
                    <Landing />
                </section>
            </div>

        </div>
    )
}
