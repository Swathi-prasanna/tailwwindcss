import React from 'react'


const Platform = () =>{
  const features=[
    {
        id: "01-UNIFIFED DASHBOARD", 
        title:"Every metric, one calm surface", 
        desc:"Pull data from any source into a single, composable view.Share live dashboards with stakeholders -no exports,no screenshots.",
        list:["Darg-and-drop widget builder",
            "Real-time data sync across all source",
            "Role-based sharing with granular permissions"],
        reverse:false
    },
    {
        id:"02-SMART AUTOMATION",
        title:"Routines that run themselves",
        desc:"Build automaton flows with natural language.Clearwave understands your intent and suggests the next step -no flowerchart diagram needed.",
        list:["Natural language automation builder",
            "500+ per-built trigger templates",
            "Full audit trail for every action"
        ],
        reverse:true
    },
    {
        id:"03-TEAM COLLABORATION",
        title:"Comments,context,and clarity",
        desc:"Annotate anything assign tasks inline, and reslove conversations without switching tabs. The work and the discussion stay together.",
        list:["Inline comments on any data point",
            "Threaded task assignments",
            "Real-time presence and live cursor"],
        reverse:false
    }
];
  return (
    <sectiom className="py-20 bg-gradient-to-b from-transparent to-white">
        <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8">
                {[{num:"17k+", label:"Teams Worldwide",sub:"Trusted by teams of all shapes"},
                {num:"11%", label:"Avg.Productivity Gain", sub:"Measured in structured workflows"},
                {num:"34.3%", label:"Uptime SLA", sub:"Guaranteed and monitored"},
                {num:"6h", label:"Saved Per Team Weekly",sub:"From reduced admin and status"}].map((state,index)=>(
                    <div key={index} className="p-6 text-center border-r border-gray-100 last:border-r-0">
                    <h3 className="text-4xl font-bold">{status.num}</h3>
                    <p className="text-sm text-gray-600 mt-2">{state.label}</p>
                    <p className="text-xs text-gray-400 mt-1">{state.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    </sectiom>
  )
}

export default Platform