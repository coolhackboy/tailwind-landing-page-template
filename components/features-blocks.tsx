'use client'
import {GoogleAnalytics} from "nextjs-google-analytics";

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      <GoogleAnalytics trackPageViews />
      
    </section>
  )
}