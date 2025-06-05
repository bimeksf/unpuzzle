'use client';

import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { motion } from 'framer-motion';

export default function LogoutButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => signOut(auth)}
      className="mt-4 px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all shadow-md"
    >
      Log out
    </motion.button>
  );
}
