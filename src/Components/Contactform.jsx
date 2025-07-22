import react from 'react'

function Contactform() {
  return (
    <div className="w-full max-w-md p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-white/10 text-white">
      <h2 className="text-3xl mb-6 text-center font-semibold">Get in touch</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" className="w-full p-2 rounded bg-transparent border-b-2 border-white focus:outline-none text-center" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" className="w-full p-2 rounded bg-transparent border-b-2 border-white focus:outline-none text-center" placeholder="Your email" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" className="w-full p-2 h-24 rounded bg-transparent border border-white text-center resize-none" placeholder="Your message" />
        </div>
        <button type="submit" className="mt-2 bg-white text-black rounded px-4 py-2 hover:bg-black hover:text-white transition">Submit</button>
      </form>
    </div>
  );
}

export default Contactform