import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900"
    >
      <div className="container mx-auto px-4 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/10">
            <Image
              src="/eles.jpg"
              alt="John Pires"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight">
              Hello there, I'm John Pires 👋
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              I'm a Machine Learning Engineer passionate about creating solutions, just as this, making people's life easier somehow.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-300 transition-all duration-300"
            >
              Get in touch
            </a>

            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-700 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
