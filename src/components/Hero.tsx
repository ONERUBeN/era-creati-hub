import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            Empowering Your Business Growth with Creative Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up">
            We provide tailored design, development, and marketing services to elevate your brand
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 h-auto animate-fade-up">
            Request a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;