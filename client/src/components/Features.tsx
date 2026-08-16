// import "./Features.css"

// const Features = () => {
//   return (
//     <section className="features" id="features">
//         <h2>FEATURES</h2>
//         <div className="features-container">
//           <div className="feature-card">
//             <span>🌍</span>
//             <h3>Real-Time Translation</h3>
//             <p>Translate conversations instantly during meetings.</p>
//             <a href="/">Learn More →</a>
//           </div>
//           <div className="feature-card">
//             <span>🎤</span>
//             <h3>Speech Recognition</h3>
//             <p>Convert voice into text with AI.</p>
//             <a href="/">Learn More →</a>
//           </div>
//           <div className="feature-card">
//             <span>🤖</span>
//             <h3>AI Meeting Summary</h3>
//             <p>Generate meeting summary using AI automatically.</p>
//             <a href="/">Learn More →</a>
//           </div>
//         </div>
//     </section>
//   );  
// };

// export default Features;







import {
  Globe2,
  Mic2,
  Bot,
  MessageCircle,
  Languages,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import "./Features.css";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Globe2 />,
    title: "Real-Time Translation",
    description:
      "Translate conversations instantly across 100+ languages during meetings.",
  },
  {
    icon: <Mic2 />,
    title: "Speech Recognition",
    description:
      "Convert speech to text accurately for smooth and natural communication.",
  },
  {
    icon: <Bot />,
    title: "AI Meeting Summary",
    description:
      "Get smart summaries, key points and action items after every meeting.",
  },
  {
    icon: <MessageCircle />,
    title: "Live Captions",
    description:
      "Real-time captions make conversations easier to follow and understand.",
  },
  {
    icon: <Languages />,
    title: "Multi-Language Support",
    description:
      "Support for multiple languages in the same meeting.",
  },
  {
    icon: <ShieldCheck />,
    title: "Secure & Private",
    description:
      "End-to-end protection helps keep your conversations safe.",
  },
];

const Features = () => {
  return (
    <section className="features" id="features">

      <div className="features-heading">

        <span>OUR FEATURES</span>

        <h2>
          Everything you need for
          <br />
          seamless communication
        </h2>

        <p>
          Powerful AI tools to make every conversation meaningful.
        </p>

      </div>

      <div className="features-container">

        {features.map((feature) => (
          <div
            className="feature-card"
            key={feature.title}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <a href="#features">
              Learn more →
            </a>

          </div>
        ))}

      </div>

      {/* STATS */}

      <div className="stats-container">

        <div className="stat">
          <Users />
          <div>
            <strong>10K+</strong>
            <span>Happy Users</span>
          </div>
        </div>

        <div className="stat">
          <Globe2 />
          <div>
            <strong>100+</strong>
            <span>Languages Supported</span>
          </div>
        </div>

        <div className="stat">
          <Zap />
          <div>
            <strong>1M+</strong>
            <span>Meetings Translated</span>
          </div>
        </div>

        <div className="stat">
          <ShieldCheck />
          <div>
            <strong>99%</strong>
            <span>Accuracy Rate</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Features;