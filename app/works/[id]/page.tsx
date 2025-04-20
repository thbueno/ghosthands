"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// Define project data type
interface ProjectData {
  id: string;
  title: string;
  headline: string;
  image: string;
  date: string;
  client: string;
  services: string[];
  websiteUrl: string;
  about: string;
  clients: string;
  challenge: string;
  results: string;
  metrics: {
    funding: string;
    fundingLabel: string;
    conversion: string;
    conversionLabel: string;
    users: string;
    usersLabel: string;
  };
}

// Sample project data
const projects: Record<string, ProjectData> = {
  "estatery-1": {
    id: "estatery-1",
    title: "Estatery",
    headline: "Unleash Your Potential and Push Beyond Limits",
    image: "/images/estatery-laptop.png",
    date: "May 5, 2023",
    client: "Jacob McDany",
    services: ["Mobile App", "Website Design", "UI/UX"],
    websiteUrl: "#",
    about:
      "At Sportly, we believe in making fitness fun and convenient. That's why we've developed a cutting-edge mobile app and dashboard that allows you to effortlessly track and manage your sport activities. Whether you're an avid runner, a devoted cyclist, or a fitness enthusiast, Sportly has got you covered! With Sportly, you'll enjoy a user-friendly interface that empowers you to log your workouts, set personal goals, and monitor your achievements. Whether you prefer running, cycling, or engaging in various sports, our app provides detailed insights into your performance, distance covered, calories burned, and much more.",
    clients:
      "Our esteemed clients, who are passionate about maintaining an active lifestyle, inspired us to create Sportly. They sought an all-in-one solution that could seamlessly monitor their progress, provide insightful data, and keep them motivated throughout their fitness journey. We listened, and we delivered.",
    challenge:
      "To ensure a holistic experience, Sportly also offers a personalized dashboard accessible from any device. This dashboard gives you an overview of your progress, allowing you to analyze your data, track trends, and identify areas for improvement. You can even connect with fellow fitness enthusiasts, share your accomplishments, and embark on friendly challenges together!",
    results:
      "We understand that motivation plays a crucial role in maintaining an active lifestyle. That's why we've incorporated exciting features like badges, rewards, and challenges within Sportly. Achieve your goals and unlock various milestones to earn recognition and stay motivated on your fitness journey. So, whether you're a beginner looking to kickstart your fitness routine or a seasoned athlete striving for new personal bests, Sportly is your ideal companion. Download the app today and experience the joy of tracking your sport activity like never before!",
    metrics: {
      funding: "$22.8M",
      fundingLabel: "Total raised in funding so far",
      conversion: "+24%",
      conversionLabel: "Conversion rate with new design",
      users: "~400K",
      usersLabel: "Daily users enjoying sportly",
    },
  },
  "wepay-1": {
    id: "wepay-1",
    title: "Wepay",
    headline: "Revolutionizing Digital Payments for Everyone",
    image: "/images/wepay-mobile.png",
    date: "April 12, 2023",
    client: "FinTech Solutions Inc.",
    services: ["Mobile App", "Branding", "UI/UX"],
    websiteUrl: "#",
    about:
      "At Wepay, we're transforming how people think about digital payments. Our platform combines security, speed, and simplicity to create a seamless payment experience for both individuals and businesses. With our intuitive interface, users can send money, pay bills, and manage their finances all in one place.",
    clients:
      "Our clients range from small businesses looking to streamline their payment processes to large enterprises seeking comprehensive financial solutions. They needed a reliable, user-friendly platform that could handle various transaction types while providing detailed analytics and insights.",
    challenge:
      "The financial technology landscape is highly competitive and constantly evolving. We needed to create a solution that not only met current industry standards but also anticipated future trends and user needs. Security was paramount, as was creating an interface that users of all technical abilities could navigate with ease.",
    results:
      "Since launching Wepay, we've seen remarkable growth in both user adoption and transaction volume. The platform has received praise for its clean design, robust security features, and overall user experience. Businesses have reported significant improvements in payment processing efficiency, while individual users appreciate the simplicity and reliability of the service.",
    metrics: {
      funding: "$18.5M",
      fundingLabel: "Secured in Series A funding",
      conversion: "+32%",
      conversionLabel: "Increase in completed transactions",
      users: "~250K",
      usersLabel: "Active monthly users",
    },
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects[projectId] || projects["estatery-1"]; // Fallback to estatery if project not found

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h4 className="text-lg mb-4">{project.title}</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {project.headline}
          </h1>
          <div className="bg-background rounded-3xl overflow-hidden mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Date</h3>
              <p className="">{project.date}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Client Name</h3>
              <p className="">{project.client}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Services</h3>
              <div className="space-y-1">
                {project.services.map((service, index) => (
                  <p key={index} className="">
                    {service}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <Link
                href={project.websiteUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-title hover:border-secondary hover:text-secondary transition"
              >
                Visit Website <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About</h2>
              <p className="">{project.about}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Clients</h2>
              <p className="">{project.clients}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Challenge</h2>
              <p className="">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <p className=" mb-12">{project.results}</p>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {project.metrics.funding}
                  </h3>
                  <p className="">{project.metrics.fundingLabel}</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {project.metrics.conversion}
                  </h3>
                  <p className="">{project.metrics.conversionLabel}</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {project.metrics.users}
                  </h3>
                  <p className="">{project.metrics.usersLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
