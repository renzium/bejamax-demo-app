"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { fetchCMSData, type CMSData } from "@/data/cms-data";

export default function CMSPage() {
  const [cmsData, setCmsData] = useState<CMSData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCMSData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCMSData();
      setCmsData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load CMS data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCMSData();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-brand-primary hover:text-brand-primary-dark font-medium mb-6 inline-flex items-center gap-2 transition-colors">
          ← Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            CMS Integration Demo
          </h1>
          <p className="text-xl text-brand-text-light">
            Practical headless CMS integration with mock data. In production,
            this would connect to Sanity, Contentful, Strapi, or another CMS.
          </p>
        </div>

        <div className="mb-6">
          <Button onClick={loadCMSData} disabled={loading}>
            {loading ? "Loading..." : "Refresh Content"}
          </Button>
        </div>

        {error && (
          <Card variant="elevated" className="p-6 mb-6 border-red-300 bg-red-50">
            <p className="text-red-800">Error: {error}</p>
          </Card>
        )}

        {cmsData && (
          <Card variant="elevated" className="p-6">
            <h2 className="text-3xl font-bold mb-4">{cmsData.title}</h2>
            <p className="text-lg text-gray-600 mb-4">{cmsData.description}</p>
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong>{" "}
                {new Date(cmsData.lastUpdated).toLocaleString()}
              </p>
            </div>
          </Card>
        )}

        <Card variant="elevated" className="p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">CMS Experience</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-lg mb-2">Headless CMS Options</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Sanity - Great developer experience, real-time collaboration</li>
                <li>Contentful - Enterprise-grade, powerful content modeling</li>
                <li>Strapi - Self-hosted, open-source, flexible</li>
                <li>Prismic - Simple, developer-friendly</li>
                <li>Hygraph (GraphCMS) - GraphQL-first approach</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Integration Pattern</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Fetch from CMS
const data = await fetchCMSData();

// Render in React
<Component data={data} />

// Optional: ISR/SSR with Next.js
export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use Next.js ISR (Incremental Static Regeneration) for performance</li>
                <li>Implement proper error handling and fallbacks</li>
                <li>Cache CMS responses appropriately</li>
                <li>Use TypeScript for type safety with CMS schemas</li>
                <li>Consider using a CMS SDK for better DX</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

