import SeoHead from "../../../../components/SeoHead";
import { getThreadSeo } from "../../../seo/routeSeo";

export default function Head() {
  const seo = getThreadSeo("user-experience", "C4C");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/threads/user-experience/C4C" keywords={seo.keywords} type="article" />;
}
