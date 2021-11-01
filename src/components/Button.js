import SpinnerLoad from "./SpinnerLoad"

const Button = ({
    height = "h-11",
    isLoading = false,
    textLoading = "Procesando...",
    styleClass = "bg-gray-800 text-white",
    children,

    onClick = () => {},
}) => {
    return (
        <button
            disabled={isLoading}
            className={`${styleClass} ${height} w-full lg:w-auto rounded-md px-6 font-semibold text-sm disabled:opacity-60 inline-flex items-center justify-center`}
            onClick={onClick}
        >
            {isLoading ? (
                <div className="inline-flex">
                    <SpinnerLoad />
                    {textLoading && <span>{textLoading}</span>}
                </div>
            ) : (
                children
            )}
        </button>
    )
}

export default Button
