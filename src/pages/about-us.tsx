
import { faqData } from "@/constants";
import { NextPage } from "next";
import React, { useState } from "react";

const Faq: NextPage = () => {
  const [visibleFaqs, setVisibleFaqs] = useState(6);

  const showMoreFaqs = () => {
    setVisibleFaqs(visibleFaqs + 3); // Show 3 more FAQs
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="main mb-[200px] mt-[140px]">
      <div className="flex mx-auto mb-[150px] w-4/5">
        <div className="w-1/2 px-5">
          <img
            className="filter grayscale"
            src="/icons/krik za nas 1.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h4 className="font-bold text-xl pb-2 text-left">
            Центарот за младинскиот активизам Крик е невладина, непрофитна
            организација основана од страна на млади луѓе, предводена од млади
            луѓе и работи за и со младите луѓе.
          </h4>
          <p>
            Целната група со која КРИК работи се сите луѓе (но главно млади) кои
            сакаат да придонесат и направат промени во полето на екологија,
            критичко размислување и комуникациски вештини, како и рабење за
            благостојба на социјално исклучените групи од општеството и
            маргинализираните групи. Крик се стреми кон поттикнување на поголема
            партиципација на младите, младински активизам, да ги охрабри младите
            луѓе да бидат повеќе вклучени во процесот на креирање политики на
            локално и на национално ниво.
          </p>
        </div>
      </div>

      <div className=" mx-auto w-4/5 mb-[210px]">
        <h1 className=" text-4xl font-extrabold px-5">За Крик</h1>
        <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <div className=" flex">
          <div className="w-1/5">
            <h1 className="text-xl font-bold text-orangeColor px-5">Мисија</h1>
          </div>
          <div className="w-4/5">
            <p>
              Да понуди активности за зајакнување на капацитетите на младите и
              лицата со попреченост преку развој на младинската работа и
              обезбедување услуги за социјална заштита.
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <div className="w-full flex">
          <div className="w-1/5">
            <h1 className="text-xl font-bold text-orangeColor px-5">Визија</h1>
          </div>
          <div className="w-4/5">
            <p>
              Да создаде инклузивно општество каде младите и лицата со
              попреченост се подеднакво вклучени и имаат целосно развиени
              капацитети активно да придонесуваат за заедницата.
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <div className="w-full flex">
          <div className="w-1/5">
            <h1 className="text-xl font-bold text-orangeColor px-5">
              Нашите Вредности
            </h1>
          </div>
          <div className="w-4/5">
            <p>
              Развивање на младинската работа, поттикнување младински активизам
              и волонтеризам. Поголема вклученост на младите исклучени од
              општеството преку учество на работилници, настани и обуки. Развој
              на услуги за социјална заштита, сместување и грижа за лица со
              интелектуална и/или телесна попреченост и други услови.
              Поттикнување на социјалната вклученост на маргинализираните групи
              млади и возрасни во сите сфери на општественото делување.
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
      </div>

      <div className="mx-auto w-4/5">
        <h1 className="text-2xl font-bold text-blackColor px-5">
          Најчесто поставувани прашања
        </h1>
      </div>
      {faqData.slice(0, visibleFaqs).map((faq, index) => (
        <div
          className="mx-auto w-4/5 text-xl font-bold text-blackColor rounded-2xl bg-purpleColor pl-2 my-3   "
          key={index}
        >
          <div className="faq-open-close flex flex-row-reverse items-center justify-between px-[50px] py-[40px]" onClick={() => toggleAnswer(index)}>
            <div className="plus-minus-faq   ">
              {openIndex === index ? (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50ZM37.5 22.5H12.5V27.5H37.5V22.5Z"
                    fill="#191919"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 0C11.2154 0 0 11.2154 0 25C0 38.7846 11.2154 50 25 50C38.7846 50 50 38.7846 50 25C50 11.2154 38.7846 0 25 0ZM25 3.84615C36.7058 3.84615 46.1538 13.2942 46.1538 25C46.1538 36.7058 36.7058 46.1538 25 46.1538C13.2942 46.1538 3.84615 36.7058 3.84615 25C3.84615 13.2942 13.2942 3.84615 25 3.84615ZM23.0769 13.4615V23.0769H13.4615V26.9231H23.0769V36.5385H26.9231V26.9231H36.5385V23.0769H26.9231V13.4615H23.0769Z"
                    fill="#191919"
                  />
                </svg>
              )}
            </div>
            <div className="faq-question" >{faq.question}</div>
          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </main>
  );
};

export default Faq;
