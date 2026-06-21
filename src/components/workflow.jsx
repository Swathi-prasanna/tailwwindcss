import React from 'react'


  return (
    <>
    <section className="py-12 bg-gradient-to-b from-white to-transparent">
        <div className="container-custom">
            <div className="h-1 bg-gradient-to-r from-transparent via-teal-700/20 to-transparent"></div>
        </div>
    </section>
    <section className="container-custom py-28">
        <div className="bg-[#021f1c] rounded-[32px] p-12 md:p-16 text-white relative overflow-hidden">
        <div className="absolute-top-20-right-20 w-72 h-72 bg-teai-600/20 rounded-full blur-3xl"></div>
        <div className="absolute-bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700/30 text-teal-300 text-xs font-semibold mb-6">
                <div className="w-1.5 h-1.5 bg-teal-300 rounded-full">
                   </div> GET STARTED TODAY</div>
                   <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Ready for a<span className="playfair italic text-teal-300">clearer workflow?</span></h2>
                   <p className="text-gray-400 max-w-md mb-8">
                    Jion 50,000+ teams who replaced chaos with clarity.Set up in under 10 minutes.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-all">
                            Start Free Trial
                        </button>
                        <button className="text-gray-400 border border-gray-600 hover:border-gray-500 px-10 py-3.5 rounded-full font-semibold transition-all text-sm">
                            Schedule a demo
                        </button>
                    </div>
                    </div>
        </div>
    </section>
    </>
  );

export default workflow;