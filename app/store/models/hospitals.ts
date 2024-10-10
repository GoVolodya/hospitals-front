import axios from 'axios';
import { Hospital } from '@/app/types/Hospital';
import { createModel } from '@rematch/core';
import { RootModel } from '@/app/store/models/index';

export const hospitals = createModel<RootModel>()({
  state: [] as Hospital[],
  reducers: {
    setHospitals(state, payload: Hospital[]) {
      return payload;
    },
  },
  effects: (dispatch) => ({
    async fetchHospitals() {
      const response = await axios.get(process.env.NEXT_PUBLIC_HOSPITALS_API_URL ?? '');

      if (!response.data.data) {
        console.error('Something wrong with Hospitals API link');
      } else {
        dispatch.hospitals.setHospitals(response.data.data);
      }
    },
  }),
});
