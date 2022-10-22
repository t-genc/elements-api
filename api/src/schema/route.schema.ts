import z, { string, object, ZodIssueCode } from "zod"



export const symbolSchema = object({
   "symbol": string().max(2, { message: "No such element" })
})


export const groupSchema = object({
   "group": string().transform((val, ctx) => {
      const parsed = parseInt(val);
      if (isNaN(parsed)) {
         ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "Element group must be a number",
         });
      }
      else if (parsed > 18 || parsed < 1) {

         ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "Element group must be between 1 and 18",
         });
      }



   })
})


export const periodSchema = object({
   "period": string().transform((val, ctx) => {
      const parsed = parseInt(val);
      if (isNaN(parsed)) {
         ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "Element period must be a number",
         });
      }
      else if (parsed > 7 || parsed < 1) {

         ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "Element group must be between 1 and 7",
         });
      }



   })
})

const BLOCK_VALUES = ["s", "p", "d", "f"] as const;
export const blockSchema = object({
   block: z.enum(BLOCK_VALUES)
})

export const atomicNumberSchema = object({
   atomicNumber: string().transform((val, ctx) => {
      const parsed = parseInt(val);
      if (isNaN(parsed)) {
         ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "atom number must be an integer"
         })
      }
      else if (parsed < 1 || parsed > 118) {

         ctx.addIssue({
            code: ZodIssueCode.custom,
            message: "atom number must be between 1 and 118"
         })
      }

   })
})

const STATE_VALUES = ["gas", "solid", "liquid", "unknown"] as const
export const stateSchema = object({
   standardState: z.enum(STATE_VALUES)
})