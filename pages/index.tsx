"use client";
import Header from "@/components/blog1/header";
import { RefObject, useEffect, useRef, useState } from "react";
import Info from "@/components/blog1/info";
import Vacancies from "@/components/blog1/vacancies";
import AboutUs from "@/components/blog1/aboutUs";
import Benefits from "@/components/blog1/benefits";
import Reviews from "@/components/blog1/reviews";
import SocialMedia from "@/components/blog1/socialMedia";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const vacanciesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const [selectedRef, setSelectedRef] =
    useState<RefObject<HTMLDivElement>>(headerRef);

  useEffect(() => {
    if (selectedRef) {
      selectedRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedRef]);

  const handleSetRef = (id: number) => {
    switch (id) {
      case 0:
        setSelectedRef(feedbackRef);
        break;
      case 1:
        setSelectedRef(aboutUsRef);
        break;
      case 2:
        setSelectedRef(vacanciesRef);
        break;
      case 3:
        setSelectedRef(benefitsRef);
        break;
      default:
        console.log("here");
        break;
    }
  };

  return (
    <div>
      <Header setSelectedRef={handleSetRef} />
      <Info />
      <Vacancies />
      <AboutUs />
      <Benefits />
      <Reviews />
      <SocialMedia />
    </div>
  );
}
