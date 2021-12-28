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
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/AdminController.java",
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
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户名或密码错误\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/AdminController.java",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "api/category/list",
    "title": "获取category列表",
    "name": "category-list",
    "group": "category",
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
          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": [\n\t    {\n\t     \"id\": 1,\n\t     \"category_name\": \"category1\"\n\t    }\n\t]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户未登录\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/CategoryController.java",
    "groupTitle": "category"
  },
  {
    "type": "get",
    "url": "api/inventory/create",
    "title": "上传数据",
    "name": "inventory-create",
    "group": "inventory",
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
            "type": "file",
            "optional": false,
            "field": "excelFile",
            "description": "<ul> <li>数据excel文件 (必须)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": {\n\t    \"modelNum\": 2153,\n\t    \"productNum\": 191\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户未登录\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/InventoryController.java",
    "groupTitle": "inventory"
  },
  {
    "type": "get",
    "url": "api/inventory/list",
    "title": "获取数据列表",
    "name": "inventory-list",
    "group": "inventory",
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
            "field": "filterKey",
            "description": "<ul> <li>过滤的key (非必须, 枚举有: sourceProductId, vendor, parentSKU, title)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filterValue",
            "description": "<ul> <li>过滤的value (非必须, 如 123, &quot;vendor1&quot;, &quot;parent_sku_1&quot;, &quot;商品标题xxx&quot;)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<ul> <li>页大小 (非必须, 默认10, 范围1~200)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageNum",
            "description": "<ul> <li>第几页 (非必须, 默认1, 范围1~)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": {\n\t     \"list\": [\n\t         {\n\t             \"sourceProductId\": \"123\", // product的主键\n\t             \"category\": \"category1\",\n\t             \"vendor\": \"vendor1\",\n\t             \"title\": \"标题\",\n\t             \"description\": \"这是描述\",\n\t             \"parentSKU\": null,\n\t             \"mainImageUrl\": \"http://xxx.com/x.jpg\",\n\t             \"productImageUrls\": \"http://xxx.com/1.jpg,http://xxx.com/2.jpg\"\n\t             \"sizeChartUrl\": null,\n\t             \"weight\": 2000,\n\t             \"packageLength\": 40,\n\t             \"packageWidth\": 40,\n\t             \"packageHeight\": 40,\n\t             \"models\": [\n\t                 {\n\t                     \"modelId\": \"efgh\", // model的主键\n\t                     \"sourceSKU\": \"BS\",\n\t                     \"modelImageUrl\": \"http://xxx.com/x.jpg\",\n\t                     \"variationName1\": \"名称1\",\n\t                     \"variationName2\": \"名称2\",\n\t                     \"variationValue1\": \"value1\",\n\t                     \"variationValue2\": \"value2\",\n\t                     \"sourcingCost\": 100,\n\t                     \"handlingFee\": -1, // -1代表未填\n\t                     \"sourceInventoryUnits\": 20,\n\t                     \"inStockUnits\": 10\n\t                 },\n\t                 {\n\t                     \"modelId\": \"adada\", // model的主键\n\t                     \"sourceSKU\": \"WS\",\n\t                     \"modelImageUrl\": \"http://xxx.com/x.jpg\",\n\t                     \"variationName1\": \"名称1\",\n\t                     \"variationName2\": \"名称2\",\n\t                     \"variationValue1\": \"value1\",\n\t                     \"variationValue2\": \"value2\",\n\t                     \"sourcingCost\": 100,\n\t                     \"handlingFee\": -1, // -1代表未填\n\t                     \"sourceInventoryUnits\": 20,\n\t                     \"inStockUnits\": 10\n\t                 }\n\t             ]\n\t         }\n\t     ],\n\t     \"pageSize\": 10,\n\t     \"pageNum\": 1,\n\t     \"totalPages\": 6, // 页的总数\n\t     \"totalCount\": 54 // 数据的总数\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户未登录\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/InventoryController.java",
    "groupTitle": "inventory"
  },
  {
    "type": "post",
    "url": "api/inventory/model/{modelId}/update",
    "title": "更新model数据",
    "name": "inventory-model-update",
    "group": "inventory",
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
            "field": "sourcingCost",
            "description": "<ul> <li>采购成本 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "handlingFee",
            "description": "<ul> <li>处理成本 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "inStockUnits",
            "description": "<ul> <li>货源处库存数 (非必须)</li> </ul>"
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
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户未登录\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/InventoryController.java",
    "groupTitle": "inventory"
  },
  {
    "type": "post",
    "url": "api/inventory/product/{sourceProductId}/update",
    "title": "更新product数据",
    "name": "inventory-product-update",
    "group": "inventory",
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
            "field": "category",
            "description": "<ul> <li>分类 (非必须)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vendor",
            "description": "<ul> <li>供应商 (非必须)</li> </ul>"
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
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户未登录\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/InventoryController.java",
    "groupTitle": "inventory"
  },
  {
    "type": "get",
    "url": "api/vendor/list",
    "title": "获取vendor列表",
    "name": "vendor-list",
    "group": "vendor",
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
          "content": "HTTP/1.1 200 ok\n{\n\t\"status\": 0,\n\t\"errorCode\": \"Success\",\n\t\"data\": [\n\t    {\n\t     \"id\": 1,\n\t     \"vendor_name\": \"vendor1\"\n\t    }\n\t]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\tHTTP/1.1 200 ok\n\t{\n \t\"status\": 1,\n\t\t\"errorCode\": \"AuthError\",\n\t\t\"data\": \"用户未登录\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "C:/Users/86137/Documents/workspace/inventory/src/main/java/com/bbb/inventory/controller/VendorController.java",
    "groupTitle": "vendor"
  }
] });
