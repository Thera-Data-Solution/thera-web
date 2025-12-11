export const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    {subtitle && (
      <span className="text-earth-600 font-medium tracking-widest text-sm uppercase block mb-3">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-serif text-earth-900">{title}</h2>
    <div className="w-24 h-1 bg-earth-300 mx-auto mt-6"></div>
  </div>
);