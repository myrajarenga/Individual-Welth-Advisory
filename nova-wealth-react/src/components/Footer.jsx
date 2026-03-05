export default function Footer() {
    return (
        <footer className="bg-nw-navy text-white/50 py-16 px-4 no-print border-t border-white/5 text-center text-xs">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">

                {/* Office Location */}
                <p className="max-w-xs md:max-w-none text-white/40 leading-relaxed font-medium">
                    Office 47, Park Court Ojijo Road, Parklands, Nairobi, Kenya
                </p>

                {/* Legal Links */}
                <div className="flex items-center gap-6 font-semibold pt-2">
                    <a href="#" className="hover:text-nw-gold transition-colors duration-200">Privacy Policy</a>
                    <a href="#" className="hover:text-nw-gold transition-colors duration-200">Terms of Service</a>
                </div>

                {/* Copyright */}
                <p className="text-white/30 pt-4 border-t border-white/5 w-full max-w-sm mt-4">
                    &copy; 2026 Nova Wealth LLP. All rights reserved.
                </p>

            </div>
        </footer>
    );
}
