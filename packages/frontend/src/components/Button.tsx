const Button = (props: any) => {
    return (
        <button className="text-gray-800 font-mono bg-gray-500 p-2 rounded-full w-24">{props.children}</button>
    );
};

export default Button;