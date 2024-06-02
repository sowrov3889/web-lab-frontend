import { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import Notice from "./Notice";


const Cse = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        fetch("https://student-login-server.vercel.app/OurTeacher")
        .then(res =>res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div className="bg-stone-100">
            <div className="flex  ">
                <p><span className="bg-orange-600 pl-3 pr-2 py-1 text-2xl font-bold text-white">Notice</span></p>
                <p className=""> <Notice></Notice></p>
            </div>
            <p className="text-center  font-bold text-3xl pt-20 "><span className="bg-black text-white px-3 py-1 rounded-l-2xl">Faculty</span> <span className="bg-orange-600 text-white px-3 py-1 rounded-r-2xl -ml-2">Members</span></p>
           
            <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 items-center mt-10">


                {
                    teachers.map(teacher => <TeacherCard key={teacher._id} teacher={teacher}></TeacherCard>)
                }

            </div>
        </div>
    );
};

export default Cse;