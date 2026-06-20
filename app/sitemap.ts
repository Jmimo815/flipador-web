import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://flipadoor.com';
  const paths = ['', '/terminos', '/privacidad', '/cookies'];

  return paths.map((path) => {
    const url = `${base}${path}`;
    return {
      url,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: url,
          en: url,
          de: url,
        },
      },
    };
  });
}
