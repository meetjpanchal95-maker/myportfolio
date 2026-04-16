import SeoHead from "../../../components/SeoHead";
import { getWorkSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getWorkSeo("construct360");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/work/construct360" keywords={seo.keywords} />;
}
