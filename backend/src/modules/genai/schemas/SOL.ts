export const SOLSchema = {
  type: 'object',
  properties: {
    question: {
      type: 'object',
      properties: {
        text: {type: 'string'},
        type: {type: 'string', enum: ['SELECT_ONE_IN_LOT']},
        isParameterized: {type: 'boolean'},
        parameters: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {type: 'string'},
              possibleValues: {type: 'array', items: {type: 'string'}},
              type: {type: 'string'},
            },
            required: ['name', 'possibleValues', 'type'],
          },
        },
        hint: {type: 'string'},
        timeLimitSeconds: {type: 'number'},
        points: {type: 'number'},
      },
      required: [
        'text',
        'type',
        'isParameterized',
        'timeLimitSeconds',
        'points',
      ],
    },
    solution: {
      type: 'object',
      properties: {
        incorrectLotItems: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              text: {type: 'string'},
              explaination: {type: 'string'},
            },
            required: ['text', 'explaination'],
          },
        },
        correctLotItem: {
          type: 'object',
          properties: {
            text: {type: 'string'},
            explaination: {type: 'string'},
          },
          required: ['text', 'explaination'],
        },
      },
      required: ['incorrectLotItems', 'correctLotItem'],
    },
  },
  required: ['question', 'solution'],
};
