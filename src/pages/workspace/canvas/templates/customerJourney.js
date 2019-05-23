export default {
  width: 1,
  spacing: 0.01,
  boxes: [
    [
      0,
      0,
      1,
      0.2,
      'Introduction Customer Journey Map\n\nA customer journey map is a collaborative visualisation tool that tells a narative of the end user that is trying to achieve a specific outcome, complete a task or goal.',
    ],
    [
      0,
      0.2,
      0.3,
      0.5,
      '1. Actor\n\nThe actor is the end user you are making this customer journey for.',
    ],
    [
      0.3,
      0.2,
      0.7,
      0.15,
      '2. Scenario and Goals\n\nThis describes the scenario your actior is in as well as the goal your actor is trying to achieve.',
    ],
    [0.3, 0.2 + 0.15, 0.7 / 3, 0.5 - 0.15, 'Phase 1'],
    [0.3 + 0.7 / 3, 0.2 + 0.15, 0.7 / 3, 0.5 - 0.15, 'Phase 2'],
    [0.3 + (0.7 / 3) * 2, 0.2 + 0.15, 0.7 / 3, 0.5 - 0.15, 'Phase 3'],
    [0, 0.7, 1, 0.25, '4. Actions, Mindset and Emotions'],
    [0, 0.95, 1, 0.25, '5. Insights, Opportunities and Ownership'],
  ],
}
