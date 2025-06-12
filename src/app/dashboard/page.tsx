'use client';

import { QueryClientWrapper } from '@/components/QueryClientWrapper';
import { Dashboard } from '@/components/Dashboard';

export default function DashboardPage() {
  return (
    <QueryClientWrapper>
      <Dashboard />
    </QueryClientWrapper>
  );
} 