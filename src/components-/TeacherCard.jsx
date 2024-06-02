import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


const TeacherCard = ({teacher}) => {
    const {name,email,phone,Title,image} = teacher;
    return (
        <div>
            <div className="card w-full ">
                <figure className="">
                    <img src={image} alt="vc " className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] p-2 border-2 border-black border-opacity-20 " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>{Title}</p>
                    <p className="flex items-center gap-1"><MdEmail />{email}</p>
                    <p className="flex items-center gap-1"><CiPhone />{phone}</p>

                </div>
            </div>
            
        </div>
    );
};

export default TeacherCard;