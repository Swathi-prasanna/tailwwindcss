import React from 'react'

const Cards = [
    {
    quote: "We replaced three separate tools with clearwave and actuallu have fewer meetings now. the automation handles the handoffs our team used to spend mornings sorting our.It 's the calmest our workflow has ever felt.",
    name:"Sarah Lindqvist",
    role: "Head of Operations . Structure.IO",
    initials: "SL"
},
{
    quote: "The mobile app alone justified the switch. i can review dashboards and approve tasks between meetings without opening my laptop.",
    name:"Macus Reyes",
    role:"Director of Product.Meridian",
    initials:"arcus Reyes",
    role:"Director of Product Meridian",
    initials:"MR"
},
{
    quote:"Onboarded our 30-person team one  afternoon. The learning curve is genuinely flat.",
    name:"priya Kapoor",
    role:"Engineering Lead . Verta Labs",
    intials:"PK"
},
{
    quote:"",
    name:"Tom Wainwright",
    role:"",
    intials:"Tw"
},
{
    quote:"Had a custom integration question answered in under two hourse",
    name :"Aiko Nakamura",
    role:"COO . Naturel",
    intials:"AN"
}


];
  return (
    <>
    <section className="py-12 bg-gradient-to-b from-white to=transparent">
        <div className="container-custom">
            <div className="h-1 bg-gradient-to -r from-transparent via-teal-700/20 to-transparent">
            </div>
        </div>
    </section>
        <section className="container-custom py-28">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Teams that <span className="playfair italic text-teal-700">love</span> Clearwave </h2>
            </div>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Don't take our word for it- here's what real teams say after 90 days.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.slice(0, 3).map((cards, index) => (
            <div key={index} className="card p-8 border-t-4 border-t-teal-700/30">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(star => ())}
                 </div>
                <p className="text-gray-600 leading-8 mb-6">
                    "{cards.quote}"
                </p>
                <div className="w-10 h-10 rounded-full bg-teal-700/10 flex items-center justify-center text-teal-700 font-bold text-sm">
                {cards.initials}</div>
            
                <p className="font-semibold text-sm">{cards.name}</p>
                <p className="text-gray-500 text-xs">{cards.role}</p>
                </div>

          ))}

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {cards.slice(3, 5).map((cards, index) => (
            <div key={index} className="card p-8">
              {cards.quote && (
                <p className="text-gray-600 leading-8 mb-6">
                  "{cards.quote}"
                </p>
              )}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-700/10 flex items-center justify-center text-teal-700 font-bold text-sm">
                  {cards.initials}
                </div>
                {cards.name && (
                  <div>
                    <p className="font-semibold text-sm">{cards.name}</p>
                    {cards.role && <p className="text-gray-500 text-xs">{cards.role}</p>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        </>     
    </section>
       
  );


export default Cards;