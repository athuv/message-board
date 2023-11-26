export default function Main() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="h-14 flex-grow bg-bgPrimary">
      <section className="m-6 flex h-[90%] flex-col justify-between bg-bgSecondary p-2">
        <div className="h-[80%] bg-tertiary p-2">
          <div className="flex h-fit flex-col border-l-4 border-bgPrimary p-2 text-fontPrimary">
            <div>Name: </div>
            <div>Message:</div>
          </div>

          <div className="mt-2 flex h-fit flex-col border-l-4 border-bgPrimary p-2 text-fontPrimary">
            <div>Name: </div>
            <div>Message:</div>
          </div>
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
              />
              <input
                className="h-16 bg-tertiary text-fontPrimary"
                type="text"
                name="message"
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
