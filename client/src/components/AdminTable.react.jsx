/**
 * 表格组件：
 * 1.初始化表格
 * 2.响应表格操作
 *    分页展示
 *    切换每页条数
 *    快速查询
 *    字段排序
 *    新增跳转
 *    编辑跳转
 *    删除
 * Created by yinfxs on 16-6-14.
 */

'use strict';

const React = require('react');
const Chinese = require('../publics/plugins/datatables/i18n/Chinese.json');
const RouteUtils = require('../utils/RouteUtils');
const ToastrUtils = require('../utils/ToastrUtils');
const uuid = require('node-uuid');


const AdminTable = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState(){
        const state = {dinfo: {}};
        let token = localStorage.getItem('access_token');
        if (token) token = JSON.parse(token);
        state.token = token;
        state.access_token = token.access_token;
        return state;
    },
    componentDidMount(){
        console.log('AdminTable...');
        this.getModelData(this.props.module, this.props.model, function () {
            $('.ibird-table').DataTable({language: Chinese});
        });

    },
    getModelData(moduleCode, modelCode, callback){
        const self = this;
        fetch(RouteUtils.CUSTOM('/' + moduleCode + '/' + modelCode), {
            headers: {
                "access_token": this.state.access_token
            }
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (json.err) return toastr.error(json.err.message, null, ToastrUtils.defaultOptions);
            self.setState({dinfo: json});
            callback();
        });
    },
    render(){
        // console.log('模块编码 = ' + this.props.module);
        // console.log('路由指向 = ' + this.props.path);
        // console.log('模型编码 = ' + this.props.model);
        // console.log('数据模型 = ' + JSON.stringify(this.props.schema));
        const schema = this.props.schema;
        const obj = schema.obj;
        const ths = [], keysOrder = [], data = [];

        Object.keys(obj).map(function (key) {
            if (!obj[key] || !obj[key].label) return;
            ths.push(<th key={key}>{obj[key].label}</th>);
            keysOrder.push(key);
        });
        if (this.state.dinfo.data) {
            this.state.dinfo.data.map(function (item) {
                const tds = [];
                keysOrder.map(function (key) {
                    tds.push(<td key={uuid.v4()}>{item[key]}</td>);
                });
                data.push(<tr key={uuid.v4()}>{tds}</tr>);
            });
        }

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">{schema.label}</h3>
                        </div>
                        <div className="box-body">
                            <table className="table table-bordered table-striped ibird-table display">
                                <thead>
                                <tr>{ths}</tr>
                                </thead>
                                <tbody>
                                {data}
                                </tbody>
                                <tfoot>
                                <tr>{ths}</tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AdminTable;