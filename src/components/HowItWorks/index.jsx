import plan from "../../assets/images/plan.png"
import amount from "../../assets/images/amount.png"
import interest from "../../assets/images/interest.png"
export default function HowItWorks() {
    return (
        <section className="bg-white font-cabinet lg:px-32 md:px-16 px-8 lg:pb-40 md:pb-28 pb-20">
            <h2 className="text-5xl md:text-5xl lg:text-[4rem] font-bold text-[#3D0072] mb-14">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 px-4">

                <div className="bg-pink-100 rounded-lg lg:px-6 px-3 pt-14 flex-1">
                    <div className="flex items-center lg:ms-8 ms-0 mb-4">
                        <div className="bg-red-500 text-white rounded-full w-6 h-8 flex items-center justify-center font-bold">1</div>
                        <h3 className="ml-4 lg:text-sm text-base font-medium">Create a Plan</h3>
                    </div>
                    <img src={plan} alt="Create a Plan Screenshot" className="pt-4 mx-auto" />
                </div>

                <div className="bg-purple-100 rounded-lg lg:px-6 px-3 pt-14 flex-1">
                    <div className="flex items-center lg:ms-8 ms-0 mb-4">
                        <div className="bg-purple-500 text-white rounded-full w-6 h-8 flex items-center justify-center font-bold">2</div>
                        <h3 className="ml-4 lg:text-sm text-base font-medium">Set Your Target Amount</h3>
                    </div>
                    <img src={amount} alt="Set Your Target Amount Screenshot" className="pt-4 mx-auto" />
                </div>

                <div className="bg-blue-100 rounded-lg lg:px-6 px-3 pt-14 flex-1">
                    <div className="flex items-center lg:ms-8 ms-0 mb-4">
                        <div className="bg-blue-500 text-white rounded-full w-6 h-8 flex items-center justify-center font-bold">3</div>
                        <h3 className="ml-4 lg:text-sm text-base font-medium">Get Your Interest</h3>
                    </div>
                    <img src={interest} alt="Get Your Interest Screenshot" className=" pt-4 mx-auto" />
                </div>
            </div>
        </section>
    )
}