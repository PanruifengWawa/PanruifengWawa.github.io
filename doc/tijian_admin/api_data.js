define({ "api": [
  {
    "type": "post",
    "url": "api/admin/changePWD",
    "title": "管理员修改密码",
    "name": "admin-changePWD",
    "group": "admin",
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
            "type": "String",
            "optional": false,
            "field": "oldPWD",
            "description": "<ul> <li>旧密码 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPWD",
            "description": "<ul> <li>新密码 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"用户名或密码错误\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/AdminController.java",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "api/admin/login",
    "title": "管理员登录",
    "name": "admin-login",
    "group": "admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<ul> <li>用户名 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>密码 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": \"d3527b79-06f8-4f61-be4f-45723078b3ed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"用户名或密码错误\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/AdminController.java",
    "groupTitle": "admin"
  },
  {
    "type": "post",
    "url": "api/admin/calendar/{id}",
    "title": "删除日历",
    "name": "calendar-delete",
    "group": "calendar",
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
            "field": "String",
            "description": "<ul> <li>日历id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/CalendarController.java",
    "groupTitle": "calendar"
  },
  {
    "type": "get",
    "url": "api/admin/calendar/{year}/{month}",
    "title": "获取日历列表",
    "name": "calendar-get",
    "group": "calendar",
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
            "field": "hospitalId",
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
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"calendars\": [\n            {\n                \"id\": \"1_2021-05-05\",\n                \"date\": \"2021-05-05\",\n                \"year\": 2021,\n                \"month\": 5,\n                \"capacity\": 100,\n                \"hospitalId\": 1\n            },\n            {\n                \"id\": \"1_2021-05-06\",\n                \"date\": \"2021-05-06\",\n                \"year\": 2021,\n                \"month\": 5,\n                \"capacity\": 200,\n                \"hospitalId\": 1\n            }\n        ],\n        \"reservationCounts\": [\n            {\n                \"date\": \"2021-05-05\",\n                \"count\": 2\n            },\n            {\n                \"date\": \"2021-05-06\",\n                \"count\": 1\n            }\n        ]\n    }\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/CalendarController.java",
    "groupTitle": "calendar"
  },
  {
    "type": "post",
    "url": "api/admin/calendar/upsert",
    "title": "批量添加/更新日历",
    "name": "calendar-upsert",
    "group": "calendar",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dates",
            "description": "<ul> <li>日期 (必须, yyyy-MM-dd, 日期列表, 用逗号分隔, 如 &quot;2021-06-01,2021-06-02&quot;)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "cap",
            "description": "<ul> <li>容量 (必须, 现在大于等于零)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/CalendarController.java",
    "groupTitle": "calendar"
  },
  {
    "type": "post",
    "url": "api/admin/examination",
    "title": "添加套餐",
    "name": "examination-add",
    "group": "examination",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>套餐名字 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>套餐富文本描述 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<ul> <li>套餐价格描述 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "genderType",
            "description": "<ul> <li>性别类型 (必须, 0-woman, 1-man, 2-anyone)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ExaminationController.java",
    "groupTitle": "examination"
  },
  {
    "type": "get",
    "url": "api/admin/examination",
    "title": "获取套餐列表",
    "name": "examination-get",
    "group": "examination",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [{\n         \"id\": 1,\n         \"name\": \"套餐1\",\n         \"description\": \"xxxx\",\n         \"price\": \"100~200\",\n         \"genderType\": 1, // 0-woman, 1-man, 2-anyone\n         \"enabled\": 0, // 0-no, 1-yes\n         \"hospitalId\": 1\n     }]\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ExaminationController.java",
    "groupTitle": "examination"
  },
  {
    "type": "post",
    "url": "api/admin/examination/{id}/update",
    "title": "更新套餐",
    "name": "examination-update",
    "group": "examination",
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
            "description": "<ul> <li>套餐id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>套餐名字 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>套餐富文本描述 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<ul> <li>套餐价格描述 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "genderType",
            "description": "<ul> <li>性别类型 (非必须, 0-woman, 1-man, 2-anyone)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "enabled",
            "description": "<ul> <li>是否开启 (非必须, 0-no, 1-yes)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ExaminationController.java",
    "groupTitle": "examination"
  },
  {
    "type": "post",
    "url": "api/admin/hospital",
    "title": "添加医院",
    "name": "hospital-add",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>医院名字 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<ul> <li>医院地址 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<ul> <li>医院默认容量 (非必须，当不传或者值小于0时，为0)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>描述 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/admin/hospital",
    "title": "获取医院列表",
    "name": "hospital-get",
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
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [{\n         \"id\": 1,\n         \"name\": \"xx医院\",\n         \"capacity\": 3,\n         \"description\": \"xx描述\",\n         \"address\": \"xx地址\",\n          \"regionId\": 1\n     }]\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "post",
    "url": "api/admin/hospital/{id}/update",
    "title": "更新医院",
    "name": "hospital-update",
    "group": "hospital",
    "description": "<p>不传的字段不会被更新</p>",
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>医院名字 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<ul> <li>医院地址 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "capacity",
            "description": "<ul> <li>医院默认容量 (非必须，当cap&gt;=0时，才会更新，否则会被忽略)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>描述 (非必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/HospitalController.java",
    "groupTitle": "hospital"
  },
  {
    "type": "get",
    "url": "api/admin/notice/notice",
    "title": "获取体检须知",
    "name": "notice-notice",
    "group": "notice",
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
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": \"123\"\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/NoticeController.java",
    "groupTitle": "notice"
  },
  {
    "type": "post",
    "url": "api/admin/notice/notice",
    "title": "保存体检须知",
    "name": "notice-notice-add",
    "group": "notice",
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
            "type": "String",
            "optional": false,
            "field": "notice",
            "description": "<ul> <li>体检须知 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/NoticeController.java",
    "groupTitle": "notice"
  },
  {
    "type": "get",
    "url": "api/admin/notice/rule",
    "title": "获取体检规则",
    "name": "notice-rule",
    "group": "notice",
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
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": \"123\"\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/NoticeController.java",
    "groupTitle": "notice"
  },
  {
    "type": "post",
    "url": "api/admin/notice/rule",
    "title": "保存体检规则",
    "name": "notice-rule-add",
    "group": "notice",
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
            "type": "String",
            "optional": false,
            "field": "rule",
            "description": "<ul> <li>体检规则 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/NoticeController.java",
    "groupTitle": "notice"
  },
  {
    "type": "post",
    "url": "api/admin/region",
    "title": "增加地区",
    "name": "region-add",
    "group": "region",
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>地区名称 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RegionController.java",
    "groupTitle": "region"
  },
  {
    "type": "post",
    "url": "api/admin/region/{id}/delete",
    "title": "删除地区",
    "name": "region-delete",
    "group": "region",
    "description": "<p>删除地区时, 其下面的医院、套餐、已预约的体检均会被删除,需要前端提醒;在开启今年预约后,不可删除</p>",
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
            "description": "<ul> <li>地区id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RegionController.java",
    "groupTitle": "region"
  },
  {
    "type": "get",
    "url": "api/admin/region",
    "title": "获取地区列表",
    "name": "region-list",
    "group": "region",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RegionController.java",
    "groupTitle": "region"
  },
  {
    "type": "post",
    "url": "api/admin/region/{id}/update",
    "title": "更新地区名称",
    "name": "region-update",
    "group": "region",
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
            "description": "<ul> <li>地区id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>地区名称 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RegionController.java",
    "groupTitle": "region"
  },
  {
    "type": "post",
    "url": "api/admin/reservation/cancel",
    "title": "批量取消预约",
    "name": "reservation-cancel",
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
            "type": "String",
            "optional": false,
            "field": "reservationIds",
            "description": "<ul> <li>预约id列表 (必须, 用逗号分隔, 如 &quot;1,2,3&quot;)</li> </ul>"
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "get",
    "url": "api/admin/reservation/getLastSubmitDate",
    "title": "获取最大的导出日期",
    "name": "reservation-getLastSubmitDate",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": \"2021-07-20\"\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "get",
    "url": "api/admin/reservation/list",
    "title": "获取预约列表",
    "name": "reservation-list",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<ul> <li>开始日期 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<ul> <li>结束日期 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"userId\": \"L_XDDBTest01\",\n            \"name\": \"潘瑞峰\",\n            \"birthday\": \"1993-10-22\",\n            \"gender\": 1, // 0-woman, 1-man\n            \"age\": 28,\n            \"married\": 0, // 0-no, 1-yes\n            \"reservationType\": 0, // 0-家属1号, 1-家属2号, 2-员工\n            \"date\": \"2021-05-05\", //预约日期\n            \"year\": 2021,\n            \"month\": 5,\n            \"hospitalId\": 1,\n            \"examinationId\": 1,\n            \"status\": 0, //  0-normal, 1-cancelling\n            \"examination\": {\n                \"id\": 1,\n                \"name\": \"套餐1\",\n                \"hospitalId\": 1\n            }\n        }\n    ]\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "get",
    "url": "api/admin/reservation/listByUserId",
    "title": "获取某个员工的预约记录",
    "name": "reservation-listByUserId",
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
            "field": "userId",
            "description": "<ul> <li>用户id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\tHTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"userId\": \"L_XDDBTest01\",\n            \"name\": \"潘瑞峰\",\n            \"birthday\": \"1993-10-22\",\n            \"gender\": 1, // 0-woman, 1-man\n            \"age\": 28,\n            \"married\": 0, // 0-no, 1-yes\n            \"reservationType\": 0, // 0-家属1号, 1-家属2号, 2-员工\n            \"date\": \"2021-05-05\", //预约日期\n            \"year\": 2021,\n            \"month\": 5,\n            \"hospitalId\": 1,\n            \"examinationId\": 1,\n            \"status\": 0, //  0-normal, 1-cancelling\n            \"examination\": {\n                \"id\": 1,\n                \"name\": \"套餐1\",\n                \"hospitalId\": 1\n            }\n        }\n    ]\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "post",
    "url": "api/admin/reservation/open",
    "title": "开启今年的预约",
    "name": "reservation-open",
    "group": "reservation",
    "description": "<p>开启后，有些删除操作无法进行</p>",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "post",
    "url": "api/admin/reservation/recordSubmitDate",
    "title": "记录某次导出日期",
    "name": "reservation-recordSubmitDate",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<ul> <li>日期 (必须, yyyy-MM-dd)</li> </ul>"
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "get",
    "url": "api/admin/reservation/status",
    "title": "检查今年是否已开启预约",
    "name": "reservation-status",
    "group": "reservation",
    "description": "<p>检查今年是否已开启预约, 用于前端决定管理员是否可进行删除操作</p>",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/ReservationController.java",
    "groupTitle": "reservation"
  },
  {
    "type": "post",
    "url": "api/admin/rule/date",
    "title": "批量添加日期规则",
    "name": "rule-add-date",
    "group": "rule",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "employeeType",
            "description": "<ul> <li>员工类型 (必须, 1-家属, 2-员工)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dates",
            "description": "<ul> <li>日期 (必须, 逗号分隔, 可以是批量, 也可是某一天, 如&quot;2021-05-06,2021-05-07&quot;或者&quot;2021-07-21&quot;)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "post",
    "url": "api/admin/rule/week",
    "title": "批量添加周几规则",
    "name": "rule-add-week",
    "group": "rule",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "employeeType",
            "description": "<ul> <li>员工类型 (必须, 1-家属, 2-员工)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "days",
            "description": "<ul> <li>周几 (必须, 字符串格式, 逗号分隔, &quot;1,2,3,4,5,6,7&quot; 代表周一至周日; &quot;1&quot; 代表周一; &quot;1,2&quot; 代表周一和周二)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "post",
    "url": "api/admin/rule/date/ban",
    "title": "批量添加禁止预约日期规则",
    "name": "rule-ban-date",
    "group": "rule",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "employeeType",
            "description": "<ul> <li>员工类型 (必须, 1-家属, 2-员工)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dates",
            "description": "<ul> <li>日期 (必须, 逗号分隔, 可以是批量, 也可是某一天, 如&quot;2021-05-06,2021-05-07&quot;或者&quot;2021-07-21&quot;)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/admin/rule/date/ban/delete",
    "title": "删除禁止预约日期的规则",
    "name": "rule-delete-ban-date",
    "group": "rule",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>日期规则的id (必须, 注意是字符串)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/admin/rule/date/delete",
    "title": "删除日期的规则",
    "name": "rule-delete-date",
    "group": "rule",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>日期规则的id (必须, 注意是字符串)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/admin/rule/week/delete",
    "title": "删除周几的规则",
    "name": "rule-delete-week",
    "group": "rule",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>周几规则的id (必须, 注意是字符串)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/admin/rule/date/ban",
    "title": "获取禁止预约日期的规则",
    "name": "rule-get-ban-date",
    "group": "rule",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [{\n         \"id\": \"1_2021-05-22_1\",\n         \"employeeType\": 1,\n         \"date\": \"2021-05-22\",\n         \"hospitalId\": 1\n     }]\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/admin/rule/date",
    "title": "获取日期的规则",
    "name": "rule-get-date",
    "group": "rule",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [{\n         \"id\": \"1_2021-05-22_1\",\n         \"employeeType\": 1,\n         \"date\": \"2021-05-22\",\n         \"hospitalId\": 1\n     }]\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/admin/rule/week",
    "title": "获取周几的规则",
    "name": "rule-get-week",
    "group": "rule",
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
            "field": "hospitalId",
            "description": "<ul> <li>医院id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [{\n         \"id\": \"2_7_1\",\n         \"employeeType\": 2,\n         \"weekDay\": 7,\n         \"hospitalId\": 1\n     }]\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "post",
    "url": "api/admin/rule/user",
    "title": "增加用户规则",
    "name": "rule-user-add",
    "group": "rule",
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
            "description": "<ul> <li>年份 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "maxUserId",
            "description": "<ul> <li>最大可使用系统的工号 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "post",
    "url": "api/admin/rule/user/delete",
    "title": "删除用户规则",
    "name": "rule-user-delete",
    "group": "rule",
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
            "description": "<ul> <li>年份 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n }",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/admin/rule/user",
    "title": "获取用户规则",
    "name": "rule-user-get",
    "group": "rule",
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
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"year\": 2021,\n            \"maxUserId\": 123444\n        },\n        {\n            \"year\": 2022,\n            \"maxUserId\": 111\n        }\n    ]\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/tijian_admin/src/main/java/com/tijian/admin/controller/RuleController.java",
    "groupTitle": "rule"
  }
] });
