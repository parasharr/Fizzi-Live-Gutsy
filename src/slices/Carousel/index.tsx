"use client"

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { SodaCanProps } from "@/components/SodaCan";
import { Center, Environment, View } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>;

/**
 * Component for "Carousel" Slices.
 */
const Carousel: FC<CarouselProps> = ({ slice }) => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  function changeFlavor(index: number) {
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length // it is used to calculate the next index in a circular manner, ensuring that it wraps around when it reaches the end of the array
  }



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white"
    >
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50"/>
      <h2 className="relative text-center text-5xl font-bold">
      <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* left */}
        {/* can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0,0,1.2]}>
          <FloatingCan floatIntensity={.3} rotationIntensity={1} />
          </Center>
          <Environment files="/hdr/lobby.hdr" environmentIntensity={.6} environmentRotation={[0,3,0]} />
          <directionalLight intensity={6} position={[0,1,1]}/>
        </View>
        {/* right */}
      </div>

      <PrismicRichText field={slice.primary.price_copy} />
    
    </section>
  );
};

export default Carousel;
