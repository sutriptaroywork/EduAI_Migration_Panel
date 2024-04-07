import { Helpers } from 'types/Helpers';
import { create } from 'zustand';

export const helperPlugins = {
  plugins: [
    'status',
    'qms_type',
    'hurdle_type',
    'client_type',
    'prefixes',
    'invoice_status',
    'mode',
    'validity',
    'system_type',
    'server_type',
    'org_type',
    'exchange',
    'product',
    'variety',
    'department_type',
    'job_type',
    'experience_level',
    'location',
    'financial_year',
    'fees_type',
    'pre_trade',
    'post_trade',
  ],
};
interface helperProps {
  helpers: any; //Helpers;
  setHelpers: (helpers: any) => void;
}

export const useHelperStore = create<helperProps>(set => ({
  helpers: {},
  setHelpers: (helpers: Helpers[]) => {
    set(state => {
      return {
        ...state.helpers,
        helpers,
      };
    });
  },
}));
