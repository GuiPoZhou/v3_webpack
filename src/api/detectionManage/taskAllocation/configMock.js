import Mock from 'mockjs';

Mock.mock(/\/dev-api\/v1\/detectManage\/taskAssignment\/itemList(|\?\S*)$/, 'get',  (req, res) => { //输出数据
  let data = {};
  data.total = 11;
  data.list = [];
  for (let i = 0; i < data.total; i++) {
    data.list.push({
      'itemName': Mock.Random.csentence(0, 6), //随机生成姓名
      'itemCode': Mock.Random.csentence(0, 6), //随机生成姓名
      'detectType': Mock.Random.csentence(0, 6), //随机生成姓名
      'waitAssignmentItemNum': Mock.Random.integer(1, 100), //随机生成姓名
      'itemId': Mock.Random.id(), //随机生成姓名
    })
  }

  return {
    data: data
  }
});

Mock.mock(/\/dev-api\/v1\/detectManage\/taskAssignment\/sampleList(|\?\S*)$/, 'get', (req, res) => { //输出数据
  let data = {};
  data.total = 11;
  data.list = [];
  for (let i = 0; i < data.total; i++) {
    data.list.push({
      'urgentStatus': Mock.Random.csentence(0, 6), //随机生成姓名
      'sampleCode': Mock.Random.csentence(0, 6), //随机生成姓名
      'waitAssignmentSampleNum': Mock.Random.integer(1, 100), //随机生成姓名
      'entrustCode': Mock.Random.csentence(0, 6), //随机生成姓名
      'detectType': Mock.Random.csentence(0, 6), //随机生成姓名
      'sampleSource': Mock.Random.csentence(0, 6), //随机生成姓名
      'completeDate': Mock.Random.date("yyyy-MM-dd"), //随机生成姓名
      'itemId': Mock.Random.id(), //随机生成姓名
    });
  }
  return {
    data: data
  }
});
