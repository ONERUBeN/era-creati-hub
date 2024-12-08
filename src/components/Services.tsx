import { Palette, Code, Megaphone, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design",
    description: "Creative design solutions that capture your brand's essence and engage your audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web solutions built with cutting-edge technologies for optimal performance.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Strategic marketing campaigns that drive growth and increase your market presence.",
  },
  {
    icon: Users,
    title: "Recruitment",
    description: "Expert talent acquisition services to build your dream team and scale your business.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a 
                href="#" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Learn More
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;