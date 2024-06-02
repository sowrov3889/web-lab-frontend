import { useEffect, useState } from "react";


const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div className="">
            <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" />
        </div>
    );
};

export default ThemeToggle;