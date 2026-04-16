import SeoHead from "../../../../components/SeoHead";
import { getThreadSeo } from "../../../seo/routeSeo";

export default function Head() {
  const seo = getThreadSeo("beyond-spaces", "C3C");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/threads/beyond-spaces/C3C" keywords={seo.keywords} type="article" />;
}
