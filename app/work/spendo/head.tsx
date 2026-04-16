import SeoHead from "../../../components/SeoHead";
import { getWorkSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getWorkSeo("spendo");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/work/spendo" keywords={seo.keywords} />;
}
