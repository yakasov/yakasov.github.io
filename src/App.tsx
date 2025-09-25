import React from 'react'
import Markdown from 'react-markdown'
import type { ContentItem } from './data/pages'
import { loadBlogPosts, loadTsxBlogComponent } from './utils/blogLoader'
import { loadPages } from './utils/pageLoader'

function App() {
  const [pages, setPages] = React.useState<ContentItem[]>([]);
  const [blogPosts, setBlogPosts] = React.useState<ContentItem[]>([]);
  const [activeContent, setActiveContent] = React.useState<string>('home');
  const [isLoading, setIsLoading] = React.useState(true);
  const [tsxComponents, setTsxComponents] = React.useState<Record<string, React.ComponentType>>({});

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        const [loadedPages, blogs] = await Promise.all([
          loadPages(),
          loadBlogPosts()
        ]);
        setPages(loadedPages);
        setBlogPosts(blogs);
        
        const components: Record<string, React.ComponentType> = {};
        for (const post of blogs) {
          if (post.type === 'blog-tsx') {
            const component = await loadTsxBlogComponent(post.filePath);
            if (component) {
              components[post.id] = component;
            }
          }
        }
        setTsxComponents(components);
        
        if (loadedPages.length > 0) {
          setActiveContent(loadedPages[0].id);
        }
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  const getCurrentContent = () => {
    const allContent = [...pages, ...blogPosts];
    return allContent.find(item => item.id === activeContent) || pages[0];
  };

  const currentContent = getCurrentContent();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto bg-card rounded-xl shadow-2xl border border-border min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)]">
          <div className="flex h-full">
            <div className="w-80 border-r border-border bg-gradient-to-b from-zinc-800/80 to-zinc-900/90 rounded-l-xl">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Navigation</h2>
                
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Pages
                  </h3>
                  <nav className="space-y-1">
                    {pages.map((page) => (
                      <button
                        key={page.id}
                        onClick={() => setActiveContent(page.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                          activeContent === page.id
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                      >
                        {page.title}
                      </button>
                    ))}
                  </nav>
                </div>

                {blogPosts.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      Blog Posts
                    </h3>
                    <nav className="space-y-1">
                      {blogPosts.map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setActiveContent(post.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                            activeContent === post.id
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                          }`}
                        >
                          {post.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-hidden rounded-r-xl">
              <div className="h-full overflow-y-auto">
                <div className="p-8">
                  {currentContent.type === 'page' && currentContent.component ? (
                    <currentContent.component />
                  ) : currentContent.type === 'blog-tsx' && tsxComponents[currentContent.id] ? (
                    React.createElement(tsxComponents[currentContent.id])
                  ) : (
                    <div className="markdown-content">
                      <Markdown>
                        {currentContent.content || ''}
                      </Markdown>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
