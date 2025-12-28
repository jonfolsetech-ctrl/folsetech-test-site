import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Web Design Prairieville LA | Professional Website Services",
  description:
    "Professional web design and digital marketing services in Prairieville, LA. Responsive websites, ecommerce solutions, and SEO optimization for Ascension Parish businesses.",
  keywords: [
    "web design Prairieville LA",
    "website designer Prairieville",
    "web design Ascension Parish",
    "ecommerce Prairieville LA",
    "SEO services Prairieville",
    "digital marketing Prairieville",
    "responsive web design LA",
    "professional website Prairieville",
  ],
  openGraph: {
    title: "Web Design Services in Prairieville, LA",
    description:
      "Affordable, professional web design and digital marketing for Prairieville businesses",
    type: "website",
    url: "https://folsetech.net/prairieville-web-design",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Prairieville Web Design", href: "/prairieville-web-design" },
];

export default function PrairievillePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Design Prairieville, LA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Professional website design and digital marketing services for
              Prairieville businesses. Responsive, fast, and SEO-optimized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Schedule Free Consultation
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              Why Choose Our Web Design Services in Prairieville?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Local Prairieville Expertise
                </h3>
                <p className="text-slate-700">
                  We understand the Ascension Parish market and know what it
                  takes to succeed in Prairieville. Our team has worked with
                  local businesses and understands your community's unique
                  needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Proven Results
                </h3>
                <p className="text-slate-700">
                  Our web design and SEO services have helped dozens of
                  Prairieville businesses increase their online visibility and
                  generate more leads and sales.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Expert Team
                </h3>
                <p className="text-slate-700">
                  Our team of experienced web designers, developers, and SEO
                  specialists bring years of expertise to every project. We stay
                  current with the latest trends and best practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Transparent Partnership
                </h3>
                <p className="text-slate-700">
                  We believe in open communication and transparency. You'll
                  always know what we're doing, why we're doing it, and what
                  results to expect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              Web Design & Digital Marketing Services for Prairieville
            </h2>

            <div className="space-y-12">
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Responsive Web Design in Prairieville
                </h3>
                <p className="text-slate-700 mb-4">
                  Your website needs to look amazing and work perfectly on every
                  device. We create responsive websites that provide an excellent
                  user experience whether your customers are on desktop, tablet,
                  or mobile.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Mobile-first design approach</li>
                  <li>Fast page load speeds</li>
                  <li>SEO-optimized architecture</li>
                  <li>Conversion-focused design</li>
                  <li>Secure and reliable hosting</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Ecommerce Websites for Prairieville Businesses
                </h3>
                <p className="text-slate-700 mb-4">
                  Ready to sell online? We build powerful ecommerce websites
                  that showcase your products and make it easy for customers to
                  buy. Our ecommerce solutions are designed to increase sales and
                  reduce cart abandonment.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Complete ecommerce platform setup</li>
                  <li>Secure payment processing</li>
                  <li>Inventory management system</li>
                  <li>Product catalog optimization</li>
                  <li>Integration with marketing tools</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  SEO Services for Prairieville Businesses
                </h3>
                <p className="text-slate-700 mb-4">
                  A great website doesn't help if people can't find it. Our SEO
                  services help your Prairieville business rank higher in Google
                  search results for the keywords your customers are searching
                  for.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Local SEO optimization</li>
                  <li>Technical SEO improvements</li>
                  <li>Content strategy and creation</li>
                  <li>Link building and authority</li>
                  <li>Monthly SEO reporting</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  Digital Marketing in Prairieville, LA
                </h3>
                <p className="text-slate-700 mb-4">
                  Beyond your website, we offer comprehensive digital marketing
                  services to help you reach and engage your Prairieville
                  audience across all channels.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Paid search advertising (Google Ads)</li>
                  <li>Social media marketing</li>
                  <li>Email marketing campaigns</li>
                  <li>Content marketing and blogging</li>
                  <li>Analytics and performance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
              We Proudly Serve Prairieville & Ascension Parish
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-slate-700 mb-6">
                We provide professional web design, ecommerce, SEO, and digital
                marketing services to businesses throughout Prairieville and
                Ascension Parish. Whether you're located in downtown Prairieville
                or anywhere in Ascension Parish, we're here to help your business
                grow online.
              </p>
              <p className="text-slate-700 font-semibold">
                Service Areas: Prairieville, Gonzales, Sorrento, Geismar, and
                surrounding Ascension Parish communities.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              Our Web Design Process
            </h2>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  num: "1",
                  title: "Discovery",
                  desc: "We learn about your business, goals, and audience",
                },
                {
                  num: "2",
                  title: "Strategy",
                  desc: "We create a customized plan for your success",
                },
                {
                  num: "3",
                  title: "Design & Development",
                  desc: "We build your beautiful, functional website",
                },
                {
                  num: "4",
                  title: "Testing & Launch",
                  desc: "We thoroughly test and launch your site",
                },
                {
                  num: "5",
                  title: "Growth",
                  desc: "We optimize and grow your online presence",
                },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  How much does web design cost in Prairieville?
                </h3>
                <p className="text-slate-700">
                  Web design costs vary based on your specific needs and project
                  scope. A simple brochure website might cost $2,000-$5,000, while
                  a full ecommerce site could range from $5,000-$15,000+. We offer
                  flexible pricing options and will discuss costs during your free
                  consultation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  Will my website rank in Google for SEO?
                </h3>
                <p className="text-slate-700">
                  We build all our websites with SEO best practices in mind, which
                  gives you a solid foundation. For competitive keywords in
                  Prairieville, we recommend our SEO services to help you rank
                  higher. Ranking depends on competition, your industry, and how
                  consistently we optimize your site.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  Can I sell products online with an ecommerce website?
                </h3>
                <p className="text-slate-700">
                  Yes! We build complete ecommerce websites where you can list
                  your products, accept payments, manage inventory, and fulfill
                  orders. Whether you're selling physical products, digital
                  products, or services, we can build an ecommerce solution for
                  your Prairieville business.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  How long does it take to build a website?
                </h3>
                <p className="text-slate-700">
                  A typical website project takes 4-8 weeks from start to launch.
                  This includes discovery, design, development, testing, and
                  optimization. Rush projects are available for additional fees.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  What makes your web design different?
                </h3>
                <p className="text-slate-700">
                  We focus on results, not just pretty websites. Every design
                  decision is made to help your Prairieville business convert
                  visitors into customers. We combine beautiful design with
                  conversion optimization, SEO, and user experience best practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  Do you provide ongoing website maintenance and support?
                </h3>
                <p className="text-slate-700">
                  Yes! We offer ongoing website maintenance, hosting, security
                  updates, backups, and technical support. We can also help with
                  content updates, SEO optimization, and digital marketing services
                  to continue growing your Prairieville business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Schedule your free web design consultation with Folse Tech today.
              Let's discuss your Prairieville business goals and how we can help
              you succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition">
                Schedule Free Consultation
              </button>
              <a
                href="mailto:contact@folsetech.net"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition inline-block"
              >
                Email Us: contact@folsetech.net
              </a>
            </div>
            <p className="mt-8 text-blue-100">
              Serving Prairieville, Gonzales, and all of Ascension Parish
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
