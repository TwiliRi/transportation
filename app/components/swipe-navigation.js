'use client';

import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SwipeNavigation({ children }) {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [swiping, setSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [swipeDistance, setSwipeDistance] = useState(0);

  useEffect(() => {
    // Определяем текущий путь
    setCurrentPath(window.location.pathname);
    
    // Настраиваем навигацию между страницами
    if (window.location.pathname === '/') {
      setNextPage('/about');
      setPrevPage('/about');
    } else if (window.location.pathname === '/about') {
      setNextPage('/');
      setPrevPage('/');
    }
  }, []);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setSwiping(true);
      setSwipeDirection(eventData.dir);
      setSwipeDistance(eventData.deltaX);
    },
    onSwipedLeft: () => {
      if (nextPage) {
        router.push(nextPage);
      }
      resetSwipe();
    },
    onSwipedRight: () => {
      if (prevPage) {
        router.push(prevPage);
      }
      resetSwipe();
    },
    onSwiped: resetSwipe,
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  function resetSwipe() {
    setSwiping(false);
    setSwipeDirection(null);
    setSwipeDistance(0);
  }

  // Стиль для анимации свайпа
  const swipeStyle = swiping ? {
    transform: `translateX(${swipeDistance}px)`,
    transition: 'transform 0.1s ease'
  } : {
    transition: 'transform 0.3s ease'
  };

  return (
    <div {...handlers} className="h-full w-full overflow-x-hidden">
      <div style={swipeStyle}>
        {children}
      </div>
      
      {/* Индикаторы свайпа (опционально) */}
      {swiping && swipeDirection === 'Left' && nextPage && (
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          &rarr;
        </div>
      )}
      {swiping && swipeDirection === 'Right' && prevPage && (
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          &larr;
        </div>
      )}
    </div>
  );
}