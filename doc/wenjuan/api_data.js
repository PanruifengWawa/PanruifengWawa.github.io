define({ "api": [  {    "type": "post",    "url": "api/admin/login",    "title": "管理员登录",    "name": "admin_login",    "group": "admin",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userName",            "description": "<ul> <li>用户名 (必须)</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<ul> <li>密码 (必须)</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": \"d3527b79-06f8-4f61-be4f-45723078b3ed\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"用户名或密码错误\"\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/wenjuan/src/main/java/com/wenjuan/controller/AdminController.java",    "groupTitle": "admin"  },  {    "type": "get",    "url": "api/wenjuan/{id}",    "title": "获取问卷详情(管理员)",    "name": "wenjuan_admin_details",    "group": "wenjuan",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "long",            "optional": false,            "field": "id",            "description": "<ul> <li>问卷id (必须)</li> </ul>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": {\n\t\t\"id\": 1,\n\t\t\"name\": \"问卷1\",\n\t\t\"content\": \"详见创建问卷中的格式\",\n\t\t\"createDate\": \"2020-11-05 00:29:59\"\n\t}\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"用户未登录\"\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/wenjuan/src/main/java/com/wenjuan/controller/WenjuanController.java",    "groupTitle": "wenjuan"  },  {    "type": "get",    "url": "api/wenjuan",    "title": "获取问卷列表(管理员)",    "name": "wenjuan_admin_list",    "group": "wenjuan",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>身份凭证</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": [{\n\t\t\"id\": 1,\n\t\t\"name\": \"问卷1\",\n\t\t\"createDate\": \"2020-11-05 00:29:59\"\n\t},{\n\t\t\"id\": 2,\n\t\t\"name\": \"问卷2\",\n\t\t\"createDate\": \"2020-11-05 00:30:59\"\n\t}]\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"status\": 1,\n\t\t\"errorCode\": \"AuthEorror\",\n\t\t\"data\": \"用户未登录\"\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/wenjuan/src/main/java/com/wenjuan/controller/WenjuanController.java",    "groupTitle": "wenjuan"  }] });
