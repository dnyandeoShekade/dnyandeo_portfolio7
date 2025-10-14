import { getSEO } from '../action/seo';
import ProjectsClient from './ProjectsClient';

// Generate metadata for the projects page
export async function generateMetadata() {
  return getSEO('/projects');
}

export default function ProjectsPage() {
  return <ProjectsClient />;
}
