import { CMS_NAME } from "@/lib/constants";
import Logo from "@/app/_components/logo";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Logo title={'RGB RUN Entertainment'} src={'/assets/rgbrun/logo.jpg'} />
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A super fun Game!
      </h4>
    </section>
  );
}
