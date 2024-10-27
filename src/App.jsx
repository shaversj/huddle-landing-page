import { companyInformation, features } from "./constants/constants.ts";

function App() {
  return (
    <>
      <div className={"antialiased"}>
        <div className={"bg-[#EDFBFF] bg-[url('/bg-hero-mobile.svg')] px-4 lg:bg-[url('/bg-hero-desktop.svg')] lg:px-20"}>
          <header className={"flex items-center pt-12"}>
            <img className={"h-4 w-[6.5rem] lg:h-[1.938rem] lg:w-[12.5rem]"} src="/logo.svg" alt="Huddle Logo" />
            <button className={"ml-auto h-6 w-[6rem] rounded-full bg-white font-openSans text-[0.625rem] font-bold leading-[0.875rem] text-very-dark-cyan shadow-button-shadow lg:h-12 lg:w-[12.5rem] lg:text-[0.875rem] lg:leading-[1.188rem]"}>
              Try It Free
            </button>
          </header>
          <section className={"mx-auto flex w-[19rem] flex-col items-center justify-center pb-[2.313rem] pt-[4.438rem] lg:w-full lg:flex-row lg:gap-x-[3.375rem] lg:px-0 lg:pb-[4.5rem]"}>
            <div className={"flex w-[19rem] basis-[40%] flex-col items-center lg:w-full lg:items-start lg:gap-y-8"}>
              <h1 className={"text-center font-poppins text-[1.5rem] font-semibold leading-[2.25rem] text-very-dark-cyan lg:text-left lg:text-[2.5rem] lg:leading-[3.75rem]"}>Build The Community Your Fans Will Love</h1>
              <p className={"pt-6 text-center font-openSans leading-6 text-very-dark-cyan lg:pt-0 lg:text-left lg:text-[1.125rem] lg:leading-[1.688rem]"}>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.{" "}
              </p>
              <button
                className={"mt-8 h-[2.5rem] w-[15rem] rounded-full bg-pink text-center font-openSans text-xs font-bold leading-4 text-white shadow-hero-button-shadow lg:mt-0 lg:h-[3.5rem] lg:w-[17.5rem] lg:text-[0.875rem] lg:leading-[1.188rem]"}
              >
                Get Started For Free
              </button>
            </div>
            <img className={"mt-[3.5rem] lg:mt-0 lg:h-[30.125rem] lg:w-[42.5rem]"} src="/illustration-mockups.svg" alt="Screen Mockups" />
          </section>
        </div>
        <section className={"mx-5 space-y-10 pb-[21.5rem] lg:mx-0"}>
          {features.map((description, index) => (
            <article
              key={index}
              className={
                "mt-[3.688rem] flex h-[30.5rem] flex-col-reverse items-center justify-center gap-y-6 rounded-2xl shadow-feature-shadow lg:mx-[104px] lg:mt-[10rem] lg:h-[27.5rem] lg:flex-row lg:gap-x-[10.5rem] lg:pl-[6.813rem] lg:pr-4 lg:even:flex-row-reverse"
              }
            >
              <div>
                <h2 className={"text-center font-poppins text-[1.25rem] font-semibold leading-[1.875rem] text-very-dark-cyan lg:text-left lg:text-[1.75rem] lg:leading-[2.625rem]"}>{description.title}</h2>
                <p className={"w-[16rem] pt-4 text-center font-openSans text-[0.875rem] leading-[1.313rem] text-grayish-blue lg:w-full lg:text-left lg:text-[1.125rem] lg:leading-[1.688rem]"}>{description.description}</p>
              </div>
              <div className={"flex size-[16rem] items-center lg:size-full"}>
                <img src={description.imagePath} alt={description.alt} />
              </div>
            </article>
          ))}
        </section>
        <section className={"absolute left-1/2 z-10 mx-3 -ml-[176px] flex h-[176px] min-w-[352px] -translate-y-2/3 flex-col items-center justify-center rounded-[15px] bg-white px-4 shadow-cta-shadow lg:-ml-[400px] lg:h-[280px] lg:w-[800px] lg:px-0"}>
          <p className={"font-poppins text-[18px] font-semibold leading-[30px] text-very-dark-cyan lg:text-[32px] lg:leading-[60px]"}>Ready To Build Your Community?</p>
          <button className={"mt-6 h-[40px] w-[200px] rounded-full bg-pink text-center font-openSans text-[10px] font-bold leading-[15px] text-white shadow-cta-button-shadow lg:mt-8 lg:h-[80px] lg:w-[400px] lg:text-[20px] lg:leading-[30px]"}>
            Get Started For Free
          </button>
        </section>
        <footer className={"z-20 bg-very-dark-cyan px-4 pb-[42px] pt-[124px] font-openSans text-[14px] leading-6 text-[#DFE4F0] lg:px-[120px] lg:pb-16 lg:pt-[144px]"}>
          <img className={"h-6 w-[152px]"} src="/logo-footer.svg" alt="Huddle Logo" />
          <div className={"flex flex-col gap-x-[130px] pt-8 lg:flex-row"}>
            <div className={"space-y-6 lg:space-y-4"}>
              {companyInformation.contactInformation.map((contactInformation, index) => (
                <div key={index} className={"flex w-full gap-x-4"}>
                  <div className={`flex size-6 items-center justify-start ${contactInformation.icon.includes("location") && "pt-1"}`}>
                    <img src={contactInformation.icon} alt={contactInformation.iconAlt} />
                  </div>
                  <p className={"w-[298px] lg:max-w-[339px]"}>
                    <a>{contactInformation.text}</a>
                  </p>
                </div>
              ))}
            </div>

            <nav className={"grid gap-x-[130px] gap-y-3 text-nowrap pt-[41px] lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:pt-0"}>
              {companyInformation.navigation.map((navigation, index) => (
                <a className={"h-[27px]"} key={index}>
                  {navigation.title}
                </a>
              ))}
            </nav>

            <div className={"flex flex-col items-center gap-y-6 pt-6 lg:items-start lg:justify-between lg:gap-y-0 lg:pb-0 lg:pt-0"}>
              <div className={"flex gap-x-[11.35px]"}>
                {companyInformation.socialMedia.map((socialMedia, index) => (
                  <img key={index} src={socialMedia.icon} alt="Social Media Icon" />
                ))}
              </div>
              <p className={"text-[12px] leading-[18px]"}>© Copyright 2018 Huddle. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
