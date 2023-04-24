'use client'
import {GoogleAnalytics} from "nextjs-google-analytics";

export default function Newsletter() {
  return (
    <section>
      <GoogleAnalytics trackPageViews />
    </section>
  )
}