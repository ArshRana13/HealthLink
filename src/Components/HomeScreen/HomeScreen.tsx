import HospitalImage from "../../images/HomeScreenImages/hospital.gif";
import HosptalServiceImage from "../../images/HomeScreenImages/hospitalService.gif";
import PatientImage from "../../images/HomeScreenImages/patient.gif";
import AmbulanceImage from "../../images/HomeScreenImages/ambulance.gif";
import TeamImage from "../../images/HomeScreenImages/team.gif";
import SDGImage from "../../images/HomeScreenImages/SDG.gif";
import BookImage from "../../images/HomeScreenImages/book.gif";
import ContactImage from "../../images/HomeScreenImages/contact.gif";
import ServiceCard from "../ui/ServiceCard";
import AboutUsCard from "../ui/AboutUsCard";
import ContactForm from "../ui/ContactUs";

function HomeScreen() {
    return (
        <div className="overflow-x-hidden bg-gray-100 text-gray-800">

            {/* Hero Section */}
            <div id="home" className="h-screen w-screen flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
                {/* Left Section - Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={HospitalImage}
                        alt="Hospital"
                        className="max-w-full h-auto w-3/4 md:w-2/3 animate__animated animate__fadeIn rounded-xl shadow-lg"
                    />
                </div>
                {/* Right Section - Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold animate__animated animate__fadeIn">
                        Health Link
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
                        Your one-stop solution for booking appointments, managing emergencies, and connecting with healthcare effortlessly.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col py-16 bg-white" id="services">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                        Our Services
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8 px-8">
                    {/* Using ServiceCard Component */}
                    <ServiceCard
                        image={HosptalServiceImage}
                        title="Hospital Management"
                        description="Efficiently manage patient appointments, staff, and ambulances."
                    />
                    <ServiceCard
                        image={PatientImage}
                        title="Patient Services"
                        description="Seamlessly book appointments and ambulances with ease."
                    />
                    <ServiceCard
                        image={AmbulanceImage}
                        title="Ambulance Services"
                        description="Get listed with hospitals and provide fast, reliable services."
                    />
                </div>
            </div>

            {/* About Us Section */}
            <div className="flex flex-col py-16 bg-gray-50" id="aboutus">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                        About Us
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8 px-8">
                    {/* Using AboutUsCard Component */}
                    <AboutUsCard
                        image={TeamImage}
                        title="Who Are We?"
                        description="We are Divij Sharma, Arshdeep Rana, and Muskaan Kakkar, a team of students creating this website for Integrated Project 2."
                    />
                    <AboutUsCard
                        image={SDGImage}
                        title="Our Purpose"
                        description="Designed to satisfy the SDG goal of 'Good Health and Well-Being,' our website aims to improve healthcare access and management."
                    />
                    <AboutUsCard
                        image={BookImage}
                        title="Our Mission"
                        description="This project is part of our coursework for Integrated Project 2, blending innovation and academic learning."
                    />
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col py-16 bg-white" id="contact">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                        Contact Us
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8">
                    {/* Left Section - Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src={ContactImage}
                            alt="Contact Us"
                            className="max-w-full h-auto w-3/4 md:w-2/3 animate__animated animate__fadeIn rounded-xl shadow-lg"
                        />
                    </div>
                    {/* Right Section - Form */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
