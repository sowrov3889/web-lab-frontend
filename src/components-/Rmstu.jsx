
import varsityLogo from '../assets/images/varsity-logo.png';
import varsityLogo1 from '../assets/images/Mujib_100_Logo.svg.png';

const Rmstu = () => {
    return (
        <div className="bg-gradient-to-r from-[#8cd981f9] via-[#e2ece3] to-[#8cd981f9] lg:py-7 lg:px-10">
            <div className="navbar">
                <div className="navbar-start">
                    <img className="max-w-[100px] lg:max-w-[200px] lg:pl-10" src={varsityLogo} alt="Varsity Logo" />
                </div>
                <div className="navbar-center">
                    <h3 className="lg:text-3xl font-bold text-[green]">
                        RANGAMATI SCIENCE AND <br className="block lg:hidden" /> TECHNOLOGY UNIVERSITY
                        <p className="text-center pt-5 hidden lg:block">
                            রাঙামাটি বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
                        </p>
                    </h3>
                </div>
                <div className="navbar-end">
                    <img className="max-w-[80px] lg:max-w-[200px] lg:pl-10" src={varsityLogo1} alt="Bangobundhu image" />
                </div>
            </div>
        </div>
    );
};

export default Rmstu;
