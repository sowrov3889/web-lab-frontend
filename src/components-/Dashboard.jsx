import Swal from "sweetalert2";



const Dashboard = () => {




    const handleAddData = event => {
        event.preventDefault();
        const form = event.target;
        



        const email = form.email.value;
        const gender = form.gender.value;
        const cgpa = form.cgpa.value;
        const semister = form.semister.value;
        const year = form.year.value;
        const reg = form.reg.value;
        


        const AddResults = { email,gender,cgpa,semister,year,reg }

        console.log(AddResults);

        // send data to the server

        fetch('https://student-login-server-kp49efpdl-sakibrahman2023s-projects.vercel.app/StudentResult', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddResults)
           
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Added Result Successfully",
                        icon: "success",
                        confirmButtonText: 'Done'

                    });
                }
            })

    }

















    return (
        <div className="md:flex  gap-10 space-y-5 md:space-y-0 mt-7">
            {/* manual data entry */}
            <div className="md:w-1/2 ">
                <p className="text-center"><span className="font-bold text-white bg-orange-500 px-3 py-1 rounded-2xl ">Manual Data Entry One Or Many Students</span></p>
                <div className="card w-full bg-green-100 mx-5 shadow-xl my-6">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/fCpnGH1/input.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <a target="_blank" href="https://cloud.mongodb.com/v2/662d00a45308f966f33d973c#/metrics/replicaSet/662d02a9b625d47c1a2c6aac/explorer/StudentLogInDB/StudentResult/find"><p className="text-center"><span className="font-bold text-white bg-green-500 px-3 py-1 rounded-2xl ">Database Data Entry One Or Many Students</span></p></a>
                    </div>
                </div>


            </div>

            {/* One by data entry */}
            <div className="md:w-1/2 ">
                <p className="text-center"><span className="font-bold text-white bg-orange-500 px-3 py-1 rounded-2xl ">Data Entry One By One Students</span></p>
                <div className="bg-green-200 py-5 my-6 rounded-xl">
                    <form onSubmit={handleAddData}>
                        <div className="grid md:grid-cols-2 gap-5 mx-5 my-6 ">
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                Email:
                                <input type="text" className="grow" name="email" placeholder="example@gmail.com" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                Reg:
                                <input type="text" className="grow" name="reg" placeholder="2019-16-00" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                Semester:
                                <input type="text" className="grow" name="semister" placeholder="semester" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                Year:
                                <input type="text" className="grow" name="year" placeholder="year" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                CGPA:
                                <input type="text" className="grow" name="cgpa" placeholder="4.00" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                Gender:
                                <input type="text" className="grow" name="gender" placeholder="Male" />
                            </label>
                        </div>
                        <div className="w-1/2 mx-auto my-5">

                            <input type="submit" value="ADD" className="btn btn-block bg-green-300 " />
                        </div>
                        
                    </form>






                </div>

            </div>
           
            
            
            
        </div>
    );
};

export default Dashboard;