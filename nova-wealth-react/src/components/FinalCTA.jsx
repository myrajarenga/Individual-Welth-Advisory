export default function FinalCTA({ onOpenModal }) {
    return (
        <section className="bg-nw-gold py-16 md:py-20 px-4 no-print">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-nw-navy mb-3">Ready to get clarity on your money?</h2>
                <p className="text-sm text-nw-navy/70 mb-8">Book a complimentary discovery call and get a recommended advisory tier based on your goals.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button onClick={onOpenModal} className="bg-nw-navy text-white font-bold px-6 py-3 rounded hover:bg-black transition">
                        Book Discovery Call
                    </button>
                    <button onClick={() => window.print()} className="border-2 border-nw-navy text-nw-navy font-bold px-6 py-3 rounded hover:bg-nw-navy hover:text-white transition">
                        Download Rate Card PDF
                    </button>
                </div>
            </div>
        </section>
    );
}
