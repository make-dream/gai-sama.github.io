import React from 'react';

export default React.createClass({
    render: function () {
        return (

            <dl>
                <dt>1.注册</dt>
                <dd>
                    可通过打开连接<a href="http://www.weiruict.com/register.html" target="_blank">http://www.weiruict.com/register.html</a>，进行注册。或在下载页面点击“立即下载”按钮进行下载安装，在客户端进行注册
                </dd>
                <dt>2.修改密码</dt>
                <dd>
                    登录密码是可以修改，可以在场景大师用户中心页面下的“账号管理”按钮下进行修改。
                </dd>
                <dt>3.账号安全</dt>
                <dd>
                    您所登记的个人资料和真实信息都是经过加密处理的。别人是看不到的，我们公司也保证不会泄露您的任何个人资料。请您放心使用！
                </dd>
                <dt>4.密码找回</dt>
                <dd>
                    可以在场景大师登录界面点击“忘记密码”，通过您之前注册账号用的手机或邮箱重新设定新的密码。
                </dd>
                <dt>5.下载提示安装不了怎么办？</dt>
                <dd>
                    通过截图形式来保留问题来联系我们客服解决问题
                </dd>
            </dl>
        );
    }
});