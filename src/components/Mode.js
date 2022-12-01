import { useState, useEffect } from 'react';

const Mode = () => {
    const [theme, setTheme] = useState("light-theme");
    const Togglemode = () => {
        theme === "light-theme" ? setTheme('dark-theme') : setTheme('light-theme');

    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>

            <a href='#' className='btn' onClick={() => Togglemode()}><h8>Mode change</h8></a>

        </div>
    )
}

export default Mode
