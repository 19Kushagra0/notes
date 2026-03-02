"use client";
import React from "react";
import styles from "./Notes.module.css";

export default function Notes() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [notes, setNotes] = React.useState([]);
  const titleRef = React.useRef(null);
  const contentRef = React.useRef(null);

  // auto grow textarea
  const handleAutoGrow = (e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 500) + "px";
  };

  // input button
  const handleInputButton = () => {
    if (title.trim() === "" && content.trim() === "") return;
    console.log(title, content);
    setTitle("");
    setContent("");

    const copyData = [...notes];
    copyData.push({ title, content });
    setNotes(copyData);

    // clear value
    titleRef.current.value = "";
    contentRef.current.value = "";

    // reset height
    titleRef.current.style.height = "auto";
    contentRef.current.style.height = "auto";
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
          ></textarea>
          <textarea
            placeholder="Content"
            type="text"
            className={`${styles.inputContent} ${styles.input}`}
            onInput={handleAutoGrow}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ref={contentRef}
          />

          <button onClick={handleInputButton} className={styles.inputButton}>
            Add
          </button>
        </div>
      </div>

      <div className={styles.todoWrapper}>
        <div className={styles.todoContainer}>
          {notes.map((el, index) => {
            return (
              <div className={styles.todoBox} key={index}>
                <div className={styles.optionContainer}>
                  <button className={styles.optionButton}>...</button>
                </div>
                <div className={styles.todoTitle}>{el.title}</div>
                <div className={styles.todoContent}>{el.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
