import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const CommentSubmitInputSchema = z.object({
    name: z.string().min(1),
    comments: z.string().min(4),
    createdAt: z.date()
  });

export const commentRouter = createTRPCRouter({
  submitComment: publicProcedure
  .input(CommentSubmitInputSchema)
  .mutation(async ({ctx,input})=>{
    const comment= await ctx.db.comments.create({
        data:{
            name:input.name,
            comments:input.comments,
            createdAt:input.createdAt
        }
    })
    return comment
  }),
 
  getCom:publicProcedure
    .input(z.number())
    .query(({ctx,input})=>{
        return ctx.db.comments.findMany({
            select:{
                id:true,
                comments:true,
                name:true,
                createdAt:true
            },
          take:input,

        })
    }),
   
});