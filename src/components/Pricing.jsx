import React from 'react'
import {useState} from "react";
const plans=[{
    name:"Starter",
    price:isYearly ? 16:20,
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
        price:isYearly ? 48:60, 
        desc:"For growing teams that need powerful automation and adavanced reporting",
        features:["Up to 20 team members",
            "Unlimited dashboards",
            "Adavanced automations(5000/mo)",
            "Priority support",
            "SSO & audit logs",
        ],
        active:true,
        buttonText:"Start Free Trial"
    },
    {
        name:"Enterprise",
        price:"Custom",
        desc:"For large organizations with custom integration and compliance requirements",
        features:["Unlimited members",
           "Dedicated success manager",
           "Onboarding & training", 
           "SOC2 compliance reports"
        ]
        active:false,
        buttonText:"Contact Sales"
    }
];
const Pricing = () => {
  return (
    <div>Pricing</div>
  )
}

export default Pricing