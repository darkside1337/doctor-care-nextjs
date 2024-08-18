import { SectionType } from "@/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MaxWidthWrapper from "./max-width-wrapper";
import Checkmark from "@/assets/checkmark.svg";

interface ServiceType {
  id?: number;
  title: string;
  body: string;
}

const ServiceCardsData: ServiceType[] = [
  {
    id: 1,
    title: "Problemas digestivos",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 2,
    title: "Saúde Hormonal",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 3,
    title: "Bem-estar mental",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 4,
    title: "Cuidados Pediátricos",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 5,
    title: "Autoimune e Inflamação",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    id: 6,
    title: "Saúde do Coração",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
];

//

function ServiceCard({ title, body }: ServiceType) {
  return (
    <div className="group flex flex-col gap-4 rounded-md border border-primary-green-light bg-white p-6 transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Checkmark />
      <h3 className="text-[24px] font-bold text-secondary-gray-headline group-hover:text-primary-green">
        {title}
      </h3>
      <p className="text-secondary-gray-paragraph">{body}</p>
    </div>
  );
}
const Services = ({ id, setActiveLinkId }: SectionType) => {
  const { ref: servicesRef, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      setActiveLinkId(id);
    }
  }, [id, inView, setActiveLinkId]);

  /* mobile 76 lg 64 */
  return (
    <section
      id={id}
      ref={servicesRef}
      className="bg-primary-green-light-02 pt-[calc(273px_+_100px)] lg:pt-[calc(105px_+_160px)]"
    >
      <MaxWidthWrapper>
        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.08rem] text-primary-green">
            SERVIÇOS
          </p>
          <h2 className="mx-auto max-w-[550px] text-[30px] font-bold text-secondary-gray-headline lg:text-[40px]">
            Como podemos ajudá-lo a se sentir melhor?
          </h2>
        </div>
        {/* service cards */}
        <div className="mt-[76px] grid grid-cols-1 gap-[32px] md:grid-cols-2 md:gap-[36px] lg:mt-[64px] lg:grid-cols-3 lg:gap-[40px]">
          {ServiceCardsData.map(({ id, title, body }) => (
            <ServiceCard key={id} title={title} body={body} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
