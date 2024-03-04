import create from "zustand";

interface Store {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  saveCurrentStep: () => void;
  resetStep: () => void;
  eligibilityAnswers: { [question: string]: boolean };
  setEligibilityAnswer: (question: string, answer: boolean) => void;
}

export const useStore = create<Store>((set, get) => ({
  currentStep: (() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem("savedStep")) || 0;
    } else {
      return 0;
    }
  })(),
  setCurrentStep: (step) => set({ currentStep: step }),
  saveCurrentStep: () => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem("savedStep", get().currentStep.toString());
    }
  },
  resetStep: () => set({ currentStep: 0 }),
  eligibilityAnswers: {},
  setEligibilityAnswer: (question, answer) => set((state) => ({
    eligibilityAnswers: { ...state.eligibilityAnswers, [question]: answer },
  })),
}));
