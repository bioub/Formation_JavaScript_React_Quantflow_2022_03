import { useState } from 'react';
import styles from './Select.module.scss';

function Select({ items = [], selected = '', onSelected = () => {} }) {
  const [open, setOpen] = useState(false);

  const itemEls = items.map((item) => (
    <div key={item} onClick={() => onSelected(item)}>
      {item}
    </div>
  ));

  return (
    <div className={styles.host} onClick={() => setOpen(!open)}>
      <div className={styles.selected}>{selected}</div>
      {open && <div className={styles.menu}>{itemEls}</div>}
    </div>
  );
}

export default Select;
