import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Farmigo | Farm to Table',
  description: 'Connecting farmers, consumers, and cold storage facilities',
  keywords: 'agriculture, farm, cold storage, marketplace, food quality',
};

export default Meta;
