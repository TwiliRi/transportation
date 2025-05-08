'use client'

import { useState } from "react";

export default function CopyButton() {
  const [state, setState] = useState(false);
  const phoneNumber = '+7 (495) 222-22-22';

  const copyToClipboard = async () => {
    try {
      // Современный метод копирования
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(phoneNumber);
        setState(true);
      } else {
        // Запасной метод для устройств, где clipboard API не поддерживается
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        
        // Делаем элемент невидимым
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        
        // Выделяем и копируем текст
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setState(true);
        } else {
          alert('Не удалось скопировать номер. Пожалуйста, скопируйте вручную: ' + phoneNumber);
        }
      }
      
      // Сбрасываем состояние через 2 секунды
      setTimeout(() => {
        setState(false);
      }, 2000);
    } catch (err) {
      console.error('Ошибка при копировании: ', err);
      alert('Не удалось скопировать номер. Пожалуйста, скопируйте вручную: ' + phoneNumber);
    }
  };

  return (
    <>
      <button 
        onClick={copyToClipboard}
        className="w-full rounded-md p-2 bg-black cursor-pointer text-white"
      >
        Скопировать номер
      </button>
      <div>
        <p className={
          state 
            ? 'absolute bg-[#686868] left-[50%] translate-x-[-50%] justify-center text-white p-1 rounded-md items-center' 
            : 'invisible'
        }>
          {state ? 'Номер скопирован' : ''}
        </p>
      </div>
    </>
  )
}
