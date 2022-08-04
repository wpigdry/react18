import React, { useState, useEffect } from 'react';

// 网络请求，获取 user 数据
const requestUser = id =>
    new Promise(resolve =>
        setTimeout(() => resolve({ id, name: `用户${id}`, age: 10 + id }), id * 2000)
    );

const User = props => {
    const [user, setUser] = useState({});

    // 这个是client客户端渲染的Suspense
    // 用来增加js加载的时间，展示fallback
    for (let i = 0; i < 1000000000; i++) {

    }

    useEffect(() => {
        requestUser(props.id).then(res => setUser(res));
    }, [props.id]);
 
    return <div>当前用户是: {user.name}</div>;
};

export default User;
