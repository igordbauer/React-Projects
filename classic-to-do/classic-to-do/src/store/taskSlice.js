import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inProgress: [
    {
      id: "1",
      title: "Nice Title",
      data: "09/04/1997",
      description: "Nice good and long description about the todo",
    },
    {
      id: "2",
      title: "Nice Title",
      data: "09/04/1997",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',",
    },
    {
      id: "3",
      title: "Nice Title",
      data: "09/04/1997",
      description: "Nice good and long description about the todo",
    },
  ],
  finished: [
    {
      id: "1",
      title: "Nice Title",
      data: "09/04/1997",
      description: "Nice good and long description about the todo",
    },
    {
      id: "2",
      title: "Nice Title",
      data: "09/04/1997",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',",
    },
    {
      id: "3",
      title: "Nice Title",
      data: "09/04/1997",
      description: "Nice good and long description about the todo",
    },
  ],
};
export const statusEnum = {
  notStarted: "notStarted",
  inProgress: "inProgress",
  finished: "finished",
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    AddTaskHandler(state, actions) {},
  },
});
export const taskActions = taskSlice.actions;
