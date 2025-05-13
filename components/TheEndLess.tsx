function TheEndLess() {
      const useCases = [
            "Webinars",
            "Company Meetings",
            "Virtual Conferences",
            "Product Launches",
            "Training Sessions",
            "Hybrid Events",
            "Customer Onboarding",
            "Team Building"
      ];

      return (
            <section className="bg-black py-16 md:py-24 overflow-hidden">
                  <div className="container px-4">
                        {/* Headline Section */}
                        <div className="flex flex-col md:flex-row items-center leading-none mb-8 md:mb-12">
                              <div className="md:mr-4 mb-4 md:mb-0">
                                    <p className="text-3xl md:text-[44px] text-white/80 text-end">One</p>
                                    <p className="text-3xl md:text-[44px] text-white/80">platform</p>
                              </div>
                              <h2 className="text-6xl sm:text-[100px] md:text-[127px] text-white font-bold leading-none">
                                    Endless
                              </h2>
                        </div>

                        <h2 className="text-6xl sm:text-[100px] md:text-[127px] text-white font-bold text-end leading-none mb-12 md:mb-20">
                              Opportunities
                        </h2>

                        {/* Use Cases List */}
                        <div className="mt-12 space-y-0">
                              {useCases.map((useCase, index) => (
                                    <div
                                          key={index}
                                          className="border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-evenly hover:bg-gray-900/50 transition-colors duration-300 group"
                                    >
                                          <p className="text-xl md:text-3xl text-white/65 w-full text-center group-hover:text-white/90 transition-colors duration-300">
                                                {useCase}
                                          </p>
                                          <p className="text-xl md:text-3xl text-white/65 w-full text-center  group-hover:text-white/90 transition-colors duration-300">
                                                {index % 2 === 0 ? "Webinars" : "Company Meetings"}
                                          </p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default TheEndLess;