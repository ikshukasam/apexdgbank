export const BRAND='Apex Digital Bank';
export const money=n=>new Intl.NumberFormat('en-AE',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.abs(n));
export const signedMoney=n=>`${n>0?'+':'-'}${money(n)} AED`;
export const cx=(...x)=>x.filter(Boolean).join(' ');
export const today=()=>new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'short',year:'numeric'}).format(new Date());
export const makeRef=prefix=>`${prefix}-${Date.now().toString().slice(-6)}`;
