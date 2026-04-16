import SeoHead from "../../../components/SeoHead";
import { getPlaygroundSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getPlaygroundSeo("mad");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/playground/mad" keywords={seo.keywords} />;
}
