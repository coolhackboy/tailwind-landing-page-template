export const metadata = {
    title: 'AskSeo - AI-based website SEO research tool',
    description: 'AskSeoOnline is an AI-driven SEO solution that provides a powerful toolkit, including keyword research tools, competitor analysis and monitoring tools, automated reporting, and data visualization capabilities.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
    return (
        <>
            <Hero/>
            <Features/>
            <FeaturesBlocks/>
            <Testimonials/>
            <Newsletter/>
        </>
    )
}
