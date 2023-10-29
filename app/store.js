import { create } from "zustand";

const store = (set) => ({
  userProfiles: [
    {
      name: "Taveesha Agarwal",
      email: "taveesha.agarwal@gmail.com",
      password: "123test",
    },
  ],
  addProfile: (name, email, password) =>
    set(
      (store) => ({
        userProfiles: [...store.userProfiles, { name, email, pasword }],
      }),
      false,
      "addProfile"
    ),
  testVar: 0,
  changeTestVar: (testingVar) => set((store) => ({ testVar: testingVar })),
});

export const useStore = create(store);
