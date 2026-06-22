import React from 'react'

const Cards = () => {
  const testimonials = [
    {
      quote: "We replaced three separate tools with Clearwave and actually have fewer meetings now. The automation flows handle the handoffs our team used to spend mornings sorting out. It's the calmest our workflow has ever felt.",
      name: "Sarah Lindqvist",
      role: "Head of Operations · Stratum IO",
      initials: "SL"
    },
    {
      quote: "The mobile app alone justified the switch. I can review dashboards and approve tasks between meetings without opening my laptop.",
      name: "Marcus Reyes",
      role: "Product Director · Meridian",
      initials: "MR"
    },
    {
      quote: "Onboarding our 30-person team took one afternoon. The learning curve is genuinely flat.",
      name: "Priya Kapoor",
      role: "Engineering Lead · Vanta Labs",
      initials: "PK"
    },
    {
      quote: "ahead of what we had. We can finally show stakeholders live data instead of preparing decks.",
      name: "Tom Wainwright",
      role: "CTO · Pulsar HQ",
      initials: "TW"
    },
    {
      quote: "message. Had a custom integration question answered in under two hours.",
      name: "Aiko Nakamura",
      role: "CTO · Nexaflow",
      initials: "AN"
    }
  ];

  return (
    <>
      <section className="py-12 bg-gradient-to-b from-white to-transparent">
        <div className="container-custom">
          <div className="h-1 bg-gradient-to-r from-transparent via-teal-700/20 to-transparent"></div>
        </div>
      </section>
      <section className="container-custom py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Teams that <span className="playfair italic text-teal-700">love</span> Clearwave
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't take our word for it — here's what real teams say after 90 days.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="card p-8">
              <div className="flex gap-1 mb-4 text-teal-700">
              
              </div>
              <p className="text-gray-600 leading-8 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-700/10 flex items-center justify-center text-teal-700 font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div key={index} className="card p-8">
              <p className="text-gray-600 leading-8 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-700/10 flex items-center justify-center text-teal-700 font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
