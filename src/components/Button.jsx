import SpinnerLoad from "./SpinnerLoad"

const Button = ({
    isLoading = false,
    textLoading,
    styleClass = "bg-gray-800 text-white w-full lg:w-auto",
    children,

    onClick = () => { },
}) => {

    return (
        <button
            disabled={isLoading}
            className={`${styleClass} relative py-2  rounded-md px-6 font-semibold text-sm disabled:opacity-60 `}
            onClick={onClick}
        >
            <div className={(isLoading ? "block" : "hidden")}>
                <div className=" absolute inset-0 flex justify-center items-center ">
                    <div className="inline-flex gap-3">
                        <SpinnerLoad />
                        {textLoading && <span>{textLoading}</span>}
                    </div>
                </div>
            </div>
            <div className={isLoading ? 'invisible' : undefined}>
                {children}
            </div>

        </button>
    )
}

export default Button
