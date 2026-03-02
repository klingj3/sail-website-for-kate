import React from 'react';
import OccasionPageLayout from 'components/OccasionPageLayout';
import { bacheloretteData } from 'data/occasionPages';

const BachelorettePage: React.FC = () => (
  <OccasionPageLayout data={bacheloretteData} />
);

export default BachelorettePage;
