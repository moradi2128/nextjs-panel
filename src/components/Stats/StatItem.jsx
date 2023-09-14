import clsxm from "@/lib/clsxm";
import { PersianNumbers, toPersianNumberWithComma } from "@/utils/toPersianNumber";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

const StatItem = ({ content, horizontal = false }) => {
    const { Icon, iconColor, title, titleValue, lastValue, return: returns } = content;
    var percentColor = "text-green-500"
    var bgPercentColor = "bg-green-500/20"
    var percent = ((titleValue - lastValue) / titleValue * 100).toFixed(2)
    const isProfit = Number(percent) > 0
    if (!isProfit) {
        percentColor = "text-red-500"
        bgPercentColor = "bg-red-500/20"
        percent = Math.abs(percent)
    }
    return (
        <div className='col-span-3 md:col-span-1 p-4 shadow-card rounded-3xl'>
            <div className="flex flex-row items-center gap-3">
                {
                    returns && <div className="radial-progress border-6 border-gray-400 min-w-[6rem]" style={{ "--value": returns, "--size": "6rem", "--thickness": "4px", color: iconColor }}>{PersianNumbers(returns)} %</div>
                }
                <div>
                    <div className={`${horizontal ? "flex flex-col-reverse" : "block"}`}>
                        <div className={clsxm("flex flex-row gap-4  items-center", horizontal ? "mb-2" : "mb-4")}>
                            {Icon && <div className="p-4 rounded-2xl border border-gray-200 dark:border-gray-600">
                                <Icon className={clsxm("w-6 h-6")} style={{ color: iconColor }} />
                            </div>}
                            <div className="flex flex-row gap-3 items-center">
                                <div className={clsxm("rounded-full w-[25px] h-[25px] flex justify-center items-center", bgPercentColor)}>
                                    {isProfit ?
                                        <ArrowUpRightIcon className={clsxm("w-4 h-4", percentColor)} />
                                        :
                                        <ArrowDownRightIcon className={clsxm("w-4 h-4", percentColor)} />
                                    }
                                </div>
                                <span className={clsxm("font-bold text-md", percentColor)}>{PersianNumbers(isProfit ? percent + "+" : percent + "-")}</span>
                            </div>
                        </div>
                        <h4 className="text-gray-500 dark:text-gray-300 font-bold text-lg mb-2">{title}</h4>
                    </div>
                    <h5 className="font-bold text-xl">
                        {toPersianNumberWithComma(titleValue)} تومان
                    </h5>
                    <p className="text-gray-400 text-xs">مقایسه شده با ({toPersianNumberWithComma(lastValue)} تومان در سال گذشته) </p>
                </div>
            </div>
        </div>
    )

}
export default StatItem