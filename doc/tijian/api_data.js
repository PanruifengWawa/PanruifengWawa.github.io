define({ "api": [
  {
    "type": "get",
    "url": "api/hospital/{id}/calendar/{year}/{month}",
    "title": "获取医院日历",
    "name": "calendar-list",
    "group": "hospital",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<ul> <li>年份 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "month",
            "description": "<ul> <li>月份 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"calendars\": [\n            {\n                \"id\": 3,\n                \"date\": \"2021-05-05\",\n                \"year\": 2021,\n                \"month\": 5,\n                \"capacity\": 100,\n                \"hospitalId\": 1\n            },\n            {\n                \"id\": 4,\n                \"date\": \"2021-05-06\",\n                \"year\": 2021,\n                \"month\": 5,\n                \"capacity\": 200,\n                \"hospitalId\": 1\n            }\n        ],\n        \"reservationCounts\": [\n            {\n                \"date\": \"2021-05-05\",\n                \"count\": 2\n            },\n            {\n                \"date\": \"2021-05-06\",\n                \"count\": 1\n            }\n        ]\n    }\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/hospital/examination",
    "title": "获取医院和体检套餐(仅展示已enable的套餐)",
    "name": "examination-list",
    "group": "hospital",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "regionId",
            "description": "<ul> <li>地区id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"hospital\": {\n                \"id\": 1,\n                \"name\": \"上海xx医院\",\n                \"capacity\": 0,\n                \"description\": \"描述xx\",\n                \"address\": \"xx地址\",\n                \"regionId\": 1\n            },\n            \"examinations\": [\n                {\n                    \"id\": 1,\n                    \"name\": \"套餐1\",\n                    \"description\": \"<h1>富文本描述</h1>\",\n                    \"price\": 100,\n                    \"genderType\": 0, //0-woman, 1-man, 2-anyone\n                    \"enabled\": 1, //0-no, 1-yes\n                    \"hospitalId\": 1\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/region",
    "title": "获取地区列表",
    "name": "hospital-region",
    "group": "hospital",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"宁波\"\n        }\n    ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/RegionController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/hospital/{id}/lastSubmitDate",
    "title": "获取上次提交至医院的记录",
    "name": "lastSubmitDate-get",
    "group": "hospital",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": “2021-07-07”\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/reservation/{id}/cancel",
    "title": "取消预约",
    "name": "reservation-cancel",
    "group": "reservation",
    "description": "<ol> <li>当前日期在当月20号之前,可以直接取消下月及之后的预约;否则只可直接取消下下月及之后的预约; 2.对于不可直接取消的，其预约状态会变成取消中，由管理员确定</li> </ol>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>预约id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "get",
    "url": "api/reservation",
    "title": "获取我的预约",
    "name": "reservation-get",
    "group": "reservation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<ul> <li>年份 (非必须,后台默认今年)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"userId\": \"L_XDDBTest01\",\n            \"name\": \"潘瑞峰\",\n            \"birthday\": \"1993-10-22\",\n            \"gender\": 1, // 0-woman, 1-man\n            \"age\": 28,\n            \"married\": 0, // 0-no, 1-yes\n            \"reservationType\": 0, // 0-家属1号, 1-家属2号, 2-员工\n            \"date\": \"2021-05-05\", //预约日期\n            \"year\": 2021,\n            \"month\": 5,\n            \"hospitalId\": 1,\n            \"examinationId\": 1,\n            \"status\": 0, //  0-normal, 1-cancelling\n            \"hospital\": {\n                \"id\": 1,\n                \"name\": \"上海xx医院\",\n                \"capacity\": 0,\n                \"description\": \"描述xx\",\n                \"address\": \"xx地址\",\n                \"regionId\": 1\n            },\n            \"examination\": {\n                \"id\": 1,\n                \"name\": \"套餐1\",\n                \"price\": 100,\n                \"genderType\": 0,\n                \"enabled\": 1,\n                \"hospitalId\": 1\n            }\n        },\n        {\n            \"id\": 1,\n            \"userId\": \"L_XDDBTest01\",\n            \"name\": \"大潘\",\n            \"birthday\": \"1993-10-22\",\n            \"gender\": 1,\n            \"age\": 28,\n            \"married\": 0,\n            \"reservationType\": 2,\n            \"date\": \"2021-05-05\",\n            \"year\": 2021,\n            \"month\": 5,\n            \"hospitalId\": 1,\n            \"examinationId\": 1,\n            \"status\": 0,\n            \"hospital\": {\n                \"id\": 1,\n                \"name\": \"上海xx医院\",\n                \"capacity\": 0,\n                \"description\": \"描述xx\",\n                \"address\": \"xx地址\",\n                \"regionId\": 1\n            },\n            \"examination\": {\n                \"id\": 1,\n                \"name\": \"套餐1\",\n                \"price\": 100,\n                \"genderType\": 0,\n                \"enabled\": 1,\n                \"hospitalId\": 1\n            }\n        }\n    ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "post",
    "url": "api/reservation",
    "title": "预约",
    "name": "reservation-post",
    "group": "reservation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>预约者名称 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "birthday",
            "description": "<ul> <li>生日 (必须, yyyy-MM-dd)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "married",
            "description": "<ul> <li>是否已婚 (必须, 0-no, 1-yes)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "gender",
            "description": "<ul> <li>性别 (必须, 0-woman, 1-man)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "reservationType",
            "description": "<ul> <li>预约类型 (必须, 0-家属1号, 1-家属2号, 2-员工; 前端需要限制: 1.(预约类型+年份)如果已经出现, 则无法预约 2.如果家属2号已经预约了,用户再次为家属预约的时候,此时reservationType=0；反之,reservationType=1)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "date",
            "description": "<ul> <li>预约日期 (必须, yyyy-MM-dd, 前端需要限制: 当前日期在当月20号之前,可以预约下月及之后;否则只可预约下下月及之后)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "examinationId",
            "description": "<ul> <li>体检套餐id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "get",
    "url": "api/reservation/status",
    "title": "检查今年是否已开启预约",
    "name": "reservation-status",
    "group": "reservation",
    "description": "<p>检查今年是否已开启预约, 用于前端决定用户是否可以进入预约系统</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": true\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "post",
    "url": "api/user/login",
    "title": "用户登录",
    "name": "user-login",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<ul> <li>用户授权后的code (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"userId\": \"id\",\n        \"name\": \"name\",\n        \"token\": \"122\",\n        \"loginDate\": \"2021-04-19 01:02:00\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"错误信息\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian/src/main/java/com/tijian/user/controller/UserController.java",
    "groupTitle": "user"
  }
] });
