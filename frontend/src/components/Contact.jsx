const Contact = () => {
  return (
    <div className="w-4/5 px-4 py-8 mx-auto">
      <h1 className="block max-w-full mb-4 text-3xl font-semibold text-center text-gray-800">Contact Us</h1>

      <div className="max-w-md p-4 mx-auto mt-4 border rounded-xl">
        <form action="https://formspree.io/f/xoqgdorq" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-sky-500 focus:border-sk-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-sky-500 focus:border-sk-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block w-full px-4 py-2 mt-1 text-sm text-gray-900 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-sky-500 focus:border-sk-500"
              required></textarea>
          </div>
          <div>
            <button type="submit" className="inline-block px-6 py-2 text-white rounded-md bg-sky-700 hover:bg-sky-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
