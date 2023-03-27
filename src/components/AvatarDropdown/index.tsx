import React from "react"
import { Avatar, Dropdown, MenuProps } from 'antd'
import { history, Link, useModel } from "@umijs/max"


const AvatarDropdown: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const loginOut = async () => {
    try {
      await loginOut();
      setInitialState((s:any) => ({ ...s, currentUser: undefined }));
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Link to="/home">个人中心</Link>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div onClick={loginOut}>退出登录</div>
      ),
      key: '1',
    }
  ]

  const { currentUser } = initialState || {};

  return (
    <Dropdown menu={{items}}>
      <span>
        <Avatar size="small" src={currentUser?.avatarUrl} alt="avatarUrl" />
        <span style={{ marginLeft: 8 }}>{currentUser?.username}</span>
      </span>
    </Dropdown>
  )
}

export default AvatarDropdown
