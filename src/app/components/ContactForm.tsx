export function ContactForm() {
  return (
    <div className="w-full sm:w-115 lg:w-135 h-auto lg:h-149 rounded-2xl bg-white border border-[#DBDFEB] shadow-[0_12px_32px_0_#171B2C0A] flex flex-col items-start justify-start p-6 sm:p-8 lg:p-10 gap-6">
      <p className="text-[20px]/8 font-bold font-inter text-[#171B2C] mb-2">
        Contact us
      </p>
      <p className="text-[14px]/6 font-normal font-inter text-[#656770]">
        Fill out the fields and we will get in touch.
      </p>
      <form className="flex flex-col gap-5 w-full max-w-lg mt-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-[14px]/6 font-bold text-[#171B2C] font-inter"
          >
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your name"
            className="w-full rounded-lg bg-[#F9F8F3] border-none px-4 py-3 text-sm text-[#171B2C] placeholder:text-[#6D7384] placeholder:font-inter placeholder:font-normal placeholder:text-[14px]/6 focus:outline-none focus:ring-1 focus:ring-[#3157F6] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[14px]/6 font-bold text-[#171B2C] font-inter"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            className="w-full rounded-lg bg-[#F9F8F3] border-none px-4 py-3 text-sm text-[#171B2C] placeholder:text-[#6D7384] placeholder:font-inter placeholder:font-normal placeholder:text-[14px]/6 focus:outline-none focus:ring-1 focus:ring-[#3157F6] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[14px]/6 font-bold text-[#171B2C] font-inter"
          >
            Your question
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us how we can help..."
            className="w-full rounded-lg bg-[#F9F8F3] border-none px-4 py-3 text-sm text-[#171B2C] placeholder:text-[#6D7384] placeholder:font-inter placeholder:font-normal placeholder:text-[14px]/6 focus:outline-none focus:ring-1 focus:ring-[#3157F6] transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#3157F6] hover:bg-[#2545D1] text-white! font-semibold text-sm py-3.5 px-6 transition-colors cursor-pointer"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
