import SeoHead from "../../../components/SeoHead";
import { getWorkSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getWorkSeo("mitmut-studio");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/work/mitmut-studio" keywords={seo.keywords} />;
}
