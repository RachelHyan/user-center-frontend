// import '@umijs/max/typings';

declare namespace API {
  type CurrentUser = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender:number;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    planetCode: string;
    createTime: Date;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    planetCode?: string;
  }

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    planetCode?: string;
  };

  /**
   * 通用返回类
   */
  type BaseResponse<T> = {
    code: number,
    data: T,
    message: string,
    description: string,
  }

  type LoginResult = {
    status?: string;
  }

  type RegisterResult = number;
}
