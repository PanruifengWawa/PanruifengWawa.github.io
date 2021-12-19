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
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户名或密码错误\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/AdminController.java",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "api/admin/getAll",
    "title": "获取所有信息",
    "name": "admin-get",
    "group": "admin",
    "description": "<p>请求方需要在ip白名单中；规则中的null值会被过滤</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n {\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"type\": 1, // 0-非会员; 2-终身会员\n            \"emailExpireDate\": \"2021-10-01\", // 可以为null，遗留参数，需要忽略\n            \"name\": \"潘瑞峰\",\n            \"email\": \"123@qq.com\",\n            \"account\": \"prf\",\n            \"password\": \"MTIzMTIz\", //base64值\n            \"manualStartDate\": \"2021-01-01\", // 人为输入的公租房账号start date，可以为null\n            \"emailSubscription\": 1, // 1-订阅，0-不订阅\n            \"autoChoose\": 1, // 用户级别的开关, 1-yes, 0-no\n            \"realName\": \"哈哈\",\n            \"rule\": [\n                {\n                    \"id\": 1,\n                    \"userId\": 1,\n                    \"projectId\": 8311,\n                    \"name\": \"玉兰路60弄\",\n                    \"minArea\": 70,\n                    \"maxArea\": 100,\n                    \"autoChoose\": 1\n                },\n                {\n                    \"id\": 2,\n                    \"userId\": 1,\n                    \"projectId\": 8312,\n                    \"name\": \"和炯路501弄（德康苑）\",\n                    \"targetType\": \"[1,2]\",\n                    \"excludeType\": \"[3]\",\n                    \"excludeFloor\": \"[1,3]\",\n                    \"minFloor\": 2,\n                    \"maxPrice\": 100,\n                    \"minArea\": 70,\n                    \"maxArea\": 100,\n                    \"autoChoose\": 1\n                },\n                {\n                    \"id\": 3,\n                    \"userId\": 1,\n                    \"projectId\": 8313,\n                    \"name\": \"航城三路288弄（同悦湾华庭）\",\n                    \"autoChoose\": 1\n                }\n            ]\n        }\n    ]\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/AdminController.java",
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
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户名或密码错误\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/AdminController.java",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "api/pay/consult",
    "title": "获取咨询预支付信息",
    "name": "pay-consult_pay",
    "group": "pay",
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
            "field": "nickName",
            "description": "<ul> <li>昵称 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"timeStamp\": 1628096955,\n        \"nonceStr\": \"aaade446b34d4f179f3debfe61a08922\",\n        \"packageStr\": \"prepay_id=wx0501091450211077d105b239c8b3fc0000\",\n        \"signType\": \"RSA\",\n        \"paySign\": \"d59CY6DVH0A3JJC34kDm6T8fvJMN1RLgV1cPhkUQoO9FiF1ZU2QDaLAYu1PUdmbTbPV3fsksMXLhjxb+lGh73+zqZLu9o65DxkpJ8SYh60LcNIdbFmuQ3+Osy78M6r82blDctpwn0rqUFAFvJl+7Nv8qi8fHaOY/D7NcAC8RIlKlb9wZHTJS245N2F19jckcVo+Mkdtqapnv4A37qn/Q50lt5ChiflLj7XIniy3N1aHckHdLQq2+LySCk3IOtaA6FQlhE1dBDTFpTjVXFZWDj4b5rWhXmadMsPCvGAW2OeOxOg74gWNGdLLITlcZRqevx+AfKZ1m4Hkkda6YHkyCtQ==\"\n    }\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/PayController.java",
    "groupTitle": "pay"
  },
  {
    "type": "get",
    "url": "api/pay",
    "title": "获取预支付信息",
    "name": "pay-get",
    "group": "pay",
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
            "field": "type",
            "description": "<ul> <li>类型 (必须, 1-会员99元)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"timeStamp\": 1628096955,\n        \"nonceStr\": \"aaade446b34d4f179f3debfe61a08922\",\n        \"packageStr\": \"prepay_id=wx0501091450211077d105b239c8b3fc0000\",\n        \"signType\": \"RSA\",\n        \"paySign\": \"d59CY6DVH0A3JJC34kDm6T8fvJMN1RLgV1cPhkUQoO9FiF1ZU2QDaLAYu1PUdmbTbPV3fsksMXLhjxb+lGh73+zqZLu9o65DxkpJ8SYh60LcNIdbFmuQ3+Osy78M6r82blDctpwn0rqUFAFvJl+7Nv8qi8fHaOY/D7NcAC8RIlKlb9wZHTJS245N2F19jckcVo+Mkdtqapnv4A37qn/Q50lt5ChiflLj7XIniy3N1aHckHdLQq2+LySCk3IOtaA6FQlhE1dBDTFpTjVXFZWDj4b5rWhXmadMsPCvGAW2OeOxOg74gWNGdLLITlcZRqevx+AfKZ1m4Hkkda6YHkyCtQ==\"\n    }\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/PayController.java",
    "groupTitle": "pay"
  },
  {
    "type": "post",
    "url": "api/project_detail/{projectId}/delete",
    "title": "删除房源详情",
    "name": "project_detail-delete",
    "group": "project_detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证(管理员)</p>"
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
            "field": "projectId",
            "description": "<ul> <li>房源id (必须, 路径参数)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/ProjectDetailController.java",
    "groupTitle": "project_detail"
  },
  {
    "type": "get",
    "url": "api/project_detail/{projectId}",
    "title": "获取房源详情(无需登陆)",
    "name": "project_detail-get",
    "group": "project_detail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "projectId",
            "description": "<ul> <li>房源id (必须, 路径参数)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": { // 没有配置房源信息的情况下, data: null\n        \"projectId\": 1,\n        \"description\": \"介绍\",\n        \"imageUrls\": \"[\\\"http://xxx.com/1.jpg\\\", \\\"http://xxx.com/2.jpg\\\"]\",\n        \"videoUrls\": \"[\\\"http://xxx.com/1.mp4\\\"]\",\n        \"videoUrlsTitle\": \"[\\\"视频1\\\"]\",\n        \"imageUrlsTitle\": \"[\\\"图片1\\\", \\\"图片2\\\"]\"\n        \"equipment\": \"洗衣机、空调\",\n    }\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/ProjectDetailController.java",
    "groupTitle": "project_detail"
  },
  {
    "type": "post",
    "url": "api/project_detail/{projectId}/upsert",
    "title": "添加/更新房源详情",
    "name": "project_detail-upsert",
    "group": "project_detail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份凭证(管理员)</p>"
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
            "field": "projectId",
            "description": "<ul> <li>房源id (必须, 路径参数)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<ul> <li>详情 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrls",
            "description": "<ul> <li>房源图片 (必须, 例如[&quot;http://xxx.com/1.jpg&quot;, &quot;http://xxx.com/2.jpg&quot;]；当无图片时用 [])</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "videoUrls",
            "description": "<ul> <li>房源视频介绍 (必须, 例如[&quot;http://xxx.com/1.mp4&quot;]；当无图片时用 [])</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "videoUrlsTitle",
            "description": "<ul> <li>房源图片描述 (必须, 例如[&quot;图片1&quot;, &quot;图片2&quot;]；当无时用 [])</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrlsTitle",
            "description": "<ul> <li>房源视频描述 (必须, 例如[&quot;视频1&quot;]；当无时用 [])</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "equipment",
            "description": "<ul> <li>房源配置 (必须, 如 &quot;洗衣机、空调&quot;)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/ProjectDetailController.java",
    "groupTitle": "project_detail"
  },
  {
    "type": "post",
    "url": "api/rule/{id}/delete",
    "title": "删除规则",
    "name": "rule-delete",
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
            "field": "id",
            "description": "<ul> <li>规则id (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/rule/",
    "title": "用户获取所有规则",
    "name": "rule-get",
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
    "description": "<p>规则中的null值会被保留</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": [{\n       \"id\": 1,\n       \"userId\": 1,\n       \"projectId\": 123,\n       \"name\": \"玉兰路60弄\",\n       \"targetType\": \"[1, 2]\", // 可能为null\n       \"excludeType\": null,\n       \"excludeFloor\": \"[1, 2]\", // 可能为null\n       \"minFloor\": 1, // 可能为null\n       \"maxPrice\": null,\n       \"minArea\": 50, // 可能为null\n       \"maxArea\": 100, // 可能为null\n       \"autoChoose\": 1 // 0-不自动选房, 1-自动\n    }]\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "post",
    "url": "api/rule/",
    "title": "添加或者更新规则",
    "name": "rule-post",
    "group": "rule",
    "description": "<p>当某个projectId对应的规则已存在时, 会更新记录。 需要用户提交账号，密码，姓名，邮箱后，方可调用此接口</p>",
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
            "field": "projectId",
            "description": "<ul> <li>小区id (必须, 某个用户对应某个小区的规则是唯一的)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>小区名字 (必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetType",
            "description": "<ul> <li>目标房源类型 (非必须, 格式如[1,2])</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "excludeType",
            "description": "<ul> <li>排除房源类型 (非必须, 格式如[1,2])</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "excludeFloor",
            "description": "<ul> <li>排除楼层 (非必须, 格式如[1,2])</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "minFloor",
            "description": "<ul> <li>最低楼层 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "maxPrice",
            "description": "<ul> <li>最高价格 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "minArea",
            "description": "<ul> <li>最小面积 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "maxArea",
            "description": "<ul> <li>最大面积 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autoChoose",
            "description": "<ul> <li>自动选房 (非必须,0-不自动选房, 1-自动)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/RuleController.java",
    "groupTitle": "rule"
  },
  {
    "type": "get",
    "url": "api/user/consult",
    "title": "获取用户咨询付费信息",
    "name": "user-consult",
    "group": "user",
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
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"code\": \"12345678\", // 验证码, 如果未购买过, 则code=\"\"\n        \"payDay\": \"2021-10-22 11:11:11\" // 支付日期, 如果未购买过, 则payDay=null\n    }\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/UserController.java",
    "groupTitle": "user"
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
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"id\": 1,\n        \"unionId\": \"dp_unionid\",\n        \"openId\": \"dp_openid\",\n        \"type\": 0, // 0-普通用户, 2-vip\n        \"name\": null, // 已填写过的用户是有值的\n        \"email\": null, // 已填写过的用户是有值的\n        \"account\": null, // 已填写过的用户是有值的\n        \"tokenStr\": \"c3800ad8-1fd2-4a93-b9d7-9524eedf78fb\",\n        \"loginDate\": \"2021-07-10 23:56:05\",\n        \"emailExpireDate\": null, // 遗留参数，需要忽略\n        \"serverAccountId\": \"90a3c67d-70ce-4e25-911b-330dfc9f3753\", //可以为null\n        \"startDate\": \"2021-04-26 00:00:00\", //可以为null\n        \"manualStartDate\": \"2021-04-26\", //可以为null\n        \"emailSubscription\": 1, //1-订阅，0-不订阅\n        \"autoChoose\": 1, //1-yes, 0-no\n        \"realName\": \"哈哈\" // 真实姓名\n    }\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "api/user/update",
    "title": "补齐用户信息",
    "name": "user-update",
    "group": "user",
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
            "description": "<ul> <li>(非必须, 姓名)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>(非必须, 邮箱)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<ul> <li>(非必须, 公租房账号)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>(非必须, 公租房密码, 只有account和password都非空的情况下，才会更新这两个字段)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manualStartDate",
            "description": "<ul> <li>(非必须, 手工输入的start_date)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "emailSubscription",
            "description": "<ul> <li>(非必须, 是否邮件订阅，0-不订阅，1-订阅)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "autoChoose",
            "description": "<ul> <li>(非必须, 用户级别是否自动选房，0-no，1-yes)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"公租房账号密码验证失败\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "api/user/vip",
    "title": "获取用户vip信息",
    "name": "user-vip",
    "group": "user",
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
          "content": "HTTP/1.1 200 ok\n{\n    \"status\": 0,\n    \"errorCode\": \"Success\",\n    \"data\": {\n        \"type\": 1, // 0-非会员; 2-终身会员\n        \"emailExpireDate\": \"2021-10-01\" // 可以为null\n    }\n}",
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
    "filename": "C:/Users/86137/Documents/workspace/gzf/src/main/java/com/gzf/controller/UserController.java",
    "groupTitle": "user"
  }
] });
