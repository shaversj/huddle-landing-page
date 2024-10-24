import { companyInformation, features } from "./constants/constants.ts";

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
        <section className={"space-y-10"}>
          {features.map((description, index) => (
            <article key={index} className={"mx-[104px] mt-[160px] flex h-[440px] items-center gap-x-[168px] border pl-[109px] pr-4 even:flex-row-reverse"}>
              <div>
                <h2 className={"font-poppins text-[28px] font-semibold leading-[42px] text-very-dark-cyan"}>{description.title}</h2>
                <p className={"pt-4 font-openSans text-[18px] leading-[27px] text-grayish-blue"}>{description.description}</p>
              </div>
              <div className={"flex items-center"}>
                <img src={description.imagePath} alt={description.alt} />
              </div>
            </article>
          ))}
        </section>
        <footer className={"bg-very-dark-cyan px-[120px] pb-16 pt-[144px] font-openSans text-[14px] leading-6 text-[#DFE4F0]"}>
          <img className={"h-6 w-[152px]"} src="/logo-footer.svg" alt="Huddle Logo" />
          <div className={"flex gap-x-[130px] pt-8"}>
            <div className={"space-y-4"}>
              {companyInformation.contactInformation.map((contactInformation, index) => (
                <div key={index} className={"flex gap-x-4"}>
                  <div className={`flex size-6 items-center ${contactInformation.icon.includes("location") && "pt-1"}`}>
                    <img src={contactInformation.icon} alt={contactInformation.iconAlt} />
                  </div>
                  <p className={"max-w-[339px]"}>
                    <a>{contactInformation.text}</a>
                  </p>
                </div>
              ))}
            </div>

            <nav className={"grid grid-cols-2 grid-rows-[auto,auto,1fr] gap-x-[130px] gap-y-3 text-nowrap"}>
              {companyInformation.navigation.map((navigation, index) => (
                <a className={"h-[27px]"} key={index}>
                  {navigation.title}
                </a>
              ))}
            </nav>

            <div className={"flex flex-col justify-between"}>
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
