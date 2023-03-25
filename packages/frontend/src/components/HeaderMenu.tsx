const HeaderMenu = () => {
    return (
        <div className="flex space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className="text-center">
                <p className="text-gray-400 font-mono text-xl">WebDaw</p>
            </div>
            
        </div>
    );
};

export default HeaderMenu;