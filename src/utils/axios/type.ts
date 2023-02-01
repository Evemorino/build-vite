/*
 * @Author: navalercon
 * @Date: 2023-01-09 16:17:14
 * @LastEditors: navalercon
 * @LastEditTime: 2023-01-09 16:19:25
 * @Description:
 */
export interface RequestOptions {
  // Whether to process the request result
  isTransformResponse?: boolean;
}

// 返回res.data的interface
export interface IResponse<T = any> {
  code: number | string;
  result: T;
  message: string;
  status: string | number;
}
