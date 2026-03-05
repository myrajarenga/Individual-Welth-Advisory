export default function CommissionDisclosure() {
    return (
        <section className="py-16 md:py-24 px-4 bg-nw-soft print-break">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 pl-2">
                    <span className="inline-block bg-nw-border/50 text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-3">Section 6</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Commission Disclosure</h2>
                </div>
                <p className="text-sm text-nw-muted mb-8 max-w-2xl px-2 leading-relaxed font-medium">
                    As independent advisors, our primary compensation is the retainer and performance fee. If we implement strategies using third-party products that pay a commission, we disclose the ranges below.
                </p>

                <div className="bg-white border border-nw-border rounded-xl shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-nw-navy text-white text-xs font-semibold uppercase tracking-wider">
                                <th className="py-4 px-6 text-left w-1/3">Product Category</th>
                                <th className="py-4 px-6 text-left w-1/4">Typical Commission</th>
                                <th className="py-4 px-6 text-left">Treatment</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nw-border">
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 font-bold text-nw-navy">Mutual Funds / Unit Trusts</td>
                                <td className="py-6 px-6 text-nw-text font-medium">0% – 1.0% upfront</td>
                                <td className="py-6 px-6 text-nw-text font-medium">Rebated to client or offset against retainer</td>
                            </tr>
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 font-bold text-nw-navy">Govt Bonds (Secondary)</td>
                                <td className="py-6 px-6 text-nw-text font-medium">0.05% – 0.15%</td>
                                <td className="py-6 px-6 text-nw-text font-medium">Retained to cover execution costs</td>
                            </tr>
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 font-bold text-nw-navy">Offshore Platforms</td>
                                <td className="py-6 px-6 text-nw-text font-medium">0% – 0.5% ongoing</td>
                                <td className="py-6 px-6 text-nw-text font-medium">Fully disclosed; offset against performance fee</td>
                            </tr>
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 font-bold text-nw-navy">Life Insurance / Annuities</td>
                                <td className="py-6 px-6 text-nw-text font-medium">Varies significantly</td>
                                <td className="py-6 px-6 text-nw-text font-medium">We do not accept insurance commissions. We refer to fee-only brokers.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
