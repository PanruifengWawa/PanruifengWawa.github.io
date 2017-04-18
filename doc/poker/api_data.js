define({ "api": [  {    "type": "post",    "url": "api/notice/getNoticeList",    "title": "获取消息列表",    "name": "notice_getNoticeList",    "group": "notice",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": ""          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "numPerPage",            "description": "<ul> <li>（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "pageNum",            "description": "<ul> <li>（非必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": [\n\t\t\t{\n \t\t\t\t\"id\": 1,\n \t\t\t\t\"content\": \"推送消息啦\",\n \t\t\t\t\"pushDate\": 1492092356000\n\t\t\t}\n\t\t],\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Auth_Error\",\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/NoticeController.java",    "groupTitle": "notice"  },  {    "type": "post",    "url": "api/notice/push",    "title": "推送消息",    "name": "notice_push",    "group": "notice",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": ""          }        ]      }    },    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n\t\"content\": \"推送消息啦\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": {\n\t\t\t\"id\": 1,\n\t\t\t\"content\": \"推送消息啦\",\n\t\t\t\"pushDate\": 1492092356074\n\t\t},\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Error\",//还有Auth_Error\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/NoticeController.java",    "groupTitle": "notice"  },  {    "type": "post",    "url": "api/user/changePWD",    "title": "修改密码",    "name": "user_changePWD",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": ""          }        ]      }    },    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n\t\"oldPWD\": \"old\",\n\t\"newPWD\": \"new\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Password_error\",//还有Username_NOT_Exist\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/forgetPWD",    "title": "忘记密码",    "name": "user_forgetPWD",    "group": "user",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n\t\"username\": \"old\",\n\t\"password\": \"new\",\n\t\"code\":\"xxxxx\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Verify_Code_notExist\",//还有Verify_Code_5min\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "api/user/getVerifyCode",    "title": "获取验证码",    "name": "user_getVerifyCode",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "phone",            "description": "<ul> <li>手机号码（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Error\",\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/login",    "title": "登录",    "name": "user_login",    "group": "user",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n\t\"username\": \"13761463756\",\n\t\"password\": \"password\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": {\n\t\t\t\"id\": 1,\n\t\t\t\"username\": \"13761463756\",\n\t\t\t\"password\": null,\n\t\t\t\"realname\": null,\n\t\t\t\"score\": 0,\n\t\t\t\"allnum\": 0,\n\t\t\t\"winnum\": 0,\n\t\t\t\"gatenum\": 0,\n\t\t\t\"allinnum\": 0,\n\t\t\t\"rank\": null,\n\t\t\t\"level\": 0,\n\t\t\t\"type\": 1,\n\t\t\t\"pic\": null,\n\t\t\t\"roomIndex\": null,\n\t\t\t\"registerDate\": 1492088003280,\n\t\t\t\"friends\": null\n\t\t},\n\t\t\"token\": \"SKb650b151-a4a1-49be-b6c1-57431e3afe1c\",\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Login_Error\",//还有Username_NOT_Exist\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/register",    "title": "注册",    "name": "user_register",    "group": "user",    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n\t\"username\": \"13761463756\",\n\t\"password\": \"password\",\n\t\"code\":\"123\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": {\n\t\t\t\"id\": 1,\n\t\t\t\"username\": \"13761463756\",\n\t\t\t\"password\": null,\n\t\t\t\"realname\": null,\n\t\t\t\"score\": 0,\n\t\t\t\"allnum\": 0,\n\t\t\t\"winnum\": 0,\n\t\t\t\"gatenum\": 0,\n\t\t\t\"allinnum\": 0,\n\t\t\t\"rank\": null,\n\t\t\t\"level\": 0,\n\t\t\t\"type\": 1,\n\t\t\t\"pic\": null,\n\t\t\t\"roomIndex\": null,\n\t\t\t\"registerDate\": 1492088003280,\n\t\t\t\"friends\": null\n\t\t},\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Verify_Code_notExist\",//还有Verify_Code_5min，Register_Error，Verify_Code_Error，Username_Already_Exist\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "api/user/updateUser",    "title": "完善用户信息",    "name": "user_updateUser",    "group": "user",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "token",            "description": ""          }        ]      }    },    "parameter": {      "examples": [        {          "title": "Request-Example:",          "content": "{\n\t\"realname\": \"real\",\n\t\"pic\": \"i do not know\",\n\t\"friends\":\"i do not know\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"No_Error\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"Error\",\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/poker/src/com/server/http/controller/UserController.java",    "groupTitle": "user"  }] });
