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
    <>
    <section className="container-custom py-28">
        <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700/10 text-teal-700 text-xs font-semibold mb-5">
        <div className="w-1.5 h-1.5 bg-teal-700 rounded-full">PLATFORM FEATURES</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built for<span className="playfair text-teal-700 italic">clarity</span>
            <br/>
            at every scale
        </h2>
        <p className="mt-6 text-gray-600 text-lg">
            Every feature is designed to reduce friction and surface what matters. No bloat, no configuration maze.
        </p>
    </div>
    
    <div className="mt-24 space-y-24">
        {features.map((item, index)=> (
            <div key={index}  className={`grid lg:grid-cols-2 gap-16 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                    <p className="text-sm tracking-[2px] text-teal-700 font-semibold mb-4">{item.id}</p>
                    <h3 className="text-4xl font-bold leading-tight">{item.title}</h3>
                    <p className="mt-6 text-gray-600 text-lg leading-8">{item.desc}</p>
                    <ul className="mt-8 space-y-3">
                        {item.list.map((listitem,i)=>(
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                <div className="w-5 h-5 rounded-full border border-teal-700/20 flex items-center justify-center mt-1">
                                </div>
                                {listitem}
                            </li>
                             ))}
                            </ul> 
                </div>
                <div className="card p-8">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        < className="p-5 rounded-2xl border border-gray-200">
                            <p className="text-xs text-gray-500">Monthly Revenue</p>
                            <p className="text-xl font-bold">$84.2k</p>
                            <div className="w-full h-1.5 bg-teal-700 rounded-full h-1.5 bg-teal-700 rounded-full mt-2"></div>
                            <div className="p-5 rounded-2xl border border-gray-200">
                                <p className="texts-xs text-gray-500">Active Users</p>
                                <p className="text-xl font-bold">12,481</p>
                                <div className="w-full h-1.5 bg-teal-700 rounded-full mt-2"></div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    {label: "Q3 report synced",status:"Done"},
                                    {label:"Team review pending", status:"Active"},
                                    {label:"Analytics export",status:"Queued"}].map(task, i) => (
                                    <div key={i}className="flex justify-between items-center p-3 bg-teal-700/5 rounded-xl">
                                    <p className="text-sm">{task.label}</p>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                    task.status === 'Done' ? 'bg-teal-700/20 text-teal-800':
                                    task.status === 'Active' ?'bg-teal-500/20 text-teal-600':
                                     'bg-gray-200 text-gray-600'
                                     }`}>{task.status}</span>
                                    
                                  </div>
                            </div>

                            </div>
                        </div>
                     ))}
            </div>
        
      </>
    </section>
    <section className="py-20 bg-gradient-to-b from-transparent to-white">
        <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8">
                {[
                {num: "17k+", label:"Teams Worldwide",sub:"Trusted by teams of all shapes"},
                {num: "11%", label:"Avg.Productivity Gain", sub:"Measured in structured workflows"},
                {num: "34.3%", label:"Uptime SLA", sub:"Guaranteed and monitored"},
                {num: "6h", label:"Saved Per Team Weekly",sub:"From reduced admin and status"}].map((stat,index)=>(
                    <div key={index} className="p-6 text-center border-r border-gray-100 last:border-r-0">
                    <h3 className="text-4xl font-bold">{stat.num}</h3>
                    <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    
    </>

  )
}

export default Platform