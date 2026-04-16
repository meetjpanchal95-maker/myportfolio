import SeoHead from "../../../components/SeoHead";
import { getPlaygroundSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getPlaygroundSeo("giant");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/playground/giant" keywords={seo.keywords} />;
}
