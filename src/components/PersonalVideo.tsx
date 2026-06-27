export default function PersonalVideo() {
  return (
    <section className="py-20 sm:py-28 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            &ldquo;ఒక్క నిమిషం — నేను మీతో మాట్లాడాలి&rdquo;
          </h2>
          <p className="text-gray-500 text-sm italic">(One minute — I want to talk to you)</p>
        </div>

        {/* Video Embed Placeholder */}
        <div className="aspect-video bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center mb-8 cursor-pointer hover:border-violet-500/30 transition-colors overflow-hidden">
          <div className="text-center">
            <div className="w-20 h-20 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-violet-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-gray-400">Personal Message from Manohar</p>
            <p className="text-gray-600 text-sm">(3-4 min, Telugu, direct to camera)</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-300 text-lg mb-6">
            &ldquo;మీ journey ఇక్కడ start అవుతుంది.&rdquo;
            <br />
            <span className="text-gray-500 text-sm italic">(Your journey starts here.)</span>
          </p>
          <a
            href="#register"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            Free Workshop కి Register అవ్వండి →
          </a>
        </div>
      </div>
    </section>
  );
}
