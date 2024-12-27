
export default function ExecutiveProfiles() {
  // Array of executive profiles
  const executives = [
    {
      id: 1,
      name: "Mark Chandler, MBA",
      role: "Executive Chairman",
      image: "/Team/teamtop/4.jpg",
      description: `Mark Chandler is a seasoned business executive and a recognized expert in commercializing IP and 
                    technology. He is the founder of Upstream Partners, a specialty advisory firm that helps its clients 
                    with their IP needs in all aspects of early-stage technology product development and business creation. 
                    He is also an early-stage investor and has managed $15M capital with 10+ portfolio companies.`,
    },
    {
      id: 2,
      name: "Youness Ar.ioune. PhD",
      role: "Director, Operations and Regulatory Attairs",
      image: "/Team/teamtop/5.jpg",
      description: `Youness Arjoune leads product commercialization and interfaces with regulatory partners to bring StethAidT" to market- He is a biomedical research engineer with experience in medical device product development and signal processing. Dr Arjoune holds a PhD degree from University of North Dakota.`,
    },
    {
      id: 3,
      name: "Trong Nguyen, PhD",
      role: "Research and Development Engineer",
      image: "/Team/teamtop/3.jpeg",
      description: `Trong Nguyen leads the engineering and analytic development of StethAidTM and its digital auscultation platform. He brings cross industry experience to the health technology field. Dr. Nguyen got his PhD degree from the University of Illinois at Urbana Champaign.`,
    },
    {
      id: 4,
      name: "Ko-Tsung Hsu. PhD",
      role: "Senior AI/ML R&D Engineer",
      image: "/Team/teamtop/5.jpeg",
      description: `Ko-Tsung Hsu earned his Ph.D. from the Bioengineering Department at George Mason University. His academic journey includes a B.S. in Biotechnology from Ming Chuan University, followed by an M.S. in Bioinformatics and Computational Biology from George Mason University. Presently, his research is dedicated to advancing technology through artificial intelligence and machine learning, specifically in the realm of signal processing for medical devices.`,
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8 pt-0">
      {executives.map((executive) => (
        <div key={executive.id} className="bg-[#f2f2f2] rounded-lg overflow-hidden shadow-sm mb-8">
          <div className="flex flex-col items-center p-6">
            {/* Profile Image Container */}
            <div className="w-full mb-2">
              <div className="w-full relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={executive.image}
                  alt={`Photo of ${executive.name}`}
                  fill
                  className="object-cover w-full"
                  priority
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="text-center md:text-left w-full">
              <h2 className="text-[#06A1F5] text-[21px] font-[400] font-serif mb-1">
                {executive.name}
              </h2>
              <h3 className="text-[#333333] text-[14px] font-sfui font-[400] text-sm mb-2">{executive.role}</h3>
              <p className="text-[#424242]  text-[16px] tracking-[1px] font-sfui leading-relaxed">
                {executive.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
