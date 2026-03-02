import React from 'react';
import OccasionPageLayout from 'components/OccasionPageLayout';
import { privateChartersData } from 'data/occasionPages';

const PrivateChartersPage: React.FC = () => (
  <OccasionPageLayout data={privateChartersData} />
);

export default PrivateChartersPage;
