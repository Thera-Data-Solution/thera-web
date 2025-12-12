import Hero1 from "./hero1";
import Hero2 from "./hero2";
import HeroOverlay from "./overlay";

export default function HeroSection({ hero, loading}) {
    if (loading || !hero) {
        return (
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-28">
                <div className="absolute inset-0 z-0 animate-pulse bg-neutral-300" />
                <div className="relative z-10 px-6 w-full max-w-6xl mx-auto">
                    <div className="mb-4 h-10 w-2/3 bg-neutral-400/70 rounded-lg animate-pulse" />
                    <div className="mb-3 h-6 w-1/2 bg-neutral-400/60 rounded-md animate-pulse" />
                    <div className="mb-6 h-5 w-1/3 bg-neutral-400/50 rounded-md animate-pulse" />
                    <div className="h-12 w-40 bg-neutral-400/70 rounded-full animate-pulse" />
                </div>
            </section>
        );
    }

    const buttons = [
        { text: hero.buttonText, to: hero.buttonLink }
    ]
    if(hero?.isActive){
        if (hero?.theme_type === "style-1") {
            return (
                <Hero1 hero={hero} buttons={buttons} />
            );
        }
        else if (hero?.theme_type === "style-2") {
            return (
                <Hero2 hero={hero} buttons={buttons} />
            );
        }
        return <HeroOverlay hero={hero} buttons={buttons} />
    } else {
        return (
            <div className="mt-12" />
        );
    }
}