import Doctor from "../../images/HomeScreenImages/doctor.jpg"
const HospitalHomeScreen = () => {
    return(
        <div className="overflow-hidden">
            
            {/* Home Page */}
            <div className="h-screen w-screen flex flex-col justify-center items-center flex-wrap md:flex-row">
                <div className="w-1/2 min-w-1/2">
                    {/* image */}
                    <img src={Doctor} alt="" />
                </div>
                <div className="text-center text-xl md:text-3xl w-1/2 ">
                    {/* text */}
                    Efficiently manage patient appointments, staff, and ambulances.
                </div>
            </div>
        </div>
    );
};

export default HospitalHomeScreen;