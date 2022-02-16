export const manageQuestions = [
  {
    id: 'IRA-Q-01',
    type: 'Multiple Choice - Single Answer',
    question:
      'Do you continously monitor your controls to prevent cyber attacks?',
    options: [
      'Option-1 - This is an example option 1',
      'Option-2 - This is an example option 2',
      'Option-3 - This is an example option 3',
      'Option-4 - This is an example option 4'
    ],
    additional_requirement: ''
  },
  {
    id: 'VA-Q-01',
    type: 'Yes/No',
    question: 'Do you store PII in an on-premise location?',
    options: '',
    additional_requirement: [
      {
        type: 'Input Text',
        text: 'Provide further information (optional)'
      },
      {
        type: 'File Upload',
        text: 'Attach File'
      }
    ]
  }
];
export const SecurityQuestionnaire = {
  id: 1,
  questions: [
    {
      id: 'VA-Q-01',
      question: 'Question 1',
      type: 'Multiple Choice - Single Answer',
      answers: ['option 1', 'option 2', 'option 3'],
      additional_requirement: [
        {
          type: 'Input Text',
          title: 'Provide Further Information (Optional)'
        },
        {
          type: 'File upload',
          title: 'Attach File'
        }
      ]
    },
    {
      id: 'VA-Q-02',
      question: 'Question 2',
      type: 'Multiple Choice - Multiple Answer',
      answers: ['option 1', 'option 2', 'option 3', 'option 4'],
      additional_requirement: []
    },
    {
      id: 'VA-Q-03',
      question: 'Do you store PII in an on premise location?',
      type: 'Yes/No',
      answers: '',
      additional_requirement: [
        {
          type: 'Input Text',
          title: 'Provide Further Information (Optional)'
        },
        {
          type: 'File upload',
          title: 'Attach File'
        }
      ]
    },
    {
      id: 'VA-Q-04',
      question: 'Question 4',
      type: 'Dropdown',
      answers: ['option 1', 'option 2', 'option 3', 'option 4'],
      additional_requirement: []
    },
    {
      id: 'VA-Q-05',
      question: 'Question 5',
      type: 'Input Text',
      answers: '',
      additional_requirement: []
    },
    {
      id: 'VA-Q-06',
      question: 'Question 6',
      type: 'File upload',
      answers: '',
      additional_requirement: []
    }
  ]
};
