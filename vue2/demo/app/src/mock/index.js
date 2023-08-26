const Mock = require("mockjs")
import banner from './banner.json'
// mock数据： 请求地址 请求数据
Mock.mock('/mock/banner', { code: 200, data: banner })