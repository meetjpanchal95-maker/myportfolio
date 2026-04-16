import SeoHead from "../../../components/SeoHead";
import { getWorkSeo } from "../../seo/routeSeo";

export default function Head() {
  const seo = getWorkSeo("kafzeit");

  if (!seo) return null;

  return <SeoHead title={seo.title} description={seo.description} path="/work/kafzeit" keywords={seo.keywords} />;
}
