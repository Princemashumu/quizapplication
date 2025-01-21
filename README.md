# 🧠 Quiz Application

Welcome to the Quiz Application! This project is a quiz app built with ReactJS for the frontend and Node.js for the backend. The app features a timed quiz with true/false questions, providing immediate feedback and explanations for each answer.

## 🚀 Features

- ⏳ Timed quiz with a total duration of 60 seconds
- ⏱️ 10 seconds per question
- ✅ True/false questions with correct answers and explanations
- 📢 Real-time feedback on answers
- 🎯 Scores displayed at the end of the quiz
- 🔄 Asynchronous question handling and quiz timing
- 🛡️ Input validation and error handling

## 🛠️ Technologies Used

- 🎨 **Frontend:** ReactJS
- ⚙️ **Backend:** Node.js
- 🗄️ **Database:** JSON file for questions
- 📚 **Libraries:** `readline` for input handling

## 📌 Getting Started

### 📌 Prerequisites

- 🟢 **Node.js** (v14.x or higher)
- 📦 **npm** (v6.x or higher)

### 📥 Installation

1. 📂 Clone the repository:

   ```bash
   git clone https://github.com/princemashumu/quiz-application.git
   ```

2. 📂 Navigate to the project directory:

   ```bash
   cd quiz-application
   ```

3. 📦 Install dependencies:

   ```bash
   npm install
   ```

4. 📑 Create a `questions.json` file in the root directory with your quiz questions. Example format:

   ```json
   [
     { "question": "Is JavaScript synchronous by default? (true/false)", "answer": "true", "explanation": "JavaScript is synchronous by default, meaning that code is executed line by line, and one line must complete before the next line starts." },
     ...
   ]
   ```

## 🚀 Running the Application

### ▶️ Start the backend server:

```bash
node server.js
```

📢 The quiz application will run in the terminal. Follow the prompts to start the quiz.

## 🎮 Usage

- 🕐 When you start the quiz, you will have **60 seconds** to answer as many questions as possible.
- ⏳ Each question has a **10-second time limit**.
- 🔍 After submitting an answer, you'll receive **immediate feedback**. If your answer is incorrect, the correct answer and an explanation will be shown.
- 🏆 At the end of the quiz, your **score** will be displayed.

## 🤝 Contributing

- If you'd like to contribute to the project, please follow these steps:

1. 🍴 **Fork the repository**
2. 🌿 Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. ✏️ Make your changes
4. 📌 Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
5. 🚀 Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
6. 🔃 Create a new **Pull Request**

## 🙏 Acknowledgments

- 🎉 Inspired by various quiz applications

## 📩 Contact
For any questions or feedback, please contact:

- 📧 **Email** - princemashumu@yahoo.com
- 🏠 **GitHub Profile** - [GitHub](https://github.com/princemashumu)

