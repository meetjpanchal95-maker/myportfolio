import SeoHead from "../../../../components/SeoHead";
import { getThreadSeo } from "../../../seo/routeSeo";

export default function Head() {
  const seo = getThreadSeo("user-experience", "C4A");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/threads/user-experience/C4A" keywords={seo.keywords} type="article" />;
}
