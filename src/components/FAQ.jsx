import React from 'react'
import { useState} from "react"
function FAQ{
    const[openIndex,setOPenIndex]=useState(null);
    const fags=[
        {
            question: "Is there a free trial?",
            answer: "Yes! Every plan comes with a 14-day free FaTrailer. No credit card required."
        },
        {
            question:"How does pricing work for larger teams?",
            answer:"For teams larger than 20 people,we offer larger than 20 people,we offewr vcustom Enterprise,pricing with volume discounts."

        },
        {
            question: "Can I migrate data from another tool?",
            answer: "Absolutely! We offer white-glove onboarding that includes data migration from most popular tools."
        },
        {
            question:"What does the 99.9% uptime SLA mean?",
            answer: "It means our service is available 99.9% of the time, excluding scheduled maintenance. We provide credits if we fail tomeet this."
        },
        {
            question:"Is my data secure?",
            answer:"Yes! We're SOC 2 compliant, encrpt data at rest and in transit, and undergo regular security audits."

        },
        {
            question:"Can I cancel anytime?",
            answer: "Yes, you can cancel your subscription at any time with no hidden fees or penalties."
        }

    ];
}

  return (
<>

    <section className="py-12 bg-gradient-to-b from-transparent to-white">
        <div className="container-custom">
        <div className="h-1 bg-gradient-to-r from-transparent via-teal-700/20 to-transparent"></div>
        </div>
    </section>
    <section className="container-custom py-28">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700/10 text-teal-700 text-xs font-semibold mb-5">
            <div className="w-1.5 h-1.5 bg-teal-700 rounded-full">
                FAQ</div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Questions,
                    <span className="playfair italic text-teal-700">answered</span></h2>
                <p className="text-gray-600 mb-6 max-w-sm">
                    Can't find what you're looking for? Reach our team at hello@clearwave.io- we reply within 2 hours.</p>
                    <button className="text-teal-700 font-semibold text-sm flex items-center gap-2">
                        Expand all
                        </button>
                        </div>
                        <div className="space-y-0">
                            {FAQ.map((FAQ,index)=>(<div key={index} className="py-6 border-b border-gray-200">
                                <button onClick={()=> setOpenIndex(openIndex===index ? null :index)} className="w-full flex justify-between items-center text-left">
                                 <h3 className="font-semibold text-sm md:text-base">{FAQ.question}</h3>
                                 <div className={'w-7 h-7 rounded-full border border-teal-700/30 flex items-center justify-center transition-transform ${openIndex===index ?'rotate-45'}'}>
                                 </div>
                                 </button>
                                 {openIndex=== index &&( <p className="mt-4 text-gray-600 text-sm leading-7">{FAQ.answer}</p>
                                )}
                                </div>))}
                            </div>

        </div>
    </div>
    </section>
    </>
  )
}

export default FAQ;