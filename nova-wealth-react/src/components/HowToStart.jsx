export default function HowToStart() {
    const steps = [
        { title: "Initial Enquiry & Scoping", desc: "Complimentary discovery session to understand your unique individual requirements and constraints." },
        { title: "Proposal & Fee Confirmation", desc: "We provide a tailored, transparent proposal outlining scope and confirmed fees within 5 business days." },
        { title: "Engagement Letter & Onboarding", desc: "Formal sign-off, comprehensive portfolio diagnostics, and dedicated advisory team assignment." },
        { title: "Active Advisory & Execution", desc: "Execution of the Investment Policy Statement (IPS) including portfolio reviews, risk monitoring, and quarterly reporting." }
    ];

    return (
        <section id="started" className="py-20 md:py-28 px-4 bg-white scroll-mt-20 print-break">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <span className="inline-block bg-nw-light text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-4">Section 5</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Engagement Process</h2>
                </div>

                <div className="relative pl-4 md:pl-0">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[27px] md:left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-nw-navy via-nw-gold to-white hidden md:block z-0"></div>
                    <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-nw-navy via-nw-gold to-white md:hidden z-0"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-start gap-6 md:gap-10 z-10">
                                {/* Number Circle */}
                                <div className="flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-white border-2 border-nw-navy flex items-center justify-center text-nw-navy font-bold text-lg md:text-2xl mt-1 shadow-sm">
                                    {index + 1}
                                </div>
                                {/* Content */}
                                <div className="pt-2 md:pt-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-nw-navy mb-2">{step.title}</h3>
                                    <p className="text-sm md:text-base text-nw-muted font-medium leading-relaxed max-w-2xl">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
