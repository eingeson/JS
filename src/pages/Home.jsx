import { Navbar } from "../components/common"
import { Hero, Brands, Features, Working, Learn, Testimonials, FAQ } from "../components/Home"

export default function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <Brands />
        <Features />
        <Working />
        <Learn />
        <Testimonials />
        <FAQ />
        </>
    )
}