import SeoHead from "../../../../components/SeoHead";
import { getThreadSeo } from "../../../seo/routeSeo";

export default function Head() {
  const seo = getThreadSeo("artlook", "C5A");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/threads/artlook/C5A" keywords={seo.keywords} type="article" />;
}
