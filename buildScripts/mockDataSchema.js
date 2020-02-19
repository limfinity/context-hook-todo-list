var schema = {
  type: 'object',
  properties: {
    todos: {
      type: 'array',
      minItems: 3,
      maxItems: 8,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            unique: true,
            minimum: 1
          },
          text: {
            type: 'string',
            faker: 'text'
          },
          isCompleted: {
            type: 'boolean',
            faker: 'text'
          }
        },
        required: ['id', 'text', 'isCompleted']
      }
    }
  },
  required: ['todos']
};

module.exports = schema;
