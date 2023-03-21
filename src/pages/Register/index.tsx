import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { register } from '@/services/login';
import { message } from 'antd';

const Login: React.FC = () => {

  const handleRegister = async (values: API.LoginParams) => {
    const { userPassword, checkPassword } = values;

    if (userPassword !== checkPassword) {
      message.error('两次密码不一致！');
      return;
    }

    try {
      const data = await register(values);

      if (data) {
        message.success('注册成功！');

         /** 此方法会跳转到 redirect 参数所在的位置 */
         history.push('/login');
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
    <div className="register">
      <div className="register-form">
        <LoginForm
          title="注册"
          onFinish={async (values) => {
            await handleRegister(values as API.RegisterParams);
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
            rules={[{ required: true, message: '请输入密码！' },{min: 8, type: 'string', message: '密码长度不能小于8位！' }]}
          />
          <ProFormText.Password
            name="checkPassword"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'请再次输入密码'}
            rules={[{ required: true, message: '请再次输入密码！' },{min: 8, type: 'string', message: '密码长度不能小于8位！' }]}
          />
          <ProFormText
            name="planetCode"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入星球编号"
            rules={[{ required: true, message: '请输入星球编号' }]}
          />
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
