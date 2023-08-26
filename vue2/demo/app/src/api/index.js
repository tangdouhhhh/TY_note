import mockAxios from "./mockAjax";

//获取banner (Home首页轮播图接口)
export const reqGetBannerList = () => {
    //发请求
    return mockAxios({
      url: "/banner",
      method: "get",
    });
  };