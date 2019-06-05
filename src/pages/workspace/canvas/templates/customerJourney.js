const heightMod = 2

export default {
  width: 1,
  spacing: 0.01,
  boxes: [
    [
      0,
      0 * heightMod,
      1,
      0.2 * heightMod,
      `### Introduction Customer Journey Map
A customer journey map is a collaborative visualisation tool that tells a narative of the end user that is trying to achieve a specific outcome, complete a task or goal.`,
    ],
    [
      0,
      0.2 * heightMod,
      0.3,
      0.4 * heightMod,
      `### 1. Actor
The actor is the end user you are making this customer journey for.`,
    ],
    [
      0.3,
      0.2 * heightMod,
      0.7,
      0.15 * heightMod,
      `### 2. Scenario and Goals
This describes the scenario your actior is in as well as the goal your actor is trying to achieve.`,
    ],
    [
      0.3,
      (0.2 + 0.15) * heightMod,
      0.7 / 3,
      (0.4 - 0.15) * heightMod,
      `### Phase 1`,
    ],
    [
      0.3 + 0.7 / 3,
      (0.2 + 0.15) * heightMod,
      0.7 / 3,
      (0.4 - 0.15) * heightMod,
      `### Phase 2`,
    ],
    [
      0.3 + (0.7 / 3) * 2,
      (0.2 + 0.15) * heightMod,
      0.7 / 3,
      (0.4 - 0.15) * heightMod,
      `### Phase 3`,
    ],
    [
      0,
      0.6 * heightMod,
      1,
      0.25 * heightMod,
      `### 4. Actions, Mindset and Emotions`,
    ],
    [
      0,
      0.85 * heightMod,
      1,
      0.25 * heightMod,
      `### 5. Insights, Opportunities and Ownership`,
    ],
  ],
}
