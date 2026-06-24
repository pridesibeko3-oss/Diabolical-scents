export default function Newsletter(){
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-serif text-diagold">Receive exclusive releases and limited editions.</h3>
        <p className="mt-4 text-gray-300">Join the Garden — be first to know about limited drops.</p>

        {/*
          IMPORTANT: Formspree requires the form to submit with POST to the form endpoint.
          The action URL below has been updated to your Formspree endpoint.
          The submit button has type="submit" so the browser will POST the form when clicked or when Enter is pressed.
        */}
        <form action="https://formspree.io/f/xlgyglgo" method="POST" className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
          <input name="name" placeholder="Name" required className="px-4 py-3 rounded border border-gray-700 bg-transparent text-white" />
          <input name="email" type="email" placeholder="Email" required className="px-4 py-3 rounded border border-gray-700 bg-transparent text-white" />
          <input type="hidden" name="_replyto" value="pridesibeko3@gmail.com" />
          {/* Disable Formspree captcha if you prefer (optional). Remove or set to true if you want captcha. */}
          <input type="hidden" name="_captcha" value="false" />
          <button type="submit" className="px-6 py-3 rounded-full bg-diagold text-black font-semibold">Enter The Garden</button>
        </form>

        <p className="mt-4 text-sm text-gray-500">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
