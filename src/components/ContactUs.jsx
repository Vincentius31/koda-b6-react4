import { useState } from "react";
import { useForm } from "react-hook-form";

export const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });

  const onSubmit = (data) => {
    const newContacts = [...contacts, data];
    setContacts(newContacts);

    localStorage.setItem("contacts", JSON.stringify(newContacts));
    reset();
  };

  return (
    <section className="max-w-4xl mx-auto py-24 px-8">
      <h2 className="font-serif text-3xl mb-6">Contact</h2>

      <p className="text-gray-600 mb-8">
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggest
        criteria of them all, both look and taste.
      </p>

      <p className="mb-8 font-bold">
        Catering Service, 42nd Living St, 43043 New York, NY
      </p>

      <p className="mb-8 text-gray-600">
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input
          className="w-full border-b p-2"
          placeholder="Name"
          {...register("name", { required: true })}
        />

        <input
          className="w-full border-b p-2"
          placeholder="How many people"
          type="number"
          {...register("people", { required: true })}
        />

        <input
          className="w-full border-b p-2"
          type="datetime-local"
          {...register("date", { required: true })}
        />

        <textarea
          className="w-full border-b p-2"
          placeholder="Message"
          {...register("message", { required: true })}
        />

        <button
          type="submit"
          className="border px-6 py-2 hover:bg-black hover:text-white transition"
        >
          SEND MESSAGE
        </button>
      </form>

      {contacts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Contact Messages</h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3 text-left">Name</th>
                  <th className="border p-3 text-left">People</th>
                  <th className="border p-3 text-left">Date</th>
                  <th className="border p-3 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-3">{item.name}</td>
                    <td className="border p-3">{item.people}</td>
                    <td className="border p-3">{item.date}</td>
                    <td className="border p-3">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};
