import { useState, useEffect } from 'react';

export default function SplashLoader({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        if (onComplete) onComplete();
                    }, 300); // Wait a bit at 100% before fading out
                    return 100;
                }
                // Random progress increments for realistic feel
                return p + Math.floor(Math.random() * 15) + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] bg-nw-navy flex flex-col items-center justify-center transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center gap-6 w-full max-w-xs px-6">
                <div className="flex items-center gap-2">
                    {/* Logo representation */}
                    <span className="font-extrabold text-white tracking-[.15em] text-xl md:text-2xl">NOVA WEALTH</span>
                    <span className="text-nw-gold text-xs font-semibold tracking-widest uppercase">LLP</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-nw-gold transition-all duration-200 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Loading text optionally */}
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mt-2">
                    Initializing Workspace
                </p>
            </div>
        </div>
    );
}
