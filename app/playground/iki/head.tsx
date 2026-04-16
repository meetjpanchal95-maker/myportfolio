import SeoHead from "../../../components/SeoHead";
import { getPlaygroundSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getPlaygroundSeo("iki");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/playground/iki" keywords={seo.keywords} />;
}
