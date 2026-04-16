import SeoHead from "../../../components/SeoHead";
import { getPlaygroundSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getPlaygroundSeo("karigarshala");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/playground/karigarshala" keywords={seo.keywords} />;
}
