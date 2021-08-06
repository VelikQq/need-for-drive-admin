import * as axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("userToken");
const refreshToken = Cookies.get("refreshToken");

const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
  },
});

const instanceWithToken = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    Authorization: `Bearer ${token}`,
  },
});

const instanseRefreshToken = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    Authorization: `Bearer ${refreshToken}`,
  },
});

export const simbirSoftAPI = {
  authUser(formData) {
    return instance
      .post(`auth/login`, formData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  refreshToken() {
    return instanseRefreshToken
      .post(`auth/refresh`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getOrders(page, cityId, orderStatusId) {
    return instanceWithToken
      .get(`order?page=${page}&limit=3`, {
        params: {
          cityId: cityId,
          orderStatusId: orderStatusId,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getOrder(id) {
    return instanceWithToken.get(`order/${id}`).then((response) => {
      return response.data;
    });
  },

  updateOrder(id, formData) {
    return instanceWithToken
      .put(`order/${id}`, formData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCities() {
    return instanceWithToken
      .get(`city`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getOrderStatus() {
    return instanceWithToken.get(`orderStatus`).then((response) => {
      return response.data;
    });
  },

  getCars(page) {
    return instanceWithToken
      .get(`car?page=${page}&limit=7`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCategory() {
    return instanceWithToken.get(`category`).then((response) => {
      return response.data;
    });
  },

  postCar(formData) {
    return instanceWithToken.post("car", formData).then((response) => {
      return response.data;
    });
  },

  getCurrentCar(id) {
    return instanceWithToken.get(`car?id=${id}`).then((response) => {
      return response.data;
    });
  },

  deleteCar(id) {
    return instanceWithToken.delete(`car/${id}`).then((response) => {
      return response.data;
    });
  },

  updateCar(id, formData) {
    return instanceWithToken.put(`car/${id}`, formData).then((response) => {
      return response.data;
    });
  },

  getCurCity(id) {
    return instanceWithToken.get(`city/${id}`).then((response) => {
      return response.data;
    });
  },

  postCity(formData) {
    return instanceWithToken
      .post("city", formData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  updateCity(id, formData) {
    return instanceWithToken
      .put(`city/${id}`, formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  deleteCity(id) {
    return instanceWithToken
      .delete(`city/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getPoints() {
    return instanceWithToken
      .get(`point`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getPoint(id) {
    return instanceWithToken.get(`point/${id}`).then((response) => {
      return response.data;
    });
  },

  postPoint(formdata) {
    return instanceWithToken
      .post("point", formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  updatePoint(id, formData) {
    return instanceWithToken
      .put(`point/${id}`, formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  deletePoint(id) {
    return instanceWithToken
      .delete(`point/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getRates() {
    return instanceWithToken
      .get("rate")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getRate(id) {
    return instanceWithToken.get(`rate/${id}`).then((response) => {
      return response.data;
    });
  },

  postRate(formData) {
    return instanceWithToken
      .post("rate", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  updateRate(id, formData) {
    return instanceWithToken
      .put(`rate/${id}`, formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  deleteRate(id) {
    return instanceWithToken
      .delete(`rate/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getRateType() {
    return instanceWithToken
      .get("rateType")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCurRateType(id) {
    return instanceWithToken.get(`rateType/${id}`).then((response) => {
      return response.data;
    });
  },

  postRateType(formData) {
    return instanceWithToken
      .post("rateType", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  updateRateType(id, formData) {
    return instanceWithToken
      .put(`rateType/${id}`, formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  deleteRateType(id) {
    return instanceWithToken
      .delete(`rateType/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCarCategory() {
    return instanceWithToken
      .get("category")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCurCarCategory(id) {
    return instanceWithToken.get(`category/${id}`).then((response) => {
      return response.data;
    });
  },

  updateCarCategory(id, formData) {
    return instanceWithToken
      .put(`category/${id}`, formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  postCarCategory(formData) {
    return instanceWithToken
      .post("category", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  deleteCarCategory(id) {
    return instanceWithToken
      .delete(`category/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getOrderStatus() {
    return instanceWithToken
      .get("orderStatus")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCurOrderStatus(id) {
    return instanceWithToken.get(`orderStatus/${id}`).then((response) => {
      return response.data;
    });
  },

  postOrderStatus(formData) {
    return instanceWithToken
      .post("orderStatus", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  updateOrderStatus(id, formData) {
    return instanceWithToken
      .put(`orderStatus/${id}`, formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },

  deleteOrderStatus(id) {
    return instanceWithToken
      .delete(`orderStatus/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
};
