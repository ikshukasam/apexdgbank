import React from 'react';
import {cx,BRAND} from '../../lib/utils';
export default function Logo({light=false}){return <div className="flex items-center gap-2"><div className={cx('grid h-9 w-9 place-items-center rounded-xl',light?'bg-white/15':'bg-[#ed1b2f]')}><span className="text-xl font-black text-white">A</span></div><div><div className={cx('text-[15px] font-extrabold tracking-tight',light?'text-white':'text-slate-900')}>{BRAND}</div><div className={cx('text-[10px]',light?'text-white/70':'text-slate-500')}>Business banking</div></div></div>}
