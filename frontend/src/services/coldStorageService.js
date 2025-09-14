import api from './api';
import {
  coldStorageListRequest,
  coldStorageListSuccess,
  coldStorageListFail,
  coldStorageDetailsRequest,
  coldStorageDetailsSuccess,
  coldStorageDetailsFail,
  coldStorageCreateRequest,
  coldStorageCreateSuccess,
  coldStorageCreateFail,
  coldStorageUpdateRequest,
  coldStorageUpdateSuccess,
  coldStorageUpdateFail,
  coldStorageReviewCreateRequest,
  coldStorageReviewCreateSuccess,
  coldStorageReviewCreateFail,
} from '../redux/slices/coldStorageSlice';

// Get all cold storages
export const listColdStorages =
  (keyword = '', state = '', district = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch(coldStorageListRequest());

      const { data } = await api.get(
        `/coldstorage?keyword=${keyword}&state=${state}&district=${district}&pageNumber=${pageNumber}`
      );

      dispatch(coldStorageListSuccess(data));
    } catch (error) {
      dispatch(
        coldStorageListFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

// Get cold storage details
export const getColdStorageDetails = (id) => async (dispatch) => {
  try {
    dispatch(coldStorageDetailsRequest());

    const { data } = await api.get(`/coldstorage/${id}`);

    dispatch(coldStorageDetailsSuccess(data));
  } catch (error) {
    dispatch(
      coldStorageDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Create cold storage
export const createColdStorage = (coldStorageData) => async (dispatch) => {
  try {
    dispatch(coldStorageCreateRequest());

    const { data } = await api.post('/coldstorage', coldStorageData);

    dispatch(coldStorageCreateSuccess(data));
  } catch (error) {
    dispatch(
      coldStorageCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Update cold storage
export const updateColdStorage =
  (id, coldStorageData) => async (dispatch) => {
    try {
      dispatch(coldStorageUpdateRequest());

      const { data } = await api.put(`/coldstorage/${id}`, coldStorageData);

      dispatch(coldStorageUpdateSuccess(data));
    } catch (error) {
      dispatch(
        coldStorageUpdateFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

// Create cold storage review
export const createColdStorageReview =
  (coldStorageId, review) => async (dispatch) => {
    try {
      dispatch(coldStorageReviewCreateRequest());

      await api.post(`/coldstorage/${coldStorageId}/reviews`, review);

      dispatch(coldStorageReviewCreateSuccess());
    } catch (error) {
      dispatch(
        coldStorageReviewCreateFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

// Get top rated cold storages
export const getTopColdStorages = async () => {
  const { data } = await api.get('/coldstorage/top');
  return data;
};

// Get nearby cold storages
export const getNearbyColdStorages = async (lat, lng, radius = 50) => {
  const { data } = await api.get(
    `/coldstorage/nearby?lat=${lat}&lng=${lng}&radius=${radius}`
  );
  return data;
};
