import { create } from 'zustand';

interface USProps {
  userSession: any;
  setUserSession: (userSession: any) => void;
}
export const useUserSession = create<USProps>(set => ({
  userSession: '',
  //   setUserSession: () => {
  //     set(state => ({ userSession: state.userSession }));
  //   },
  setUserSession: (userSession: any) => {
    set({ userSession });
  },
}));
