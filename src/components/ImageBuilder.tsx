import { client } from "@/util/SanityClient";
import imageUrlBuilder from "@sanity/image-url";

export default function ImageBuilder({ mainImage }: any) {
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }
  console.log(mainImage, "비었니");
  return urlFor(mainImage).url();
}
