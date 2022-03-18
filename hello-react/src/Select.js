import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';

function Select({ items = [], selected = '', onSelected = () => {} }) {
  const [open, setOpen] = useState(false);
  const hostRef = useRef();

  useEffect(() => {
    const callback = (event) => {
      // si le clic à eu lieu en dehors de Select
      // on ferme
      if (!hostRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener('click', callback);

    return () => {
      window.removeEventListener('click', callback);
    };
  }, []);

  const itemEls = items.map((item) => (
    <div key={item} onClick={() => onSelected(item)}>
      {item}
    </div>
  ));

  return (
    <div ref={hostRef} className={styles.host} onClick={() => setOpen(!open)}>
      <div className={styles.selected}>{selected}</div>
      {open && <div className={styles.menu}>{itemEls}</div>}
    </div>
  );
}

export default Select;
