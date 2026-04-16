import SeoHead from "../../../components/SeoHead";
import { getPlaygroundSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getPlaygroundSeo("goa-heritage");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/playground/goa-heritage" keywords={seo.keywords} />;
}
