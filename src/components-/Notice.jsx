import Marquee from "react-fast-marquee";

const Notice = () => {
    return (
        <div className="w-[310px] md:w-screen lg:min-w-full">
            <Marquee  pauseOnHover={true} speed={100}>
                <p className="bg-green-200 text-black font-medium pr-2 py-1 ">
                    All CSE students are informed that the Web Engineering Lab exam will be held on 03 June 2024, at 10:00 AM. Attendance is mandatory. Please ensure you are prepared and arrive on time. For any queries, contact the department office.
                </p>
                <p className="bg-green-200 text-black font-medium pr-2 py-1">
                    All CSE students are requested to attend the departmental seminar on "Innovations in Computer Science" on June 10, 2024, at 10:00 AM in the main auditorium. Attendance is mandatory for all third-year students. Please be on time. For any queries, contact the department office.
                </p>
            </Marquee>
        </div>
    );
};

export default Notice;
