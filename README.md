# Same Prompt. Same Model. Different Outcome.

## An Experimental Study on Structured Context in AI

What happens when you provide an AI model with structured context?

This repository contains the raw outputs and results of an experiment comparing standard prompt-based generation with a structured approach using `@skill.md`.

---

## Experiment Overview

This study explores whether structured context improves:

- UI consistency  
- Code maintainability  
- Rendering performance  
- Developer experience  

---

## Experimental Setup

| Component   | Configuration                         |
|------------|--------------------------------------|
| Model      | Gemini 3 Flash                       |
| Framework  | Antigravity                          |
| Prompt     | Prompt A (identical in both cases)   |
| Variable   | Presence of `@skill.md`              |
| Editing    | None (no manual changes applied)     |

---

## Test Conditions

### Unguided Generation
- Prompt A only  
- No structured context  

### Guided Generation
- Prompt A + `@skill.md`  
- Structured constraints applied  

---

## Key Observations

### DOM Structure
- Guided: ~45 nodes (lean structure)  
- Unguided: ~110+ nodes (more complex tree)  

### Animation Behavior
- Guided: staggered transitions  
- Unguided: simultaneous animation triggers  

### Performance
- Guided: ~60 FPS, Lighthouse 95+  
- Unguided: occasional drops to ~40 FPS, Lighthouse ~70–80  

### Code Quality
- Guided: standardized spacing (e.g., `mt-8`, `ml-4`)  
- Unguided: arbitrary values (e.g., `mt-[43px]`)  

---

## Key Insight

Structured context does not replace prompting. It enhances it.

Providing modular constraints such as `skill.md` appears to guide the model toward more predictable, maintainable, and performance-friendly outputs.

---

## Trade-offs

The structured approach introduces certain limitations:

- Requires upfront effort to define constraints  
- Reduces creative variability  
- Encourages stricter output patterns  

The choice depends on the project goals.

---

## Repository Structure
