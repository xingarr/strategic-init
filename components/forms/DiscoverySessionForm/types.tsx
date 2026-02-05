/*
File: /components/forms/DiscoverySessionForm/types.ts
*/

export type FormData = {
    fullName: string;
    email: string;
    companyName: string;
    title: string;
    projectGoals: string[];
    otherGoal: string;
    currentChallenges: string;
    teamStructure: string;
    timeline: string;
    budget: string;
    budgetRange: string;
    referralSource: string;
    additionalInfo: string;
    selectedDate: string;
    selectedTime: string;
  };
  
  export const initialFormData: FormData = {
    fullName: "",
    email: "",
    companyName: "",
    title: "",
    projectGoals: [],
    otherGoal: "",
    currentChallenges: "",
    teamStructure: "",
    timeline: "",
    budget: "",
    budgetRange: "",
    referralSource: "",
    additionalInfo: "",
    selectedDate: "",
    selectedTime: "",
  };
  
  export type StepProps = {
    formData: FormData;
    errors: Record<string, string>;
    updateFormData: (field: string, value: any) => void;
  };
  