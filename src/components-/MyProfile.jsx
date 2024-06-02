import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BsEnvelopeOpen } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import Notice from "./Notice";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("https://student-login-server.vercel.app/StudentResult")
            .then(res => res.json())
            .then(data => setResults(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    if (!user) {
        return <span className="loading loading-spinner text-success text-2xl text-center"></span>;
    }

    return (
        <div className="">
            <div className="flex">
                <p><span className="bg-orange-600 pl-3 pr-2 py-1 text-2xl font-bold text-white">Notice</span></p>
                <p> <Notice></Notice></p>
            </div>
           <div className="mx-5">
                <p className="text-3xl font-black text-center mt-10 mb-3"><span className=" bg-black text-white px-3 py-1 rounded-lg">{user.displayName}</span></p>
                <p className="text-2xl font-semibold text-center pb-10 "><span className=" bg-orange-600 text-white px-3 py-1 rounded-lg">Dept. Of CSE</span></p>
                <div className="space-y-5 md:space-y-0 md:flex justify-between gap-5 mb-10">
                    <div className="md:w-1/4 mt-10">
                        <div className="card w-full bg-teal-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={user.photoURL} alt="Profile" className="rounded-full w-[200px] h-[200px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title italic"><IoPerson /> {user.displayName}</h2>
                                <h2 className="card-title italic"><BsEnvelopeOpen /> {user.email}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/4 mt-10">
                        <p className="text-center font-semibold text-lg pb-5"> <span className="bg-black pl-3 py-1 pr-2 rounded-l-xl
                    text-white">Current Year</span> <span className="bg-orange-600 -ml-2 px-3 py-1 rounded-r-xl
                    text-white">3rd Year 1st Semester</span></p>
                        <hr className="pb-10" />

                        <div className="overflow-x-auto">
                            <table className="table table-striped bg-green-100 w-full">
                                <thead>
                                    <tr className="font-bold bg-green-200 text-base">
                                        <th>Registration No</th>
                                        <th>Year</th>
                                        <th>Semester</th>
                                        <th>CGPA</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.filter(result => result.email === user.email).map((result) => (
                                        <tr className="font-semibold" key={result._id}>
                                            <td>{result.reg}</td>
                                            <td>{result.year}</td>
                                            <td>{result.semister}</td>
                                            <td>{result.cgpa}</td>
                                            <td>{result.gender}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default MyProfile;
