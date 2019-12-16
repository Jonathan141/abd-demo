/* 模拟返回值 */
const response = {
    status: {
        desc: "操作成功",
        code: 0
    },
    property: {
        fundsInfo: {
            proof: `[{
                    "name": "123.jpg",
                    "url": "https://public.fuyoukache.com/844c719a-05ad-4ff8-bd7c-9bff126b0d80---123.jpg"
                },{
                    "name": "1700434553.png",
                    "url": "https://public.fuyoukache.com/d0463926-6513-4ac0-87ec-94332a780c73---1700434553.png"
                }]`,
            proof2: `[{
                    "name": "123.jpg",
                    "url": "https://public.fuyoukache.com/844c719a-05ad-4ff8-bd7c-9bff126b0d80---123.jpg"
                }]`,
            proofName: `[{
                    "name": "百世19年赞助费坏账申请.xlsx",
                    "url": "https://public.fuyoukache.com/c0b6cdca-c42e-4ddd-9a7e-23027bfa8b86---百世19年赞助费坏账申请.xlsx"
                },{
                    "name": "坏账申请.xlsx",
                    "url": "https://public.fuyoukache.com/c0b6cdca-c42e-4ddd-9a7e-23027bfa8b86---百世19年赞助费坏账申请.xlsx"
                }]`,
            id: 3,
            receiptTime: 1571414400000,
            paymentAccount: "189******90",
            serialsId: "对公支付宝",
            paymentAccountName: "单欣欣3",
            paymentWorkflowNo: "0000000",
            receiptAmount: 222222.0,
            desc: "描述啊89898989",
            createTime: 1572833183,
            createUserId: 1835,
            claimableAmount: 222122.0,
            type: 0,
            typeenum: "ALIPAY",
            receiptAccountName: "江苏鼎福隆现代物流有限公司",
            receiptAccountNo: "110934456110902",
            virtualClaim: 0.0,
            isCancel: 0,
            typeName: "支付宝"
        }
    },
    data: [
        {
            idD: 1,
            orderSnD: "429110601796",
            operateD: 1,
            operateEnumD: "CONFIRM",
            operateNameD: "确认",
            invoiceNumberD: "04820285",
            invoiceMoneyD: 5000.0,
            usedMoneyD: 5000.0,
            operatorD: 1676,
            operatorNameD: "张晓明",
            operateTimeD: 1573030638000,
            remarkD: null,
            proof: `[{
                "name": "123.jpg",
                "url": "https://public.fuyoukache.com/844c719a-05ad-4ff8-bd7c-9bff126b0d80---123.jpg"
            },{
                "name": "1700434553.png",
                "url": "https://public.fuyoukache.com/d0463926-6513-4ac0-87ec-94332a780c73---1700434553.png"
            }]`,
        }, {
            idD: 1,
            orderSnD: "429110601796",
            operateD: 1,
            operateEnumD: "CONFIRM",
            operateNameD: "确认",
            invoiceNumberD: "04820285",
            invoiceMoneyD: 5000.0,
            usedMoneyD: 5000.0,
            operatorD: 1676,
            operatorNameD: "沈玉会",
            operateTimeD: 1573030638000,
            remarkD: "备注原因",
            proof: `[{
                "name": "123.jpg",
                "url": "https://public.fuyoukache.com/844c719a-05ad-4ff8-bd7c-9bff126b0d80---123.jpg"
            }]`,
        }
    ],
    success: true
}

export const fundsInfo = response.property.fundsInfo;

export const tableData1 = response.data;
export const tableData2 = response.data;

/**
 *  type: file, image
 *  附件格式 '[{name: 'xxx.xxx', url: 'xxx.xxxx.xxx'}, {name: '', url: ''}]' 
 * */
export const dataMap = [{
    title: '资金单号',
    dataIndex: 'id',
    render: (text, record) => {
        return `${text}-${record.paymentAccountName}`
    }
}, {
    title: '付款时间',
    dataIndex: 'receiptTime',
}, {
    title: '付款账户名称',
    dataIndex: 'paymentAccountName',
}, {
    title: '付款账号',
    dataIndex: 'paymentAccount',
}, {
    title: '附件',
    dataIndex: 'proofName',
    type: 'file',
}, {
    title: '摘要',
    dataIndex: 'desc',
}, {
    title: '备注',
    dataIndex: 'serialsId',
}, {
    title: '截图',
    dataIndex: 'proof',
    type: 'image'
}, {
    title: '截图2',
    dataIndex: 'proof2',
    type: 'image'
}]

export const tableMap1 = [{
    title: '操作时间',
    dataIndex: 'operateTimeD',
    type: 'time',
    format: 'YYYY-MM-DD',
}, {
    title: '操作',
    dataIndex: 'operateNameD',
}, {
    title: '发票号',
    dataIndex: 'invoiceNumberD',
}, {
    title: '发票金额',
    dataIndex: 'invoiceMoneyD',
    type: 'money'
}, {
    title: '当前运单匹配金额',
    dataIndex: 'usedMoneyD',
    type: 'money',
}, {
    title: '操作人',
    dataIndex: 'operatorNameD',
    render: (text, record) => {
        return `${record.operatorD}-${record.operatorNameD}`;
    }
}, {
    title: '附件',
    dataIndex: 'proof',
    type: "image"
}, {
    title: '备注',
    dataIndex: 'remarkD'
}]

export const tableMap2 = [{
    title: '操作时间',
    dataIndex: 'operateTimeD',
    type: 'time',
}, {
    title: '操作',
    dataIndex: 'operateNameD',
}, {
    title: '发票号',
    dataIndex: 'invoiceNumberD',
}, {
    title: '发票金额',
    dataIndex: 'invoiceMoneyD',
    type: 'money'
}, {
    title: '当前运单匹配金额',
    dataIndex: 'usedMoneyD',
    type: 'money',
}, {
    title: '操作人',
    dataIndex: 'operatorNameD'
}, {
    title: '附件',
    dataIndex: 'proof',
    type: "image"
}, {
    title: '备注',
    dataIndex: 'remarkD'
}]

export const detailData = [
    {
        title: "页面详情1",
        showType: "board",
        dataMap: dataMap,
        dataSource: fundsInfo,
    },
    {
        title: "页面详情",
        showType: "board",
        dataMap: dataMap,
        dataSource: fundsInfo,
    },
    {
        title: '日志表格1',
        showType: 'table',
        dataMap: tableMap1,
        dataSource: tableData1,
    },
    {
        title: "日志表格2",
        showType: 'table',
        dataMap: tableMap2,
        dataSource: tableData2,
    }
]
