import SeoHead from "../../../../components/SeoHead";
import { getThreadSeo } from "../../../seo/routeSeo";

export default function Head() {
  const seo = getThreadSeo("sustainable-futures", "C2C");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/threads/sustainable-futures/C2C" keywords={seo.keywords} type="article" />;
}
