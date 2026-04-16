import SeoHead from "../../../components/SeoHead";
import { getPlaygroundSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getPlaygroundSeo("winter-school");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/playground/winter-school" keywords={seo.keywords} />;
}
