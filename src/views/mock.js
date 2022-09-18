var one_column_data = (() => {
  let tdata = [];
  for (let i = 0; i < 20; i++) {
    tdata.push({
      label: "第" + i + "行",
      value: i,
    });
  }

  return tdata;
})();

var two_column_data = [
  {
    label: "深圳",
    value: "sz",
    children: [
      {
        label: "南山",
        value: "ns",
      },
      {
        label: "福田",
        value: "ft",
      },
      {
        label: "宝安",
        value: "ft",
      },
      {
        label: "罗湖",
        value: "lh",
      },
      {
        label: "盐田",
        value: "yt",
      },
    ],
  },
  {
    label: "广州",
    value: "gz",
    children: [
      {
        label: "越秀",
        value: "yx",
      },
      {
        label: "荔湾",
        value: "lw",
      },
      {
        label: "海珠",
        value: "zh",
      },
      {
        label: "天河",
        value: "th",
      },
      {
        label: "白云",
        value: "by",
      },
    ],
  },
  {
    label: "上海",
    value: "sh",
    children: [
      {
        label: "黄浦",
        value: "hp",
      },
      {
        label: "徐汇",
        value: "xh",
      },
      {
        label: "长宁",
        value: "cn",
      },
      {
        label: "虹口",
        value: "hk",
      },
    ],
  },
  {
    label: "北京",
    value: "bj",
    children: [
      {
        label: "东城",
        value: "dc",
      },
      {
        label: "西城",
        value: "xc",
      },
      {
        label: "海淀",
        value: "hd",
      },
      {
        label: "朝阳",
        value: "cy",
      },
      {
        label: "丰台",
        value: "ft",
      },
      {
        label: "门头沟",
        value: "mtg",
      },
      {
        label: "昌平",
        value: "cp",
      },
      {
        label: "大兴",
        value: "dx",
      },
      {
        label: "顺义",
        value: "sy",
      },
    ],
  },
];

export { one_column_data, two_column_data };
