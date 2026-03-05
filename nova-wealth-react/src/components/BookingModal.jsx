import { useState } from 'react';

export default function BookingModal({ isOpen, onClose }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const resetAndClose = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 no-print">
            <div className="modal-overlay absolute inset-0" onClick={resetAndClose}></div>
            <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 md:p-8 z-10 max-h-[90vh] overflow-y-auto">
                <button onClick={resetAndClose} className="absolute top-4 right-4 text-nw-muted hover:text-nw-text text-xl font-bold">&times;</button>
                <h3 className="text-lg font-bold text-nw-navy mb-1">Book Your Discovery Call</h3>
                <p className="text-xs text-nw-muted mb-6">Your first consultation is completely free. Fill in your details below.</p>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-nw-text mb-1">Full Name *</label>
                            <input required type="text" className="w-full border border-nw-border rounded px-3 py-2 text-sm focus:outline-none focus:border-nw-gold" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-nw-text mb-1">Email *</label>
                            <input required type="email" className="w-full border border-nw-border rounded px-3 py-2 text-sm focus:outline-none focus:border-nw-gold" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-nw-text mb-1">Phone</label>
                            <input type="tel" className="w-full border border-nw-border rounded px-3 py-2 text-sm focus:outline-none focus:border-nw-gold" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-nw-text mb-1">Preferred Time</label>
                            <input type="text" placeholder="e.g. Weekday mornings" className="w-full border border-nw-border rounded px-3 py-2 text-sm focus:outline-none focus:border-nw-gold" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-nw-text mb-1">Notes</label>
                            <textarea rows="3" className="w-full border border-nw-border rounded px-3 py-2 text-sm focus:outline-none focus:border-nw-gold resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-nw-gold text-nw-navy font-bold py-3 rounded hover:bg-nw-gold-hover transition">
                            Submit Request
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-nw-navy text-lg mb-2">Request Received!</h4>
                        <p className="text-sm text-nw-muted">Our team will reach out within 24 hours to schedule your discovery call.</p>
                        <button onClick={resetAndClose} className="mt-6 text-xs font-semibold text-nw-gold hover:underline">
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
