# 🚀 Same Prompt. Same Model. Different Outcome

## 🧪 An Experimental Study on Structured Context in AI

What happens when you provide an AI model with structured context instead of relying purely on prompts?

This project explores how **structured constraints (`@skill.md`)** influence AI-generated outputs in terms of quality, performance, and consistency.

🔗 **Live Demo:**
https://how-a-skill-file-helps-an-agent.vercel.app/

---

## 📌 Objective

To evaluate whether structured context improves:

* 🎯 UI consistency
* 🧩 Code maintainability
* ⚡ Rendering performance
* 👨‍💻 Developer experience

---

## ⚙️ Experimental Setup

| Component | Configuration           |
| --------- | ----------------------- |
| Model     | Gemini 3 Flash          |
| Framework | Antigravity             |
| Prompt    | Identical (Prompt A)    |
| Variable  | Presence of `@skill.md` |
| Editing   | None (raw outputs only) |

---

## 🧪 Test Conditions

### 🔴 Unguided Generation

* Prompt A only
* No structured constraints
* Fully free-form generation

### 🟢 Guided Generation

* Prompt A + `@skill.md`
* Structured rules applied
* Constrained generation

---

## 📊 Results & Observations

### 🏗️ DOM Complexity

* Guided: ~45 nodes (clean & minimal)
* Unguided: ~110+ nodes (bloated structure)

### 🎬 Animation Behavior

* Guided: Smooth, staggered transitions
* Unguided: Simultaneous, less controlled

### ⚡ Performance

* Guided: ~60 FPS, Lighthouse score 95+
* Unguided: ~40 FPS dips, Lighthouse ~70–80

### 🧼 Code Quality

* Guided: Consistent spacing (`mt-8`, `ml-4`)
* Unguided: Arbitrary values (`mt-[43px]`)

---

## 🧠 Key Insight

> Structured context does not replace prompting — it enhances it.

By introducing modular constraints like `@skill.md`, the model produces:

* More predictable outputs
* Cleaner code
* Better performance

---

## ⚖️ Trade-offs

| Advantage              | Limitation             |
| ---------------------- | ---------------------- |
| Cleaner code           | Less creative freedom  |
| Better performance     | Requires upfront setup |
| Consistent UI patterns | More rigid output      |

---

## 📁 Project Structure

```
/project-root
│
├── guided/
│   ├── output/
│   └── skill.md
│
├── unguided/
│   └── output/
│
├── assets/
│
├── README.md
└── ...
```

> Note: Structure may vary depending on your setup.

---

## 🚀 Conclusion

Structured context acts as a **control layer** for AI systems.

Instead of relying solely on prompts, combining them with modular constraints leads to:

* Higher reliability
* Better engineering outcomes
* More scalable AI-assisted development

---

## 📬 Feedback

If you found this interesting or have ideas to extend the experiment, feel free to open an issue or contribute.

---
