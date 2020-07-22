import create from 'zustand';
import useLocalStorage from 'react-use/lib/useLocalStorage';
import useMount from 'react-use/lib/useMount';
import { immer, persist } from '@utils_p/zustand';

const ST_KEY = 'store_first';

interface First_Store {
  count: number;
  increase: () => null;
  reset: () => null;
  getFirstStoreData: () => null;
}

const [useStore, api] = create<First_Store>(
  persist(ST_KEY)(
    immer(set => ({
      count: 0,
      increase: () =>
        set((state: First_Store) => {
          state.count++;
        }),
      reset: () =>
        set((state: First_Store) => {
          state.count = 0;
        }),
      getFirstStoreData: () => {
        const [persistedState] = useLocalStorage<First_Store>(ST_KEY);
        useMount(() => {
          set((state: First_Store) => {
            state.count = persistedState.count;
          });
        });
      },
    }))
  )
);

export { useStore, api };
