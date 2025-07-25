# 📝 To-Do List Web App

A simple, elegant To-Do List web application built using **HTML**, **CSS**, and **JavaScript**. This app allows users to **add**, **edit**, and **delete** tasks in an intuitive and responsive UI.

---

## 🚀 Introduction

This is a beginner-friendly to-do list project designed to help users manage their daily tasks effectively. It focuses on **dynamic DOM manipulation** and **basic styling** to offer a clean and interactive user experience.

---

## ✨ Features

- ➕ Add new tasks  
- 🖊️ Edit existing tasks (optional if implemented)  
- 🗑️ Delete tasks  
- ✅ Mark tasks as complete/incomplete  
- ♻️ Clear all tasks  
- 💾 Data persistence with `localStorage`  
- 📱 Responsive and stylish user interface  
- ⚡ All actions happen without refreshing the page

---


---

## 🧪 Usage Guide

1. Enter a task in the input field.
2. Click the **"Add"** button.
3. Task will appear in the list below.
4. Interact with the task list:
   - ✅ Click a task to toggle completion (line-through effect)
   - 🗑️ Click the delete icon to remove a task
   - ♻️ Use the "Clear All" button to remove all tasks

---

## 🔍 Code Explanation

### `index.html`
- **Structure:** Semantic HTML with a header, input field, add button, and task list container.
- **Icons & Layout:** Optionally uses emojis/icons for user interaction.

### `style.css`
- **Layout Styling:** Centered task container with padding and rounded borders.
- **Button Styling:** Color transitions and hover effects.
- **Task Styling:** Line-through effect for completed tasks.
- **Responsive Design:** Looks good on both desktop and mobile screens.

### `script.js`
- **Key Functions:**
  - `addTask()`: Adds a new task to DOM and localStorage.
  - `deleteTask(index)`: Deletes the selected task.
  - `toggleTask(index)`: Marks/unmarks task as completed.
  - `clearAll()`: Removes all tasks at once.
- **localStorage Integration:**
  - `localStorage.setItem()` and `localStorage.getItem()` are used to persist tasks between sessions.

---

## 📸 Screenshots

> *(You can replace the image URL with actual uploaded screenshots in your repo)*

<img width="100%" alt="To-Do List UI" src="https://github.com/user-attachments/assets/f82bac40-e49d-4e37-98a6-1d955f5d561f" />

---

## 🧑‍💻 Author

- **Name:** Raghunandan P  
- **Email:** raghunandanp1304@gmail.com  
- **GitHub:** [@Raghunandan-git](https://github.com/Raghunandan-git)

---

