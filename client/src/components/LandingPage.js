import Developers from "@/components/Landing_Page_partials/Footer";
import FeaturesZigZag from "@/components/Landing_Page_partials/FeaturesZigZag";
import Header from "@/components/Landing_Page_partials/Header";
import HeroHome from "@/components/Landing_Page_partials/HeroHome";
import Footer from "@/components/Landing_Page_partials/Footer"
import React from "react";
import { useEffect } from "react";

// const [valoraevent, feature2, feature3, dev1, dev2, dev3, pm1] = LandingPageDevelopers;

function LandingPage() {

    // run the server when a user enters the site
    const fetchAllEvents = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/getallevents`
        );
        console.log(response)
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    };

    useEffect(() => {
        fetchAllEvents();
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col min-h-screen overflow-x-hidden ">
                <Header className="overflow-x-hidden" />

                <main className="grow">
                    <HeroHome />
                    <FeaturesZigZag />
                    <Footer />
                </main>
            </div>
        </div>
    );
}

export default LandingPage;
