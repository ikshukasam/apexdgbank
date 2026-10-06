import React from 'react';
import {X} from 'lucide-react';
import {cx} from '../../lib/utils';
export default function Modal({title,onClose,children,wide=false}){return <div className="fixed inset-0 z-[100] grid place-items-center bg-black/45 p-4 backdrop-blur-[2px]" onMouseDown={onClose}><div onMouseDown={e=>e.stopPropagation()} className={cx('max-h-[92vh] w-full overflow-auto rounded-[28px] bg-white p-6 shadow-2xl',wide?'max-w-2xl':'max-w-md')}><div className="mb-5 flex items-center justify-between"><h3 className="text-lg font-bold text-slate-900">{title}</h3><button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100"><X size={19}/></button></div>{children}</div></div>}
