export default function PaymentTerms() {
    const terms = [
        { term: "Retainer Fees", detail: "Payable upfront. Annual retainers may be split 50/50 (January & July) by prior agreement." },
        { term: "Per-Session Fees", detail: "Payable before or on the day of session. No session held without confirmed payment." },
        { term: "Performance Fee", detail: "Invoiced in January (annual) or January & July (semi-annual). Payment due within 30 days." },
        { term: "Onboarding Fee", detail: "KES 5,000 (Pro) / KES 15,000 (Elite). Non-refundable. Covers KYC and client profiling." },
        { term: "Late Payment", detail: "2% per month after 7-day grace period. Services may be paused after 30 days of non-payment." },
        { term: "Payment Methods", detail: "Bank transfer (EFT/SWIFT), M-Pesa, Airtel Money, cheque. KES or USD (CBK rate on invoice date)." },
        { term: "Refund Policy", detail: "Sessions non-refundable once conducted. Retainers pro-rata refund for unused portion on early termination." },
        { term: "VAT", detail: "All fees exclusive of VAT at 16% where applicable." }
    ];

    return (
        <section className="py-16 md:py-24 px-4 bg-nw-soft scroll-mt-20 print-break">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 pl-2">
                    <span className="inline-block bg-nw-border/50 text-nw-muted text-[10px] font-bold tracking-[.2em] uppercase px-3 py-1 rounded mb-3">Section 8</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-nw-navy tracking-tight">Payment Terms & Conditions</h2>
                </div>

                <div className="bg-white border border-nw-border rounded-xl shadow-sm overflow-hidden overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-nw-navy text-white text-xs font-semibold uppercase tracking-wider">
                                <th className="py-4 px-6 text-left w-1/4">Term</th>
                                <th className="py-4 px-6 text-left">Detail</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-nw-border">
                            {terms.map((item, index) => (
                                <tr key={index} className="hover:bg-nw-light/50 transition">
                                    <td className="py-5 px-6 font-bold text-nw-navy text-[13px]">{item.term}</td>
                                    <td className="py-5 px-6 text-nw-muted font-medium">{item.detail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
