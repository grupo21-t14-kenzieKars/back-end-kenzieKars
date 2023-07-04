import AppDataSource from "../../data-source";
import { CarComment } from "../../entities/comments.entity";
import { AppError } from "../../errors/AppError";
import { carCommentReturnSchema } from "../../schemas/comments.schema";

const updateCommentService = async (
  commentId: string,
  data: string,
  userId: string
) => {
  const carCommentRepository = AppDataSource.getRepository(CarComment);

  const comment = await carCommentRepository.findOne({
    where: {
      id: commentId,
    },
    relations: {
      user: true,
    },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment?.user.id !== userId) {
    throw new AppError("You do not own the comment", 403);
  }

  const updatedCommet = {
    ...comment,
    content: data,
  };

  const newComment = carCommentRepository.create(updatedCommet);
  await carCommentRepository.save(newComment);

  const validatedComment = carCommentReturnSchema.parse(newComment);

  return validatedComment;
};

export default updateCommentService;
