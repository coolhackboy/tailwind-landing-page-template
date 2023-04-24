'use client'

import { useState } from 'react'
import Image from 'next/image'
import HeroImage from '@/public/images/hero-image.png'
import Modal from '@/components/utils/modal'

import Home from '@/components/home'
import {GoogleAnalytics} from "nextjs-google-analytics";


export default function Hero() {

  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false)

  return (

    <section className="relative">
        <GoogleAnalytics trackPageViews />

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">


          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <div className="my-4 inline-block"> {/* 添加一个div，包含居中样式 */}
              <a href="https://www.producthunt.com/posts/ai-seo-copilot-by-askseo?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ai&#0045;seo&#0045;copilot&#0045;by&#0045;askseo" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=390879&theme=light" alt="AI&#0032;SEO&#0032;Copilot&#0032;by&#0032;Askseo - Get&#0032;instant&#0044;&#0032;raw&#0044;&#0032;unparalleled&#0032;search&#0032;keyword | Product Hunt" className="width: 250px; height: 54px;" width="250" height="54" /></a>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Your AI SEO Copilot  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Discover what people are asking about </span> </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Get instant, raw, unparalleled search insight with AskSeoOnlie.</p>
            </div>
            <div>
              <Home />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}