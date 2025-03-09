import CountUp from "react-countup";

const StatsCounter = [
  { num: 2, text: "Years of experience" },
  { num: 8, text: "Projects completed" },
  { num: 5, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

function Stats() {
  return (
    <section className="lg:mt-12 xl:mt-0">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6 py-6 lg:py-0">
        {StatsCounter.map((item, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <div className="text-4xl xl:text-6xl font-extrabold">
              <span>{(index === 0 || index === 3) && "+"}</span>
              <CountUp end={item.num} duration={2} delay={1.5} />
            </div>
            <p className="w-2/5 md:w-1/3">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
