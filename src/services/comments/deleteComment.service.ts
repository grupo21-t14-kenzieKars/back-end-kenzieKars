import AppDataSource from "../../data-source";
import { CarComment } from "../../entities/comments.entity";
import { AppError } from "../../errors/AppError";

const deleteCommentService = async (commentId: string, userId: string) => {
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

  await carCommentRepository.remove(comment);
};

export default deleteCommentService;
