function Contact() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-5">
        Contact
      </h1>
      <form
        action="https://getform.io/f/9198c406-348b-4031-b019-5507b90b9272"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-sm py-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="uppercase text-sm py-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="uppercase text-sm py-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="uppercase text-sm py-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="uppercase text-sm py-2">
            Message
          </label>
          <textarea
            rows={8}
            name="message"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
