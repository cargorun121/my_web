import * as axios from 'axios'

declare module 'axios' {
    export interface AxiosRequestConfig {
        /**
         * @description 设置为true，则会在请求过程中显示loading动画，直到请求结束才消失
         */
        loading?: boolean;
      }
}