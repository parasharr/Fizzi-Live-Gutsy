"use client";

import { FC } from "react";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";

/**
 * Props for `Alternating`.
 */
export type AlternatingProps = SliceComponentProps<Content.AlternatingSlice>;

/**
 * Component for "Alternating" Slices.
 */
const Alternating: FC<AlternatingProps> = ({ slice }) => {

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container bg-yellow-300 relative text-sky-950"
    >
      <div>
        <div className="relative grid">
          {/* Can */}
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>
          {slice.primary.text_group.map((item, index) => (
            <div
              key={asText(item.heading)}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div className={index % 2 === 0 ? "col-start-1" : "md:col-start-2"}>
                <h2 className="text-balance text-6xl font-bold">
              <PrismicText field={item.heading} />
                </h2>
                <div className="mt-4 text-xl">
              <PrismicRichText field={item.body} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      Slices
    </Bounded>
  );
};

export default Alternating;
