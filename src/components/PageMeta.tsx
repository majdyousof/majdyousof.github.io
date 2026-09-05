import { useEffect } from 'react';

type PageMetaProps = {
  title?: string;
  description: string;
};

const PageMeta = ({ title, description }: PageMetaProps) => {
  useEffect(() => {
    document.title = title ? `${title} · Majd Yousof` : 'Majd Yousof';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description);
  }, [description, title]);

  return null;
};

export default PageMeta;
