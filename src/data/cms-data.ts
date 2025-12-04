export interface CMSData {
  title: string;
  description: string;
  image: string;
  lastUpdated: string;
}

export const cmsData: CMSData = {
  title: "Hello from Mock CMS",
  description:
    "This simulates content coming from a headless CMS. In a real application, this would be fetched from Sanity, Contentful, Strapi, or another headless CMS.",
  image: "https://via.placeholder.com/800x400/3b82f6/ffffff?text=CMS+Image",
  lastUpdated: new Date().toISOString(),
};

// Simulate async CMS fetch
export async function fetchCMSData(): Promise<CMSData> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    ...cmsData,
    lastUpdated: new Date().toISOString(),
  };
}

