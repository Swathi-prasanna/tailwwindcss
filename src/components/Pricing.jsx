import React, { useState } from 'react'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 20,
      yearlyPrice: 16,
      desc: "For individuals and small teams getting started with structured workflows.",
      features: [
        "Up to 5 team members",
        "10 active dashboards",
        "Basic automations (50/mo)",
        "7-day data history",
        "Email support"
      ],
      active: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      monthlyPrice: 60,
      yearlyPrice: 40,
      desc: "For growing teams that need powerful automation and advanced reporting.",
      features: [
        "Up to 25 team members",
        "Unlimited dashboards",
        "Advanced automations (unlimited)",
        "90-day data history",
        "Priority chat support",
        "Mobile app access"
      ],
      active: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "150",
      desc: "For large organizations with custom requirements and compliance needs.",
      features: [
        "Unlimited members",
        "Custom integrations & API",
        "SSO & advanced permissions",
        "Unlimited data history",
        "Dedicated success manager",
        "SOC 2 & compliance reports"
      ],
      active: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section className="container-custom py-28">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700/10 text-teal-700 text-xs font-semibold mb-5">
          <div className="w-1.5 h-1.5 bg-teal-700 rounded-full"></div>
          PRICING
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Simple, <span className="playfair italic text-teal-700">transparent</span> pricing
        </h2>
        <p className="mt-4 text-gray-500">No hidden fees. No surprise overages. Cancel anytime.</p>
        <div className="mt-10 inline-flex items-center gap-4 bg-gray-100 rounded-full p-1">
          <button 
            onClick={() => setIsYearly(false)} 
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isYearly ? 'bg-white shadow-sm' : 'text-gray-500'}`}
          >
            Monthly
          </button>
          <div className="flex items-center gap-2">
            <div className="w-12 h-6 bg-teal-700 rounded-full flex items-center p-0.5 cursor-pointer" onClick={() => setIsYearly(!isYearly)}>
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </div>
            <span className="bg-teal-700 text-white text-xs px-2 py-0.5 rounded-full">Save 35%</span>
          </div>
          <button 
            onClick={() => setIsYearly(true)} 
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${isYearly ? 'bg-white shadow-sm' : 'text-gray-500'}`}
          >
            Annual
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mt-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-10 ${plan.active ? 'bg-[#021f1c] text-white scale-105 shadow-2xl z-10' : 'bg-white border border-gray-200'}`}
          >
            {plan.active && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
            <h3 className={`text-sm font-semibold tracking-widest ${plan.active ? 'text-gray-400' : 'text-gray-500'} uppercase mb-2`}>{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className={`text-xl ${plan.active ? 'text-gray-300' : 'text-gray-500'}`}>$</span>
              <h1 className="text-5xl font-bold">
                {plan.name === "Enterprise" 
                  ? plan.price 
                  : isYearly 
                    ? plan.yearlyPrice 
                    : plan.monthlyPrice
                }
              </h1>
              {plan.name !== "Enterprise" && (
                <span className={`text-lg ${plan.active ? 'text-gray-300' : 'text-gray-500'}`}>/mo</span>
              )}
            </div>
            <p className={`text-sm mb-6 ${plan.active ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
            <div className="border-t border-gray-200/30 mb-6"></div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.active ? 'bg-teal-600/20' : 'bg-teal-700/10'}`}>
                  
                  </div>
                  <span className={plan.active ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3.5 rounded-full font-semibold transition-all ${plan.active ? 'bg-teal-600 hover:bg-teal-500 text-white' : 'border border-gray-300 hover:border-gray-400 text-gray-800'}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
