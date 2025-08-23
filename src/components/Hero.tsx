import heroServers from '@/assets/hero-servers.jpg';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroServers} alt="Futuristic data center servers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="hero-text animate-fade-in-up mx-[6px] my-[21px]">
            Empowering Your{' '}
            <span className="gradient-text">Digital Future</span>{' '}
            with Secure, Sustainable{' '}
            <span className="gradient-text">Data Solutions</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            State-of-the-art infrastructure, cutting-edge technology, and green innovation—designed to keep your business running 24/7.
          </p>

          {/* CTA Buttons */}
          

          {/* Stats */}
          
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;