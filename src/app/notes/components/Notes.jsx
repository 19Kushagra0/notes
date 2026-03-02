"use client";
import React from "react";
import styles from "./Notes.module.css";

export default function Notes() {
  const handleAutoGrow = (e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 500) + "px";
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <textarea
            name="title"
            id="title"
            placeholder="Title"
            className={`${styles.inputTitle} ${styles.input}`}
            maxLength={1000}
            onInput={handleAutoGrow}
          ></textarea>
          <textarea
            placeholder="Content"
            type="text"
            className={`${styles.inputContent} ${styles.input}`}
            onInput={handleAutoGrow}
          />

          <button className={styles.inputButton}>Add</button>
        </div>
      </div>

      <div className={styles.todoWrapper}>
        <div className={styles.todoContainer}>
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>{" "}
          <div className={styles.todoBox}>
            <div className={styles.optionContainer}>
              <button className={styles.optionButton}>...</button>
            </div>
            <div className={styles.todoTitle}>Title</div>
            <div className={styles.todoContent}>Content</div>
          </div>
        </div>
      </div>
    </div>
  );
}
