'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LogoutButton from '@/components/login-btn';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-20 text-gray-500">Loading...</p>;
  if (!user) return null;

  return (
    <section className="min-h-screen w-full bg-[#F4F4F4] flex flex-col items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full"
      >
        {/* Profile */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-[#39383F] mb-2">
            Welcome, {user.displayName ?? "User"} 👋
          </h1>
          <p className="text-[#39383F] opacity-80 mb-2">
            Logged in as <span className="font-medium">{user.email}</span>
          </p>
          
        </div>

        {/* Statistic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#39383F] text-white p-6 rounded-xl shadow">
            <p className="text-sm opacity-75">Active Projects</p>
            <p className="text-2xl font-bold mt-2">4</p>
          </div>
          <div className="bg-[#FACC15] text-black p-6 rounded-xl shadow">
            <p className="text-sm opacity-80">Completed Tasks</p>
            <p className="text-2xl font-bold mt-2">27</p>
          </div>
          <div className="bg-[#10B981] text-white p-6 rounded-xl shadow">
            <p className="text-sm opacity-80">Success Rate</p>
            <p className="text-2xl font-bold mt-2">93%</p>
          </div>
        </div>

        {/* Logout */}
        <div className="text-center">
          <LogoutButton />
        </div>
      </motion.div>
    </section>
  );
}
