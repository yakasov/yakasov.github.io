import React from 'react';

export interface Page {
  id: string;
  title: string;
  component?: React.ComponentType;
  content?: string;
  type: 'page';
  order: number;
}

export interface BlogPost {
  id: string;
  title: string;
  content?: string;
  filePath: string;
  type: 'blog' | 'blog-tsx';
  date: Date;
}

export type ContentItem = Page | BlogPost;