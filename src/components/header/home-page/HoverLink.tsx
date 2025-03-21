

export const HoverLink = ({ children, className, ...props }: any) => {
    return (
        <a
            className="cursor-pointer text-black hover:text-slate-700 duration-100 font-medium z-40"
            {...props}
        >
            {children}
        </a>
    )
}