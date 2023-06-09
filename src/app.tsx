// 运行时配置
import { history, RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import AvatarDropdown from './components/AvatarDropdown';
import { currentUser as queryCurrentUser } from "./services/login";

console.log(process.env);
export const request: RequestConfig = {
  timeout: 1000000,
};
/**
 * 无需用户登录态的页面
 */
const NO_NEED_LOGIN_WHITE_LIST = ['/register', '/login'];

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser | any,
  fetchUserInfo: () => Promise<API.CurrentUser | undefined>,
 }> {
  const fetchUserInfo = async () => {
    try {
      const data = await queryCurrentUser();
      return data;
    } catch (error) {
      history.push('/login');
    }
    return undefined;
  }
  // 如果是无需登录的页面，不执行
  if (NO_NEED_LOGIN_WHITE_LIST.includes(history.location.pathname)) {
    return {
      // @ts-ignore
      fetchUserInfo,
    };
  }
  const currentUser = await fetchUserInfo();
  return {
    // @ts-ignore
    fetchUserInfo,
    currentUser,
  };
}

export const layout:RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <AvatarDropdown />,
  };
};
