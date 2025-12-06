import { Helmet } from "react-helmet";

export default function MarblePolishing() {
  return (
    <div className="w-full flex justify-center px-4 md:px-10 lg:px-20 py-10">
      <div className="max-w-4xl text-center space-y-8">
        <Helmet>
          <title>Professional Marble Polishing Services | Surya Enterprises</title>
          <meta
            name="description"
            content="Surya Enterprises offers expert marble polishing services with advanced techniques like diamond polishing, crystallization, grinding & honing. Perfect for homes, hotels, offices & commercial spaces."
          />
        </Helmet>

        {/* Top Image */}
        <img
          src="/images/marble-top.jpg"
          alt="Marble Polishing Work"
          className="w-full rounded-2xl shadow-lg mb-4"
        />

        {/* Hero Image */}
        <img
          src="/images/marble-polishing.jpg"
          alt="Marble Polishing"
          className="w-full rounded-2xl shadow-lg"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Professional Marble Polishing Services
        </h1>

        {/* Introduction */}
        <p className="text-gray-600 text-lg leading-relaxed">
          At <span className="font-semibold">Surya Enterprises</span>, we bring back the natural shine, smoothness, and beauty of your marble floors using advanced polishing technology and skilled workmanship. Whether your marble has lost its gloss, developed scratches, stains, or dull patches—our expert team restores it to a premium, glossy finish.
        </p>

        {/* Process */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Marble Polishing Process</h2>
          <p className="text-gray-600 leading-relaxed">
            We follow a multi-step professional process to ensure long-lasting shine and perfection:
          </p>
          <ul className="text-gray-700 space-y-2 list-disc text-left mx-auto w-fit">
            <li><strong>Inspection & Assessment:</strong> Identifying damages, scratches, and surface condition.</li>
            <li><strong>Grinding (If Needed):</strong> Removing deep scratches, stains, and uneven surfaces.</li>
            <li><strong>Honing:</strong> Smoothing the surface using industrial-grade diamond pads.</li>
            <li><strong>Polishing:</strong> Restoring high gloss using diamond polishing techniques.</li>
            <li><strong>Crystallization:</strong> Adding a protective glossy layer to enhance shine.</li>
            <li><strong>Sealing:</strong> Providing long-term protection from stains and wear.</li>
          </ul>
        </section>

        {/* Types of Polishing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Types of Marble Polishing & Techniques</h2>
          <p className="text-gray-600 leading-relaxed">
            Based on the condition of your marble, we offer multiple polishing methods:
          </p>
          <ul className="text-gray-700 space-y-3 list-disc text-left mx-auto w-fit">
            <li><strong>Diamond Polishing:</strong> Premium shine using diamond abrasives for a mirror-like finish.</li>
            <li><strong>Crystallization Polishing:</strong> Chemical-based shine suitable for hotels and commercial floors.</li>
            <li><strong>Grinding & Polishing:</strong> For old and heavily damaged marble surfaces.</li>
            <li><strong>Mirror Finish Polishing:</strong> Ultra-high gloss reflective finish for luxury interiors.</li>
            <li><strong>Honing:</strong> Matte/satin finish ideal for subtle & elegant flooring.</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Surya Enterprises?</h2>
          <ul className="text-gray-700 space-y-2 list-disc text-left mx-auto w-fit">
            <li>Highly skilled and experienced technicians</li>
            <li>Advanced machines & industrial-grade diamond pads</li>
            <li>Affordable pricing with premium quality results</li>
            <li>Guaranteed high-gloss mirror finish</li>
            <li>Fast, clean, and professional service</li>
            <li>Trusted by leading hotels, offices & residential clients</li>
          </ul>
        </section>

        {/* Suitable For */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Best Suited For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="p-4 border rounded-xl shadow-sm bg-gray-50">Homes & Apartments</div>
            <div className="p-4 border rounded-xl shadow-sm bg-gray-50">Hotels & Banquet Halls</div>
            <div className="p-4 border rounded-xl shadow-sm bg-gray-50">Offices & Commercial Spaces</div>
            <div className="p-4 border rounded-xl shadow-sm bg-gray-50">Showrooms & Retail Stores</div>
          </div>
        </section>
      </div>
    </div>
  );
}
