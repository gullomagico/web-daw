interface AuxProps { 
    children: React.ReactNode
 }

const Button = ({ children }: AuxProps) => {
    return (
        <button className="text-gray-800 font-mono bg-gray-500 p-2 rounded-full w-24">{children}</button>
    );
};

export default Button;