import { Loader } from '@/app/components/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HospitalList.scss';
import { Hospital } from '@/app/types/Hospital';
import { RootState } from '@/app/store';

export const HospitalList = () => {
  const dispatch = useDispatch();
  const hospitals = useSelector((state: RootState) => state.hospitals);

  useEffect(() => {
    dispatch.hospitals.fetchHospitals();
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Hospitals Next to you</h1>

      {hospitals.length ? (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital: Hospital) => (
                <tr key={hospital.id}>
                  <td>{hospital.name}</td>
                  <td>{hospital.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
