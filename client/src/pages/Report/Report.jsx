import React from "react";
import { Row, Col, Divider } from 'antd';
import './report.less'

export default class Report extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            categaryDiv: '',
            todoDiv: '',
            importantDiv: '',
            recommendDiv: '',
            importantOrderDiv: '',
            newVIP: '', ordersDiv: ''
        };
    }

    componentWillMount() {
        let categaryDiv = []
        for (let i = 0; i < 5; i++) {
            categaryDiv.push(<div className='line-2-1'>
                <div>{i + 1}</div>
                <div>品类</div>
                <div></div>
                <div>金额</div>
                <div></div>
                <div>数量</div>
                <div></div>
            </div>)
        }
        let todoDiv = []
        for (let i = 0; i < 5; i++) {
            todoDiv.push(<div className='line-2-1'>
                <div>{i + 1}</div>
                <div>内容说明</div>
                <div></div>
                <div>跟进办法</div>
                <div></div>
            </div>)
        }
        let importantDiv = []
        for (let i = 0; i < 3; i++) {
            importantDiv.push(
                <div className='line-2-1'>
                    <div>{i + 1}</div>
                    <div>内容说明</div>
                    <div></div>
                </div>
            )
        }
        let recommendDiv = []
        for (let i = 0; i < 4; i++) {
            recommendDiv.push(
                <div className='line-2-1'>
                    <div>品牌</div>
                    <div></div>
                    <div>品名</div>
                    <div></div>
                    <div>数量</div>
                    <div></div>
                    <div>金额</div>
                    <div></div>
                </div>
            )
        }
        let importantOrderDiv = []
        for (let i = 0; i < 4; i++) {
            importantOrderDiv.push(<div className='line-2-1'>
                <div>客户名称</div>
                <div></div>
                <div>洽谈内容</div>
                <div></div>
                <div>联系人</div>
                <div></div>
                <div>联系方式</div>
                <div></div>
            </div>)
        }
        let newVIP = []
        for (let i = 0; i < 3; i++) {
            newVIP.push(
                <div className='line-2-1'>
                    <div>客户名称</div>
                    <div></div>
                    <div>联系人</div>
                    <div></div>
                    <div>联系方式</div>
                    <div></div>
                </div>
            )
        }
        let ordersDiv = []
        for (let i = 0; i < 10; i++) {
            ordersDiv.push(
                <div className='line-2-1'>
                    <div>54324523</div>
                    <div>耐克</div>
                    <div>运动鞋</div>
                    <div>双</div>
                    <div>699</div>
                    <div>1</div>
                    <div>699</div>
                    <div>个人</div>
                    <div>支付宝</div>
                    <div>自提</div>
                </div>
            )
        }
        this.setState({
            categaryDiv,
            todoDiv,
            importantDiv,
            recommendDiv,
            importantOrderDiv,
            newVIP,
            ordersDiv
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div className='bg'>
                <Divider className='title'>南京太古（TFS）体育日报表</Divider>
                <Row className='border'>
                    <Col span={6}>部门</Col>
                    <Col span={6}>制表人</Col>
                    <Col span={6}>制表日期</Col>
                    <Col span={6}>表编号</Col>
                </Row>
                <Row className='border'>
                    <Col span={6}>店铺名称</Col>
                    <Col span={6}>店长</Col>
                    <Col span={12}>在岗人员</Col>
                </Row>
                <div className='table border'>
                    <div className='name'>前日销售</div>
                    <div className='dailyTable'>
                        <div className='line line1 border'>
                            <div>
                                销售额
                            </div>
                            <div></div>
                            <div>
                                现金额
                            </div>
                            <div></div>
                            <div>
                                支付宝
                            </div>
                            <div></div>
                            <div>
                                微信
                            </div>
                            <div></div>
                            <div>
                                POS机
                            </div>
                            <div></div>
                        </div>
                        <div className='line line2 border'>
                            <div className='subname'>
                                分类销售额
                           </div>
                            <div className='line2-2'>
                                <div>
                                    网球类
                        </div>
                                <div></div>
                                <div>
                                    羽毛球类
                        </div>
                                <div></div>
                                <div>
                                    高尔夫类
                        </div>
                                <div></div>
                                <div>
                                    壁球类
                        </div>
                                <div></div>
                                <div>
                                    田径类
                        </div>
                                <div></div>
                                <div>
                                    篮足类
                        </div>
                                <div></div>
                                <div>
                                    配件类
                        </div>
                                <div></div>
                                <div>
                                    游泳类
                        </div>
                                <div></div>
                                <div>
                                    休闲鞋服
                        </div>
                                <div></div>
                                <div>
                                    服装定制
                        </div>
                                <div></div>
                                <div>
                                    其他
                        </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='line line3 border'>
                            <div className='subname'>销售前五排名</div>
                            <div className='line-2'>
                                {this.state.categaryDiv}
                            </div>
                        </div>
                        <div className='line line4 border'>
                            <div className='subname'>未完成事项</div>
                            <div className='line-2'>
                                {this.state.todoDiv}
                            </div>
                        </div>
                        <div className='line '>
                            <div className='subname'>重点提醒事项</div>
                            <div className='line-2'>
                                {this.state.importantDiv}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className='table border'>
                    <div className='name'>今日计划</div>
                    <div className='dailyTable'>
                        <div className='line line2 border'>
                            <div className='subname'>
                                日销售额计划
                           </div>
                            <div className='line2-2'>
                                <div>
                                    网球类
                        </div>
                                <div></div>
                                <div>
                                    羽毛球类
                        </div>
                                <div></div>
                                <div>
                                    高尔夫类
                        </div>
                                <div></div>
                                <div>
                                    壁球类
                        </div>
                                <div></div>
                                <div>
                                    田径类
                        </div>
                                <div></div>
                                <div>
                                    篮足类
                        </div>
                                <div></div>
                                <div>
                                    配件类
                        </div>
                                <div></div>
                                <div>
                                    游泳类
                        </div>
                                <div></div>
                                <div>
                                    休闲鞋服
                        </div>
                                <div></div>
                                <div>
                                    服装定制
                        </div>
                                <div></div>
                                <div>
                                    其他
                        </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='line line3 border'>
                            <div className='subname'>重点推荐货品</div>
                            <div className='line-2'>
                                {this.state.recommendDiv}
                            </div>
                        </div>
                        <div className='line line3 border'>
                            <div className='subname'>订单进行中及团购、VIP客户跟单</div>
                            <div className='line-2'>
                                {this.state.importantOrderDiv}
                            </div>
                        </div>
                        <div className='line line3 '>
                            <div className='subname'>新团购及VIP客户信息采集</div>
                            <div className='line-2'>
                                {this.state.newVIP}
                            </div>
                        </div>
                    </div>

                </div>
                <div className='table border'>
                    <div className='name'>前日销售明细</div>
                    <div className='dailyTable'>
                        <div className='line-2'>
                            <div className='line-2-1'>
                                <div>单号</div>
                                <div>品牌</div>
                                <div>品名</div>
                                <div>单位</div>
                                <div>单价</div>
                                <div>数量</div>
                                <div>金额</div>
                                <div>客户属性</div>
                                <div>付款方式</div>
                                <div>物流方式</div>
                            </div>
                            {
                                this.state.ordersDiv
                            }
                        </div>
                    </div>
                </div>
                <div className='table border'>
                    <div className='name'>备注</div>
                    <div className='dailyTable'>
                        1、本表由店长或收银员如实填写，不可虚报；<br />
                        2、没有发生交易类别无需填写，留空白即可；<br />
                        3、本表每日晨会使用，10:00时前交业务助理处，<br />
                        4、团购客户信息采集务必完整，以备后用；<br />
                    </div>
                </div>
            </div>

        );
    }
}

