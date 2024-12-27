



const newsItems = [
  {
    title: "AusculTech Dx receives STTR Phase I award",
    date: "June, 2020",
    description:
      "AusculTech Dx received its latest STTR Phase I award from the National Institutes of Health (NIH). This award supports research and development into extending the StethAid™ platform for improved home-based...",
    imageSrc: "/news/1.png",
  },
  {
    title: "ACME-POCT selects AusculTech Dx for a seed grant",
    date: "January, 2020",
    description:
      "A seed grant from Emory/Georgia Tech/Children's based Atlanta Center for Microsystems Engineered Point-of-Care Technologies (ACME POCT) is enabling AusculTech Dx to research and develop next-generation StethAid™ technology.",
    imageSrc: "/news/2.jpg",
    hasReadMore: true,
  },
  {
    title: "AusculTech Dx receives STTR Phase II award",
    date: "April, 2019",
    description:
      "AusculTech Dx received STTR Phase II award from the National Institutes of Health (NIH). This award will support further development of the StethAid™ hardware and software and a multi-center trial...",
    imageSrc: "/news/1.png",
    hasReadMore: true,
  },
  {
    title: "AusculTech DX wins Washington Business Journal 2017 Innovation Award",
    date: "September, 2017",
    description:
      "The Washington Business Journal's annual Innovation Awards honor Greater Washington companies on the cutting edge in technology. AusculTech DX was one ot the 15 honorees selected tor the 2017 Innovation...",
    imageSrc: "/news/3.png",
    hasReadMore: true,
  },
  {
    title: "MedCityNews Profiles AusculTech Dx",
    date: "March, 2017",
    description:
      "MedCityNews, an online news publication with focus on healthcare business, profiles AusculTech Dx. The article includes an interview with Robin Doroshow, MD, Founder and Chief Medical Officer of AusculTech Dx,...",
    imageSrc: "/news/5.png",
    hasReadMore: true,
  },
  {
    title: "AuscultTech Dx receives STTR Phase I award",
    date: "September. 2016",
    description:
      "AusculTech Dx receives STTR Phase II award from the National Institutes of Health (NIH). This award supports demonstrating the technical teasibility ot the planned StethAidTM platform.",
    imageSrc: "/news/1.png",
    hasReadMore: true,
  },
  {
    title: "Project StethAidTM awarded Atlantic Pediatric Device Consortium Funding",
    date: "August, 2015",
    description:
      "Atlantic Pediatric Device Consortium (APDC) is an FDA-funded Consortium that funds, seeds and promotes promising early-stage pediatric devices. The Consortium recognized the potential ot Project StethAidTM and selected it for...",
    imageSrc: "/news/6.jpg",
    hasReadMore: true,
  },
];

export default function NewsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <article
            key={index}
            className="bg-[#f5f5f5] rounded-lg overflow-hidden shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image Container */}
              {item.imageSrc && (
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className=" relative  rounded-lg overflow-hidden">
                    <img
                      src={item.imageSrc}
                      alt={item.title || "News image"}
                      className="object-contain p-3"
                    />
                  </div>
                </div>
              )}

              {/* Content Container */}
              <div className="flex-grow space-y-3">
                {item.title && (
                  <h2 className="text-xl font-serif">{item.title}</h2>
                )}
                {item.date && (
                  <p className="text-[#999999] font-[600] text-sm">{item.date}</p>
                )}
                {item.description && (
                  <p className="text-gray-700 text-[16px] tracking-[1px] font-sfui font-[600] leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.hasReadMore && (
                  <button
                    className="bg-[#D64D47] hover:text-[#D64D47] hover:border-[2px] hover:border-[#D64D47] text-white px-5 hover:px-[18px] hover:py-1 py-1.5 font-sfui font-[700] tracking-[1.5px] rounded-[25px] hover:bg-white transition-colors text-[15px]"
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
