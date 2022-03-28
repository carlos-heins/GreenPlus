import { Router } from "express";
import { createUserController } from "../modules/accounts/useCases/CreateUsers/index";

const usersRouter = Router()

usersRouter.post("/", createUserController.handle)

export {usersRouter}