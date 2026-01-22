export const ContactUs = () => {
  return (
    <section className="max-w-4xl mx-auto py-24 px-8">
      <h2 className="font-serif text-3xl mb-6">Contact</h2>
      <p className="text-gray-600 mb-8">
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="mb-8 text-bold">
        Catering Service, 42nd Living St, 43043 New York, NY
      </p>
      <p className="mb-8 text-gray-600">
        You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
      </p>
      <form className="space-y-6">
        <input className="w-full border-b p-2" placeholder="Name" />
        <input className="w-full border-b p-2" placeholder="How many people" />
        <input className="w-full border-b p-2" type="datetime-local" />
        <textarea className="w-full border-b p-2" placeholder="Message" />
        <button className="border px-6 py-2 hover:bg-black hover:text-white transition">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};
