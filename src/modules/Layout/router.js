import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '@/modules/Dashboard';
import Banner from '@/modules/Banner';

const router = (props) => {
  console.log('🚀 ~ router ~ props', props);
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="banner" element={<Banner />} />
    </Routes>
  );
};

export default router;
