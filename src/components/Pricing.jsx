import React from 'react'
import {useState} from "react";

function Pricing() {
    const [isYearly, setIsYearly]= useState(false);


const plans=[
{
    name:"Starter",
    price: isYearly ? 16 : 20,
    desc:"For individuals started and small teams getting started with structured workflows",
    features:["Up to 5 team mermbers",
        "Basic automations(100/mo)",
        "Email support",
    ],
        active: false,
        buttontext:"Start Free Trial"
    },
    {
        name:"professional",
        price: isYearly ? 48 : 60, 
        desc:"For growing teams that need powerful automation and adavanced reporting",
        features:["Up to 20 team members",
            "Unlimited dashboards",
            "Adavanced automations(5000/mo)",
            "Priority support",
            "SSO & audit logs",
        ],
        active:true,
        buttontext:"Start Free Trial"
    },
    {
        name:"Enterprise",
        price:"Custom",
        desc:"For large organizations with custom integration and compliance requirements",
        features:["Unlimited members",
           "Dedicated success manager",
           "Onboarding & training", 
           "SOC2 compliance reports",
        ],
        active:false,
        buttonText:"Contact Sales"
    }
   ];
  return (
    <section className="container-custom py-28">
        <div  className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700 text-xs font-semibold mb-5">
            <div className="w-1.5 h-1.5 bg-teal-700 rounded-full"></div>
            
             PRICING</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Simple.<span className="playfair italic text-teal-700">transparent</span>pricing
        </h2>
        <p className="mt-4 text-gray-500">No hidden fees. No surprise Overages. Cancel anytime.</p>
        <div className="mt-10 inline-flex items-center gap-4 bg-gray-100 rounded-full p-1">
            <button on click={()=> setIsYearly(false)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isYearly ? 'bg-white shadow-sm' : 'text-gray-500'}`}>
                Monthly
            </button>
            <div className="flex items-center gap-1">
                <span className="bg-teal-700 text-white-xs px-2 py-0.5 rounded-full">Save 18%</span>
            </div>
            <button onClick={()=> setIsYearly(true)} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${isYearly ? 'bg-white shadow-sm' : 'text-gray-500'}`}>
                Annual</button>
                </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mt-16">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-10 ${
              plan.active
              ? "bg-[#021f1c] text-white scale-105 shadow-2xl z-10"
              : "bg-white border border-gray-200"
            }`}
          >
            {plan.active && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
            )}
             <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className={`text-sm mt-3 ${plan.active ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>

            <div className="mt-8 flex items-baseline gap-1">
              {plan.price === "Custom" ? (
                <h1 className="text-5xl font-bold">Custom</h1>
              ) : (
                <>
                  <span className={`text-xl ${plan.active ? 'text-gray-300' : 'text-gray-500'}`}>$</span>
                  <h1 className="text-5xl font-bold">{plan.price}</h1>
                  <span className={`text-lg ${plan.active ? 'text-gray-300' : 'text-gray-500'}`}>/mo</span>
                </>
              )}
            </div>
            <ul className="mt-8 space-y-4">
                {plans.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.active ? 'bg-teal-500/20' : 'bg-teal-700/10'}`}
                        ></div>
                
                <span className={plan.active ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                </li>
           ))}
        </ul>
        <button className={`w-full mt-10 py-3.5 rounded-full font-semibold transition-all ${
              plan.active
                ? 'bg-teal-500 hover:bg-teal-400 text-white'
                : 'border border-gray-300 hover:border-gray-400 text-gray-800'
            }`}>
              {plan.buttonText}
            </button>

          </div>
        ))}

      </div>


    </section>
    
  );

}
export default Pricing;