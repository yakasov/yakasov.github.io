import type { Page } from '../data/pages';

export async function loadPages(): Promise<Page[]> {
  const pageModules = import.meta.glob('/src/content/pages/*.tsx');

  const pageConfigs: Array<{id: string; title: string; order: number}> = [
    { id: 'Home', title: 'Home', order: 1 },
    { id: 'About', title: 'About', order: 2 },
    { id: 'Projects', title: 'Projects', order: 3 }
  ];

  const pages: Page[] = [];

  for (const config of pageConfigs) {
    try {
      const modulePath = `/src/content/pages/${config.id}.tsx`;
      const moduleLoader = pageModules[modulePath];
      
      if (moduleLoader) {
        const module = await moduleLoader() as { default: React.ComponentType };
        
        pages.push({
          id: config.id.toLowerCase(),
          title: config.title,
          component: module.default,
          type: 'page',
          order: config.order
        });
      }
    } catch (error) {
      console.error(`Error loading page component ${config.id}:`, error);
    }
  }

  return pages.sort((a, b) => a.order - b.order);
}