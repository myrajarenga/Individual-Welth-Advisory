export default function ServicesComparison() {
    const services = [
        { name: "Initial Portfolio Diagnostic", pro: true, elite: true },
        { name: "Investment Policy Statement (IPS) Dev", pro: "Standard", elite: "Bespoke" },
        { name: "Strategic Asset Allocation", pro: true, elite: true },
        { name: "Manager / Product Selection", pro: true, elite: true },
        { name: "Review Meetings", pro: "Semi-Annual", elite: "Quarterly" },
        { name: "Performance Reporting", pro: "Quarterly", elite: "Monthly" },
        { name: "Ad-hoc Email/Phone Support", pro: "Standard SLA", elite: "Priority SLA" },
        { name: "Tax Efficiency Structuring", pro: false, elite: true },
        { name: "Estate Planning Coordination", pro: false, elite: true },
        { name: "Offshore/Diaspora Optimisation", pro: "Add-on", elite: true },
        { name: "Direct Alternative Inv. Sourcing", pro: false, elite: true },
        { name: "Consolidated Family Wealth UI", pro: false, elite: true },
        { name: "Third-Party Provider Negotiation", pro: false, elite: true }
    ];

    return (
        <section id="included" className="py-16 md:py-24 px-4 bg-white scroll-mt-20 print-break">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 pl-2">
                    <span className="inline-block bg-nw-light text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-3">Section 3</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Included Services</h2>
                </div>
                <div className="bg-white border border-nw-border rounded-xl shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-nw-navy text-white text-xs font-semibold uppercase tracking-wider">
                                <th className="py-4 px-6 text-left w-1/2">Service Element</th>
                                <th className="py-4 px-6 text-center text-nw-gold">Nova Pro</th>
                                <th className="py-4 px-6 text-center text-nw-gold">Nova Elite</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nw-border">
                            {services.map((service, index) => (
                                <tr key={index} className="hover:bg-nw-light/50 transition">
                                    <td className="py-4 px-6 font-medium text-nw-navy">{service.name}</td>

                                    {/* Pro Column */}
                                    <td className="py-4 px-6 text-center">
                                        {typeof service.pro === 'boolean' ? (
                                            service.pro ? <span className="text-emerald-500 font-bold text-lg">✓</span> : <span className="text-nw-border font-bold">—</span>
                                        ) : (
                                            <span className="text-nw-muted font-medium">{service.pro}</span>
                                        )}
                                    </td>

                                    {/* Elite Column */}
                                    <td className="py-4 px-6 text-center">
                                        {typeof service.elite === 'boolean' ? (
                                            service.elite ? <span className="text-emerald-500 font-bold text-lg">✓</span> : <span className="text-nw-border font-bold">—</span>
                                        ) : (
                                            <span className="text-nw-navy font-bold">{service.elite}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
