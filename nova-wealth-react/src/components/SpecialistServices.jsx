export default function SpecialistServices() {
    const services = [
        { service: "Bespoke Research", fee: "250K–500K", notes: "Deep-dive on specific asset classes or illiquid alternative investments" },
        { service: "Manager Search (RFP)", fee: "350K–700K", notes: "End-to-end selection process for external fund managers" },
        { service: "Governance Audit", fee: "250K–500K", notes: "For clients with complex trusts/foundations. Gap analysis & remediation roadmap" },
        { service: "Ad Hoc Consultation", fee: "25K–50K/hour", notes: "Min 2-hour blocks for specific transactions or second opinions outside retainer" }
    ];

    return (
        <section className="py-16 md:py-24 px-4 bg-white print-break">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 pl-2">
                    <span className="inline-block bg-nw-light text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-3">Section 7</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Specialist Services</h2>
                </div>

                <div className="bg-white border border-nw-border rounded-xl shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-nw-navy text-white text-xs font-semibold uppercase tracking-wider">
                                <th className="py-4 px-6 text-left w-1/3">Service</th>
                                <th className="py-4 px-6 text-left w-1/4">Fee (KES)</th>
                                <th className="py-4 px-6 text-left">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nw-border">
                            {services.map((item, index) => (
                                <tr key={index} className="hover:bg-nw-light/50 transition">
                                    <td className="py-6 px-6 font-bold text-nw-navy">{item.service}</td>
                                    <td className="py-6 px-6 text-nw-text font-medium">{item.fee}</td>
                                    <td className="py-6 px-6 text-nw-text font-medium">{item.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
