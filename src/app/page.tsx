"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Services from "./components/Services";
import Case from "./components/Case";
import Accordion from "./components/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import Team from "./components/Team";
import Link from "next/link";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  const marqueeVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  const marqueVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  const accordionItems = [
    {
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      number: "01",
    },
    {
      title: "Research and Strategy Development",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      number: "02",
    },
    {
      title: "Implementation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      number: "03",
    },
    {
      title: "Monitoring and Optimization",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      number: "04",
    },
    {
      title: "Reporting and Communication",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      number: "05",
    },
    {
      title: "Continual Improvement",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      number: "06",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      <Header />

      {/* Hero */}
      <div className="w-[90%] mx-auto lg:space-y-0 space-y-5 lg:p-6 mt-5 lg:mt-8 flex flex-col lg:flex-row">
        <div className="lg:w-[50%]">
          <p className="text-[41px] lg:text-[60px] font-[500] leading-[54px]">
            Navigating the digital landscape for success
          </p>
          <div className="hidden lg:block">
            <p className="text-[20px] mt-8 leading-[28px] lg:w-[86%] font-[400] lg:mb-8">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Link
              href="/"
              className="rounded-2xl font-[300] bg-positivus-dark w-fit text-white py-5 px-8 text-[20px]"
            >
              Book a consultation
            </Link>
          </div>
        </div>
        <img src="Ill1.png" alt="" className="lg:w-[50%]" />
        <div className="lg:hidden block">
          <p className="text-[20px] leading-[28px] lg:w-[86%] font-[400] mb-8">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <p className="rounded-2xl font-[300] bg-positivus-dark text-center text-white py-5 px-8 text-[20px]">
            Book a consultation
          </p>
        </div>
      </div>

      <motion.div
        className="hidden mb-14 marquee lg:flex justify-between grayscale"
        variants={marqueVariants}
        animate="animate"
      >
        <img src="/Company logo.svg" alt="" />
        <img src="/Company logo (1).svg" alt="" />
        <img src="/Company logo (5).svg" alt="" />
        <img src="/Company logo (4).svg" alt="" />
        <img src="/Company logo (2).svg" alt="" />
        <img src="/Company logo (3).svg" alt="" />
      </motion.div>
      <div className="my-10 grayscale">
        <motion.div
          className="lg:hidden flex justify-between mb-2"
          variants={marqueeVariants}
          animate="animate"
        >
          <img src="/Company logo.svg" alt="" className="w-28" />
          <img src="/Company logo (1).svg" alt="" className="w-28" />
          <img src="/Company logo (5).svg" alt="" className="w-28" />
        </motion.div>
        <motion.div
          className="lg:hidden flex justify-between"
          variants={marqueVariants}
          animate="animate"
        >
          <img src="/Company logo (4).svg" alt="" className="w-28" />
          <img src="/Company logo (2).svg" alt="" className="w-28" />
          <img src="/Company logo (3).svg" alt="" className="w-28" />
        </motion.div>
      </div>

      <Services />

      <div className="w-[90%] mx-auto lg:p-6 my-8">
        <div className="flex flex-col mb-12 lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
          <p className="bg-positivus-green text-[36px] px-1 font-[600] rounded-md">
            Case Studies
          </p>
          <p className="text-[16px] text-center lg:text-start lg:text-[18px] leading-[22px] font-[500] w-[105%] lg:w-[50%]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        {isSmallScreen ? (
          <Swiper spaceBetween={10} slidesPerView={1.2} className="">
            <SwiperSlide>
              <Case text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
            </SwiperSlide>
            <SwiperSlide>
              <Case text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            </SwiperSlide>
            <SwiperSlide>
              <Case text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="lg:bg-positivus-dark border-r border-white rounded-[3rem] lg:py-16 lg:px-12 grid grid-cols-3 gap-8">
            <Case text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
            <Case text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
            <Case text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
          </div>
        )}
      </div>

      <div className="w-[90%] mx-auto lg:p-6 my-8">
        <div className="flex flex-col mb-12 lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
          <p className="hidden lg:inline-block bg-positivus-green text-[36px] px-1 font-[600] rounded-md">
            Our Working Process
          </p>
          <p className="lg:hidden text-[36px] flex flex-col font-[600] rounded-md items-center">
            <span className="bg-positivus-green w-fit rounded-xl px-2">
              Our Working{" "}
            </span>
            <span className="rounded-xl w-fit px-2 bg-positivus-green">
              Process
            </span>
          </p>
          <p className="text-[16px] text-center lg:text-start lg:text-[18px] leading-[22px] font-[500] w-[105%] lg:w-[50%]">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <Accordion items={accordionItems} />
      </div>

      <div className="w-[90%] mx-auto lg:p-6 my-8">
        <div className="flex flex-col mb-12 lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
          <p className="bg-positivus-green text-[36px] px-1 font-[600] rounded-md">
            Team
          </p>
          <p className="text-[16px] text-center lg:text-start lg:text-[18px] leading-[22px] font-[500] w-[105%] lg:w-[50%]">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <Team
            name="John Smith"
            title="CEO and Founder"
            text="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
            img="/team1.png"
          />
          <Team
            name="Jane Doe"
            title="Director of Operations"
            text="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
            img="/team2.png"
          />
          <Team
            name="Michael Brown"
            title="Senior SEO Specialist"
            text="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
            img="/team3.png"
          />
          <Team
            name="Emily Johnson"
            title="PPC Manager"
            text="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
            img="/team4.png"
          />
          <Team
            name="Brian Williams"
            title="Social Media Specialist"
            text="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
            img="/team5.png"
          />
          <Team
            name="Sarah Kim"
            title="Content Creator"
            text="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
            img="/team6.png"
          />
        </div>
        <div className="flex lg:justify-end">
          <Link
            href="/"
            className="rounded-xl font-[300] bg-positivus-dark text-center text-white py-3 px-14 text-[16px] lg:w-fit w-full mt-8"
          >
            See all team
          </Link>
        </div>
      </div>

      <div className="w-[90%] mx-auto lg:p-6 my-8 ">
        <div className="flex flex-col mb-12 lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
          <p className="bg-positivus-green text-[36px] px-1 font-[600] rounded-md">
            Testimonials
          </p>
          <p className="text-[16px] text-center lg:text-start lg:text-[18px] leading-[22px] font-[500] w-[105%] lg:w-[50%]">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
        <div className="bg-positivus-dark p-10 rounded-[2rem]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <Testimonials text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence." />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence." />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence." />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence." />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence." />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials text="We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence." />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
