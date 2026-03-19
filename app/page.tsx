import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <main className="flex   flex-col items-center justify-center bg-white sm:bg-pale-blue">
      <div className="flex flex-col sm:flex-row bg-white sm:rounded-[32px] sm:shadow-[20px_30px_60px_rgba(0,0,0,0.05)] max-w-[736px] w-full overflow-hidden">

        {/* Left Section: Result */}
        <section className="flex flex-col items-center justify-center p-6 sm:p-10 bg-gradient-background rounded-b-[32px] sm:rounded-[32px] text-center sm:w-1/2">
          <h2 className="text-lg sm:text-2xl font-bold text-light-lavender mb-6 sm:mb-9">
            Your Result
          </h2>

          <div className="flex flex-col items-center justify-center w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] rounded-full bg-gradient-circle">
            <span className="text-5xl sm:text-7xl font-extrabold text-white">76</span>
            <span className="text-sm sm:text-lg font-bold text-light-lavender opacity-50">of 100</span>
          </div>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
              Great
            </h3>
            <p className="text-base sm:text-lg font-medium text-light-lavender leading-tight max-w-[260px]">
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
        </section>

        {/* Right Section: Summary */}
        <section className="flex flex-col p-8 sm:p-10 sm:w-1/2">
          <h2 className="text-lg sm:text-2xl font-bold text-dark-gray-blue mb-6 sm:mb-7">
            Summary
          </h2>

          <div className="flex flex-col gap-4 mb-6 sm:mb-10">
            {data.map((item) => (
              <div
                key={item.category}
                className={`flex items-center justify-between p-4 rounded-xl ${item.category === "Reaction" ? "bg-light-red/5" :
                  item.category === "Memory" ? "bg-orangey-yellow/5" :
                    item.category === "Verbal" ? "bg-green-teal/5" :
                      "bg-cobalt-blue/5"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon.replace("./assets", "/assets")}
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className={`font-bold ${item.category === "Reaction" ? "text-light-red" :
                    item.category === "Memory" ? "text-orangey-yellow" :
                      item.category === "Verbal" ? "text-green-teal" :
                        "text-cobalt-blue"
                    }`}>
                    {item.category}
                  </span>
                </div>
                <div className="font-bold text-dark-gray-blue">
                  {item.score} <span className="text-dark-gray-blue/50">/ 100</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 rounded-full bg-dark-gray-blue text-white font-bold text-lg cursor-pointer transition-all duration-300 hover:bg-gradient-background active:scale-95">
            Continue
          </button>
        </section>
      </div>
    </main>
  );
}
