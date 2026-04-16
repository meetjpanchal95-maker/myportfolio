import SeoHead from "../../../../components/SeoHead";
import { getThreadSeo } from "../../../seo/routeSeo";

export default function Head() {
  const seo = getThreadSeo("archipreneurs", "C1B");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/threads/archipreneurs/C1B" keywords={seo.keywords} type="article" />;
}
