import React from "react";

const VisionMissionCoreValues = () => {
  const cardData = [
    {
      title: "Vision",
      content:
        "To be a premier institute of excellence in engineering education and research, producing globally competent, socially responsible, and innovative professionals.",
    },
    {
      title: "Mission",
      content:
        "To provide high-quality technical education through dynamic curriculum, effective teaching–learning processes, and research-oriented practices that prepare students for the global workforce.",
    },
    {
      title: "Core Values",
      content:
        "Integrity, Innovation, Teamwork, Accountability, and Continuous Learning form the foundation of NSRIET’s culture and commitment to academic and professional excellence.",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-evenly w-full">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group w-[280px] h-[300px] p-6 bg-white border-[6px] border-black shadow-[12px_12px_0_#000] hover:shadow-[17px_17px_0_#000] hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all duration-300 m-4"
          >
            <span className="block relative overflow-hidden mb-4">
              <span className="text-3xl font-black text-black uppercase">
                {card.title}
              </span>
              <span className="absolute bottom-0 left-0 w-11/12 h-[3px] bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
            <p className="text-base leading-relaxed text-black">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionMissionCoreValues;