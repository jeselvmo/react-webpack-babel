// 使用 Mock
import Mock from 'mockjs';

// 添加、修改、删除操作
Mock.mock(/\/api\/\w+\/(add|update|delete|addCourse|removeCourse)/, {
  result: 0,
  data: true,
});

const sorts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20];
const images = [
  'http://fileimosscdn.lejiaolexue.com/rest/dl/98771c661eefb3f6a46765935e7b6cc00525629a.jpg',
  'http://fileimosscdn.lejiaolexue.com/rest/dl/374b780b9b12467838828c917754bfe7230fd5ad.png',
  'http://fileimosscdn.lejiaolexue.com/rest/dl/2082a69c0eec563681188ca92c57733171c147ff.png',
  'http://fileimosscdn.lejiaolexue.com/rest/dl/bfc16b799ba98e9cd9b94a3c3c2062f825dcf05b.jpg',
  'http://fileimosscdn.lejiaolexue.com/rest/dl/c81bd9e0a8254cdcdafb3d1abbbb0174e63f605f.jpg',
];
const onlineStatus = [1, 2];

// 科目列表
Mock.mock(/\/cc\/subject/, {
  result: 0,
  'data|10': [
    {
      subject_id: '@increment(1)',
      'name|1': ['语文', '数学', '外语', '历史', '思想政治', '地理', '化学', '物理', '生物'],
    },
  ],
});

// 厂商列表
Mock.mock(/\/cc\/provider/, {
  result: 0,
  'data|5': [
    {
      provider_id: '@increment(1)',
      'name|+1': ['厂商一', '厂商二', '厂商三', '厂商四', '厂商五'],
      contact: '@cname',
      'phone|1': ['15901097191', '13901092301', '17601094567', '15884746777', '13884799866'],
      'ratio|1': [30, 40, 50, 60],
    },
  ],
});

// 板块列表
Mock.mock(/\/cc\/section/, {
  result: 0,
  'data|5': [
    {
      id: '@increment(1)',
      'name|+1': ['中华名著', '孩子思维启蒙', '益智课程', '课外读物', '作业写作'],
      'desc|1': ['热销排行', '历史名著', '育儿知识'],
      count: '@integer(0,100)',
      grades: [1, 2],
      sort: '@increment(1)',
      'details|1': '上架中35，下架下0，一年级33，二年级33',
      updateTime: 1604051446,
    },
  ],
});

// 分类列表
Mock.mock(/\/cc\/category/, {
  result: 0,
  'data|5': [
    {
      id: '@increment(1)',
      'image|1': images,
      'name|+1': ['热销排行', '历史名著', '育儿知识'],
      'desc|1': ['热销排行', '历史名著', '育儿知识'],
      info: {
        'type|1': [1, 2, 3, 4],
      },
      'sort|+1': sorts,
      updateTime: 1604051446,
      grades: [1, 2],
    },
  ],
});

// 分类列表
Mock.mock(/\/cc\/banner/, {
  result: 0,
  'data|5': [
    {
      banner_id: '@increment(1)',
      'pic|1': images,
      'name|+1': ['热销排行', '历史名著', '育儿知识'],
      'remark|1': ['热销排行', '历史名著', '育儿知识'],
      info: {
        'type|1': [1, 2, 3, 4],
      },
      'sort|+1': sorts,
      updateTime: 1604051446,
      grade_ids: [1, 2, 3],
    },
  ],
});

// 板块列表
Mock.mock(/\/cc\/course/, {
  result: 0,
  'data|5': [
    {
      id: '@increment(1)',
      'image|1': images,
      'name|+1': ['中华名著', '孩子思维启蒙', '益智课程', '课外读物', '作业写作'],
      'desc|1': ['热销排行', '历史名著', '育儿知识'],
      'content|1': ['热销排行', '历史名著', '育儿知识'],
      companyId: 1,
      companyName: '乐教乐学',
      lessonNum: '@integer(0,100)',
      originalPrice: '@integer(0,100)',
      price: '@integer(0,100)',
      saleNum: '@integer(0,100)',
      subjectId: 1,
      'subjectName|1': ['语文', '数学', '外语', '历史', '思想政治', '地理', '化学', '物理', '生物'],
      grades: [1, 2],
      sections: [1, 2],
      'onlineStatus|1': onlineStatus,
      sort: '@increment(1)',
      updateTime: 1604051446,
    },
  ],
});
