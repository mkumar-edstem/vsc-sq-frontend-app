/** @format */
/*eslint-disable*/

import { rest } from "msw";

import { manageQuestions, SecurityQuestionnaire } from "./api_mock_data";

export const handlers = [
  rest.get("*/get_security_questionnaire", (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({response:[...manageQuestions]})
    );
  }),

 

  rest.get("*/get_applicable_questions/:id", (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json(SecurityQuestionnaire)
      );
    }),

  
];
