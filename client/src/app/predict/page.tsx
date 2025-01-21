"use client";

import { useState } from "react";
import axios from "axios";
import { Header } from "../../components/ui/Header";
import Footer from "@/components/ui/Footer";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface FormData {
  Year: number;
  Present_Price: number;
  Kms_Driven: number;
  Owner: number;
  Car_Name: string;
  Fuel_Type: "Petrol" | "CNG" | "Diesel";
  Seller_Type: "Individual" | "Dealer";
  Transmission: "Automatic" | "Manual";
}

export default function Predict() {
  const [formData, setFormData] = useState<FormData>({
    Year: 2023,
    Present_Price: 0,
    Kms_Driven: 0,
    Owner: 1,
    Car_Name: "",
    Fuel_Type: "Petrol",
    Seller_Type: "Individual",
    Transmission: "Manual",
  });
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}`, formData);
      setPrediction(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while predicting. Please try again.");
    }
    setLoading(false);
  };

  const resetPrediction = () => {
    setPrediction(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-50">
          Vehicle Price Prediction
        </h1>
        {prediction === null ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto bg- p-8 rounded-lg shadow-xl"
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Year"
                >
                  Year
                </label>
                <input
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Year"
                  type="number"
                  name="Year"
                  value={formData.Year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Present_Price"
                >
                  Present Price
                </label>
                <input
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Present_Price"
                  type="number"
                  name="Present_Price"
                  value={formData.Present_Price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Kms_Driven"
                >
                  Kms Driven
                </label>
                <input
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Kms_Driven"
                  type="number"
                  name="Kms_Driven"
                  value={formData.Kms_Driven}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Owner"
                >
                  Owner
                </label>
                <input
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Owner"
                  type="number"
                  name="Owner"
                  value={formData.Owner}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Car_Name"
                >
                  Car Name
                </label>
                <input
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Car_Name"
                  type="text"
                  name="Car_Name"
                  value={formData.Car_Name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Fuel_Type"
                >
                  Fuel Type
                </label>
                <select
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Fuel_Type"
                  name="Fuel_Type"
                  value={formData.Fuel_Type}
                  onChange={handleChange}
                  required
                >
                  <option>Petrol</option>
                  <option>CNG</option>
                  <option>Diesel</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Seller_Type"
                >
                  Seller Type
                </label>
                <select
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Seller_Type"
                  name="Seller_Type"
                  value={formData.Seller_Type}
                  onChange={handleChange}
                  required
                >
                  <option>Individual</option>
                  <option>Dealer</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="Transmission"
                >
                  Transmission
                </label>
                <select
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-green-50"
                  id="Transmission"
                  name="Transmission"
                  value={formData.Transmission}
                  onChange={handleChange}
                  required
                >
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>
            </div>
            <div className="mt-8">
              <button
                className={`w-full ${
                  loading ? "bg-red-800" : "bg-green-50"
                } hover:bg-red-800 text-black font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Predicting..." : "Predict Price"}
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full max-w-2xl mx-auto bg-black p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-50">
              Predicted Price
            </h2>
            <p className="text-5xl font-bold text-green-50 mb-8">
              ${prediction.toLocaleString()}
            </p>
            <button
              onClick={resetPrediction}
              className="bg-green-50 hover:bg-red-800 text-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Predict Again
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
