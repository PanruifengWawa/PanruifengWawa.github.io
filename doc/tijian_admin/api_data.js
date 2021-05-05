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
  }
] });
