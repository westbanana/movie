import React, {useState} from 'react';

import styles from './style.module.scss'

const Column = ({data}) => {
  const {
    id,
    title,
    todos,
    color
  } = data
  return (
    <div className={styles.mainColumnBlock}>
        <div className={styles.columnTitleBlock}>
          <span
            className={styles.columnTitle}
            style={{
              color: color
            }}
          >
          {title}
        </span>
        </div>
        <div className={styles.todoList}>
          {todos.map(({id, description}) => (
            <div
              draggable={true}
              key={id}
              className={styles.todoBlock}
            >
              <span
                className={styles.todo}
              >
                {description}
              </span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Column;