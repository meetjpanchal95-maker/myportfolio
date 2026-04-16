import SeoHead from "../../../../components/SeoHead";
import { getThreadSeo } from "../../../seo/routeSeo";

export default function Head() {
  const seo = getThreadSeo("research", "C6C");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/threads/research/C6C" keywords={seo.keywords} type="article" />;
}
