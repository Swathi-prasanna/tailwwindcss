import React from 'react'
function Connects(){
    const connects=[
    "Slac","Google Sheets","Google Drive","Zapier", "Stripe","GitHub", "Notion","Mailchimp","Hubs[port", 
    "Airtrable","Intercom","SalesForce","Fima","Linear","Jira","Webflow"
    ];


  return (
    <section className="container-custom py-28">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-teal-700/10 text-teal-700 text-xs font-semibold mb-5">
            <div className="w-1.5 h-1.5 bg-teal-700 rounded-full"></div>
            INTEGRATIONS</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Connects with your<span className="playfair italic text-teal-700">existing stack</span>
            </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx auto">
                {connects.map((connects,index)=>(<div key={index} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-teal-700 hover:text-teal-700 transition-all">
                    {connects}
                    </div>
                    ))}
            </div>
    </section>
    
  )
}

export default Connects;