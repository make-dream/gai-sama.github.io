import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div>
                <img src={require('../../../img/help/user_center_1.jpg')} alt="用户中心"/>
                <p>
                    左侧导航栏分为五个大类：下载场景库、我的素材库、我的方案库、帐号管理、联系客服<br/>
                    下载场景库：在此刻查看已下载和正在下载的场景。<br/>
                    有三个筛选类别：为风格、空间、类型，点选可进行分类筛选
                </p>
                <img src={require('../../../img/help/user_center_2.png')} alt="用户中心"/>
                <p>
                    在已下载场景中，把鼠标移入场景缩略图中会显示删除和打开按钮，点击可进行删除或者打开场景<br/>
                    在正在下载场景中，把鼠标移入场景缩略图中会显示删除和暂停按钮，点击可暂停下载或者删除场景，进度条可查看下载进度。<br/>
                </p>
                <img src={require('../../../img/help/user_center_3.jpg')} alt="用户中心"/>
                <p>
                    点击场景缩略图，显示场景详情页面，可在该页面打开进入该场景
                </p>

                <img src={require('../../../img/help/user_center_4.png')} alt="用户中心"/>
                <p>
                    我的素材库：在此刻查看已收藏的素材和上传个人素材<br/>
                    点击创建分组，可新建分组项。可对现有分组重命名或者删除。
                </p>
                <img src={require('../../../img/help/user_center_5.png')} alt="用户中心"/>
                <p>进入分组后可查看已经收藏的素材和已经上传的个人素材。鼠标移入缩略图可对该素材取消收藏。点击素材可查看详情。</p>
                <img src={require('../../../img/help/user_center_6.jpg')} alt="用户中心"/>
                <p>我的方案库：在此可查看场景内已保存的方案</p>
                <img src={require('../../../img/help/user_center_7.png')} alt="用户中心"/>
                <p>
                    点击头像可上传个人头像。<br/>
                    点击密码可进行密码修改。<br/>
                    点击手机可以更换账号的绑定手机<br/>
                    点击联系客服可以把使用产生的问题跟我们沟通<br/>
                </p>
            </div>
        );
    }
});
