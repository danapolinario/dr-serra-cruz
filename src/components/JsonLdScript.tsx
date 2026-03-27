import React from 'react';
import { Helmet } from 'react-helmet-async';

interface JsonLdScriptProps {
  id: string;
  data: Record<string, unknown>;
}

export const JsonLdScript: React.FC<JsonLdScriptProps> = ({ id, data }) => (
  <Helmet>
    <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  </Helmet>
);
