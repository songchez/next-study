import { client } from "@/util/SanityClient";
import imageUrlBuilder from "@sanity/image-url";

export default function ImageBuilder({ mainImage }: any) {
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  return urlFor(mainImage).url();
}
