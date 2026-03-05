import { useState, useEffect } from 'react';
import logo from '../images/Logo for Nova Wealth - Wordmark Style.svg';

export default function Header({ onOpenModal }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header id="top" className={`sticky top-0 z-50 bg-nw-navy transition-all duration-300 no-print ${isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.4)]' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[80px]">
                <a href="#top" className="flex items-center">
                    <img src={logo} alt="Nova Wealth LLP" className="w-[200px] h-auto object-contain" />
                </a>
                <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-white/70">
                    <a href="#approach" className="hover:text-nw-gold transition duration-200">Approach</a>
                    <a href="#tiers" className="hover:text-nw-gold transition duration-200">Advisory Tiers</a>
                    <a href="#retainer" className="hover:text-nw-gold transition duration-200">Fees</a>
                    <a href="#performance" className="hover:text-nw-gold transition duration-200">Performance Fee</a>
                    <a href="#started" className="hover:text-nw-gold transition duration-200">Get Started</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button onClick={() => window.print()} className="hidden md:inline-flex text-xs font-bold text-nw-gold hover:text-white transition duration-200 uppercase tracking-wider">Download PDF</button>
                    <button onClick={onOpenModal} className="bg-nw-gold text-nw-navy text-xs font-bold px-6 py-2.5 rounded hover:bg-white transition duration-300 shadow-lg shadow-nw-gold/20 tracking-wider">Book Discovery Call</button>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden flex flex-col gap-[5px] p-1 ml-2" aria-label="Menu">
                        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45 bg-nw-gold' : ''}`}></span>
                        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45 bg-nw-gold' : ''}`}></span>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden bg-nw-navydark border-t border-white/10 px-4 pb-6 absolute w-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible shadow-xl' : 'opacity-0 -translate-y-4 invisible'}`}>
                <nav className="flex flex-col gap-0 text-sm font-semibold text-white/80 pt-2">
                    <a href="#approach" onClick={closeMenu} className="py-4 border-b border-white/5 hover:text-nw-gold transition px-2">Approach</a>
                    <a href="#tiers" onClick={closeMenu} className="py-4 border-b border-white/5 hover:text-nw-gold transition px-2">Advisory Tiers</a>
                    <a href="#retainer" onClick={closeMenu} className="py-4 border-b border-white/5 hover:text-nw-gold transition px-2">Fees</a>
                    <a href="#included" onClick={closeMenu} className="py-4 border-b border-white/5 hover:text-nw-gold transition px-2">Services</a>
                    <a href="#performance" onClick={closeMenu} className="py-4 border-b border-white/5 hover:text-nw-gold transition px-2">Performance Fee</a>
                    <a href="#started" onClick={closeMenu} className="py-4 hover:text-nw-gold transition px-2 mt-2">Get Started</a>
                </nav>
            </div>
        </header>
    );
}
