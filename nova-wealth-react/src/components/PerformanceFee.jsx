export default function PerformanceFee() {
    return (
        <section id="performance" className="py-16 md:py-24 px-4 bg-white scroll-mt-20 print-break">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 pl-2">
                    <span className="inline-block bg-nw-light text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-3">Section 4</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Performance Fees</h2>
                </div>

                <div className="bg-white border border-nw-border rounded-xl shadow-sm overflow-hidden overflow-x-auto mb-8">
                    <table className="w-full text-sm border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-nw-navy text-white text-xs font-semibold uppercase tracking-wider">
                                <th className="py-4 px-6 text-left w-1/4">Tier</th>
                                <th className="py-4 px-6 text-left w-1/4">Fee</th>
                                <th className="py-4 px-6 text-left w-1/4">Benchmark</th>
                                <th className="py-4 px-6 text-left">Rules</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nw-border">
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 font-bold text-nw-navy">Nova Pro</td>
                                <td className="py-6 px-6 text-nw-text font-medium">8% of excess</td>
                                <td className="py-6 px-6 text-nw-text font-medium">91-day T-bill + 2%</td>
                                <td className="py-6 px-6 text-nw-text font-medium">Annual; high-water mark</td>
                            </tr>
                            <tr className="hover:bg-nw-light/50 transition">
                                <td className="py-6 px-6 font-bold text-nw-navy">Nova Elite</td>
                                <td className="py-6 px-6 text-nw-text font-medium">5% of excess</td>
                                <td className="py-6 px-6 text-nw-text font-medium">Agreed blended</td>
                                <td className="py-6 px-6 text-nw-text font-medium">Semi-annual/annual; high-water mark</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-nw-light rounded-xl p-6 border border-nw-border/50 font-mono text-sm text-nw-navy/80 overflow-x-auto whitespace-nowrap shadow-inner">
                    Fee = Rate × (Portfolio Return - Benchmark) × Avg Portfolio Value
                </div>
            </div>
        </section>
    );
}
