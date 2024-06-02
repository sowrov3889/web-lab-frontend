import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutubeSquare } from "react-icons/fa";



const Nabvar2 = () => {
    return (
        <div>
            <div className="hidden lg:block bg-[#216b21] py-2">
                <div className="flex justify-between px-40 ">
                    <ul className="lg:flex items-center space-x-7 ">
                        <li className="text-lg font-semibold text-[white]"><a href="">FAQ</a></li>
                        <li className="text-lg font-semibold text-[white]"><a href="">Gallery</a></li>
                    </ul>
                    <ul className="">
                        <div className="flex gap-5 items-center mt-2">
                            <a href=""><i className=" text-[white] text-lg"><FaFacebook /></i></a>
                            <a href=""><i className=" text-[white] text-lg"><FaInstagram /></i></a>
                            <a href=""><i className=" text-[white] text-lg"><FaLinkedinIn /></i></a>
                            <a href=""><i className=" text-[white] text-2xl"></i><FaYoutubeSquare /></a>
                        </div>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Nabvar2;