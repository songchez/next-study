"use client";

import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "@/util/SanityClient";

export default function ArticleBuilder({ postBody }: { postBody: any[] }) {
  const SampleImageComponent = ({
    value,
    isInline,
  }: {
    value: any;
    isInline: any;
  }) => {
    const { width, height } = getImageDimensions(value);
    return (
      <Image
        src={urlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        width={400}
        height={400}
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    );
  };
  const components: PortableTextComponents = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    block: {
      // Ex. 1: customizing common block types
      // h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
      // h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
      // h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
      // h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-green-900">{children}</blockquote>
      ),
    },
  };
  return (
    <article className="prose break-words">
      <PortableText value={postBody} components={components}></PortableText>
    </article>
  );
}
