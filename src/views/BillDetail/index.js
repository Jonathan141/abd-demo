import React from 'react';
import BillDetail from 'antd-bill-detail';
import { detailData } from './data';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BillDetail detailData={detailData} />
        );
    }
}