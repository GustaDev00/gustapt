import Loading from "@/common/molecules/Loading";
import Header from "@/common/organisms/Header";
import { Over, Section } from "@/styles/components/styles";
import ContactTemplate from "./Contact";
import IntroTemplate from "./Intro";
import ServicesTemplate from "./Services";
import WorksTemplate from "./Works";
import useAnimation from "./animation";

const HomeTemplate = () => {
  const { navRef, sectionBlueRef, headerRef } = useAnimation();

  return (
    <Section>
      <Loading />
      <Header headerRef={headerRef} navRef={navRef}>
        <IntroTemplate className="section" />
        <Over ref={sectionBlueRef}>
          <ServicesTemplate className="section" />
          <WorksTemplate className="section" />
          <ContactTemplate className="section" />
        </Over>
      </Header>
    </Section>
  );
};

export default HomeTemplate;
