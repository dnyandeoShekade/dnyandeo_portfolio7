import OptimizedProjectPage from '../../../components/project/OptimizedProjectPage';
import { getSEO } from '../../action/seo';

// Generate metadata for individual project pages
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Get SEO config for this specific project
  const seoData = getSEO(`/project/${slug}`);
  
  return seoData;
}

export default function Project({ params }) {
  return <OptimizedProjectPage projectSlug={params.slug} />;
}
