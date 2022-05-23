[
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Fare",
    "expression": "value.toNumber()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Fare using expression value.toNumber()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "SibSp",
    "expression": "value.toNumber()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column SibSp using expression value.toNumber()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Parch",
    "expression": "value.toNumber()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Parch using expression value.toNumber()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Age",
    "expression": "value.toNumber()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Age using expression value.toNumber()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [
        {
          "type": "range",
          "name": "Fare",
          "expression": "value",
          "columnName": "Fare",
          "from": 0,
          "to": 10,
          "selectNumeric": true,
          "selectNonNumeric": true,
          "selectBlank": true,
          "selectError": true
        }
      ],
      "mode": "row-based"
    },
    "columnName": "Age",
    "expression": "grel:if(value==null,\"30\",value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Age using expression grel:if(value==null,\"30\",value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [
        {
          "type": "range",
          "name": "Fare",
          "expression": "value",
          "columnName": "Fare",
          "from": 0,
          "to": 10,
          "selectNumeric": true,
          "selectNonNumeric": true,
          "selectBlank": true,
          "selectError": true
        }
      ],
      "mode": "row-based"
    },
    "columnName": "Age",
    "expression": "value.toNumber()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Age using expression value.toNumber()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [
        {
          "type": "list",
          "name": "Age",
          "expression": "isBlank(value)",
          "columnName": "Age",
          "invert": false,
          "omitBlank": false,
          "omitError": false,
          "selection": [
            {
              "v": {
                "v": true,
                "l": "true"
              }
            }
          ],
          "selectBlank": false,
          "selectError": false
        }
      ],
      "mode": "row-based"
    },
    "columnName": "Age",
    "expression": "grel:if(value==null,30,value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Age using expression grel:if(value==null,30,value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Age",
    "expression": "value.toNumber()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Age using expression value.toNumber()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Fare",
    "expression": "grel:if(value==0,32.20,value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Fare using expression grel:if(value==0,32.20,value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Cabin",
    "expression": "grel:if(value==null,\"Without cabin\",value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Cabin using expression grel:if(value==null,\"Without cabin\",value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Cabin",
    "expression": "grel:if(value==\"Without cabin\",0,1)",
    "onError": "set-to-blank",
    "newColumnName": "hasCabin",
    "columnInsertIndex": 11,
    "description": "Create column hasCabin at index 11 based on column Cabin using expression grel:if(value==\"Without cabin\",0,1)"
  },
  {
    "op": "core/column-reorder",
    "columnNames": [
      "Survived",
      "Pclass",
      "Sex",
      "Age",
      "SibSp",
      "Parch",
      "Fare",
      "hasCabin",
      "Embarked"
    ],
    "description": "Reorder columns"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Sex",
    "expression": "grel:if(value=='male',0,1)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Sex using expression grel:if(value=='male',0,1)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Embarked",
    "expression": "grel:if(value=='C',0,value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Embarked using expression grel:if(value=='C',0,value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Embarked",
    "expression": "grel:if(value=='Q',1,value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Embarked using expression grel:if(value=='Q',1,value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Embarked",
    "expression": "grel:if(value=='S',2,value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Embarked using expression grel:if(value=='S',2,value)"
  }
]