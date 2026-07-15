import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
    return (
        <>
        <Navbar />

        <main className="min-h-screen">
            <div className="flex h-[80vh] items-center justify-center">
                <h1 className="text-5x1 font-bold">
                    Wecome To My AI Portfolio
                </h1>
            </div>
        </main>

        <Footer />
        </>
    );
}