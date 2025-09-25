import React from 'react';
import type { BlogPost } from '../data/pages';

const DEFAULT_DATE = 'January 1, 2000';

const extractFilename = (path: string, extension: string): string => 
  path.split('/').pop()?.replace(extension, '') || '';

const formatFilenameAsTitle = (filename: string, isMarkdown = true): string => {
  if (isMarkdown) {
    return filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
  return filename.replace(/([A-Z])/g, ' $1').trim();
};

const createBlogPost = (
  id: string, 
  title: string, 
  content: string, 
  filePath: string, 
  type: 'blog' | 'blog-tsx', 
  date: Date
): BlogPost => ({
  id,
  title,
  content,
  filePath,
  type,
  date
});

async function loadMarkdownPosts(blogModules: Record<string, () => Promise<unknown>>): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  for (const [path, moduleLoader] of Object.entries(blogModules)) {
    try {
      const filename = extractFilename(path, '.md');
      const content = await moduleLoader() as string;
      
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : formatFilenameAsTitle(filename);
      
      const dateMatch = content.match(/^\*(.+)\*$/m);
      const dateStr = dateMatch ? dateMatch[1].trim() : DEFAULT_DATE;
      
      posts.push(createBlogPost(filename, title, content, path, 'blog', new Date(dateStr)));
    } catch (error) {
      console.error(`Error loading markdown blog post from ${path}:`, error);
    }
  }
  
  return posts;
}

async function loadTsxPosts(tsxModules: Record<string, () => Promise<unknown>>): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  for (const [path, moduleLoader] of Object.entries(tsxModules)) {
    try {
      const filename = extractFilename(path, '.tsx');
      const module = await moduleLoader() as Record<string, unknown>;
      
      const metadata = module.metadata as Record<string, unknown> | undefined;
      const title = (metadata?.title as string) || formatFilenameAsTitle(filename, false);
      
      let date = new Date(DEFAULT_DATE);
      if (metadata?.date) {
        date = new Date(metadata.date as string);
      } else if (module.date) {
        date = new Date(module.date as string);
      }
      
      posts.push(createBlogPost(filename, title, '', path, 'blog-tsx', date));
    } catch (error) {
      console.error(`Error loading TSX blog post from ${path}:`, error);
    }
  }
  
  return posts;
}

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const [blogModules, tsxBlogModules] = [
    import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default' }),
    import.meta.glob('/src/content/blog/*.tsx')
  ];

  const [markdownPosts, tsxPosts] = await Promise.all([
    loadMarkdownPosts(blogModules),
    loadTsxPosts(tsxBlogModules)
  ]);

  return [...markdownPosts, ...tsxPosts].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function parseMarkdownFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = match[1];
    const markdown = match[2];
    
    const metadata: Record<string, string> = {};
    frontmatter.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
        metadata[key] = value;
      }
    });
    
    return { metadata, content: markdown };
  }
  
  return { metadata: {}, content };
}

export async function loadTsxBlogComponent(filePath: string): Promise<React.ComponentType | null> {
  const tsxModules = import.meta.glob('/src/content/blog/*.tsx');
  const moduleLoader = tsxModules[filePath];
  
  if (!moduleLoader) {
    console.error(`TSX module not found at path: ${filePath}`);
    return null;
  }
  
  try {
    const module = await moduleLoader() as Record<string, unknown>;
    const component = module.default as React.ComponentType;
    
    if (!component) {
      console.error(`No default export found in TSX module: ${filePath}`);
      return null;
    }
    
    return component;
  } catch (error) {
    console.error(`Error loading TSX component from ${filePath}:`, error);
    return null;
  }
}