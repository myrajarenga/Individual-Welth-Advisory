export default function ClientSegments({ onOpenModal }) {
    return (
        <section id="tiers" className="py-20 md:py-28 px-4 bg-nw-soft scroll-mt-20 print-break">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <span className="inline-block bg-nw-border/50 text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-4">Section 1</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Client Segments</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {/* Nova Pro */}
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-nw-border overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300">
                        <div className="bg-nw-navy p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full transform translate-x-10 -translate-y-10"></div>
                            <h3 className="text-sm font-bold tracking-[.2em] uppercase text-nw-gold mb-2 relative z-10">Nova Pro</h3>
                            <p className="text-3xl font-extrabold tracking-tight relative z-10">Emerging Wealth</p>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <div className="mb-6 pb-6 border-b border-nw-border">
                                <p className="text-xs font-bold uppercase tracking-wider text-nw-muted mb-2">Ideal Profile</p>
                                <p className="text-sm text-nw-text font-medium leading-relaxed">Early-to-mid career professionals building their first serious portfolio. Need structure, automated saving strategies, and clear direction.</p>
                            </div>
                            <div className="mb-8">
                                <p className="text-xs font-bold uppercase tracking-wider text-nw-muted mb-2">Portfolio Range</p>
                                <p className="text-xl font-bold text-nw-navy">KES 5M – 50M</p>
                                <p className="text-xs text-nw-muted mt-1">(or equivalent in USD)</p>
                            </div>
                            <div className="mt-auto pt-4">
                                <button onClick={onOpenModal} className="w-full bg-nw-navy text-white font-bold py-3.5 rounded-lg hover:bg-nw-navydark transition tracking-wide text-sm">Enquire Now</button>
                                <p className="text-center text-[10px] text-nw-muted mt-3 font-semibold uppercase tracking-wider">Onboarding Fee: KES 5,000</p>
                            </div>
                        </div>
                    </div>

                    {/* Nova Elite */}
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-nw-border overflow-hidden flex flex-col transition-transform hover:-translate-y-1 duration-300 relative">
                        <div className="absolute top-0 right-0 bg-nw-gold text-nw-navy text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-lg z-20">Most Popular</div>
                        <div className="bg-nw-navy p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-nw-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10"></div>
                            <h3 className="text-sm font-bold tracking-[.2em] uppercase text-nw-gold mb-2 relative z-10">Nova Elite</h3>
                            <p className="text-3xl font-extrabold tracking-tight relative z-10">Established Wealth</p>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                            <div className="mb-6 pb-6 border-b border-nw-border">
                                <p className="text-xs font-bold uppercase tracking-wider text-nw-muted mb-2">Ideal Profile</p>
                                <p className="text-sm text-nw-text font-medium leading-relaxed">Senior executives, business owners, and expatriates with complex financial lives needing comprehensive strategies, tax efficiency, and estate planning.</p>
                            </div>
                            <div className="mb-8">
                                <p className="text-xs font-bold uppercase tracking-wider text-nw-muted mb-2">Portfolio Range</p>
                                <p className="text-xl font-bold text-nw-navy">KES 50M+</p>
                                <p className="text-xs text-nw-muted mt-1">(or equivalent in USD)</p>
                            </div>
                            <div className="mt-auto pt-4">
                                <button onClick={onOpenModal} className="w-full bg-nw-gold text-nw-navy font-bold py-3.5 rounded-lg hover:bg-opacity-90 transition tracking-wide text-sm">Enquire Now</button>
                                <p className="text-center text-[10px] text-nw-muted mt-3 font-semibold uppercase tracking-wider">Onboarding Fee: KES 15,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
