import React from 'react'

const Platform = () => {
  const features = [
    {
      id: "01 - UNIFIED DASHBOARD",
      title: "Every metric, one calm surface",
      desc: "Pull data from any source into a single, composable view. Share live dashboards with stakeholders — no exports, no screenshots.",
      list: [
        "Drag-and-drop widget builder",
        "Real-time data sync across all sources",
        "Role-based sharing with granular permissions"
      ],
      reverse: false,
      content: (
        <div className="card p-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-5 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500">Monthly Revenue</p>
              <p className="text-xl font-bold">$84.2k</p>
              <div className="w-full h-1.5 bg-teal-700 rounded-full mt-2"></div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500">Active Users</p>
              <p className="text-xl font-bold">12,481</p>
              <div className="w-full h-1.5 bg-teal-700 rounded-full mt-2"></div>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "Q3 Report synced", status: "Done" },
              { label: "Team review pending", status: "Active" },
              { label: "Analytics export", status: "Queued" }
            ].map((task, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-teal-700/5 rounded-xl">
                <p className="text-sm">{task.label}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${task.status === 'Done' ? 'bg-teal-700/20 text-teal-800' : task.status === 'Active' ? 'bg-teal-500/20 text-teal-600' : 'bg-gray-200 text-gray-600'}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "02 - SMART AUTOMATION",
      title: "Routines that run themselves",
      desc: "Build automation flows with natural language. Clearwave understands your intent and suggests the next step — no flowchart diagrams needed.",
      list: [
        "Natural language automation builder",
        "500+ pre-built trigger templates",
        "Full audit trail for every action"
      ],
      reverse: true,
      content: (
        <div className="card p-8">
          <div className="space-y-3 mb-4">
            {[
              { label: "Weekly digest → Slack", status: "Running" },
              { label: "Lead scored → Notify sales", status: "Running" },
              { label: "Invoice due → Alert CFO", status: "Active" },
              { label: "Report sync → Drive", status: "Paused" }
            ].map((flow, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-teal-700/5 rounded-xl">
                <p className="text-sm">{flow.label}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${flow.status === 'Running' ? 'bg-teal-700/20 text-teal-800' : flow.status === 'Active' ? 'bg-teal-500/20 text-teal-600' : 'bg-gray-200 text-gray-600'}`}>
                  {flow.status}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500">Hours Saved This Month</p>
              <p className="text-xl font-bold">148h</p>
              <div className="w-full h-1.5 bg-teal-700 rounded-full mt-2"></div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500">Flows</p>
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "03 - TEAM COLLABORATION",
      title: "Comments, context, and clarity",
      desc: "Annotate anything, assign tasks inline, and resolve conversations without switching tabs. The work and the discussion stay together.",
      list: [
        "Inline comments on any data point",
        "Threaded task assignments",
        "Real-time presence and live cursors"
      ],
      reverse: false,
      content: (
        <div className="card p-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-5 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500">Online Now</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs">A</div>
                <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs">K</div>
                <div className="w-6 h-6 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs">M</div>
                <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs">+5</div>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-200">
              <p className="text-xs text-gray-500">Open Tasks</p>
              <p className="text-xl font-bold">37</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs text-gray-500">Recent Comments</p>
            {[
              { user: "Alex", comment: "Q3 chart updated", status: "Resolved" },
              { user: "Kim", comment: "Review needed", status: "Open" },
              { user: "Maya", comment: "Approved & shipped", status: "Done" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-teal-700/5 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="text-sm">{item.user} → {item.comment}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Done' ? 'bg-teal-700/20 text-teal-800' : item.status === 'Open' ? 'bg-teal-500/20 text-teal-600' : 'bg-gray-200 text-gray-600'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <section className="container-custom py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700/10 text-teal-700 text-xs font-semibold mb-5">
            <div className="w-1.5 h-1.5 bg-teal-700 rounded-full"></div>
            PLATFORM FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Built for <span className="playfair text-teal-700 italic">clarity</span>
            <br />
            at every scale
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Every feature is designed to reduce friction and surface what matters. No bloat, no configuration maze.
          </p>
        </div>

        <div className="mt-24 space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {!feature.reverse && (
                <div>
                  <p className="text-sm tracking-[2px] text-teal-700 font-semibold mb-4">{feature.id}</p>
                  <h3 className="text-4xl font-bold leading-tight">{feature.title}</h3>
                  <p className="mt-6 text-gray-600 text-lg leading-8">{feature.desc}</p>
                  <ul className="mt-8 space-y-3">
                    {feature.list.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <div className="w-5 h-5 rounded-full border border-teal-700/20 flex items-center justify-center mt-1">
                        
                        </div>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {feature.content}
              {feature.reverse && (
                <div>
                  <p className="text-sm tracking-[2px] text-teal-700 font-semibold mb-4">{feature.id}</p>
                  <h3 className="text-4xl font-bold leading-tight">{feature.title}</h3>
                  <p className="mt-6 text-gray-600 text-lg leading-8">{feature.desc}</p>
                  <ul className="mt-8 space-y-3">
                    {feature.list.map((listItem, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <div className="w-5 h-5 rounded-full border border-teal-700/20 flex items-center justify-center mt-1">
                        
                        </div>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-transparent to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "17k+", label: "Teams Worldwide", sub: "Across 80+ countries" },
              { num: "11%", label: "Avg. Productivity Gain", sub: "Measured in first 30 days" },
              { num: "34.3%", label: "Uptime SLA", sub: "Guaranteed and monitored" },
              { num: "6h", label: "Saved Per Team Weekly", sub: "On average across all plans" }
            ].map((stat, index) => (
              <div key={index} className="p-6 text-center border-r border-gray-100 last:border-r-0">
                <div className="w-8 h-1 bg-teal-700 mx-auto mb-4 rounded-full"></div>
                <h3 className="text-4xl font-bold">{stat.num}</h3>
                <p className="text-sm text-gray-600 mt-2 font-semibold">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Platform;
