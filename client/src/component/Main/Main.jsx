import { useState, useEffect } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

export default function Main() {
  const [message, setMessage] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [isMessageSent, setIsMessageSent] = useState(false);

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${apiUrl}/`);
      const data = await response.json();
      setMessage(data);
    };

    try {
      fetchMessage();
    } catch (error) {
      console.log(error);
    }
  }, [isMessageSent]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const submitForm = async () => {
      const response = await fetch(`${apiUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if required
        },
        body: JSON.stringify(formData),
      });

      response.ok && isMessageSent
        ? setIsMessageSent(false)
        : setIsMessageSent(true);

      setFormData({
        name: '',
        message: '',
      });
    };

    try {
      submitForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-14 flex-grow bg-bgPrimary">
      <section className="m-6 flex h-[90%] flex-col justify-between bg-bgSecondary p-2">
        <div className="mb-3 flex-grow bg-tertiary p-2">
          {message.length === 0
            ? 'loading'
            : message.map((data, index) => (
                <div
                  key={index}
                  className="mt-2 flex h-fit flex-col border-l-4 border-bgPrimary p-2 text-fontPrimary"
                >
                  <div>Name: {data.name}</div>
                  <div>Message: {data.message}</div>
                </div>
              ))}
        </div>
        <div>
          <form
            onSubmit={handleFormSubmit}
            className="flex gap-4"
            method="POST"
          >
            <div className="flex w-full flex-col gap-3">
              <input
                className="bg-tertiary text-fontPrimary"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  });
                }}
              />
              <input
                className="h-16 bg-tertiary text-fontPrimary"
                type="text"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="h-full bg-tertiary px-2 text-fontPrimary hover:bg-bgPrimary"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
