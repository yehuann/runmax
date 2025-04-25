'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex justify-end w-full h-[82px] bg-[#212121] px-6">
      <div className="flex flex-row justify-center items-center gap-6 tracking-widest">
        <Link 
          href="/test" 
          className={`w-[170px] text-center text-xl rounded-full border transition-colors duration-200 text-[#B9F347] p-[8px] ${
            pathname === '/test' ? 'border-[#B9F347]' : 'border-transparent'
          }`}
        >
          安裝測試
        </Link>
        <Link 
          href="/runmax" 
          className={`w-[170px] text-center text-xl  rounded-full border transition-colors duration-200 text-[#B9F347] p-[8px] ${
            pathname === '/runmax' ? 'border-[#B9F347]' : 'border-transparent'
          }`}
        >
          RunMax
        </Link>
        <Link 
          href="/suiciderun" 
          className={`w-[170px] text-center text-xl rounded-full border transition-colors duration-200 text-[#B9F347] p-[8px] ${
            pathname === '/suiciderun' ? 'border-[#B9F347]' : 'border-transparent'
          }`}
        >
          折返跑測試
        </Link>
      </div>
    </div>
  );
} 