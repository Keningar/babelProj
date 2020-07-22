import create from 'zustand';
import { immer, persist } from '@utils_p/zustand';

const ST_KEY = 'second_store';

interface Secont_Store {
  value: boolean;
  change: () => null;
}

const [useSecontStore] = create<Secont_Store>(
  persist(ST_KEY)(
    immer(set => ({
      value: true,
      change: () =>
        set((state: Secont_Store) => {
          state.value = !state.value;
        }),
    }))
  )
);

export { useSecontStore };
