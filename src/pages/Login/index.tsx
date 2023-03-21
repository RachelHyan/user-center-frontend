import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { Link, useModel, history } from '@umijs/max';
import { login } from '@/services/login';
import { message } from 'antd';

const Login: React.FC = () => {
  const {initialState, setInitialState} = useModel('@@initialState');

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s:any) => ({...s, currentUser: userInfo}));
    }
  };

  const handleLogin = async (values: API.LoginParams) => {
    try {
      const data = await login(values);

      if (data) {
        message.success('登录成功！');

        await fetchUserInfo();
         /** 此方法会跳转到 redirect 参数所在的位置 */
         history.push('/home');
        //  const {query} = history.location;
        //  const {redirect} = query as {
        //    redirect: string;
        //  };
        //  history.push(redirect || '/');
         return;
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <LoginForm
          title="登录"
          onFinish={async (values) => {
            await handleLogin(values as API.LoginParams);
          }}
        >
          <ProFormText
            name="userAccount"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入用户名"
            rules={[{ required: true, message: '请输入用户名' }]}
          />
          <ProFormText.Password
            name="userPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'请输入密码'}
            rules={[{ required: true, message: '请输入密码！' }]}
          />
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <Link to="/register">新用户注册</Link>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
