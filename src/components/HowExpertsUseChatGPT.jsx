import React from "react";
import { Lightbulb, Users, Bot, Briefcase } from "lucide-react";

const features = [
  {
    title: "Content Creation",
    description: "Generate blogs, social media ads, email sequences, and more in seconds.",
    icon: <Lightbulb color="#2563EB" size={32} />,
  },
  {
    title: "Lead Generation & Client Engagement",
    description: "Craft engaging messages, auto-DMs, and lead magnets using smart AI prompts.",
    icon: <Users color="#16A34A" size={32} />,
  },
  {
    title: "Automating Customer Support",
    description: "Build smart AI chatbots to handle FAQs, bookings, and support 24/7.",
    icon: <Bot color="#9333EA" size={32} />,
  },
  
];

const HowExpertsUseChatGPT = () => {
  return (
    <div style={{ background: "radial-gradient(107.67% 107.67% at 50% 20.81%, #000B3E 0%, #020202 100%)", padding: "60px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#fff", marginBottom: "16px" }}>
          How Experts <span style={{color:'#f85a40'}}>Are Using ChatGPT</span>
        </h2>
        <p style={{ color: "#fff", maxWidth: "600px", margin: "0 auto 40px" }}>
          Discover the powerful ways experts are leveraging AI to scale their business and income.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                backgroundColor: "#F9FAFB",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.06)")}
            >
              <div>{feature.icon}</div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1F2937" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#4B5563" }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowExpertsUseChatGPT;
