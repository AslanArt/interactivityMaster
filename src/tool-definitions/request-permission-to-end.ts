import { z, ZodRawShape } from 'zod';
import {
  ToolDefinition,
  ToolCapabilityInfo,
  ToolRegistrationDescription,
} from './types.js'; // Import the types

// Define capability conforming to ToolCapabilityInfo
const capabilityInfo: ToolCapabilityInfo = {
  description: 'Asks the user for permission to end the session.',
  parameters: {
    type: 'object',
    properties: {
      projectName: {
        type: 'string',
        description:
          'Identifies the context/project making the request (used in prompt formatting)',
      },
      message: {
        type: 'string',
        description:
          'The specific question for the user (appears in the prompt)',
      },
    },
    required: ['projectName', 'message'],
  },
};

// Define description conforming to ToolRegistrationDescription
const registrationDescription: ToolRegistrationDescription = `<description>
When you believe you have completed all tasks, use this tool to ask the user for permission to end the session.
</description>

<importantNotes>
- (!important!) **MANDATORY:** You must not end the conversation without the user's explicit permission.
</importantNotes>

<whenToUseThisTool>
- When you have completed all the user's requests.
- When you believe there is nothing left to do.
</whenToUseThisTool>

<examples>
- { "projectName": "MyProject", "message": "I believe I have completed all the tasks. Am I authorized to conclude our session?" }
</examples>`;

// Define the Zod schema (as a raw shape object)
const rawSchema: ZodRawShape = {
  projectName: z.string().describe('Project name for context'),
  message: z.string().describe('The question to ask the user'),
};

// Combine into a single ToolDefinition object
export const requestPermissionToEndTool: ToolDefinition = {
  capability: capabilityInfo,
  description: registrationDescription,
  schema: rawSchema,
}; 