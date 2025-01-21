import Link from "next/link";
import Image from "next/image";
import { Header } from "..//components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-50">
            VehicleDevX
          </h1>
          <p className="text-xl mb-6 text-stone-400">
            Enterprise-grade vehicle price prediction powered by DevX
          </p>
          <Link
            href="/predict"
            className="inline-block bg-green-50 hover:bg-red-800 text-black font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Start Prediction
          </Link>
          <div className="mt-12">
            <Image
              src="/background.jpg"
              alt="Car Blueprint"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </main>
      <Footer/>

    </div>
  );
}
