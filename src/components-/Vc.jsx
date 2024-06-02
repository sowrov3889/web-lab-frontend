

const Vc = () => {
    return (
        <div className="bg-gradient-to-r from-green-300 via-green-100 to-green-300 ...  py-5 text-black">
            <p className="text-center font-bold text-2xl mt-20">RMSTU'S SUPERINTENDENCE</p>
            <hr className="w-[350px] mx-auto border-2 border-green-500 mb-20" />
            <div className=" space-y-4 md:flex md:space-y-0 justify-center gap-16">
                <div className="card w-96 ">
                    <figure className="">
                        <img src={"https://i.ibb.co/mSpQz8p/vice-mam.jpg"} alt="Vc " className="rounded-full w-[250px] h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vice Chancellor</h2>
                        <p>Professor Dr. Shelina Akter</p>
                       
                    </div>
                </div>
                <div className="card w-96  ">
                    <figure className="">
                        <img src={"https://i.ibb.co/NVKpKqp/provici.jpg"} alt="pro-Vc" className="rounded-full w-[250px] h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pro-Vice Chancellor</h2>
                        <p>Professor Dr. Kanchan Chakma</p>
                       
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Vc;