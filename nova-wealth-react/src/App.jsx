import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import ClientSegments from './components/ClientSegments';
import PricingTable from './components/PricingTable';
import ServicesComparison from './components/ServicesComparison';
import PerformanceFee from './components/PerformanceFee';
import CommissionDisclosure from './components/CommissionDisclosure';
import SpecialistServices from './components/SpecialistServices';
import HowToStart from './components/HowToStart';
import PaymentTerms from './components/PaymentTerms';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SplashLoader from './components/SplashLoader';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loadingComplete, setLoadingComplete] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <SplashLoader onComplete={() => setLoadingComplete(true)} />
            <div className={`transition-opacity duration-700 ${loadingComplete ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                <Header onOpenModal={openModal} />
                <main>
                    <Hero onOpenModal={openModal} />
                    <Approach />
                    <ClientSegments onOpenModal={openModal} />
                    <PricingTable />
                    <ServicesComparison />
                    <PerformanceFee />
                    <CommissionDisclosure />
                    <SpecialistServices />
                    <HowToStart />
                    <PaymentTerms />
                    <FinalCTA onOpenModal={openModal} />
                </main>
                <Footer />
                <BookingModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
        </>
    );
}

export default App;
