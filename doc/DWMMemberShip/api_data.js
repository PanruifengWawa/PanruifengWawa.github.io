define({ "api": [  {    "type": "post",    "url": "/v1/api/user/forgetPassword",    "title": "忘记密码",    "name": "user_forgetPassword",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "code",            "description": "<ul> <li>验证码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "newPassword",            "description": "<ul> <li>新密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "tel",            "description": "<ul> <li>手机号（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"成功\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": 121,\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/DWMMemberShip/src/com/dwm/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "/v1/api/user/getGoodsDetails",    "title": "获取商品详情",    "name": "user_getGoodsDetails",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "goodsCode",            "description": "<ul> <li>商品码（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"成功\",\n\t\t\"data\": {\n\t\t\t\"name\": \"测试商品\",\n\t\t\t\"picSrc\": \"/welfare/8c3d417c73e81a2ab1aa329c19b5ce60.png\",\n\t\t\t\"price\": 999,\n\t\t\t\"code\": \"AoxOooI2\"\n\t\t},\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": 0,\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/DWMMemberShip/src/com/dwm/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "/v1/api/user/register",    "title": "注册",    "name": "user_register",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userName",            "description": "<ul> <li>手机号码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<ul> <li>密码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "code",            "description": "<ul> <li>验证码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "goodsCode",            "description": "<ul> <li>商品码（必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"成功\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": 121,\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/DWMMemberShip/src/com/dwm/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "post",    "url": "/v1/api/user/upDateUser",    "title": "更新用户",    "name": "user_upDateUser",    "group": "user",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "realName",            "description": "<ul> <li>姓名（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "sex",            "description": "<ul> <li>性别(非空) 女-F，男-M（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<ul> <li>邮箱(检验邮箱格式)（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "wxAccount",            "description": "<ul> <li>微信账号（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "region",            "description": "<ul> <li>地区（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "jobField",            "description": "<ul> <li>职业（非必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "birthday",            "description": "<ul> <li>生日yyyy-mm-dd（非必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"成功\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": 121,\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/DWMMemberShip/src/com/dwm/controller/UserController.java",    "groupTitle": "user"  },  {    "type": "get",    "url": "/v1/api/verificationCode/send",    "title": "获取验证码",    "name": "verificationCode_send",    "group": "verificationCode",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "tel",            "description": "<ul> <li>手机号码（必须）</li> </ul>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "goodsCode",            "description": "<ul> <li>商品码（非必须）</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"成功\",\n\t\t\"data\": null,\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": 121,\n \t\t\"data\": null,\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/DWMMemberShip/src/com/dwm/controller/VerificationCodeController.java",    "groupTitle": "verificationCode"  },  {    "type": "get",    "url": "v1/api/wx/getJSConfig",    "title": "获取微信jsapi",    "name": "wx_jsapi",    "group": "wx",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "url",            "description": "<ul> <li>当前地址</li> </ul>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n\t\t\"callStatus\": \"SUCCEED\",\n\t\t\"errorCode\": \"成功\",\n\t\t\"data\": {\n\t\t\t\"signature\":\"0173743ce6574f2b4257996d76589eaf855cb53f\",\n\t\t\t\"errorCode\":\"ok\",\n\t\t\t\"url\":\"http://www.baidu.com\",\n\t\t\t\"nonceStr\":\"7cc4ec90-6a0b-4435-bc26-a54363832323\",\n\t\t\t\"timestamp\":\"1506320613\n\t\t},\n\t\t\"token\": null,\n\t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\t\"callStatus\": \"FAILED\",\n \t\t\"errorCode\": \"xx\",\n \t\t\"data\": \"xxx\",\n \t\t\"token\": null\n \t\t\"numberPerPage\": 0,\n \t\t\"currentPage\": 0,\n \t\t\"totalNumber\": 0,\n \t\t\"totalPage\": 0\n\t}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "/Users/dapan/Documents/workspace/DWMMemberShip/src/com/dwm/controller/WXController.java",    "groupTitle": "wx"  }] });
