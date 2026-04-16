import SeoHead from "../../../components/SeoHead";
import { getWorkSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getWorkSeo("digital-transformation");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/work/digital-transformation" keywords={seo.keywords} />;
}
