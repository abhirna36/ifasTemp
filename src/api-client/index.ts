import axios from 'axios';
import {Platform} from 'react-native';
import {store} from '../../stores';
import Configuration from '../configuration'
// import {
//   API_FAILED_ERROR,
//   DONT_SHOW_ERROR_ALERT,
//   GET_LOADER,
// } from '../actions/Types';
// import DeviceInfo from 'react-native-device-info';

export default class ApiClient  {
  axiosClient: any;
  static instance: any;
  constructor() {
    if (!ApiClient.instance) {
      ApiClient.instance = this;
    }
    return ApiClient.instance;
  }

  getCommonHeaders = () => {
    //Generic headers common for all apis
    const internalState = store?.getState();

    let commonHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    // if (token) {
    //   commonHeaders = {...commonHeaders, authorization: `Bearer ${token}`};
    // }
    return commonHeaders;
  };

  getCommonQueries = () => {
    // const internalState = store?.getState();
    // let appVersion = DeviceInfo.getVersion();

    let queryParams = {
      isMobilePlatform: true,
      mobilePlatform: Platform.OS,
      mobilePlatformVersion: Platform.Version,
    //   appVersion: appVersion,
    };
    return queryParams;
  };

  creatAxiosInstance = () => {
    this.axiosClient = axios.create({
      baseURL: Configuration.apis.apiBaseUrl,
      timeout: 15000,
    });

    /**
     *Descriptiom: Axios Interceptor for Request
     */
    this.axiosClient.interceptors.request.use(
      async (request:any) => {
        return request;
      },
      (error:any) => {
       
        return Promise.reject(error);
      },
    );

    /**
     *Descriptiom: Axios Interceptor for Response
     */
    this.axiosClient.interceptors.response.use(
      (response:any) => {  
        if (response.status === 200 || response.status === 201) {
          return response;
        }
      },
      (error:any) => {
        const payload = error.response ? error.response : null;
         return Promise.reject(error);
      },
    );
  };

  /**
   * Description: Executes a Get Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */

  getRequest = (endUrl:string, queryParams:any, headers:any) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }
    return this.axiosClient.get(endUrl, {
      params: requestQueries,
      headers: requestHeaders,
    });
  };

  /**
   * Description: Executes a Post Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} body request body
   * @returns {Promise} returns a promise of response
   */
  postRequest = (endUrl:string, body:any, queryParams:any, headers:any, timeoutInms:number) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }

    if (timeoutInms) {
      return this.axiosClient.post(endUrl, body, {
        params: requestQueries,
        headers: requestHeaders,
        timeout: timeoutInms,
      });
    } else {
      return this.axiosClient.post(endUrl, body, {
        params: requestQueries,
        headers: requestHeaders,
      });
    }
  };

  /**
   * Description: Executes a patch Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */
  patchRequest = (endUrl:string, postParams:any, queryParams:any, headers:any) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }

    return this.axiosClient.patch(endUrl, postParams, {
      params: requestQueries,
      headers: requestHeaders,
    });
  };

  /**
   * Description: Executes a delete Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */
  deleteRequest = (endUrl:string, queryParams:any, headers:any) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }

    return this.axiosClient.delete(endUrl, {
      params: requestQueries,
      headers: requestHeaders,
    });
  };

  /**
   * Description: Executes a Put Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */
  putRequest = (endUrl:any, postParams:any, headers:any) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (postParams) {
      requestQueries = {...requestQueries, ...postParams};
    }
    return this.axiosClient.put(endUrl, requestQueries, {
      headers: requestHeaders,
    });
  };
}
