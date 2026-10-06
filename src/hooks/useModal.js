import {useState} from 'react';
export function useModal(){const [modal,setModal]=useState(null);return {modal,openModal:setModal,closeModal:()=>setModal(null)};}
