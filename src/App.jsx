function App() {
  return (
    <>
      <div>
        <div className={"bg-[#EDFBFF] bg-[url('/bg-hero-desktop.svg')] px-20"}>
          <header className={"flex items-center pt-12"}>
            <img className={"h-[31px] w-[200px]"} src="/logo.svg" alt="Huddle Logo" />
            <button className={"ml-auto h-12 w-[12.5rem] rounded-full bg-white font-openSans text-[0.875rem] font-bold leading-[1.188rem] text-very-dark-cyan"}>Try It Free</button>
          </header>
          <section className={"flex items-center gap-x-[3.375rem] pb-[4.5rem] pt-[4.438rem]"}>
            <div className={"basis-[40%] space-y-8"}>
              <h1 className={"font-poppins text-[2.5rem] font-semibold leading-[3.75rem] text-very-dark-cyan"}>Build The Community Your Fans Will Love</h1>
              <p className={"font-openSans text-[1.125rem] leading-[1.688rem] text-very-dark-cyan"}>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.{" "}
              </p>
              <button className={"h-[3.5rem] w-[17.5rem] rounded-full bg-pink text-center font-openSans text-[0.875rem] font-bold leading-[1.188rem] text-white"}>Get Started For Free</button>
            </div>
            <img className={"h-[30.125rem] w-[42.5rem]"} src="/illustration-mockups.svg" alt="Screen Mockups" />
          </section>
        </div>

        <section>
          <article className={"mx-[104px] mt-[160px] flex h-[440px] items-center gap-x-[168px] border pl-[109px] pr-4"}>
            <div>
              <h2 className={"font-poppins text-[28px] font-semibold leading-[42px] text-very-dark-cyan"}>Grow Together</h2>
              <p className={"pt-4 font-openSans text-[18px] leading-[27px] text-grayish-blue"}>
                Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
              </p>
            </div>
            <div className={"flex items-center"}>
              <img src="/illustration-grow-together.svg" alt="Grow Together" />
            </div>
          </article>
        </section>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
