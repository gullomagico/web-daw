function Header() {
    return (
        <div className="w-100 p-2 flex-col">
            <div className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className="text-gray-400">New Project</div>
                <div className="text-gray-400">New Project</div>
            </div>
            <div>Parte sotto</div>
        </div>
    );
}

export default Header;