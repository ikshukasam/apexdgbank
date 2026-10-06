import React,{useMemo,useState} from 'react';
import {Home,Wallet,Send,CreditCard,Sparkles} from 'lucide-react';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Accounts from './pages/Accounts/Accounts';
import Payments from './pages/Payments/Payments';
import Cards from './pages/Cards/Cards';
import Services from './pages/Services/Services';
import Analytics from './pages/Services/Analytics';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Services/Settings';
import Support from './pages/Services/Support';
import Sidebar from './components/Navigation/Sidebar';
import Topbar from './components/Navigation/Topbar';
import Modal from './components/Modals/Modal';
import ApplicationModal from './components/Modals/ApplicationModal';
import AccountDetails from './components/Accounts/AccountDetails';
import SearchModal from './components/Modals/SearchModal';
import TransactionModal from './components/Modals/TransactionModal';
import {initialAccounts,txSeed} from './data/mock';
import {useLocalStorage} from './hooks/useLocalStorage';

export default function App(){
  const [loggedIn,setLoggedIn]=useLocalStorage('apex-demo-session',false);
  const [page,setPage]=useState('Overview');
  const [mobile,setMobile]=useState(false);
  const [search,setSearch]=useState(false);
  const [accounts,setAccounts]=useLocalStorage('apex-demo-accounts',initialAccounts);
  const [transactions,setTransactions]=useLocalStorage('apex-demo-transactions',txSeed);
  const [modal,setModal]=useState(null);
  const [toast,setToast]=useState('');
  const navigate=p=>setPage(p);
  const showToast=msg=>{setToast(msg);window.clearTimeout(showToast.timer);showToast.timer=window.setTimeout(()=>setToast(''),2600)};
  const addAccount=()=>setModal({type:'new-account'});
  const addNewAccount=type=>{const account={id:`account-${Date.now()}`,name:type,number:`•••• ${Math.floor(1000+Math.random()*8999)}`,balance:0,type:type.includes('Savings')?'Savings':'Current',currency:'AED'};setAccounts(v=>[...v,account]);setModal(null);showToast(`${type} opened in demo mode.`)};
  const content=useMemo(()=>({
    Overview:<Dashboard setPage={navigate} accounts={accounts} transactions={transactions} onTx={tx=>setModal({type:'tx',tx})} onAccount={account=>setModal({type:'account',account})}/>,
    Accounts:<Accounts accounts={accounts} onAccount={account=>setModal({type:'account',account})} onAdd={addAccount}/>,
    Payments:<Payments accounts={accounts} setAccounts={setAccounts} transactions={transactions} setTransactions={setTransactions}/>,
    Cards:<Cards onApply={product=>setModal({type:'application',product:'Business Card'})}/>,
    Analytics:<Analytics transactions={transactions}/>,
    Services:<Services onApply={product=>setModal({type:'application',product})} onNavigate={navigate} onDownload={target=>showToast(target?target:'Statement downloaded in demo mode.')}/>,
    Profile:<Profile onSettings={()=>navigate('Settings')}/>,
    Settings:<Settings onLogout={()=>setLoggedIn(false)}/>,
    Support:<Support/>
  })[page], [page,accounts,transactions]);
  if(!loggedIn)return <Login onLogin={()=>setLoggedIn(true)}/>;
  return <div className="min-h-screen bg-[#f7f3ee]"><Topbar onMenu={()=>setMobile(true)} onLogout={()=>setLoggedIn(false)} onSearch={()=>setSearch(true)}/><div className="mx-auto flex max-w-[1500px]"><Sidebar page={page} setPage={navigate} mobileOpen={mobile} setMobileOpen={setMobile}/><main className="min-w-0 flex-1 p-4 pb-24 sm:p-6 lg:p-8"><div className="mx-auto max-w-6xl">{content}</div></main></div><nav className="fixed inset-x-0 bottom-0 z-30 border-t bg-white/95 px-2 py-2 backdrop-blur-xl lg:hidden"><div className="mx-auto flex max-w-md justify-around">{[['Overview',Home],['Accounts',Wallet],['Payments',Send],['Cards',CreditCard],['Services',Sparkles]].map(([n,I])=><button key={n} onClick={()=>navigate(n)} className={`flex min-w-[56px] flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[10px] font-bold ${page===n?'text-[#d91424]':'text-slate-400'}`}><I size={19}/>{n}</button>)}</div></nav>{search&&<SearchModal transactions={transactions} onClose={()=>setSearch(false)} onTx={tx=>setModal({type:'tx',tx})}/>} {modal?.type==='tx'&&<TransactionModal tx={modal.tx} onClose={()=>setModal(null)}/>} {modal?.type==='account'&&<Modal title={modal.account.name} onClose={()=>setModal(null)}><AccountDetails account={modal.account} onClose={()=>setModal(null)} onDownload={()=>{setModal(null);showToast('Statement downloaded in demo mode.')}}/></Modal>} {modal?.type==='application'&&<ApplicationModal product={modal.product} onClose={()=>setModal(null)} onSubmit={()=>showToast('Application created successfully.')}/>} {modal?.type==='new-account'&&<Modal title="Open a new account" onClose={()=>setModal(null)}><p className="text-sm text-slate-500">Choose an account type for the demo.</p><div className="mt-5 space-y-3">{['Business Current Account','Business Savings'].map(type=><button key={type} onClick={()=>addNewAccount(type)} className="w-full rounded-2xl border p-4 text-left text-sm font-bold hover:bg-slate-50">{type}<span className="mt-1 block text-xs font-normal text-slate-400">Instantly adds a zero-balance demo account.</span></button>)}</div></Modal>}{toast&&<div className="fixed bottom-20 right-4 z-[120] rounded-2xl bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-xl lg:bottom-6">{toast}</div>}</div>
}
