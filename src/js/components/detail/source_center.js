import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div>
                <img src={require('../../../img/help/source_center_1.jpg')} alt="素材中心"/>
                <p>
                    左侧导航栏分为建材和家具两个大类，可进行大类的筛选，点击全部清空所有筛选内容<br/>
                    顶栏筛选项包含风格和品牌两个内容，点击更多查看未显示的筛选项。
                </p>
                <img src={require('../../../img/help/source_center_2.png')} alt="素材中心"/>
                当鼠标移入素材中则在右上角显示收藏按钮，点击可对该素材进行收藏，可以选择已创建的分组放入。<br/>
                当鼠标移入已收藏的素材，可点击取消收藏
                <img src={require('../../../img/help/source_center_3.jpg')} alt="素材中心"/>
                点击素材的缩略图显示素材详情页面，可在此查看素材详情，并进行收藏和取消收藏的操纵
            </div>
        );
    }
});
