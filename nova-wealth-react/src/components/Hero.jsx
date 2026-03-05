import heroVideo from '../Videos/Wealth_Management.mp4';

export default function Hero({ onOpenModal }) {
    return (
        <>
            <section className="relative pt-32 pb-40 md:pt-48 md:pb-56 px-4 flex flex-col items-center justify-center min-h-[100svh] min-h-screen bg-nw-navydark overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Dark Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-nw-navydark/60 z-0 transition-opacity duration-300"></div>

                {/* Subtle background glow effect equivalent to the corporate reference */}
                <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at top center, #b6975a 0%, transparent 60%)' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="inline-block bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold tracking-[.25em] uppercase text-nw-gold mb-6 px-4 py-1.5 rounded-full backdrop-blur-sm">Individual Wealth Advisory</p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                        Build a Wealth Strategy<br className="hidden md:block" /> That Works for <span className="text-transparent bg-clip-text bg-gradient-to-r from-nw-gold to-yellow-200">Your Life</span>
                    </h1>

                    <p className="text-base md:text-xl text-white/90 drop-shadow-md mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Personalized wealth advisory for professionals, entrepreneurs, families, and diaspora investors who want structure, clarity, and long-term confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                        <button onClick={onOpenModal} className="w-full sm:w-auto bg-nw-gold text-nw-navydark font-bold px-8 py-4 rounded-md hover:bg-white transition duration-300 shadow-[0_0_20px_rgba(182,151,90,0.3)] shadow-nw-gold/30">
                            Book Discovery Call
                        </button>
                        <a href="#tiers" className="w-full sm:w-auto text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/50 px-8 py-4 rounded-md transition duration-300">
                            View Advisory Tiers
                        </a>
                    </div>
                </div>

            </section>

            {/* Metric Cards - Matching the Corporate style (Now below the video) */}
            <section className="bg-nw-soft px-4 pb-16 border-b border-nw-border">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-20 -mt-16 md:-mt-20">
                    {[
                        { metric: "KES 5M+", label: "Target AUM for Elite" },
                        { metric: "Bespoke", label: "Strategy & Planning" },
                        { metric: "0%", label: "Hidden Product Fees" },
                        { metric: "4 Steps", label: "To Total Clarity" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-nw-navy shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 rounded-2xl p-6 md:p-8 text-center hover:-translate-y-2 transition duration-300 group">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 group-hover:text-nw-gold transition duration-300">{item.metric}</h3>
                            <p className="text-[10px] md:text-xs font-semibold text-white/50 uppercase tracking-widest">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
