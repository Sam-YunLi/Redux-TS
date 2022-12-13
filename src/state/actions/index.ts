import { ActionType } from "../action-types";

interface SearchRepositoriesState {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessState {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorState {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesState
  | SearchRepositoriesSuccessState
  | SearchRepositoriesErrorState;
