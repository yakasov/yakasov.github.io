import React from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Markdown from "react-markdown";
import type { ContentItem } from "./data/pages";
import { loadBlogPosts, loadTsxBlogComponent } from "./utils/blogLoader";
import { loadPages } from "./utils/pageLoader";

const generatePath = (item: ContentItem): string => {
  if (item.type === 'page') {
    return `/${item.id}`;
  } else {
    return `/blog/${item.id}`;
  }
};

function ContentRenderer({ 
  pages, 
  blogPosts, 
  tsxComponents 
}: { 
  pages: ContentItem[], 
  blogPosts: ContentItem[], 
  tsxComponents: Record<string, React.ComponentType> 
}) {
  const location = useLocation();
  const allContent = [...pages, ...blogPosts];
  
  const currentContent = allContent.find(item => generatePath(item) === location.pathname);
  
  if (!currentContent) {
    return (
      <div className="text-center text-muted-foreground mt-20">
        <h2 className="text-2xl font-bold mb-4">Page not found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="text-primary hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      {currentContent.type === "page" && currentContent.component ? (
        <currentContent.component />
      ) : currentContent.type === "blog-tsx" && tsxComponents[currentContent.id] ? (
        React.createElement(tsxComponents[currentContent.id])
      ) : (
        <div className="markdown-content">
          <Markdown>{currentContent.content || ""}</Markdown>
        </div>
      )}
    </div>
  );
}

function App() {
  const [pages, setPages] = React.useState<ContentItem[]>([]);
  const [blogPosts, setBlogPosts] = React.useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [tsxComponents, setTsxComponents] = React.useState<
    Record<string, React.ComponentType>
  >({});
  
  const location = useLocation();

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        const [loadedPages, blogs] = await Promise.all([
          loadPages(),
          loadBlogPosts(),
        ]);
        setPages(loadedPages);
        setBlogPosts(blogs);

        const components: Record<string, React.ComponentType> = {};
        for (const post of blogs) {
          if (post.type === "blog-tsx") {
            const component = await loadTsxBlogComponent(post.filePath);
            if (component) {
              components[post.id] = component;
            }
          }
        }
        setTsxComponents(components);
      } catch (error) {
        console.error("Error loading content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

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
            <div className="w-80 border-r border-border bg-zinc-800 rounded-l-xl">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  <Link to="/" className="hover:text-primary transition-colors">
                    Navigation
                  </Link>
                </h2>

                <div className="mb-8">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Pages
                  </h3>
                  <nav className="space-y-1">
                    {pages.map((page) => {
                      const path = generatePath(page);
                      const isActive = location.pathname === path;
                      
                      return (
                        <Link
                          key={page.id}
                          to={path}
                          className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          }`}
                        >
                          {page.title}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {blogPosts.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      Blog Posts
                    </h3>
                    <nav className="space-y-1">
                      {blogPosts.map((post) => {
                        const path = generatePath(post);
                        const isActive = location.pathname === path;
                        
                        return (
                          <Link
                            key={post.id}
                            to={path}
                            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                              isActive
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent"
                            }`}
                          >
                            {post.title}
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-hidden rounded-r-xl">
              <div className="h-full overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/about" replace />} />
                  <Route 
                    path="/*" 
                    element={
                      <ContentRenderer 
                        pages={pages} 
                        blogPosts={blogPosts} 
                        tsxComponents={tsxComponents}
                      />
                    } 
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
