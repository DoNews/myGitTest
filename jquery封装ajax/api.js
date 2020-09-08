
// var cururl = getProjectPath_web() +"/statisticsdata/getIssuePendingStatistics"

var Api = getProjectPath_web();
// var Api = '192.168.43.88:8080/zhwx-1.0.0';
// let appUrl = 'http://47.100.91.141:3000/mock/36'
//今日事件
function getIssuePendingStatistics(orgid){
    return axios({
        method:"post",
        url: Api+'/statisticsdata/getIssuePendingStatistics',
        data: {
            "orgid" : orgid
          },
    })
}
// 辖区事件分类统计
function getStatisticsByEventCategoryToday(orgId){//
    return axios({
        method:"get",
        url: Api+'/commandAndDispatch/getStatisticsByEventCategoryToday',
        data: {
            "orgId" : orgId
        },
    })
}
// 今日案件
function getLawCaseStatistics(orgId){//
    return axios({
        method:"post",
        url: Api+'/commandAndDispatch/getLawCaseStatistics',
        data: {
            "orgId" : orgId
        },
    })
}
// 123456热线 与微信
function getExternalStatistics(orgId){//
    return axios({
        method:"post",
        url: Api+'/commandAndDispatch/getExternalStatistics',
        data: {
            "orgId" : orgId
        },
    })
}

//力量清單
function getGridPowerInventory(data){//
    return axios({
        method:"post",
        url: Api+'/commandAndDispatch/getGridPowerInventory',
        data: data
    })
}
// 人员状态统计
function getPersonnelStatusStatistics(orgId){
    return axios({
        method:"post",
        url: Api+'/commandAndDispatch/getPersonnelStatusStatistics',
        data: {
            "orgId" : orgId
        },
    })
}
// 事件清单
function sjList(data){//
    return axios({
        method:"get",
        url: Api+'/commandAndDispatch/sjList',
        data:data,
    })
}
// 各人類型統計
function getPersonnelTypeStatistics(orgId){
    return axios({
        method:"post",
        url: Api+'/commandAndDispatch/getPersonnelTypeStatistics',
        data: {
            "orgId" : orgId
        },
    })
}
//事件统计本月
function getEventStatisticsOfTheCurrentMonth(orgId){
    return axios({
        method:"post",
        url: Api+'/commandAndDispatch/getEventStatisticsOfTheCurrentMonth',
        data: {
            "orgId" : orgId
        },
    })
}

// 舆情区域
function getAreaStatics() {
    return axios({
        method: 'post',
        url: Api + '/publicOpinion/areaStatics',
    })
}

//list列表
function getList(data) {
    return axios({
       method: 'get',
       url: Api + '/publicOpinion/list',
       data: data
   })
}

//舆情类型统计
function getSourceStatics() {
    return axios({
       method: 'post',
       url: Api + '/publicOpinion/sourceStatics',
   })
}

//舆情受理趋势
function getMonthStatics() {
    return axios({
       method: 'post',
       url: Api + '/publicOpinion/monthStatics',
   })
}
