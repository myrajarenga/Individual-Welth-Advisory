export default function PricingTable() {
    return (
        <section id="retainer" className="py-16 md:py-24 px-4 bg-nw-soft scroll-mt-20 print-break">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 pl-2">
                    <span className="inline-block bg-nw-border/50 text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-3">Section 2</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Advisory Retainer Fees</h2>
                </div>
                <div className="bg-white border border-nw-border rounded-xl shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-nw-navy text-white text-xs font-semibold uppercase tracking-wider">
                                <th className="py-4 px-6 text-left w-1/3">Tier / Portfolio Range</th>
                                <th className="py-4 px-6 text-left">Quarterly (KES)</th>
                                <th className="py-4 px-6 text-left">Semi-Annual (KES)</th>
                                <th className="py-4 px-6 text-left">Annual (KES)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nw-border">
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 align-top">
                                    <div className="font-bold text-nw-navy mb-1 text-base">Nova Pro</div>
                                    <div className="text-nw-muted text-xs font-semibold tracking-wider uppercase">KES 5M–50M</div>
                                </td>
                                <td className="py-6 px-6 align-top text-nw-text font-medium">150K–250K</td>
                                <td className="py-6 px-6 align-top text-nw-text font-medium">280K–450K</td>
                                <td className="py-6 px-6 align-top text-nw-text font-medium">500K–800K</td>
                            </tr>
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 align-top">
                                    <div className="font-bold text-nw-navy mb-1 text-base">Nova Elite</div>
                                    <div className="text-nw-muted text-xs font-semibold tracking-wider uppercase">KES 50M+</div>
                                </td>
                                <td className="py-6 px-6 align-top text-nw-text font-medium">250K–500K</td>
                                <td className="py-6 px-6 align-top text-nw-text font-medium">450K–900K</td>
                                <td className="py-6 px-6 align-top text-nw-text font-medium">800K–1.5M</td>
                            </tr>
                            <tr className="hover:bg-nw-light/50 transition bg-nw-soft/50">
                                <td className="py-4 px-6 align-top font-bold text-nw-navy">USD Equivalents</td>
                                <td className="py-4 px-6 align-top text-nw-muted italic" colSpan="3">Billed at prevailing CBK central rate on invoice date.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-nw-muted mt-4 flex items-center gap-2 px-2">
                    <svg className="w-4 h-4 text-nw-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Final fees confirmed in Engagement Letter following a complimentary scoping session. Annual retainers offer best value.
                </p>
            </div>
        </section>
    );
}
