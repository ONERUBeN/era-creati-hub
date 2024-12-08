const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Studio ERA
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Studio ERA, we believe in the power of creative solutions to transform businesses. 
              Our team of experts combines innovation with strategic thinking to deliver exceptional 
              results for our clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience across design, development, marketing, and recruitment, 
              we're uniquely positioned to help your business thrive in today's competitive landscape.
            </p>
          </div>
          <div className="relative h-[400px] bg-muted rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;