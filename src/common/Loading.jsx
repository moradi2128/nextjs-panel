import clsx from "clsx"

const Loading = ({ width = "70", height = "40", color = "rgb(var(--color-primary-900))" }) => {
    return (
        // <ThreeDots
        //     height={width}
        //     width={height}
        //     radius="9"
        //     color={color}
        //     ariaLabel="three-dots-loading"
        //     wrapperStyle={{
        //         display: "flex",
        //         justifyContent: "center"
        //     }}
        //     visible={true}
        // />
        <div className='h-full w-full flex justify-center items-center'>
            <div className={clsx('loading loading-dots',`text-[${color}]`)} />
        </div>
    )
}

export default Loading